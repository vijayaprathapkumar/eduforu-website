"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/ui-component/Icon";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <Link className="navbar-brand" href="/">
                  <Image src="/images/logoEdu.png" alt="Edu-Logo" height={50} width={200}/>
              </Link>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane"></span>
                    <Icon icon="paper-plane" size={100} />
                  </div>
                  <div className="text">
                    <span>Email</span>
                    <span>info.chennai@eduforu.in</span>
                  </div>
                </div>
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <div className="text">
                    <span>Call</span>
                    <Link href="tel:+918778283728" className="call-link">
                      Call Us: +91 8778283728
                    </Link>
                  </div>
                </div>
                <div className="col-md topper d-flex align-items-center justify-content-end">
                  <p className="mb-0">
                    <Link
                      href="/contact"
                      className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center"
                    >
                      <span>Apply now</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light">
        <div className="container d-flex align-items-center px-4">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="ftco-nav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu">
              <IoMenuSharp style={{ fontSize: "25px" }} /> Menu
            </span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="ftco-nav"
          >
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
                <Link
                  href="/"
                  className="nav-link pl-0"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isActive("/about") ? "active" : ""}`}>
                <Link
                  href="/about"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li
                className={`nav-item ${isActive("/services") ? "active" : ""}`}
              >
                <Link
                  href="/services"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
              </li>
              <li className={`nav-item ${isActive("/blog") ? "active" : ""}`}>
                <Link
                  href="/blog"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
              </li>
              <li
                className={`nav-item ${isActive("/contact") ? "active" : ""}`}
              >
                <Link
                  href="/contact"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
