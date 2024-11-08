"use client";

import AnimatedItem from "@/ui-component/AnimatedItem";
import React from "react";

const Offer = () => {
  return (
    <div>
      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
              <div
                className="img"
                style={{
                  backgroundImage: "url(images/about.jpg)",
                }}
              ></div>
            </div>
            <AnimatedItem
              className="col-md-7 wrap-about py-5 pr-md-4"
              animateEffect="fadeInUp"
            >
              <h2 className="mb-4">What We Offer at EduForU</h2>
              <p>
                At EduForU, we are dedicated to making your study abroad journey
                seamless and successful. Our comprehensive services cover every
                aspect of the international education process, from initial
                consultations to post-arrival support. Here’s how we assist you
                in achieving your academic and professional dreams:
              </p>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-security"></span>
                    </div>
                    <div className="text pl-3">
                      <h3>Personalized Course Selection</h3>
                      <p>
                        Receive expert guidance to choose the right course and
                        university that aligns with your career and academic
                        goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-reading"></span>
                    </div>
                    <div className="text pl-3">
                      <h3>Comprehensive Exam Preparation</h3>
                      <p>
                        Get tailored support for preparing for exams such as
                        IELTS, GRE, TOEFL, and more, ensuring you meet the entry
                        requirements for your chosen program.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-diploma"></span>
                    </div>
                    <div className="text pl-3">
                      <h3>Visa Processing Assistance</h3>
                      <p>
                        Navigate the complexities of visa applications with our
                        step-by-step support, ensuring timely and correct
                        submission.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-education"></span>
                    </div>
                    <div className="text pl-3">
                      <h3>Accommodation Assistance</h3>
                      <p>
                        Find suitable and affordable accommodation options close
                        to your university or college.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-jigsaw"></span>
                    </div>
                    <div className="text pl-3">
                      <h3>Part-Time Job Assistance</h3>
                      <p>
                        Get help with finding part-time job opportunities to
                        support your studies while abroad.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-kids"></span>
                    </div>
                    <div className="text pl-3">
                      <h3>End-to-End Support</h3>
                      <p>
                        Rely on EduForU to guide you through every step of your
                        journey, from application to arrival, ensuring a smooth
                        transition to your international education experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
