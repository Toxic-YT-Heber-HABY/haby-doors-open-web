-- Habilitar la extensión pgcrypto para encriptación de contraseñas
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Crear el primer usuario administrador
SELECT create_admin_user('admin@haby.com', 'admin123');