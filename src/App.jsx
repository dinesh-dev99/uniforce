import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from "./components/Product";
import BenefitsSection from './components/BenefitsSection';
import ReadingSteps from './components/ReadingSteps';


const handleWhatsAppClick = () => {
  const phoneNumber = "919999999999"; // Replace with your number (no +)
  const message = "I Want to BUY.";
  const encodedMsg = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
  window.open(url, "_blank");
};

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar onLogin={() => alert("Login")} />

      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Uniforce</h2>
          <p className="text-gray-600 mb-6">Buy high quality cloth for your uniform at only on Uniforce.</p>
          <Product />
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl w-full transition"
            onClick={handleWhatsAppClick}
          >
            Buy Now – ₹250
          </button>
          <BenefitsSection />
          <ReadingSteps/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
