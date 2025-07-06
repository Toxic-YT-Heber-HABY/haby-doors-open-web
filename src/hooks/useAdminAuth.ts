
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
      // For admin auth, we don't use Supabase Auth sessions
      // Instead, we check if there's a stored admin session
      const storedAdmin = localStorage.getItem('admin_user');
      if (storedAdmin) {
        try {
          const adminData = JSON.parse(storedAdmin);
          setAdminUser(adminData);
          setIsAuthenticated(true);
        } catch {
          localStorage.removeItem('admin_user');
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
      
      // Verify admin credentials using our secure function
      const { data: adminId, error: verifyError } = await supabase
        .rpc('verify_admin_auth', {
          admin_email: email,
          admin_password: password
        });

      if (verifyError || !adminId) {
        toast.error('Credenciales de administrador incorrectas');
        return false;
      }

      // Get admin user data from our admin_users table
      const { data: adminData, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('id', adminId)
        .eq('is_active', true)
        .single();

      if (adminError || !adminData) {
        toast.error('Error al obtener datos del administrador');
        return false;
      }

      // Store admin session in localStorage and set state
      localStorage.setItem('admin_user', JSON.stringify(adminData));
      setAdminUser(adminData);
      setIsAuthenticated(true);
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
      localStorage.removeItem('admin_user');
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
