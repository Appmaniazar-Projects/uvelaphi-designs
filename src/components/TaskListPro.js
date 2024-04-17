import React from 'react';

const TaskListPro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to TaskList Pro</h1>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Enter your email address to get started
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@yourcompany.com"
            required
          />
        </div>
        <button className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          Continue with Email
        </button>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <button className="px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
            Continue with Google
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
            Continue with Apple
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">Already have an account?</p>
          <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskListPro;