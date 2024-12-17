"use client";
import AnimatedItem from "@/ui-component/AnimatedItem";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
// import Swiper styles
import "swiper/css/pagination";
import Link from "next/link";
import { CountriesMap } from "./config/countries";
import { Navigation } from 'swiper/modules';

const Countries = () => {
  const renderCountries = () => {
    return CountriesMap.map((country, index) => {
      const { image, name, link } = country;
      return (
        <SwiperSlide key={index}>
          <Link className="text" href={link}>
            <Image
              src={image}
              alt={name}
              width={200}
              height={150}
              className="image-border"
            />
          </Link>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
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
              <h2 className="mb-5 country-head"> Click Your Destination To Know More</h2>
            </AnimatedItem>
            <AnimatedItem className="col-lg-12" animateEffect="fadeInUp">
              <Swiper
                modules={[Pagination, A11y,Navigation]}
                spaceBetween={0}
                navigation={true}
                className="custome-countries-slider"
                slidesPerView={4}
                pagination={{ clickable: true }}
                breakpoints={{
                  390: {
                    slidesPerView: 1,
                  },
                  760: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {renderCountries()}
              </Swiper>
            </AnimatedItem>
          </div>
        </div>
      </section>
    </>
  );
};

export default Countries;
