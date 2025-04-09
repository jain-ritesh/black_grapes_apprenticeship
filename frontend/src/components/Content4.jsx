import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Card, CardHeader } from './ui/card'
import { Button } from './ui/button'

const Content4 = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="px-4 py-10">
      <Card className="max-w-6xl mx-auto">
        <CardHeader className="text-2xl sm:text-3xl font-semibold pb-4 underline decoration-4 decoration-orange-500 text-center">
          Register Now!
        </CardHeader>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-center p-4">
          {/* Regular Registration Card */}
          <div className="bg-[rgb(219,234,254)] flex-1 px-6 py-8 rounded-md shadow-md">
            <h1 className="text-2xl sm:text-3xl font-semibold">Regular Registration</h1>
            <p className="text-2xl sm:text-3xl font-bold py-4">&#x20B9; 500 /- Only</p>
            <Button
              className="text-base sm:text-lg px-6 py-4 bg-[rgb(59,130,246)] hover:bg-[rgb(80,122,190)] cursor-pointer"
              onClick={handleRedirect}
            >
              Register for &#x20B9;500
            </Button>
          </div>

          {/* Special Offer Card */}
          <div className="bg-[rgb(255,226,163)] flex-1 px-6 py-8 rounded-md shadow-md">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Special Offer</h1>
            <p className="text-lg sm:text-xl mb-2">Open Demat Account and Get ₹200 Off!</p>
            <span className="text-xl font-semibold line-through">&#x20B9; 500</span>{' '}
            <span className="text-2xl sm:text-3xl font-bold">&#x20B9; 300 /- Only</span>
            <br />
            <Button className="text-base sm:text-lg px-6 py-4 bg-amber-500 hover:bg-amber-600 mt-5 cursor-pointer">
              Register for &#x20B9;300
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Content4;
