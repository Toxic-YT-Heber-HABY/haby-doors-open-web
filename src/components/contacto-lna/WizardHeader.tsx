interface WizardHeaderProps {
  steps: Array<{ title: string; icon: string }>;
  currentStep: number;
}

const WizardHeader = ({ steps, currentStep }: WizardHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-haby-primary to-haby-accent px-8 py-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold">Plan Gratuito HABY</h1>
          <p className="text-sm opacity-90">Solicitud paso a paso</p>
        </div>
        <div className="text-right">
          <div className="text-2xl mb-1">{steps[currentStep].icon}</div>
          <div className="text-sm opacity-90">Paso {currentStep + 1} de {steps.length}</div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 ${
                currentStep >= i 
                  ? "bg-white text-haby-primary shadow-lg scale-110" 
                  : "bg-white/20 text-white/70"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 mx-1 rounded-full transition-all duration-500 ${
                currentStep >= i ? "bg-white shadow-sm" : "bg-white/20"
              }`}
            />
          ))}
        </div>
        <div className="text-center mt-3">
          <p className="text-sm font-medium opacity-95">{steps[currentStep].title}</p>
        </div>
      </div>
    </div>
  );
};

export default WizardHeader;