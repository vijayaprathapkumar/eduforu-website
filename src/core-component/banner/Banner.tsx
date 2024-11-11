"use client";

import Link from "next/link";
import React from "react";
import AnimatedItem from "../../ui-component/AnimatedItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay,EffectFade } from "swiper/modules";

const Banner = () => {
  const renderItems = () => {
    return (
      <>
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: "url(https://image.slidesdocs.com/responsive-images/background/visualizing-study-abroad-3d-rendered-image-featuring-books-plane-and-earth-powerpoint-background_36963dfdf5__960_540.jpg)",
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
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: "url(data:image/jpeg;base64,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)",
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
        </SwiperSlide>
      </>
    );
  };
  return (
    <div>
      <section className="home-slider owl-carousel">
        <Swiper
          modules={[Pagination,Autoplay,EffectFade]}
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
