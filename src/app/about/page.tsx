import Aboutus from '@/core-component/about-us/Aboutus'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="hero-wrap hero-wrap-2" style={{
        backgroundImage: "url(images/bg_1.jpg)",
      }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <h1 className="mb-2 bread">About Us</h1>
              <p className="breadcrumbs"><span className="mr-2"><Link href="./home">Home <i className="ion-ios-arrow-forward"></i></Link></span> <span>About us <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
              <div className="img" style={{
                backgroundImage: "url(images/about.jpg)",
              }}></div>
            </div>
            <div className="col-md-7 wrap-about py-5 pr-md-4">
              <h2 className="mb-4">Your Pathway to Global Education Success</h2>
              <p>At EduForU, we are dedicated to guiding you through every step of your international education journey. Founded in 2023, our consultancy is here to transform your dreams into reality. We are not just about giving advice—we are your trusted partner in making your overseas academic goals achievable.</p>
              <p>From selecting the right course and preparing for exams to securing the necessary visas, we handle all aspects of your journey. Our team offers expert support in everything from UCAS interviews and accommodation arrangements to job searches and document processing. Plus, we provide crucial financial assistance to ensure your studies abroad are both affordable and seamless.</p>
              <p>Whether you&apos;re looking for advice on universities or need guidance through the complex paperwork and application process, EduForU is your one-stop solution for navigating the world of international education. Let us help you pave the way to an enriching, successful future abroad.</p>
              <p>With EduForU, you’re not just applying to universities—you’re embarking on a global adventure. Let us guide you to success, one step at a time!</p>
            </div>
          </div>
        </div>
      </section>
      <Aboutus />
    </div>
  )
}

export default page
