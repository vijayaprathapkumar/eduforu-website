"use client";
import AnimatedItem from "@/ui-component/AnimatedItem";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
// import Swiper styles
import "swiper/css/pagination";

const CountriesMap = [
  {
    name: "UK",
    image: "/images/uk.webp",
  },
  {
    name: "Canada",
    image: "/images/canada.webp",
  },
  {
    name: "Ireland",
    image: "/images/ireland.webp",
  },
  {
    name: "Australia",
    image: "/images/australia.webp",
  },
];

const Countries = () => {
  const renderCountries = () => {
    return CountriesMap.map((country, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="text">
            <Image
              src={country.image}
              alt={country.name}
              width={100}
              height={100}
            />
          </div>
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
              <h2 className="mb-5"> Click Your Destination To Know More</h2>
            </AnimatedItem>
            <AnimatedItem className="col-lg-12" animateEffect="fadeInUp">
              <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={0}
                className="custome-countries-slider"
                slidesPerView={4}
                pagination={{ clickable: true }}
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
