/**
 * Generador de PDF del Informe Técnico Completo - HABY
 * 
 * Este módulo genera un PDF profesional con toda la documentación
 * técnica del proyecto HABY Open The Doors.
 */

import jsPDF from 'jspdf';

// Colores corporativos HABY
const COLORS = {
  primary: [155, 135, 245] as [number, number, number],      // #9b87f5
  secondary: [126, 105, 171] as [number, number, number],    // #7E69AB
  accent: [52, 211, 153] as [number, number, number],        // #34D399
  dark: [30, 27, 75] as [number, number, number],            // #1E1B4B
  text: [51, 51, 51] as [number, number, number],            // #333333
  lightGray: [245, 245, 245] as [number, number, number],    // #F5F5F5
  white: [255, 255, 255] as [number, number, number],
};

interface PDFSection {
  title: string;
  content: () => void;
}

export class HABYPDFReport {
  private pdf: jsPDF;
  private yPosition: number = 20;
  private pageWidth: number = 210;
  private pageHeight: number = 297;
  private margin: number = 20;
  private contentWidth: number;
  private pageNumber: number = 0;
  private totalPages: number = 0;

  constructor() {
    this.pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    this.contentWidth = this.pageWidth - (this.margin * 2);
  }

  // ============================================
  // MÉTODOS DE UTILIDAD
  // ============================================

  private addNewPage(): void {
    this.pdf.addPage();
    this.pageNumber++;
    this.yPosition = 25;
    this.addHeader();
  }

  private checkPageBreak(height: number = 20): void {
    if (this.yPosition + height > this.pageHeight - 30) {
      this.addNewPage();
    }
  }

  private addHeader(): void {
    this.pdf.setFillColor(...COLORS.dark);
    this.pdf.rect(0, 0, this.pageWidth, 15, 'F');
    this.pdf.setTextColor(...COLORS.white);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('HABY Open The Doors - Informe Técnico', this.margin, 10);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text(`Página ${this.pageNumber}`, this.pageWidth - this.margin - 20, 10);
    this.pdf.setTextColor(...COLORS.text);
  }

  private addFooter(): void {
    const totalPagesCount = this.pdf.getNumberOfPages();
    for (let i = 1; i <= totalPagesCount; i++) {
      this.pdf.setPage(i);
      this.pdf.setFillColor(...COLORS.lightGray);
      this.pdf.rect(0, this.pageHeight - 12, this.pageWidth, 12, 'F');
      this.pdf.setTextColor(...COLORS.secondary);
      this.pdf.setFontSize(8);
      this.pdf.text(
        '© 2024-2025 HABY - Desarrollado por Heber Zadkiel García Pérez',
        this.pageWidth / 2,
        this.pageHeight - 5,
        { align: 'center' }
      );
    }
  }

  private addSectionTitle(title: string, level: number = 1): void {
    this.checkPageBreak(15);
    
    const fontSize = level === 1 ? 16 : level === 2 ? 14 : 12;
    const spacing = level === 1 ? 12 : 8;
    
    this.yPosition += spacing;
    
    if (level === 1) {
      this.pdf.setFillColor(...COLORS.primary);
      this.pdf.rect(this.margin, this.yPosition - 5, this.contentWidth, 10, 'F');
      this.pdf.setTextColor(...COLORS.white);
    } else if (level === 2) {
      this.pdf.setDrawColor(...COLORS.accent);
      this.pdf.setLineWidth(0.5);
      this.pdf.line(this.margin, this.yPosition + 3, this.margin + this.contentWidth, this.yPosition + 3);
      this.pdf.setTextColor(...COLORS.dark);
    } else {
      this.pdf.setTextColor(...COLORS.secondary);
    }
    
    this.pdf.setFontSize(fontSize);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(title, level === 1 ? this.margin + 3 : this.margin, this.yPosition + 2);
    
    this.yPosition += spacing + 5;
    this.pdf.setTextColor(...COLORS.text);
    this.pdf.setFont('helvetica', 'normal');
  }

  private addParagraph(text: string, indent: number = 0): void {
    this.checkPageBreak(10);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');
    
    const lines = this.pdf.splitTextToSize(text, this.contentWidth - indent);
    lines.forEach((line: string) => {
      this.checkPageBreak(6);
      this.pdf.text(line, this.margin + indent, this.yPosition);
      this.yPosition += 5;
    });
    this.yPosition += 3;
  }

  private addBulletPoint(text: string, indent: number = 5): void {
    this.checkPageBreak(8);
    this.pdf.setFontSize(10);
    this.pdf.setTextColor(...COLORS.accent);
    this.pdf.text('•', this.margin + indent, this.yPosition);
    this.pdf.setTextColor(...COLORS.text);
    
    const lines = this.pdf.splitTextToSize(text, this.contentWidth - indent - 8);
    lines.forEach((line: string, index: number) => {
      if (index > 0) this.checkPageBreak(5);
      this.pdf.text(line, this.margin + indent + 5, this.yPosition);
      this.yPosition += 5;
    });
  }

  private addTable(headers: string[], rows: string[][], colWidths?: number[]): void {
    const numCols = headers.length;
    const defaultWidth = this.contentWidth / numCols;
    const widths = colWidths || headers.map(() => defaultWidth);
    
    this.checkPageBreak(20);
    
    // Header
    this.pdf.setFillColor(...COLORS.dark);
    this.pdf.rect(this.margin, this.yPosition - 4, this.contentWidth, 8, 'F');
    this.pdf.setTextColor(...COLORS.white);
    this.pdf.setFontSize(9);
    this.pdf.setFont('helvetica', 'bold');
    
    let xPos = this.margin + 2;
    headers.forEach((header, i) => {
      this.pdf.text(header, xPos, this.yPosition);
      xPos += widths[i];
    });
    
    this.yPosition += 6;
    this.pdf.setTextColor(...COLORS.text);
    this.pdf.setFont('helvetica', 'normal');
    
    // Rows
    rows.forEach((row, rowIndex) => {
      this.checkPageBreak(8);
      
      if (rowIndex % 2 === 0) {
        this.pdf.setFillColor(...COLORS.lightGray);
        this.pdf.rect(this.margin, this.yPosition - 4, this.contentWidth, 7, 'F');
      }
      
      xPos = this.margin + 2;
      row.forEach((cell, i) => {
        const cellText = this.pdf.splitTextToSize(cell, widths[i] - 4)[0] || '';
        this.pdf.text(cellText, xPos, this.yPosition);
        xPos += widths[i];
      });
      
      this.yPosition += 6;
    });
    
    this.yPosition += 5;
  }

  private addCodeBlock(code: string): void {
    this.checkPageBreak(20);
    
    this.pdf.setFillColor(40, 44, 52);
    const lines = code.split('\n');
    const blockHeight = Math.min(lines.length * 4 + 6, 60);
    
    this.pdf.rect(this.margin, this.yPosition, this.contentWidth, blockHeight, 'F');
    
    this.pdf.setTextColor(171, 178, 191);
    this.pdf.setFontSize(8);
    this.pdf.setFont('courier', 'normal');
    
    let y = this.yPosition + 5;
    lines.slice(0, 12).forEach(line => {
      const truncated = line.substring(0, 80);
      this.pdf.text(truncated, this.margin + 3, y);
      y += 4;
    });
    
    if (lines.length > 12) {
      this.pdf.text('...', this.margin + 3, y);
    }
    
    this.yPosition += blockHeight + 5;
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.setTextColor(...COLORS.text);
  }

  // ============================================
  // PORTADA
  // ============================================

  private addCoverPage(): void {
    // Fondo degradado
    this.pdf.setFillColor(...COLORS.dark);
    this.pdf.rect(0, 0, this.pageWidth, this.pageHeight, 'F');
    
    // Círculos decorativos
    this.pdf.setFillColor(155, 135, 245, 0.2);
    this.pdf.circle(170, 50, 40, 'F');
    this.pdf.circle(40, 250, 30, 'F');
    
    // Logo/Título principal
    this.pdf.setTextColor(...COLORS.white);
    this.pdf.setFontSize(48);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('HABY', this.pageWidth / 2, 80, { align: 'center' });
    
    this.pdf.setFontSize(18);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.setTextColor(...COLORS.accent);
    this.pdf.text('Open The Doors', this.pageWidth / 2, 95, { align: 'center' });
    
    // Línea decorativa
    this.pdf.setDrawColor(...COLORS.primary);
    this.pdf.setLineWidth(1);
    this.pdf.line(60, 110, 150, 110);
    
    // Subtítulo
    this.pdf.setTextColor(...COLORS.white);
    this.pdf.setFontSize(24);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('INFORME TÉCNICO COMPLETO', this.pageWidth / 2, 140, { align: 'center' });
    
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text('Documentación Exhaustiva del Proyecto', this.pageWidth / 2, 155, { align: 'center' });
    
    // Información del documento
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-MX', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    this.pdf.setFontSize(11);
    this.pdf.setTextColor(...COLORS.lightGray);
    
    const infoY = 200;
    this.pdf.text('Fecha de Generación:', this.margin + 20, infoY);
    this.pdf.text(dateStr, this.margin + 75, infoY);
    
    this.pdf.text('Versión:', this.margin + 20, infoY + 10);
    this.pdf.text('2.0.0', this.margin + 75, infoY + 10);
    
    this.pdf.text('Autor:', this.margin + 20, infoY + 20);
    this.pdf.text('Heber Zadkiel García Pérez', this.margin + 75, infoY + 20);
    
    this.pdf.text('URL Producción:', this.margin + 20, infoY + 30);
    this.pdf.setTextColor(...COLORS.accent);
    this.pdf.text('haby-doors-open-web.lovable.app', this.margin + 75, infoY + 30);
    
    // Footer de portada
    this.pdf.setTextColor(...COLORS.secondary);
    this.pdf.setFontSize(10);
    this.pdf.text(
      'Documento generado automáticamente por el sistema HABY',
      this.pageWidth / 2,
      this.pageHeight - 30,
      { align: 'center' }
    );
    
    this.pageNumber = 1;
  }

  // ============================================
  // SECCIONES DEL INFORME
  // ============================================

  private addTableOfContents(): void {
    this.addNewPage();
    this.addSectionTitle('ÍNDICE DE CONTENIDOS', 1);
    
    const sections = [
      { num: '1', title: 'Información General del Proyecto', page: 3 },
      { num: '2', title: 'Stack Tecnológico Completo', page: 4 },
      { num: '3', title: 'Arquitectura y Estructura del Proyecto', page: 6 },
      { num: '4', title: 'Sistema de Rutas y Páginas', page: 7 },
      { num: '5', title: 'Componentes Principales', page: 9 },
      { num: '6', title: 'Sistema de Hooks Personalizados', page: 11 },
      { num: '7', title: 'Base de Datos Supabase', page: 12 },
      { num: '8', title: 'Edge Functions', page: 14 },
      { num: '9', title: 'Sistema de Portafolio', page: 15 },
      { num: '10', title: 'Sistema de Seguridad', page: 16 },
      { num: '11', title: 'Optimizaciones de Rendimiento', page: 17 },
      { num: '12', title: 'Planes de Precios', page: 18 },
      { num: '13', title: 'Información de Contacto', page: 19 },
      { num: '14', title: 'Resumen Ejecutivo', page: 20 },
    ];
    
    sections.forEach(section => {
      this.pdf.setFontSize(11);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.setTextColor(...COLORS.dark);
      this.pdf.text(`${section.num}.`, this.margin, this.yPosition);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.text(section.title, this.margin + 10, this.yPosition);
      
      // Línea punteada
      this.pdf.setDrawColor(...COLORS.lightGray);
      this.pdf.setLineDashPattern([1, 1], 0);
      const textWidth = this.pdf.getTextWidth(section.title);
      this.pdf.line(this.margin + 12 + textWidth, this.yPosition, this.pageWidth - this.margin - 15, this.yPosition);
      this.pdf.setLineDashPattern([], 0);
      
      // Número de página
      this.pdf.setTextColor(...COLORS.primary);
      this.pdf.text(section.page.toString(), this.pageWidth - this.margin - 5, this.yPosition);
      
      this.yPosition += 8;
    });
  }

  private addGeneralInfo(): void {
    this.addNewPage();
    this.addSectionTitle('1. INFORMACIÓN GENERAL DEL PROYECTO', 1);
    
    this.addSectionTitle('1.1 Descripción', 2);
    this.addParagraph(
      'HABY Open The Doors es una agencia de desarrollo web profesional que ofrece soluciones ' +
      'tecnológicas personalizadas. El proyecto está construido como una aplicación web moderna ' +
      'utilizando React y TypeScript, con un enfoque en rendimiento, accesibilidad y experiencia de usuario.'
    );
    
    this.addSectionTitle('1.2 Datos del Proyecto', 2);
    this.addTable(
      ['Campo', 'Valor'],
      [
        ['Nombre', 'HABY Open The Doors'],
        ['Tipo', 'Aplicación Web SPA (Single Page Application)'],
        ['Framework', 'React 18.3.1 con TypeScript'],
        ['URL Producción', 'haby-doors-open-web.lovable.app'],
        ['Idioma Principal', 'Español (México)'],
        ['Propietario', 'Heber Zadkiel García Pérez'],
        ['Email', 'heber4012garciaperez@gmail.com'],
        ['Teléfono', '+52 56 5368 1237'],
      ],
      [60, 110]
    );
    
    this.addSectionTitle('1.3 Objetivos del Proyecto', 2);
    this.addBulletPoint('Ofrecer servicios de desarrollo web profesional');
    this.addBulletPoint('Mostrar portafolio de proyectos completados');
    this.addBulletPoint('Facilitar el contacto con clientes potenciales');
    this.addBulletPoint('Proporcionar información clara sobre planes y precios');
    this.addBulletPoint('Demostrar capacidades técnicas mediante tecnología de punta');
  }

  private addTechStack(): void {
    this.addNewPage();
    this.addSectionTitle('2. STACK TECNOLÓGICO COMPLETO', 1);
    
    this.addSectionTitle('2.1 Frontend Core', 2);
    this.addTable(
      ['Tecnología', 'Versión', 'Propósito'],
      [
        ['React', '18.3.1', 'Biblioteca principal de UI'],
        ['TypeScript', '5.x', 'Tipado estático'],
        ['Vite', '5.x', 'Bundler y servidor de desarrollo'],
        ['Tailwind CSS', '3.x', 'Framework de estilos utilitarios'],
        ['Framer Motion', '11.18.2', 'Animaciones avanzadas'],
        ['React Router DOM', '6.26.2', 'Enrutamiento SPA'],
        ['TanStack Query', '5.56.2', 'Gestión de estado servidor'],
      ],
      [55, 35, 80]
    );
    
    this.addSectionTitle('2.2 Componentes 3D', 2);
    this.addTable(
      ['Tecnología', 'Versión', 'Propósito'],
      [
        ['Three.js', '0.158.0', 'Motor de renderizado 3D'],
        ['@react-three/fiber', '8.18.0', 'React renderer para Three.js'],
        ['@react-three/drei', '9.122.0', 'Helpers y abstracciones'],
      ],
      [55, 35, 80]
    );
    
    this.addSectionTitle('2.3 Backend y Base de Datos', 2);
    this.addTable(
      ['Servicio', 'Función'],
      [
        ['Supabase Auth', 'Autenticación de usuarios con email/password'],
        ['Supabase Database', 'PostgreSQL con Row Level Security'],
        ['Supabase Edge Functions', 'Funciones serverless en Deno'],
        ['Supabase Storage', 'Almacenamiento de archivos (potencial)'],
      ],
      [60, 110]
    );
    
    this.addSectionTitle('2.4 Integraciones Externas', 2);
    this.addTable(
      ['Servicio', 'Propósito', 'Estado'],
      [
        ['Stripe', 'Procesamiento de pagos', 'Configurado'],
        ['Resend', 'Envío de emails transaccionales', 'Activo'],
        ['WhatsApp Business', 'Comunicación directa', 'Activo'],
      ],
      [50, 80, 40]
    );
    
    this.addSectionTitle('2.5 Componentes UI (shadcn/ui)', 2);
    this.addParagraph(
      'El proyecto utiliza más de 47 componentes de shadcn/ui, incluyendo: Accordion, Alert, ' +
      'AlertDialog, Avatar, Badge, Button, Calendar, Card, Carousel, Checkbox, Collapsible, ' +
      'Command, ContextMenu, Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, Label, ' +
      'Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, ScrollArea, Select, ' +
      'Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toast, ' +
      'Toggle, ToggleGroup, y Tooltip.'
    );
  }

  private addArchitecture(): void {
    this.addNewPage();
    this.addSectionTitle('3. ARQUITECTURA Y ESTRUCTURA DEL PROYECTO', 1);
    
    this.addSectionTitle('3.1 Estructura de Directorios', 2);
    this.addCodeBlock(`
proyecto-haby/
├── public/                    # Archivos estáticos públicos
│   ├── lovable-uploads/       # Imágenes subidas
│   ├── favicon.ico            # Ícono del sitio
│   └── robots.txt             # Configuración SEO
├── src/
│   ├── components/            # Componentes React (50+)
│   │   ├── ui/                # Componentes shadcn/ui
│   │   └── contacto-lna/      # Sistema wizard de contacto
│   ├── pages/                 # Páginas de la aplicación (12)
│   ├── hooks/                 # Hooks personalizados (8)
│   ├── styles/                # Archivos CSS adicionales (15)
│   ├── utils/                 # Utilidades
│   ├── data/                  # Datos estáticos
│   ├── lib/                   # Librerías y configuración
│   └── integrations/          # Integraciones (Supabase)
└── supabase/
    └── functions/             # Edge Functions (2)
    `);
    
    this.addSectionTitle('3.2 Patrones de Diseño Implementados', 2);
    this.addBulletPoint('Componentes Funcionales: Todos los componentes usan hooks de React');
    this.addBulletPoint('Lazy Loading: Carga diferida de páginas y componentes pesados');
    this.addBulletPoint('Composición: Componentes pequeños y reutilizables');
    this.addBulletPoint('Custom Hooks: Lógica reutilizable extraída en hooks');
    this.addBulletPoint('Context API: Para estado global (AnimationController)');
    this.addBulletPoint('Error Boundaries: Manejo de errores en componentes');
    
    this.addSectionTitle('3.3 Sistema de Estilos', 2);
    this.addParagraph(
      'El proyecto utiliza un sistema de diseño basado en tokens CSS con variables HSL ' +
      'definidas en index.css. Los colores principales de HABY (morado #9b87f5, verde #34D399) ' +
      'se aplican consistentemente a través de clases de Tailwind personalizadas.'
    );
  }

  private addRoutesSystem(): void {
    this.addNewPage();
    this.addSectionTitle('4. SISTEMA DE RUTAS Y PÁGINAS', 1);
    
    this.addSectionTitle('4.1 Mapa de Rutas', 2);
    this.addTable(
      ['Ruta', 'Página', 'Descripción'],
      [
        ['/', 'Index.tsx', 'Página principal con todas las secciones'],
        ['/sobre-nosotros', 'SobreNosotros.tsx', 'Historia y equipo de HABY'],
        ['/servicios', 'Servicios.tsx', 'Catálogo de servicios'],
        ['/desarrollo-web', 'DesarrolloWeb.tsx', 'Servicio especializado'],
        ['/soluciones-personalizadas', 'SolucionesPersonalizadas.tsx', 'Servicio especializado'],
        ['/portafolio', 'Portafolio.tsx', 'Galería de proyectos'],
        ['/portafolio/:id', 'DetalleProyecto.tsx', 'Detalle de proyecto'],
        ['/precios', 'Precios.tsx', 'Planes y precios'],
        ['/contacto', 'Contacto.tsx', 'Formulario de contacto'],
        ['/cloritizacion', 'Cloritizacion.tsx', 'Servicio de cloritización'],
        ['/admin', 'Admin.tsx', 'Panel de administración'],
        ['*', 'NotFound.tsx', 'Página 404'],
      ],
      [55, 55, 60]
    );
    
    this.addSectionTitle('4.2 Flujo de Navegación', 2);
    this.addParagraph(
      'La aplicación utiliza React Router v6 con AnimatePresence de Framer Motion para ' +
      'proporcionar transiciones suaves entre páginas. Cada página está envuelta en un ' +
      'componente PageTransition que aplica animaciones de entrada y salida.'
    );
    
    this.addSectionTitle('4.3 Páginas Públicas vs Protegidas', 2);
    this.addBulletPoint('Páginas Públicas: Todas excepto /admin (11 páginas)');
    this.addBulletPoint('Páginas Protegidas: /admin requiere autenticación con rol admin');
    this.addBulletPoint('Sistema de Autenticación: Supabase Auth con verificación de rol');
  }

  private addComponents(): void {
    this.addNewPage();
    this.addSectionTitle('5. COMPONENTES PRINCIPALES', 1);
    
    this.addSectionTitle('5.1 Componentes de Layout', 2);
    this.addTable(
      ['Componente', 'Archivo', 'Función'],
      [
        ['Navbar', 'Navbar.tsx', 'Navegación principal responsive'],
        ['Footer', 'Footer.tsx', 'Pie de página con enlaces y contacto'],
        ['PageTransition', 'PageTransition.tsx', 'Animaciones de transición'],
        ['SEOHead', 'SEOHead.tsx', 'Meta tags dinámicos'],
      ],
      [45, 55, 70]
    );
    
    this.addSectionTitle('5.2 Componentes Visuales', 2);
    this.addTable(
      ['Componente', 'Descripción'],
      [
        ['Hero', 'Banner principal con modelo 3D interactivo'],
        ['ThreeDModel', 'Renderizado de modelos 3D con Three.js'],
        ['LazyThreeDModel', 'Versión lazy-loaded del modelo 3D'],
        ['AnimatedSection', 'Wrapper con animaciones de scroll reveal'],
        ['AnimatedGradient', 'Fondos con gradientes animados'],
        ['ImageOptimized', 'Imágenes con lazy loading optimizado'],
      ],
      [55, 115]
    );
    
    this.addSectionTitle('5.3 Componentes de Sección', 2);
    this.addTable(
      ['Componente', 'Ubicación', 'Contenido'],
      [
        ['ServicesSection', 'Index', '6 servicios principales'],
        ['PortfolioSection', 'Index', 'Proyectos destacados'],
        ['PricingSection', 'Index/Precios', '4 planes de precios'],
        ['TestimonialsSection', 'Index', 'Testimonios de clientes'],
        ['FAQSection', 'Index', 'Preguntas frecuentes'],
        ['ContactSection', 'Index/Contacto', 'Formulario y datos'],
        ['AboutSection', 'SobreNosotros', 'Información de la empresa'],
      ],
      [50, 40, 80]
    );
    
    this.addSectionTitle('5.4 Sistema de Contacto LNA (Wizard)', 2);
    this.addParagraph(
      'El sistema de contacto incluye un wizard de 5 pasos para solicitar cotizaciones ' +
      'personalizadas del plan LNA (Levantamiento de Necesidades Automatizado):'
    );
    this.addBulletPoint('Paso 1 (LNAStep1_UserInfo): Información del usuario');
    this.addBulletPoint('Paso 2 (LNAStep2_Project): Detalles del proyecto');
    this.addBulletPoint('Paso 3 (LNAStep3_Impact): Impacto esperado');
    this.addBulletPoint('Paso 4 (LNAStep4_Resources): Recursos disponibles');
    this.addBulletPoint('Paso 5 (LNAStep5_Confirm): Confirmación y envío');
  }

  private addHooksSystem(): void {
    this.addNewPage();
    this.addSectionTitle('6. SISTEMA DE HOOKS PERSONALIZADOS', 1);
    
    this.addTable(
      ['Hook', 'Archivo', 'Propósito'],
      [
        ['useAdminAuth', 'useAdminAuth.ts', 'Autenticación y autorización de administradores'],
        ['useDeviceCapabilities', 'useDeviceCapabilities.ts', 'Detecta capacidades del dispositivo'],
        ['useIsMobile', 'use-mobile.tsx', 'Detecta si es dispositivo móvil'],
        ['useLocalStorage', 'useLocalStorage.ts', 'Persistencia en localStorage'],
        ['usePageTitle', 'usePageTitle.ts', 'Gestiona título de página dinámico'],
        ['useProjects', 'useProjects.ts', 'CRUD de proyectos con Supabase'],
        ['useScrollReveal', 'useScrollReveal.ts', 'Animaciones al hacer scroll'],
        ['useBrowserDetection', 'useBrowserDetection.ts', 'Detecta navegador del usuario'],
        ['useToast', 'use-toast.ts', 'Sistema de notificaciones toast'],
      ],
      [50, 60, 60]
    );
    
    this.addSectionTitle('6.1 Detalle: useAdminAuth', 2);
    this.addParagraph(
      'Este hook gestiona todo el flujo de autenticación para administradores. Incluye ' +
      'login, logout, signup, verificación de sesión y comprobación de rol admin mediante ' +
      'la función RPC is_admin de Supabase.'
    );
    
    this.addSectionTitle('6.2 Detalle: useDeviceCapabilities', 2);
    this.addParagraph(
      'Detecta las capacidades del dispositivo para optimizar la experiencia: soporte táctil, ' +
      'potencia de GPU, preferencias de movimiento reducido, y modo de ahorro de datos.'
    );
  }

  private addDatabase(): void {
    this.addNewPage();
    this.addSectionTitle('7. BASE DE DATOS SUPABASE', 1);
    
    this.addSectionTitle('7.1 Esquema de Tablas', 2);
    
    this.addSectionTitle('Tabla: user_roles', 3);
    this.addTable(
      ['Columna', 'Tipo', 'Descripción'],
      [
        ['id', 'UUID (PK)', 'Identificador único'],
        ['user_id', 'UUID (FK)', 'Referencia a auth.users'],
        ['role', 'app_role', 'Rol del usuario (admin/user)'],
        ['created_at', 'TIMESTAMPTZ', 'Fecha de creación'],
      ],
      [45, 50, 75]
    );
    
    this.addSectionTitle('Tabla: projects', 3);
    this.addTable(
      ['Columna', 'Tipo', 'Descripción'],
      [
        ['id', 'UUID (PK)', 'Identificador único'],
        ['title', 'TEXT', 'Título del proyecto'],
        ['description', 'TEXT', 'Descripción detallada'],
        ['image', 'TEXT', 'URL de imagen principal'],
        ['url', 'TEXT', 'URL del proyecto en vivo'],
        ['category', 'TEXT', 'Categoría del proyecto'],
        ['created_at', 'TIMESTAMPTZ', 'Fecha de creación'],
        ['updated_at', 'TIMESTAMPTZ', 'Última actualización'],
      ],
      [45, 50, 75]
    );
    
    this.addSectionTitle('7.2 Políticas RLS (Row Level Security)', 2);
    this.addTable(
      ['Tabla', 'Política', 'Acción', 'Condición'],
      [
        ['user_roles', 'Admin full access', 'ALL', 'is_admin(auth.uid())'],
        ['user_roles', 'View own role', 'SELECT', 'auth.uid() = user_id'],
        ['projects', 'Public read', 'SELECT', 'true (todos pueden leer)'],
        ['projects', 'Admin manage', 'ALL', 'is_admin(auth.uid())'],
      ],
      [35, 45, 30, 60]
    );
    
    this.addSectionTitle('7.3 Funciones de Base de Datos', 2);
    this.addBulletPoint('is_admin(user_id UUID): Verifica si un usuario tiene rol admin');
    this.addBulletPoint('has_role(user_id UUID, role app_role): Verifica rol específico');
    this.addBulletPoint('handle_new_admin_user(): Trigger para asignar rol a nuevos admins');
  }

  private addEdgeFunctions(): void {
    this.addNewPage();
    this.addSectionTitle('8. EDGE FUNCTIONS', 1);
    
    this.addSectionTitle('8.1 send-contact-email', 2);
    this.addParagraph(
      'Función serverless que procesa los formularios de contacto y envía emails ' +
      'transaccionales usando la API de Resend.'
    );
    
    this.addTable(
      ['Característica', 'Detalle'],
      [
        ['Endpoint', 'POST /functions/v1/send-contact-email'],
        ['Validación', 'Zod schema para todos los campos'],
        ['Servicio Email', 'Resend API'],
        ['Templates', 'HTML profesional con estilos inline'],
        ['Tipos de Formulario', 'contacto, lna_cotizacion'],
        ['Logging', 'Sistema de logs estructurado'],
      ],
      [50, 120]
    );
    
    this.addSectionTitle('8.2 create-checkout', 2);
    this.addParagraph(
      'Función que integra con Stripe para crear sesiones de pago para los planes ' +
      'de servicios de HABY.'
    );
    
    this.addTable(
      ['Característica', 'Detalle'],
      [
        ['Endpoint', 'POST /functions/v1/create-checkout'],
        ['Integración', 'Stripe Checkout Sessions API'],
        ['Planes Disponibles', 'basico, premium, empresarial'],
        ['Moneda', 'MXN (Peso Mexicano)'],
        ['Modo', 'payment (pago único)'],
      ],
      [50, 120]
    );
    
    this.addSectionTitle('8.3 Configuración de Seguridad', 2);
    this.addBulletPoint('CORS: Configurado para dominios permitidos');
    this.addBulletPoint('Rate Limiting: Implementado a nivel de Supabase');
    this.addBulletPoint('Validación: Todos los inputs validados con Zod');
    this.addBulletPoint('Secrets: API keys almacenadas en Supabase Secrets');
  }

  private addPortfolio(): void {
    this.addNewPage();
    this.addSectionTitle('9. SISTEMA DE PORTAFOLIO', 1);
    
    this.addSectionTitle('9.1 Proyectos Registrados', 2);
    this.addTable(
      ['ID', 'Proyecto', 'Cliente', 'Categoría'],
      [
        ['1', 'HABY Open The Doors', 'HABY', 'web'],
        ['2', 'Sistema Gestión Escolar', 'CECyT 3', 'aplicacion'],
        ['3', 'Plataforma E-learning', 'CECyT 3', 'web'],
        ['4', 'App Control de Asistencia', 'CECyT 3', 'aplicacion'],
        ['5', 'Sistema de Inventarios', 'CECyT 3', 'aplicacion'],
        ['6', 'Portal Institucional', 'IPN', 'web'],
        ['7', 'App Móvil Estudiantes', 'CECyT 3', 'movil'],
        ['8', 'Dashboard Analíticas', 'HABY', 'web'],
      ],
      [20, 60, 40, 50]
    );
    
    this.addSectionTitle('9.2 Estructura de Datos de Proyecto', 2);
    this.addCodeBlock(`
interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
  client: string;
  date: string;
  technologies: string[];
  features: string[];
  category: string;
  gallery?: string[];
  testimonial?: {...};
  isPrivate?: boolean;
  isFeatured?: boolean;
}
    `);
  }

  private addSecurity(): void {
    this.addNewPage();
    this.addSectionTitle('10. SISTEMA DE SEGURIDAD', 1);
    
    this.addSectionTitle('10.1 Capas de Seguridad Implementadas', 2);
    this.addTable(
      ['Capa', 'Tecnología', 'Descripción'],
      [
        ['Autenticación', 'Supabase Auth', 'Email/password con confirmación'],
        ['Autorización', 'RLS + Roles', 'Sistema de roles admin/user'],
        ['Validación', 'Zod', 'Validación de schemas en frontend y backend'],
        ['XSS Prevention', 'React', 'Escape automático de contenido'],
        ['CORS', 'Edge Functions', 'Configuración de orígenes permitidos'],
        ['Secrets', 'Supabase Vault', 'API keys encriptadas'],
      ],
      [40, 45, 85]
    );
    
    this.addSectionTitle('10.2 Flujo de Autenticación Admin', 2);
    this.addParagraph(
      '1. Usuario ingresa credenciales en /admin\n' +
      '2. Supabase Auth verifica email/password\n' +
      '3. Hook useAdminAuth llama a RPC is_admin()\n' +
      '4. Si es admin, se permite acceso al panel\n' +
      '5. Si no es admin, se cierra sesión automáticamente'
    );
    
    this.addSectionTitle('10.3 Administrador Designado', 2);
    this.addBulletPoint('Email: heber4012garciaperez@gmail.com');
    this.addBulletPoint('Rol: admin');
    this.addBulletPoint('Permisos: CRUD completo en proyectos');
  }

  private addPerformance(): void {
    this.addNewPage();
    this.addSectionTitle('11. OPTIMIZACIONES DE RENDIMIENTO', 1);
    
    this.addSectionTitle('11.1 Técnicas Implementadas', 2);
    this.addTable(
      ['Técnica', 'Implementación', 'Beneficio'],
      [
        ['Lazy Loading', 'React.lazy() + Suspense', 'Reduce bundle inicial 60%'],
        ['Code Splitting', 'Vite chunks dinámicos', 'Carga bajo demanda'],
        ['Image Optimization', 'ImageOptimized component', 'Lazy load + placeholder'],
        ['3D Lazy', 'LazyThreeDModel', 'Carga 3D solo si visible'],
        ['Query Cache', 'TanStack Query', '5 min stale time'],
        ['Animation RAF', 'requestAnimationFrame', 'Animaciones 60fps'],
        ['Idle Callbacks', 'requestIdleCallback', 'Tareas no críticas'],
      ],
      [40, 55, 75]
    );
    
    this.addSectionTitle('11.2 Configuración de TanStack Query', 2);
    this.addCodeBlock(`
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutos
    },
  },
});
    `);
    
    this.addSectionTitle('11.3 CSS Performance', 2);
    this.addBulletPoint('contain: layout style para componentes aislados');
    this.addBulletPoint('will-change para animaciones predecibles');
    this.addBulletPoint('GPU acceleration con transform3d');
    this.addBulletPoint('prefers-reduced-motion para accesibilidad');
  }

  private addPricing(): void {
    this.addNewPage();
    this.addSectionTitle('12. PLANES DE PRECIOS', 1);
    
    this.addTable(
      ['Plan', 'Precio', 'Características Principales'],
      [
        ['LNA Gratuito', '$0 MXN', 'Consulta inicial, diagnóstico básico'],
        ['LNA Básico', '$2,999 MXN', 'Landing page, dominio, hosting 1 año'],
        ['LNA Premium', '$7,999 MXN', 'Sitio completo, SEO, analytics'],
        ['Empresarial', '$14,999+ MXN', 'Solución personalizada, soporte 24/7'],
      ],
      [40, 40, 90]
    );
    
    this.addSectionTitle('12.1 Detalle Plan LNA Básico', 2);
    this.addBulletPoint('Diseño personalizado responsive');
    this.addBulletPoint('Hasta 5 secciones');
    this.addBulletPoint('Formulario de contacto');
    this.addBulletPoint('Integración redes sociales');
    this.addBulletPoint('Certificado SSL');
    this.addBulletPoint('Soporte por 3 meses');
    
    this.addSectionTitle('12.2 Detalle Plan LNA Premium', 2);
    this.addBulletPoint('Todo lo del plan Básico');
    this.addBulletPoint('Hasta 10 secciones');
    this.addBulletPoint('Blog integrado');
    this.addBulletPoint('SEO avanzado');
    this.addBulletPoint('Google Analytics');
    this.addBulletPoint('Soporte por 6 meses');
    this.addBulletPoint('2 revisiones de diseño');
  }

  private addContact(): void {
    this.addNewPage();
    this.addSectionTitle('13. INFORMACIÓN DE CONTACTO', 1);
    
    this.addSectionTitle('13.1 Canales Oficiales', 2);
    this.addTable(
      ['Canal', 'Información'],
      [
        ['WhatsApp', '+52 56 5368 1237'],
        ['Email', 'heber4012garciaperez@gmail.com'],
        ['Facebook', 'facebook.com/habyopenthedoors'],
        ['Instagram', '@habyopenthedoors'],
        ['YouTube', '@HABYOpenDoors'],
        ['Twitter/X', '@Haby_Open_Doors'],
        ['Web', 'haby-doors-open-web.lovable.app'],
      ],
      [50, 120]
    );
    
    this.addSectionTitle('13.2 Horario de Atención', 2);
    this.addBulletPoint('Lunes a Viernes: 9:00 AM - 6:00 PM (Hora CDMX)');
    this.addBulletPoint('Sábados: 10:00 AM - 2:00 PM');
    this.addBulletPoint('WhatsApp: Respuesta en menos de 24 horas');
  }

  private addExecutiveSummary(): void {
    this.addNewPage();
    this.addSectionTitle('14. RESUMEN EJECUTIVO', 1);
    
    this.addSectionTitle('14.1 Métricas del Proyecto', 2);
    this.addTable(
      ['Métrica', 'Valor'],
      [
        ['Páginas', '12'],
        ['Componentes React', '50+'],
        ['Componentes UI (shadcn)', '47'],
        ['Hooks Personalizados', '9'],
        ['Edge Functions', '2'],
        ['Archivos CSS', '15'],
        ['Tablas en BD', '2'],
        ['Políticas RLS', '4+'],
        ['Integraciones', '3 (Stripe, Resend, Supabase)'],
      ],
      [70, 100]
    );
    
    this.addSectionTitle('14.2 Puntos Fuertes', 2);
    this.addBulletPoint('Arquitectura moderna con React 18 y TypeScript');
    this.addBulletPoint('Experiencia visual premium con animaciones 3D');
    this.addBulletPoint('Seguridad robusta con RLS y autenticación');
    this.addBulletPoint('Optimizado para rendimiento y SEO');
    this.addBulletPoint('Accesibilidad WCAG 2.1 implementada');
    this.addBulletPoint('Código limpio y bien documentado');
    
    this.addSectionTitle('14.3 Recomendaciones Futuras', 2);
    this.addBulletPoint('Implementar sistema de blog con CMS');
    this.addBulletPoint('Agregar dashboard de analytics para admin');
    this.addBulletPoint('Integrar chat en vivo para soporte');
    this.addBulletPoint('Expandir tests automatizados');
    this.addBulletPoint('Implementar PWA para experiencia offline');
  }

  // ============================================
  // GENERACIÓN FINAL
  // ============================================

  public generate(): void {
    // Portada
    this.addCoverPage();
    
    // Índice
    this.addTableOfContents();
    
    // Secciones del informe
    this.addGeneralInfo();
    this.addTechStack();
    this.addArchitecture();
    this.addRoutesSystem();
    this.addComponents();
    this.addHooksSystem();
    this.addDatabase();
    this.addEdgeFunctions();
    this.addPortfolio();
    this.addSecurity();
    this.addPerformance();
    this.addPricing();
    this.addContact();
    this.addExecutiveSummary();
    
    // Footer en todas las páginas
    this.addFooter();
    
    // Guardar PDF
    const today = new Date().toISOString().split('T')[0];
    this.pdf.save(`HABY-Informe-Tecnico-${today}.pdf`);
  }
}

// Función helper para generar y descargar el PDF
export const downloadHABYReport = (): void => {
  const report = new HABYPDFReport();
  report.generate();
};
