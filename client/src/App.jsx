import React, { useState } from "react";
import Signup from "./components/signup";
import Hero from "./components/hero";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Hero isOpen={isModalOpen} openModal={openModal} />  {/* Pass props to Hero */}
    </div>
  );
}

export default App;