import React from 'react'
import Header from '../../layout/header/Header'
import Aboutus from '../about-us/Aboutus'
import Banner from '../banner/Banner'
import Contactus from '../contact-us/Contactus'
import Footer from '../../layout/footer/Footer'
import Founders from '../founders/Founders'
import Offer from '../offer/Offer'

const Hompepage = () => {
  return (
    <div>
      <Banner />
      <Offer />
      <Aboutus />
      <Founders />
      <Contactus />
    </div>
  )
}

export default Hompepage
