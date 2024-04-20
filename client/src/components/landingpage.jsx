import Hero from "./hero";
import Header from "./header";
function LandingPage() {
  return (
    <div className=" bg-blue-100 py-8 px-8">
      <div className="mx-8">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default LandingPage;
