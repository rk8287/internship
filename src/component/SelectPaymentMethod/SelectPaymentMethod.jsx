import React from 'react';
const Group = require('../assets/images/Group.png');

const SelectPaymentMethod = () => {
  return (
    <div className="container mx-auto p-4 h-[80vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row h-full w-full bg-white rounded-lg">
        {/* Left Side: Add New Payment Method */}
        <div className="md:w-1/2 p-8 flex flex-col  items-center">
          <h2 className="text-2xl font-bold mb-2">SELECT PAYMENT METHOD</h2>
          <p className="mb-8">All payments are secured and encrypted</p>
          <div className="w-full h-40 bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center border border-gray-300 cursor-pointer">
            <div className="text-gray-500 text-2xl mb-2">+</div>
            <div className="text-gray-500">Add New Payment Method</div>
          </div>
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

export default SelectPaymentMethod;
