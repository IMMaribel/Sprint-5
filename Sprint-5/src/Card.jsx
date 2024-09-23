import React from 'react';
import Indicator from './Indicator';


function Card({nextStep, prevStep, step, setStep, tutorialData}) {
  return (
    <div className="flex justify-center items-center w-full max-w-md h-auto overflow-hidden relative"> 
      <div
        className="flex w-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${step * 100}%)` }}
      >
        {tutorialData.map((data, index) => (
          <div key={index} className="w-full shrink-0 p-14">
            <div className="h-full rounded-3xl shadow-lg bg-white flex flex-col pb-20">
              <div className={`w-full flex justify-center items-center mb-6 ${data.bgColor} rounded-t-3xl py-24`}>
                {data.img}
              </div>
              <h2 className="text-xl font-bold text-gray-900 text-start pl-6 pb-4">{data.title}</h2>
              <p className="text-gray-700 mb-8 text-start px-6">{data.description}</p>

            <div className="absolute bottom-12 w-full flex justify-between px-4">
              <Indicator tutorialData={tutorialData} step={step} setStep={setStep} />
              <div className="flex space-x-4">
                {step > 0 && (
                  <button
                    className="w-10 h-10 border border-black bg-white text-black rounded-full flex items-center justify-center absolute right-48 bottom-10"
                    onClick={prevStep}
                    >
                    ←
                  </button>
                )}

                {step < tutorialData.length - 1 && (
                  <button
                  className="w-10 h-10  bg-black text-white rounded-full flex items-center justify-center absolute right-36 bottom-10"
                  onClick={nextStep}
                  >
                    →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

