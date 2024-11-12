/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import AnimatedItem from "@/ui-component/AnimatedItem";
import React, { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    course: "",
    email: "",
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

    // Example API call logic (you can replace with your endpoint)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formData.email,
          subject:  'Appointment Request',
          message: `
            First Name: ${formData.firstName}
            Last Name: ${formData.lastName}
            Course: ${formData.course}
            Phone: ${formData.email}
            Message: ${formData.message}
          `,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
        // Optionally reset form
        setFormData({
          firstName: "",
          lastName: "",
          course: "",
          email: "",
          message: "",
        });
      } else {
        alert("Error submitting form: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div>
      <section
        className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
        style={{
          backgroundImage: "url(images/bg_5.jpg)",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-end">
            <AnimatedItem
              className="col-md-6 py-5 px-md-5"
              animateEffect="fadeInUp"
            >
              <div className="py-md-5">
                <div className="heading-section heading-section-white  mb-5">
                  <h2 className="mb-4">Request A Quote</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="appointment-form">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down"></span>
                          </div>
                          <select
                            name="course"
                            className="form-control"
                            value={formData.course}
                            onChange={handleChange}
                          >
                            <option value="">Select Your Course</option>
                            <option value="Art Lesson">Art Lesson</option>
                            <option value="Language Lesson">
                              Language Lesson
                            </option>
                            <option value="Music Lesson">Music Lesson</option>
                            <option value="Sports">Sports</option>
                            <option value="Other Services">
                              Other Services
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <textarea
                        cols={30}
                        rows={2}
                        className="form-control"
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="submit"
                        value="Request A Quote"
                        className="btn btn-primary py-3 px-4"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
