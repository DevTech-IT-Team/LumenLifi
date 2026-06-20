import Layout from '../../components/common/Header'; // Presuming structural layouts handle imports
import Footer from '../../components/common/Footer';
import { TechBenefits } from '../../components/sections/technology';

export default function WhatIsLiFiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-32 text-center flex-grow">
        <h1 className="text-5xl font-black">WHAT IS LIFI?</h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-4">Discover data transmission via light waves instead of traditional radio frequencies.</p>
        <TechBenefits />
      </div>
      <Footer />
    </div>
  );
}