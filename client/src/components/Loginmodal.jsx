import google from "../images/google.svg";
import facebook from "../images/facebook.svg";

function Loginmodal({ onClose }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4">
          Login to your account
        </h1>
        <form className="space-y-4" method="POST">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5"
              placeholder="emelia_erickson24"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg font-medium text-sm px-5 py-2.5 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <div className="w-1/3">
            <hr className="border-t border-gray-300 my-4" />
          </div>
          <div className="mx-4">or</div>
          <div className="w-1/3">
            <hr className="border-t border-gray-300 my-4" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <button
            type="button"
            className="w-full bg-gray-50 text-gray-900 rounded-lg font-medium text-sm px-5 py-2.5 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 flex items-center justify-center"
          >
            <img src={google} alt="Google Icon" className="h-5 w-5 inline-block mr-2" />
            Continue with Google
          </button>
          <button
            type="button"
            className="w-full bg-gray-50 text-gray-900 rounded-lg font-medium text-sm px-5 py-2.5 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 flex items-center justify-center"
          >
            <img src={facebook} alt="Facebook Icon" className="h-5 w-5 inline-block mr-2" />
            Continue with Facebook
          </button>
        </div>
        <p className="text-sm font-light text-gray-500">
          Need an account?{" "}
          <a href="/signin" className="font-medium text-blue-600 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Loginmodal;
