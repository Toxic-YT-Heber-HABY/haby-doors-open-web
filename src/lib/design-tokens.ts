/**
 * Design System Tokens
 * Centraliza las clases de diseño para evitar hard-coding y mejorar mantenimiento
 */

export const designTokens = {
  // Background colors
  backgrounds: {
    primary: 'bg-background',
    card: 'bg-card',
    muted: 'bg-muted',
    accent: 'bg-accent',
    destructive: 'bg-destructive',
    secondary: 'bg-secondary',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    error: 'bg-destructive',
  },

  // Text colors
  text: {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    accent: 'text-accent-foreground',
    destructive: 'text-destructive-foreground',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    inverse: 'text-primary-foreground',
  },

  // Border colors
  borders: {
    default: 'border-border',
    muted: 'border-muted',
    accent: 'border-accent',
    input: 'border-input',
  },

  // Hover states
  hover: {
    primary: 'hover:bg-primary/90',
    secondary: 'hover:bg-secondary/80',
    muted: 'hover:bg-muted/80',
    destructive: 'hover:bg-destructive/90',
    success: 'hover:bg-green-700',
  },

  // Focus states
  focus: {
    ring: 'focus:ring-2 focus:ring-ring focus:ring-offset-2',
    outline: 'focus:outline-none',
  },

  // Shadows
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  },

  // Common combinations
  components: {
    button: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    input: 'border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    card: 'bg-card text-card-foreground shadow-sm border border-border',
  }
};

export const getDesignToken = (path: string): string => {
  const keys = path.split('.');
  let value: any = designTokens;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Design token "${path}" not found`);
      return '';
    }
  }
  
  return value;
};