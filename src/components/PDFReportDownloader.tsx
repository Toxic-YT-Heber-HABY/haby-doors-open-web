/**
 * Componente para descargar el informe PDF del proyecto HABY
 */

import { useState } from 'react';
import { FileText, Download, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { downloadHABYReport } from '@/utils/pdfReportGenerator';

interface PDFReportDownloaderProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showIcon?: boolean;
  className?: string;
}

const PDFReportDownloader = ({
  variant = 'default',
  size = 'default',
  showIcon = true,
  className = '',
}: PDFReportDownloaderProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsGenerating(true);
    setIsComplete(false);

    try {
      // Pequeño delay para mostrar el estado de carga
      await new Promise(resolve => setTimeout(resolve, 500));
      
      downloadHABYReport();
      
      setIsComplete(true);
      toast({
        title: '¡PDF Generado!',
        description: 'El informe técnico se ha descargado correctamente.',
      });

      // Reset después de 3 segundos
      setTimeout(() => {
        setIsComplete(false);
      }, 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: 'Error',
        description: 'No se pudo generar el PDF. Intenta de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const getIcon = () => {
    if (isGenerating) {
      return <Loader2 className="h-4 w-4 animate-spin" />;
    }
    if (isComplete) {
      return <CheckCircle className="h-4 w-4 text-haby-accent" />;
    }
    return showIcon ? <FileText className="h-4 w-4" /> : null;
  };

  const getText = () => {
    if (isGenerating) return 'Generando PDF...';
    if (isComplete) return '¡Descargado!';
    return 'Descargar Informe PDF';
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      disabled={isGenerating}
      className={`gap-2 ${className}`}
    >
      {getIcon()}
      <span>{getText()}</span>
      {!isGenerating && !isComplete && <Download className="h-4 w-4 ml-1" />}
    </Button>
  );
};

export default PDFReportDownloader;
