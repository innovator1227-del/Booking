import React from "react";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4
      bg-gray-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-black
      transition-colors duration-300"
    >
      <div className="w-full max-w-md p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl transition-colors duration-300">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mt-2">
          Login to access your bus tickets and bookings.
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-transparent bg-white dark:bg-neutral-700 
                border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-transparent bg-white dark:bg-neutral-700 
                border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300 dark:bg-neutral-600"></div>
          <span className="px-4 text-gray-400 dark:text-gray-400 text-sm">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-neutral-600"></div>
        </div>

        {/* Google Button */}
        <button
          className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg
            hover:bg-gray-50 dark:hover:bg-neutral-700 transition duration-200"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Continue with Google
          </span>
        </button>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-6">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
