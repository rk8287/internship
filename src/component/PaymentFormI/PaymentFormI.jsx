import React from 'react';
const Group = require('../assets/images/Group.png');

const PaymentForm = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Add Payment Method Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-2">ADD PAYMENT METHOD</h2>
          <p className="mb-4">All payments are secured and encrypted</p>
          
          <form>
            {/* Cardholder Name */}
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Enter Cardholder Name" 
                className="w-full p-4 border rounded-lg"
              />
            </div>

            {/* Card Number */}
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Enter Card Number" 
                className="w-full p-4 border rounded-lg"
              />
            </div>

            {/* Expiry Date */}
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Enter Expiry date" 
                className="w-full p-4 border rounded-lg"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="mb-4 flex items-center">
              <input 
                type="checkbox" 
                id="consent" 
                className="mr-2"
              />
              <label htmlFor="consent" className="text-sm">
                I give my consent and accept all <a href="/terms" className="text-green-500">terms and condition</a>
              </label>
            </div>

            {/* Add Payment Method Button */}
            <button className="w-full bg-green-500 text-white p-4 rounded-lg">
              Add Payment method
            </button>
          </form>
        </div>

        {/* Right Side: UPI Image */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full"></div>
            <img src={Group} alt="UPI" className="relative w-full md:w-4/5 lg:w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
