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
              <h2 className="mb-4">Fox University Stablished Since 1960</h2>
              <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>
            </div>
          </div>
        </div>
      </section>
      <Aboutus />
    </div>
  )
}

export default page
