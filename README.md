
# Proyecto Web Profesional

## Descripción

Este repositorio contiene un proyecto web moderno creado con React, TypeScript, Vite y Tailwind CSS. Incluye diseño responsivo, animaciones avanzadas y una estructura modular de componentes para el desarrollo ágil de sitios web y aplicaciones web.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React Icons
- @react-three/fiber & @react-three/drei (para modelos 3D)
- Supabase (opcional, si tienes habilitada la integración con base de datos)

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone <URL_DE_TU_REPOSITORIO>
   cd <nombre-de-tu-proyecto>
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Configura las variables de entorno si corresponde:**
   - Renombra y edita el archivo `.env.example` a `.env` y agrega tus claves según necesidad (si usas integraciones externas).

4. **Ejecuta el servidor de desarrollo:**
   ```sh
   npm run dev
   ```
   Abre el navegador en [http://localhost:5173](http://localhost:5173) o la URL que indique la consola.

## Estructura del proyecto

- `src/components/`: Componentes reutilizables y utilitarios UI.
- `src/pages/`: Páginas principales del sitio.
- `src/hooks/`: Hooks personalizados.
- `src/styles/`: Estilos globales y utilidades CSS.
- `supabase/`: Configuración y scripts SQL si necesitas integrar base de datos.

## Scripts útiles

- `npm run dev` – Inicia el servidor de desarrollo.
- `npm run build` – Genera la versión de producción.
- `npm run preview` – Visualiza la app ya construida.
- `npm run lint` – Linter para detectar problemas de estilo/código.

## Despliegue

Puedes desplegar el proyecto usando cualquier proveedor de hosting moderno compatible con aplicaciones Vite/React, como Vercel, Netlify, Render o tu servidor propio. Sube las variables de entorno necesarias antes de iniciar el build.

## Contribuciones

Para contribuir, abre una issue o pull request, y asegúrate de seguir las normas de estilo y estructura del proyecto.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta LICENSE para más información.

