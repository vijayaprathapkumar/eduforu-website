"use client";

import Link from "next/link";
import React from "react";
import AnimatedItem from "../../ui-component/AnimatedItem";

const Banner = () => {
  return (
    <div>
      <section className="home-slider owl-carousel">
        <div
          className="slider-item"
          style={{
            backgroundImage: "url(images/bg_2.jpg)",
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-start"
              data-scrollax-parent="true"
            >
              <AnimatedItem className="col-md-6 " animateEffect="fadeInUp">
                <h1 className="mb-4">Study Abroad with Confidence</h1>
                <p>
                  EduForU provides expert consultation, comprehensive exam
                  preparation, and visa support, helping you transition
                  effortlessly into your global academic experience.
                </p>
                <p>
                  <Link
                    href="/contact"
                    className="btn btn-primary px-4 py-3 mt-3"
                  >
                    Contact Us
                  </Link>
                </p>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
