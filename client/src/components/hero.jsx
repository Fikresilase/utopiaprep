import hero from "../images/hero.svg";
function Hero() {
  return (
    <div className="body container flex  pb-4 justify-between">
      <div className="description flex items-center">
        <div className="textholder">
          {" "}
          <h1 className="text-6xl font-serif text-blue-950 font-medium whitespace-nowrap pr-8 mr-8">
            AI guided preparation <br /> for your exam
          </h1>
          <h1 className="font-sans font-medium text-lg text-gray-600">
            The best resource to prepare for your exam while AI is explaining
            everything <br /> and guiding you through the whole process using
            the best study practices.
          </h1>
          <div className="text-center text-2xl font-medium text-blue-950">
            {" "}
            <a href="" className="underline">
              Start rigth Here
            </a>
          </div>
        </div>
      </div>
      <div className="heroimage ">
        <img src={hero} alt="" className=" " width={2000} />
      </div>
    </div>
  );
}

export default Hero;
