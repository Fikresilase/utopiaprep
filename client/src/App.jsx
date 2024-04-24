
import Features from "./components/features";
import Resources from "./components/pricing";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Landing from "./components/landingpage";
import Signupmodal from "./components/signupmodal";
import Loginmodal from "./components/Loginmodal";



function App() {
  return <>
  <Header/><Hero/><Features/><Resources/><Footer/>
  <Loginmodal/>
  <Signupmodal/>
  </>;
}

export default App;
