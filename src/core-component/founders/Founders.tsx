"use client";

import AnimatedItem from "@/ui-component/AnimatedItem";
import React from "react";

const Founders = () => {
  return (
    <div>
      <section className="ftco-section bg-light">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <AnimatedItem
              className="col-md-8 text-center heading-section "
              animateEffect="fadeInUp"
            >
              <h2 className="mb-4">Meet Our EduForU Founders</h2>
              <p>
                We are here to guide you through every step of your
                international education journey with expertise, care, and
                personalized support. Let us help you make your global
                aspirations a reality. Together, we’ll create the path to your
                success!
              </p>
            </AnimatedItem>
          </div>

          <AnimatedItem className="row" animateEffect="fadeInUp">
            <div className="col-md-6 col-lg-4 ">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{
                      backgroundImage: "url(images/ceo-john.webp)",
                    }}
                  ></div>
                </div>
                <div className="text pt-3 text-center">
                  <h3>Joshua John . S</h3>
                  <div className="faded">
                    <p>
                      Education is the passport to the future, and we’re here to
                      help you make the journey unforgettable.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{
                      backgroundImage: "url(images/ceo-manoj.webp)",
                    }}
                  ></div>
                </div>
                <div className="text pt-3 text-center">
                  <h3>Manojkumar Saravanaperumal</h3>
                  <div className="faded">
                    <p>
                      Your success in international education is our mission.
                      Together, we’ll build the foundation for your global
                      future.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{
                      backgroundImage: "url(images/ceo-manish.webp)",
                    }}
                  ></div>
                </div>
                <div className="text pt-3 text-center">
                  <h3>Manish Babu</h3>
                  <div className="faded">
                    <p>
                      At EduForU, we believe that every student deserves the
                      chance to thrive globally. Let’s embark on this journey
                      with confidence and excitement!
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </section>
    </div>
  );
};

export default Founders;
