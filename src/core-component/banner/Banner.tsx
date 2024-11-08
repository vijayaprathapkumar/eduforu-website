import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div>
            <section className="home-slider owl-carousel">
                <div
                    className="slider-item"
                    style={{
                        backgroundImage: "url(images/bg_2.jpg)",
                    }}
                >
                    <div className="overlay"></div>
                    <div className="container">
                        <div
                            className="row no-gutters slider-text align-items-center justify-content-start"
                            data-scrollax-parent="true"
                        >
                            <div className="col-md-6">
                                <h1 className="mb-4">Education Needs Complete Solution</h1>
                                <p>
                                    A small river named Duden flows by their place and supplies it
                                    with the necessary regelialia.
                                </p>
                                <p>
                                    <Link href="/contact" className="btn btn-primary px-4 py-3 mt-3">
                                        Contact Us
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
