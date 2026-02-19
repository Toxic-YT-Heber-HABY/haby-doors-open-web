import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { User, Session } from '@supabase/supabase-js';

interface AdminUser {
  id: string;
  email: string;
  isAdmin: boolean;
}

export const useAdminAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Defer admin check with setTimeout to avoid deadlock
        if (session?.user) {
          setTimeout(() => {
            checkAdminRole(session.user.id, session.user.email || '');
          }, 0);
        } else {
          setAdminUser(null);
          setIsAuthenticated(false);
          setIsLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkAdminRole(session.user.id, session.user.email || '');
      } else {
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = async (userId: string, email: string) => {
    try {
      const { data: isAdmin, error } = await supabase.rpc('is_admin');
      
      if (error) {
        console.error('Error checking admin role:', error);
        setAdminUser(null);
        setIsAuthenticated(false);
      } else if (isAdmin) {
        setAdminUser({
          id: userId,
          email: email,
          isAdmin: true,
        });
        setIsAuthenticated(true);
      } else {
        setAdminUser(null);
        setIsAuthenticated(false);
      }
    } catch {
      setAdminUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const loginAdmin = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || 'Error en el acceso');
        return false;
      }

      if (!data.user) {
        toast.error('No se pudo iniciar sesión');
        return false;
      }

      // Check if user has admin role
      const { data: isAdmin, error: roleError } = await supabase.rpc('is_admin');
      
      if (roleError || !isAdmin) {
        // Sign out non-admin users
        await supabase.auth.signOut();
        toast.error('Acceso denegado. No tienes permisos de administrador.');
        return false;
      }

      toast.success('Acceso autorizado');
      return true;
    } catch {
      toast.error('Error en el acceso de administrador');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const validatePassword = (password: string): { valid: boolean; error?: string } => {
    if (password.length < 12) {
      return { valid: false, error: 'La contraseña debe tener al menos 12 caracteres' };
    }
    if (!/[A-Z]/.test(password)) {
      return { valid: false, error: 'La contraseña debe contener al menos una letra mayúscula' };
    }
    if (!/[a-z]/.test(password)) {
      return { valid: false, error: 'La contraseña debe contener al menos una letra minúscula' };
    }
    if (!/[0-9]/.test(password)) {
      return { valid: false, error: 'La contraseña debe contener al menos un número' };
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return { valid: false, error: 'La contraseña debe contener al menos un carácter especial' };
    }
    return { valid: true };
  };

  const signUpAdmin = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      const validation = validatePassword(password);
      if (!validation.valid) {
        toast.error(validation.error);
        return false;
      }
      
      const redirectUrl = `${window.location.origin}/admin`;

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) {
        toast.error(error.message || 'Error en el registro');
        return false;
      }

      if (data.user) {
        toast.success('Registro exitoso. Verifica tu email para confirmar.');
        return true;
      }

      return false;
    } catch {
      toast.error('Error en el registro');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logoutAdmin = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast.error('Error al cerrar sesión');
        return;
      }

      setAdminUser(null);
      setIsAuthenticated(false);
      toast.success('Sesión cerrada correctamente');
    } catch {
      toast.error('Error al cerrar sesión');
    }
  };

  return {
    user,
    session,
    adminUser,
    isLoading,
    isAuthenticated,
    loginAdmin,
    signUpAdmin,
    logoutAdmin,
  };
};
