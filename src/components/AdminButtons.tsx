
import { Plus, LogOut } from 'lucide-react';

interface AdminButtonsProps {
  isAuthenticated: boolean;
  openAdminModal: () => void;
  handleLogout: () => void;
}

const AdminButtons = ({ isAuthenticated, openAdminModal, handleLogout }: AdminButtonsProps) => {
  return (
    isAuthenticated ? (
      <div className="flex items-center space-x-2">
        <button 
          onClick={openAdminModal}
          className="icon-btn bg-haby-primary hover:bg-haby-secondary"
          aria-label="Panel de administración"
        >
          <Plus />
        </button>
        <button 
          onClick={handleLogout}
          className="icon-btn bg-red-500 hover:bg-red-600"
          aria-label="Cerrar sesión"
        >
          <LogOut />
        </button>
      </div>
    ) : (
      <button 
        onClick={openAdminModal}
        className="icon-btn bg-haby-primary hover:bg-haby-secondary"
        aria-label="Acceso de administrador"
      >
        <Plus />
      </button>
    )
  );
};

export default AdminButtons;
