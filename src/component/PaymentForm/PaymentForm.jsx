import React from 'react';

const img1 = require('../assets/images/Frame 14346.png');
const img2 = require('../assets/images/Frame 14347.png');
const Group = require('../assets/images/Group.png');

const PaymentForm = () => {
  return (
    <div className="container mx-auto p-4 h-[100%] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2">SELECT PAYMENT METHOD</h2>
          <p className="mb-4">All payments are secured and encrypted</p>

          <div className="mb-4 p-4 border rounded-lg">
            <img src={img1} alt="Card 1" className="w-full rounded-lg" />
          </div>

          <div className="mb-4 p-4 border rounded-lg">
            <img src={img2} alt="Card 2" className="w-full rounded-lg" />
          </div>

          <button className="w-full bg-gray-200 p-4 rounded-lg flex items-center justify-center">
            <span className="mr-2">+</span> Add New Payment Method
          </button>

          <button className="w-full bg-green-500 text-white p-4 rounded-lg mt-8 flex items-center justify-center">
            <span className="mr-2">+</span> Proceed to Pay
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center items-center p-4">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-full"></div>
            <img src={Group} alt="UPI" className="relative w-full md:w-4/5 lg:w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
