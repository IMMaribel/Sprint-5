import { useState } from 'react';
import Card from './Card';

function App() {
  const tutorialData = [
    { title: 'Dedica moltes hores', 
      description: `Un mínim de 30 hores a la semana. Si no en tens prou,
      hauràs de dedicar-li més hores. Al principi sembla impossible,
       però notaràs una millora ràpidament.` },

    { title: 'Programa projectes propis',
      description: `Més val 10 hores treballant en projectes propis, 
      que 10 hores mirant tutorials. La motivació i la implicació en 
      el projecte ajudarà a accelerar el teu aprenentatge.`
    },

    { title: 'Procura descansar',
      description: `Descansa bé i desconectar són vitals. D'aquesta manera reduiràs
      l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu
      aprenentatge.`
    }
  ];

  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];

  const nextStep = () => {
    setStep((prevStep) => (prevStep < tutorialData.length - 1 ? prevStep + 1 : prevStep));
  };

  return (
    <div>
      <Card 
      title={currentCardData.title} 
      description={currentCardData.description} 
      nextStep={nextStep}
      />

    </div>
  );
}

export default App;
