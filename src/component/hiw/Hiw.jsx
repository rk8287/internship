import React from 'react'
import "./Hiw.css"


const Hiw = () => {
  return (
    <div className='hiw'>
        <p className='hiwP'>How it Works</p>
        <h2 className='hiwH'>Simple Steps to Get Started</h2>

        <div className="hiwC">
            <div className="hiwcL">
                <div className="hiclC">
                    <div className="imgh">
                        <img src="images/a.png" alt="" />
                    </div>
                    <div className="contentc">
                        <span>Register only</span>
                        <p>Fill out our easy online application form and pay the registration fee of Rs. 999</p>
                    </div>
                </div>
                <div className="hiclC">
                    <div className="imgh">
                    <img src="images/b.png" alt="" />
                    </div>
                    <div className="contentc">
                        <span>Register only</span>
                        <p>Fill out our easy online application form and pay the registration fee of Rs. 999</p>
                    </div>
                </div>
                <div className="hiclC">
                    <div className="imgh">
                    <img src="images/c.png" alt="" />
                    </div>
                    <div className="contentc">
                        <span>Register only</span>
                        <p>Fill out our easy online application form and pay the registration fee of Rs. 999</p>
                    </div>
                </div>
                

            </div>
            <div className="hicR">
                <img src="images/d.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Hiw