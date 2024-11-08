"use client";
import AnimatedItem from "@/ui-component/AnimatedItem";
import React from "react";

const Aboutus = () => {
  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{
        backgroundImage: "url(images/bg_3.jpg)",
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2 d-flex">
          <div className="col-md-6 align-items-stretch d-flex">
            <div
              className="img img-video d-flex align-items-center"
              style={{
                backgroundImage: "url(images/about-2.jpg)",
              }}
            >
              <div className="video justify-content-center">
                <a
                  href="https://vimeo.com/45830194"
                  className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <span className="ion-ios-play"></span>
                </a>
              </div>
            </div>
          </div>
          <AnimatedItem
            className="col-md-6 heading-section heading-section-white  pl-lg-5 pt-md-0 pt-5"
            animateEffect="fadeInUp"
          >
            <h2 className="mb-4">
              Welcome to EduForU – Your Gateway to Global Education Success!
            </h2>
            <p>
              At EduForU, we’re dedicated to transforming your international
              education journey into a seamless and exciting experience. From
              expert course selection and personalized exam preparation to visa
              processing and accommodation assistance, we’ve got you covered
              every step of the way. Our comprehensive services also include
              UCAS interview coaching, part-time job searches, financial
              support, and more—ensuring you’re fully prepared for your academic
              adventure abroad. Trust EduForU to be your reliable partner in
              navigating the world of education and unlocking a world of
              opportunities. Your dream international experience starts here!
            </p>
          </AnimatedItem>
        </div>
        <div className="row d-md-flex align-items-center justify-content-center">
          <div className="col-lg-12">
            <div className="row d-md-flex align-items-center">
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="icon">
                    <span className="flaticon-doctor"></span>
                  </div>
                  <div className="text">
                    <strong className="number" data-number="18">
                      0
                    </strong>
                    <span>Certified Teachers</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="icon">
                    <span className="flaticon-doctor"></span>
                  </div>
                  <div className="text">
                    <strong className="number" data-number="401">
                      0
                    </strong>
                    <span>Students</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="icon">
                    <span className="flaticon-doctor"></span>
                  </div>
                  <div className="text">
                    <strong className="number" data-number="30">
                      0
                    </strong>
                    <span>Courses</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="icon">
                    <span className="flaticon-doctor"></span>
                  </div>
                  <div className="text">
                    <strong className="number" data-number="50">
                      0
                    </strong>
                    <span>Awards Won</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
