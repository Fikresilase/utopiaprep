import { useState } from "react";
import Features from "./components/features";
import Resources from "./components/pricing";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Signupmodal from "./components/signupmodal";
import Loginmodal from "./components/Loginmodal";

function App() {
  const [showSignupmodal, setshowSignupmodal] = useState(false);
  const [showLoginmodal, setshowLoginmodal] = useState(false);
  return (
    <>
      <Header
        onSignupOpen={() => setshowSignupmodal(true)}
        onLoginOpen={() => setshowLoginmodal(true)}
      />
      {showSignupmodal && (
        <Signupmodal
          onLoginOpen={() => setshowLoginmodal(true)}
          onClose={() => setshowSignupmodal(false)}
        />
      )}
      {showLoginmodal && (
        <Loginmodal
          onSignupOpen={() => setshowSignupmodal(true)}
          onClose={() => setshowLoginmodal(false)}
        />
      )}
      <Hero onLoginOpen={() => setshowLoginmodal(true)} />
      <Features />
      <Resources />
      <Footer />
    </>
  );
}

export default App;

// import { useState } from "react";
// import Signupmodal from "./components/signupmodal";
// function App() {
//   const [showSignupmodal, setshowSignupmodal] = useState(false);

//   return (
//     <div>
//       <h1>Popup modal</h1>
//       <button onClick={() => setshowSignupmodal(true)}>open</button>
// {showSignupmodal && (
//    <Signupmodal onClose={() => setshowSignupmodal(false)} />
// )}
//     </div>
//   );
// }

// export default App;
