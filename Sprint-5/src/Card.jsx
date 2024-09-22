
function Card({ img, title, description, nextStep, prevStep, step, bgColor }) {
  return (
    <div className="flex max-w-xs sm:max-w-xs justify-center">
      <div className="w-full max-h-full rounded-3xl shadow-lg bg-white flex flex-col">
        <div className={`w-full max-w-sm flex items-center mb-6 ${bgColor} rounded-t-3xl py-8`}>  
          {img}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-left p-3">{title}</h2>
        <p className="text-gray-700  mb-5 text-left p-3">{description}</p>
        <div className="flex justify-end w-full">
          {step > 0 && ( 
            <button 
              className="w-14 h-14 rounded-full border border-black flex items-center justify-center text-gray-800 mr-6 mb-6"
              onClick={prevStep}
            >
              ←
            </button>
          )} 
          
          {(step < 2 &&
          <button 
              className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mr-6 mb-6"
              onClick={nextStep}
            >
              →
            </button>
          )}
      </div>  
    </div>
  </div>
);
}

export default Card;

