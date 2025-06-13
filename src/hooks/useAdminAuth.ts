
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AdminUser {
  id: string;
  email: string;
  last_login: string | null;
  is_active: boolean;
}

export const useAdminAuth = () => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        // Verify if this is an admin user
        const { data: adminData, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('id', session.user.id)
          .eq('is_active', true)
          .maybeSingle();

        if (adminData && !error) {
          setAdminUser(adminData);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setAdminUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setAdminUser(null);
      }
    } catch (error) {
      console.error('Error checking auth state:', error);
      setIsAuthenticated(false);
      setAdminUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const loginAdmin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // First verify admin credentials using our secure function
      const { data: adminId, error: verifyError } = await supabase
        .rpc('verify_admin_auth', {
          admin_email: email,
          admin_password: password
        });

      if (verifyError || !adminId) {
        toast.error('Credenciales de administrador incorrectas');
        return false;
      }

      // If verification successful, sign in with Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // If Supabase auth fails, we need to create the auth user
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              admin_id: adminId
            }
          }
        });

        if (signUpError) {
          toast.error('Error en la autenticación');
          return false;
        }
      }

      await checkAuthState();
      toast.success('Acceso autorizado');
      return true;
    } catch (error) {
      console.error('Admin login error:', error);
      toast.error('Error en el acceso de administrador');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logoutAdmin = async () => {
    try {
      await supabase.auth.signOut();
      setAdminUser(null);
      setIsAuthenticated(false);
      toast.success('Sesión cerrada correctamente');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Error al cerrar sesión');
    }
  };

  const createAdminUser = async (email: string, password: string) => {
    try {
      const { data: adminId, error } = await supabase
        .rpc('create_admin_user', {
          admin_email: email,
          admin_password: password
        });

      if (error) {
        throw error;
      }

      toast.success('Usuario administrador creado correctamente');
      return adminId;
    } catch (error: any) {
      console.error('Create admin error:', error);
      if (error.message?.includes('already exists')) {
        toast.error('El usuario administrador ya existe');
      } else {
        toast.error('Error al crear usuario administrador');
      }
      throw error;
    }
  };

  return {
    adminUser,
    isLoading,
    isAuthenticated,
    loginAdmin,
    logoutAdmin,
    createAdminUser,
    checkAuthState
  };
};
