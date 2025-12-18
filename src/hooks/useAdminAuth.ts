
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AdminUser {
  id: string;
  email: string;
  last_login: string | null;
  is_active: boolean;
}

const TOKEN_STORAGE_KEY = 'admin_session_token';
const EMAIL_STORAGE_KEY = 'admin_session_email';

export const useAdminAuth = () => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuthState = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem(TOKEN_STORAGE_KEY);

      if (!token) {
        setIsAuthenticated(false);
        setAdminUser(null);
        return;
      }

      const { data: adminId, error } = await supabase.rpc('admin_validate_session', {
        session_token: token,
      });

      if (error || !adminId) {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        localStorage.removeItem(EMAIL_STORAGE_KEY);
        setIsAuthenticated(false);
        setAdminUser(null);
        return;
      }

      const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY) || 'admin';
      setAdminUser({
        id: adminId,
        email: storedEmail,
        last_login: null,
        is_active: true,
      });
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
      setAdminUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const loginAdmin = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      const { data: sessionToken, error: sessionError } = await supabase.rpc(
        'admin_create_session',
        {
          admin_email: email,
          admin_password: password,
        }
      );

      if (sessionError || !sessionToken) {
        toast.error('Credenciales de administrador incorrectas');
        return false;
      }

      localStorage.setItem(TOKEN_STORAGE_KEY, sessionToken);
      localStorage.setItem(EMAIL_STORAGE_KEY, email);

      // Validate to get admin id (and ensure token is usable)
      const { data: adminId } = await supabase.rpc('admin_validate_session', {
        session_token: sessionToken,
      });

      setAdminUser({
        id: adminId || 'unknown',
        email,
        last_login: null,
        is_active: true,
      });
      setIsAuthenticated(true);
      toast.success('Acceso autorizado');
      return true;
    } catch {
      toast.error('Error en el acceso de administrador');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logoutAdmin = async () => {
    try {
      const token = localStorage.getItem(TOKEN_STORAGE_KEY);
      if (token) {
        await supabase.rpc('admin_revoke_session', { session_token: token });
      }

      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(EMAIL_STORAGE_KEY);
      setAdminUser(null);
      setIsAuthenticated(false);
      toast.success('Sesión cerrada correctamente');
    } catch {
      toast.error('Error al cerrar sesión');
    }
  };

  return {
    adminUser,
    isLoading,
    isAuthenticated,
    loginAdmin,
    logoutAdmin,
    checkAuthState,
  };
};

