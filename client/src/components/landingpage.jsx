function LandingPage() {
  return (
    <>
      <div className="header container flex justify-between">
        <div className="logo ">
          <img src="" alt="img" />
        </div>
        <div className="navbar flex">
          <h2>Features</h2>
          <h2>Reasources</h2>
          <h2>Pricing</h2>
        </div>
        <div className="registration">
          <button>Login</button>
          <button>SignUP</button>
        </div>
      </div>
      <div className="body container flex justify-between">
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="heroimage">
          <img
            src="client/src/assets/images/utopia-logo.svg"
            alt="hero image"
          />
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default LandingPage;
