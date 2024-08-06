import React from 'react'
import Hiw from '../hiw/Hiw'
import Testimonials from '../testimonial/Testimonial'
import Faq from '../faq/Faq'
import Join from '../join/Join'
import PartnerDriverPage from '../hero/PartnerDriver'

const Home = () => {
  return (
    <>
    <PartnerDriverPage/>
    <Hiw/>
    <Testimonials/>
    <Faq/>
    <Join/>
    
    </>
  )
}

export default Home