import React from 'react';

function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 shadow-lg relative">
        <button 
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-400 text-4xl " 
          onClick={onClose}
        >
          ×
        </button>
        <h4 className="text-2xl text-center font-semibold text-#A8A8A8 mb-6 top-2">Get Started</h4>

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-blue-700 transition  auth-button google">
          Continue with Google
        </button>
        <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg mb-4 hover:bg-gray-200 transition">
          Continue with Email
        </button>
        <button className="w-full bg-black text-white py-2 rounded-lg mb-6 hover:bg-gray-800 transition">
          Continue with Apple
        </button>

        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex items-center border rounded-lg p-2 mb-6">
          <span className="text-xl pr-2">🇮🇳</span>
          <input 
            type="text" 
            placeholder="+91 Continue with mobile number" 
            className="w-full outline-none px-2 text-gray-700"
          />
        </div>

        <p className="text-xs text-gray-500">
          I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> & <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default Modal;
