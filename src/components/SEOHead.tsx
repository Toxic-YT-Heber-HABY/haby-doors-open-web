import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

const SEOHead = ({
  title = "HABY | Soluciones Web Personalizadas - Desarrollo y Diseño Profesional",
  description = "HABY Open The Doors: Desarrollamos soluciones web personalizadas, aplicaciones modernas y herramientas digitales que resuelven problemas cotidianos y optimizan tu productividad.",
  keywords = "desarrollo web profesional, diseño web moderno, aplicaciones web personalizadas, herramientas productividad, soluciones digitales, desarrollo frontend, backend, haby, programación, diseño UX/UI",
  image = "/lovable-uploads/f3e5eff1-a976-44c3-97a2-1e1e73c75a36.png",
  url = "https://haby-open-doors.com/",
  type = "website",
  author = "Heber Zadkiel García Pérez",
  publishedTime,
  modifiedTime,
  canonicalUrl,
  structuredData
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Actualizar título
    document.title = title;

    // Función helper para actualizar meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Meta tags básicos
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'HABY - Open The Doors', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@Haby_Open_Doors');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Article específico
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }
    if (author) {
      updateMetaTag('article:author', author, true);
    }

    // Schema.org JSON-LD
    const schemaData = structuredData || {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "HABY - Open The Doors",
      "description": description,
      "url": url,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "HABY - Open The Doors",
        "logo": {
          "@type": "ImageObject",
          "url": image
        }
      },
      "image": image,
      "sameAs": [
        "https://www.facebook.com/habyopenthedoors",
        "https://www.instagram.com/habyopenthedoors?igsh=MTlkam4yeXE2NGFxMQ==",
        "https://x.com/Haby_Open_Doors",
        "https://www.youtube.com/@HABYOpenDoors"
      ]
    };

    // Insertar o actualizar JSON-LD
    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(schemaData);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl || url);

    // Cleanup function
    return () => {
      // No necesitamos limpiar ya que las meta tags se actualizan para cada página
    };
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, canonicalUrl, structuredData]);

  return null; // Este componente no renderiza nada visible
};

export default SEOHead;