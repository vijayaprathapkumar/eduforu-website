import React from 'react'
import Aboutus from '../about-us/Aboutus'
import Banner from '../banner/Banner'
import Founders from '../founders/Founders'
import Offer from '../offer/Offer'
import Countries from '../countries'

const Hompepage = () => {
  return (
    <>
      <Banner />
      <Countries />
      <Offer />
      <Aboutus />
      <Founders />
      {/* <Contactus /> */}
    </>
  )
}

export default Hompepage
