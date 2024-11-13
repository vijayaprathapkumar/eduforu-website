import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        Avadi, chennai
                      </span>
                    </li>
                    <li>
                      <Link href="tel:+918778283728">
                        <span className="icon icon-phone"></span>
                        <span className="text">+91 8778283728</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info.chennai@eduforu.in</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <div className="block-21 mb-4 d-flex">
                  <Link href='#'
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: "url(images/image_1.jpg)",
                    }}
                  ></Link>
                  <div className="text">
                    <h3 className="heading">
                      <Link href="#">
                        Even the all-powerful Pointing has no control about
                      </Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <Link href="#">
                          <span className="icon-calendar"></span> June 27, 2019
                        </Link>
                      </div>
                      <div>
                        <Link href="#">
                          <span className="icon-person"></span> Admin
                        </Link>
                      </div>
                      <div>
                        <Link href="#">
                          <span className="icon-chat"></span> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-5 d-flex">
                  <Link href='#'
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: "url(images/image_2.jpg)",
                    }}
                  ></Link>
                  <div className="text">
                    <h3 className="heading">
                      <Link href="#">
                        Even the all-powerful Pointing has no control about
                      </Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <Link href="#">
                          <span className="icon-calendar"></span> June 27, 2019
                        </Link>
                      </div>
                      <div>
                        <Link href="#">
                          <span className="icon-person"></span> Admin
                        </Link>
                      </div>
                      <div>
                        <Link href="#">
                          <span className="icon-chat"></span> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Subscribe Us!</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-2 text-center"
                      placeholder="Enter email address"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="form-control submit px-3"
                    />
                  </div>
                </form>
              </div>
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className="">
                    <Link href="#">
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#">
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#">
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy;
                {new Date().getFullYear()} All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
