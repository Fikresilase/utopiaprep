import Hero from "./hero";
import Header from "./header";
function LandingPage() {
  return (
    <div className=" bg-blue-100 p-8">
      <div className="m- ">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default LandingPage;
