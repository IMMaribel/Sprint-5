import { useState } from 'react';
import Card from './Card';
import Image1 from './Images/img1';
import Image2 from './Images/img2';
import Image3 from './Images/img3';

function App() {

  const tutorialData = [
    { img: <Image1 />,
      title: 'Dedica moltes hores', 
      description: `Un mínim de 30 hores a la semana. Si no en tens prou,
      hauràs de dedicar-li més hores. Al principi sembla impossible,
      però notaràs una millora ràpidament.`,
      bgColor: 'bg-teal-600' },

    { img: <Image2 />,
      title: 'Programa projectes propis',
      description: `Més val 10 hores treballant en projectes propis, 
      que 10 hores mirant tutorials. La motivació i la implicació en 
      el projecte ajudarà a accelerar el teu aprenentatge.`,
      bgColor: 'bg-slate-300'
    },

    { img: <Image3 />,
      title: 'Procura descansar',
      description: `Descansa bé i desconectar són vitals. D'aquesta manera reduiràs
      l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu
      aprenentatge.`,
      bgColor: 'bg-amber-300'
    }
  ];

  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];

  const nextStep = () => {
    setStep((nextStep) => (nextStep < tutorialData.length - 1 ? nextStep + 1 : nextStep));
  };

  const prevStep = () => {
    setStep((prevStep) => (prevStep >  0 ? prevStep -1 : prevStep));
  }

  return (
    
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <Card 
      tutorialData={tutorialData}
      step={step}
      setStep={setStep}
      nextStep={nextStep}
      prevStep={prevStep}
      />
    </div>
    
  );
}

export default App;
