import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        { 
          question: "What type of vehicles are eligible?",
          answer: "Most types of vehicles are eligible, including cars, SUVs, and trucks. Specific requirements may vary based on your location and the service you're interested in."
        },
        { 
          question: "How do I get paid?",
          answer: "Payments are typically processed weekly via direct deposit to your linked bank account. You can view your earnings and payment history in the app."
        },
        { 
          question: "What areas does MyFastX operate in?",
          answer: "MyFastX operates in major cities across the United States. Check our website or app for a current list of service areas."
        },
        { 
          question: "What type of vehicles are eligible?",
          answer: "Most types of vehicles are eligible, including cars, SUVs, and trucks. Specific requirements may vary based on your location and the service you're interested in."
        },
        { 
          question: "How do I get paid?",
          answer: "Payments are typically processed weekly via direct deposit to your linked bank account. You can view your earnings and payment history in the app."
        },
        { 
          question: "What areas does MyFastX operate in?",
          answer: "MyFastX operates in major cities across the United States. Check our website or app for a current list of service areas."
        },
      ];

      const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    
      <div className="Faq">
        <span className="faqP">How it Works</span>
        <span className="faqH">Simple Steps to Get Started</span>
        <div className="fA">
          <div className="fL">
            <p>
              Don't miss out on this incredible opportunity to be part of a
              leading delivery and logistics platform. Sign up now for just
              Rs.999 and start driving your way to success with MyFastX!
            </p>
            <button>Register now</button>
            <p>for more confimation,</p>
            <p> contact us on</p>

            <div className="flc">
              <div className="fli">
                <img src="images/g.png" alt="" />
              </div>
              <div className="flp">
                <p>+91-XXXXX XXXXX</p>
              </div>
            </div>
            <div className="flc">
              <div className="fli">
                <img src="images/h.png" alt="" />
              </div>
              <div className="flp">
                <p>support@myfastx.com</p>
              </div>
            </div>
          </div>
          <div className="fR">
          <span className="faqPp">Frequently Asked Questions</span>
        <span className="faqHh">Got Questions? We’ve Got Answers!</span>

        <div className="faq-container">
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button onClick={() => toggleQuestion(index)}>
            {item.question}
            <span>{openIndex === index ? '−' : '>'}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
    
  );
};

export default Faq;
