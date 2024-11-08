"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const isActive = (route: string) => pathname === route;

    return (
        <div>
            <div className="bg-top navbar-light">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-center align-items-stretch">
                        <div className="col-md-4 d-flex align-items-center py-4">
                            <Link className="navbar-brand" href="/home">
                                Eduforu
                            </Link>
                        </div>
                        <div className="col-lg-8 d-block">
                            <div className="row d-flex">
                                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-paper-plane"></span>
                                    </div>
                                    <div className="text">
                                        <span>Email</span>
                                        <span>youremail@email.com</span>
                                    </div>
                                </div>
                                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-phone2"></span>
                                    </div>
                                    <div className="text">
                                        <span>Call</span>
                                        <span>Call Us: + 1235 2355 98</span>
                                    </div>
                                </div>
                                <div className="col-md topper d-flex align-items-center justify-content-end">
                                    <p className="mb-0">
                                        <Link
                                            href="#"
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
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container d-flex align-items-center px-4">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className={`nav-item ${isActive("/home") ? "active" : ""}`}>
                                <Link href="/home" className="nav-link pl-0">
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/about") ? "active" : ""}`}>
                                <Link href="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/services") ? "active" : ""}`}>
                                <Link href="/services" className="nav-link">
                                    Services
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/blog") ? "active" : ""}`}>
                                <Link href="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
                                <Link href="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
