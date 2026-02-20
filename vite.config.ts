import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Bundle lucide-react icons into main vendor chunk to avoid tiny chained requests
          if (id.includes('lucide-react')) {
            return 'vendor';
          }
          // Bundle small shared modules into vendor to reduce chain depth
          if (id.includes('node_modules')) {
            if (
              id.includes('framer-motion') ||
              id.includes('react-router') ||
              id.includes('clsx') ||
              id.includes('tailwind-merge') ||
              id.includes('class-variance-authority')
            ) {
              return 'vendor';
            }
          }
        },
      },
    },
  },
}));
