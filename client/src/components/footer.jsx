function Footer() {
    return ( 

<div className="footer items-center bg-blue-100 py-8 px-8">

<div className="text-center items-center">
  <h1 className="text-4xl lg:text-5xl font-serif text-blue-950 font-medium leading-snug lg:leading-tight mb-4 lg:mb-6" >
    Get started with <br />
    Utopia prep
  </h1>
  <div className="flex justify-center">
    <div className="bg-blue-100 py-8 px-8">
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-300 px-6 py-3 rounded mr- focus:outline-none"
      />
      <button className="bg-blue-500  text-white px-8 py-3 rounded hover:bg-blue-600 focus:outline-none">
        contact us
      </button>
    </div>
  </div>
</div>
  <hr className="border-t border-gray-300 my-4" />

<div className="conteiner px-8 flex justify-between">
<h1 className="text-5xl text-blue-950 font-medium">up</h1>
<div className="container flex font-medium text-blue-950 justify-end">
    <a href=""className="px-3 ">platform</a>
    <a href="" className="px-3">learn</a>
    <a href="" className="px-3 ">Get help</a>
    </div>
</div>




</div>

     );
}

export default Footer;