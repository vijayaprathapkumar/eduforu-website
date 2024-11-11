"use client";
import AnimatedItem from "@/ui-component/AnimatedItem";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
// import Swiper styles
import "swiper/css/pagination";
import Link from "next/link";

const CountriesMap = [
  {
    name: "UK",
    image: "/images/uk.webp",
    link : "/uk"
  },
  {
    name: "Canada",
    image: "/images/canada.webp",
    link : "/canada"
  },
  {
    name: "Ireland",
    image: "/images/ireland.webp",
    link : "/ireland"
  },
  {
    name: "Australia",
    image: "/images/australia.webp",
    link : "/australia"
  },
];

const Countries = () => {
  const renderCountries = () => {
    return CountriesMap.map((country, index) => {
      const { image,name,link } = country;
      return (
        <SwiperSlide key={index}>
          <Link className="text" href={link}>
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
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
