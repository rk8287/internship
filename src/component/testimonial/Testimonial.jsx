import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: 'James Darwin',
    position: 'Kolkata, West Bengal',
    quote: '"Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier."',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Mumbai, Maharashtra',
    quote: '"I love the independence and earning potential that MyFastX provides. Its been a great experience so far!"',
    rating: 4,
  },
  
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <h2 className="text-sm font-semibold text-gray-600 mb-2 ami">WHAT OUR PARTNER SAYS</h2>
        <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
        <p className="text-gray-600 mb-8">
          At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here's what they have to say about their experiences with our quick and reliable delivery and logistics services.
        </p>
        <div className="flex space-x-4">
          <img src="images/e.png" alt="Truck" className="w-auto h-auto" />
          <img src="images/f.png" alt="Box" className="w-auto h-auto" />
         
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="bg-green-50 p-8 rounded-lg relative">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`https://i.pravatar.cc/40?img=${testimonial.id}`}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-800 mt-8 mb-4">{testimonial.quote}</p>
                <div className="flex mt-8">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="mi mt-8 absolute top-1/2 right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="mi mt-8 absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            &gt;
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-green-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
