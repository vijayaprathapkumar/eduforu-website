/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import GoogleMapComponent from "@/core-component/google-map/Index";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formData.email,
          subject: formData.subject,
          message: `From: ${formData.name}\n\n${formData.message}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        // Optionally reset the form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error sending message: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message.");
    }
  };
  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: "url(images/bg_1.jpg)",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <h1 className="mb-2 bread">Contact</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="./home">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </span>{" "}
                <span>
                  Contact <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex contact-info">
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Address</h3>
                <p>Avadi, chennai</p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Contact Number</h3>
                <p>
                  <Link href="tel://1234567920">+91 8778283728</Link>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <Link href="mailto:info@yoursite.com">
                    info.chennai@eduforu.in
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Website</h3>
                <p>
                  <Link href="#">https://eduforu.in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <GoogleMapComponent/>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
