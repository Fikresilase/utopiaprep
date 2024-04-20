import question from "../images/question.png"; // Assuming question image is used
import effective from "../images/effective.png"; // Assuming effective image is used
import ai from "../images/ai.png";
function Features() {
  return (
    <div className="features mt-8 container justify-center pt-8 mx-8 px-8 flex">
      <div className="questions mx-8 bg-white shadow-md rounded-lg border hover:shadow-xl border-gray-200 p-2 flex flex-col items-center justify-start  ">
  <img src={question} alt="Question" className="w-16 h-16 object-cover mt-2" />
   
  <h1 className="mt-4 pb-8 font-sans font-medium text-lg text-blue-950 ">Questions</h1>
  <h1 className="text-center px-4 font-serif text-gray-600" >
    well prepared practice questions  <br />
    that will help you to familirize <br />
    your self from basic to advanced <br />
     type of questions</h1>
  </div>



<div className="Ai mx-8 bg-white shadow-md rounded-lg border hover:shadow-xl border-gray-200 p-2 flex flex-col items-center justify-start">
  <img src={ai} alt="Question" className="w-16 h-16 object-cover mt-2" /> {/* Adjust width and height as needed */}
   <h1 className="mt-4 pb-8 font-sans font-medium text-lg text-blue-950 ">AI guide</h1>
  <h1 className="text-center px-8 mx-4 font-serif text-gray-600" >
    Let our AI guide you <br /> 
    through all the questions <br />
    explaining every question <br />
    in the simplest way
    </h1>
</div>

<div className="effective mx-8 bg-white shadow-md rounded-lg border hover:shadow-xl border-gray-200 p-2 flex flex-col items-center justify-start">
  <img src={effective} alt="Question" className="w-16 h-16 object-cover mt-2" /> {/* Adjust width and height as needed */}
  <h1 className="mt-4 pb-8 font-sans font-medium text-lg text-blue-950 ">Efficiency</h1>
  <h1 className="text-center px-8 mx-6 font-serif text-gray-600" > 
  use scintificaly proven <br /> 
  best practices of active <br />
  learning for short yet <br />
  effective study sessions 
    </h1>
</div>

    </div>
  );
}

export default Features;
