// src/components/Navbar.jsx
import React from 'react';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';


const handleWhatsAppClick = () => {
  const phoneNumber = "916372512984"; // Replace with your number (no +)
  const message = "Help.";
  const encodedMsg = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
  window.open(url, "_blank");
};


function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-600">Uniforce</h1>
        <button
          onClick={handleWhatsAppClick}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex justify-between items-center"
        >
          <ChatBubbleOvalLeftIcon className="w-6 h-6 " />
          Support
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
