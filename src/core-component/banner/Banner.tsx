"use client";

import Link from "next/link";
import React from "react";
import AnimatedItem from "../../ui-component/AnimatedItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const Banner = () => {
  const renderItems = () => {
    return (
      <>
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage:
                "url(images/xx2.jpg)",
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
                  <p className="banner_desc">
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
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage:
                "url(images/xx9.jpg)",
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
                  <p className="banner_desc">
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
        </SwiperSlide>
      </>
    );
  };
  return (
    <div>
      <section className="home-slider owl-carousel">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {renderItems()}
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;
