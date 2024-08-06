import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">MyFastX</h2>
              <div className="ml-2 w-6 h-6 bg-orange-500 rounded"></div>
            </div>
            <p className="text-sm mb-6">
              MyFastX is a leading logistics platform that provides hyper-local, on-demand delivery solutions for individuals and businesses. Whether you need a delivery boy for your shop or to ship items items within city, MyFastX is your trusted partner, making delivery effortless and convenient. With a mission to revolutionize logistics through innovation and technology, MyFastX is committed to providing seamless, end-to-end delivery solutions that exceed customer expectations.
            </p>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-sm">Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida</span>
            </div>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm">care@myfastx.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm">+91 8961310988</span>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'What We Do?', 'Investors', 'Press Release', 'Careers', 'Pricing Details'].map((item, index) => (
                <li key={index}><a href="#" className="text-sm hover:text-gray-300">{item}</a></li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              {['Terms And Conditions', 'Privacy Policy', 'Cookie Policy', 'Fraud Disclaimer'].map((item, index) => (
                <li key={index}><a href="#" className="text-sm hover:text-gray-300">{item}</a></li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              {['Restricted Items', 'Parcel size and weight guide', 'Packaging guide'].map((item, index) => (
                <li key={index}><a href="#" className="text-sm hover:text-gray-300">{item}</a></li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Customer Care', 'Driver Term and Condition', 'Packaging Instruction'].map((item, index) => (
                <li key={index}><a href="#" className="text-sm hover:text-gray-300">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Our Presence</h3>
          <ul className="flex flex-wrap gap-4">
            {['Delhi', 'Noida', 'Greater Noida', 'Ghaziabad', 'Gurugram', 'Faridabad', 'Bahadurgarh', 'Kolkata'].map((city, index) => (
              <li key={index} className="text-sm">{city}</li>
            ))}
          </ul>
        </div>

        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© 2024 MYFASTEX TECHNOLOGIES PVT LTD. All Rights Reserved</p>
          <p className="mt-2">CIN: U52219UP2023PTC192260</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;