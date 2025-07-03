import { ChevronLeft, ChevronRight, Send } from "lucide-react";

interface WizardNavigationProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  isSubmitting: boolean;
  onPrev: () => void;
  onNext: (e: React.FormEvent) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const WizardNavigation = ({ 
  isFirstStep, 
  isLastStep, 
  isSubmitting, 
  onPrev, 
  onNext, 
  onSubmit 
}: WizardNavigationProps) => {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
      {!isFirstStep ? (
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Atrás
        </button>
      ) : <div />}
      
      <button
        type="submit"
        onClick={isLastStep ? onSubmit : onNext}
        className={`inline-flex items-center px-8 py-3 font-semibold text-white rounded-xl transition-all duration-200 ${
          isLastStep 
            ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl" 
            : "bg-gradient-to-r from-haby-primary to-haby-accent hover:from-haby-accent hover:to-haby-primary shadow-lg hover:shadow-xl"
        } ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}`}
        disabled={isSubmitting}
      >
        {isLastStep ? (
          <>
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar solicitud
              </>
            )}
          </>
        ) : (
          <>
            Siguiente
            <ChevronRight className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </div>
  );
};

export default WizardNavigation;