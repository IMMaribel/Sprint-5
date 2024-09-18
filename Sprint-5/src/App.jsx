import { useState } from 'react';
import Card from './Card';

function App() {
  const tutorialData = [
    { title: 'Dedica moltes hores', 
      description: `Un mínim de 30 hores a la semana. Si no en tens prou,
      hauràs de dedicar-li més hores. Al principi sembla impossible,
       però notaràs una millora ràpidament.` }
  ];

  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];

  return (
    <div>
      <Card title={currentCardData.title} description={currentCardData.description} />
    </div>
  );
}

export default App;
