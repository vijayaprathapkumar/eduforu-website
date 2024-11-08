"use client";
import AnimatedItem from "@/ui-component/AnimatedItem";
import React from "react";
import Image from "next/image";

const Countries = () => {
  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row d-md-flex align-items-center justify-content-center">
          <AnimatedItem
            className="heading-section heading-section-white"
            animateEffect="fadeInUp"
          >
            <h2 className="mb-5"> Click Your Destination To Know More</h2>
          </AnimatedItem>
          <AnimatedItem className="col-lg-12" animateEffect="fadeInUp">
            <div className="row d-md-flex align-items-center">
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="icon">
                    <span className="flaticon-doctor"></span>
                  </div>
                  <div className="text">
                    <Image
                      src="/images/uk.webp"
                      alt="India"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="icon">
                    <span className="flaticon-doctor"></span>
                  </div>
                  <div className="text">
                    <Image
                      src="/images/ireland.webp"
                      alt="India"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="icon">
                    <span className="flaticon-doctor"></span>
                  </div>
                  <div className="text">
                    <Image
                      src="/images/canada.webp"
                      alt="India"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="icon">
                    <span className="flaticon-doctor"></span>
                  </div>
                  <div className="text">
                    <Image
                      src="/images/australia.webp"
                      alt="India"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default Countries;
