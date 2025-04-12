import React, { useState } from 'react';
import image1 from '../assets/angleQR.jpg';
import Nav from './Nav';
import { Button } from './ui/button';
import RegisterForm from './RegisterFrom'; // <-- import the form
import Footer from './Footer';

const Demat_Acc = () => {
  const [step, setStep] = useState(1);
  
  const goToStep = (value) => {
    if (value >= 1 && value <= 3){
      setStep(value);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Nav />

      {/* Top Steps */}
      <div className="flex flex-col items-center px-4 pt-24 mb-5">
        <div className="flex gap-4 mb-8 text-white">
          {[1, 2, 3].map((s) => (
            <span
              key={s}
              onClick={() => goToStep(s)}
              className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 font-medium ${
                step === s ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-full max-w-5xl px-4 md:px-0">
          {step === 1 && (
            <div className="bg-gray-100 shadow-2xl rounded-lg p-6 space-y-10">
              <h1 className="text-2xl font-semibold text-center">Open Your Demat Account</h1>
              {/* First Card */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img src={image1} alt="QR Code Mobile" className="w-40 md:w-56" />
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold">Open via Mobile App</h2>
                  <p>Scan the QR code or click the button below to open your Demat account via the Angel One app.</p>
                  <Button className="bg-blue-500 text-white">Click here to Open in App</Button>
                </div>
              </div>

              {/* Second Card */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img src={image1} alt="QR Code Web" className="w-40 md:w-56" />
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold">Open via Web</h2>
                  <p>Scan the QR code or click the button below to open your Demat account via the web.</p>
                  <Button className="bg-green-700 text-white">Click here to Open via Web</Button>
                </div>
              </div>
            </div>
          )}

          {/* Shared RegisterForm for Step 2 and Step 3 */}
          {(step === 2 || step === 3) && (
            <div className="mt-10">
              <RegisterForm />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 text-white">
            <Button
              className="bg-gray-500 hover:bg-gray-600 cursor-pointer"
              onClick={() => goToStep(step - 1)}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer"
              onClick={() => goToStep(step + 1)}
              disabled={step === 3}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Demat_Acc;
