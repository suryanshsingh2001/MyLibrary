import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement signup logic here
    // Typically, you would make an API call to your backend to create a new user
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleSignup}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
