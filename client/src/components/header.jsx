function Header() {
  return (
    <div className="header container flex justify-between ">
      <div className="logo ">
        <h1 className="font-bold font-sans text-5xl text-blue-900">Up</h1>
      </div>
      <div className="navbar relative font-sans flex font-medium  text-l text-blue-900">
        <h2 className="mr-8 group text-blue-900 transition duration-300">
          Features
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
        </h2>
        <h2 className="mr-8 ml-8 group text-blue-900 transition duration-300">
          Reasources{" "}
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
        </h2>
        <h2 className="ml-8 group text-blue-900 transition duration-300">
          Pricing
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
        </h2>
      </div>
      <div className="registration text-xl">
        <button className="mr-8 px-4 py-1  rounded font-sans border-none font-semibold border-2 text-blue-900 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500 duration-[400ms,700ms] transition-[color,box-shadow]">
          Login
        </button>
        <button className="mr-8 px-3 py-1  rounded font-sans border-none font-semibold border-2 text-blue-900 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500 duration-[400ms,700ms] transition-[color,box-shadow]">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Header;
