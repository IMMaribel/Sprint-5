
function Card({ img, title, description, nextStep,bgColor }) {
  return (
    <div className="flex max-w-xs sm:max-w-xs justify-center">
      <div className="w-full max-h-full rounded-xl shadow-lg bg-white flex flex-col">
        <div className={`w-full flex items-center mb-6 ${bgColor} rounded-t-lg`}>  
          {img}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left p-2">{title}</h2>
        <p className="text-gray-700  mb-6 text-left p-2">{description}</p>
        <div className="flex justify-end w-full mt-4 p-5">
          
          <button 
            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center"
            onClick={nextStep}
          >
            →
          </button>
        </div>  
      </div>
    </div>
  );
}

export default Card;

