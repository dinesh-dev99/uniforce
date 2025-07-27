// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 w-full">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Uniforce. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
