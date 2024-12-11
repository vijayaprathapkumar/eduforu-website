import React from 'react'
import Link from 'next/link'

const Blogs = () => {
    return (
        <div>
            <section className="hero-wrap hero-wrap-2" style={{
                backgroundImage: "url(images/bg_1.jpg)",
            }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <h1 className="mb-2 bread">Blog</h1>
                            <p className="breadcrumbs"><span className="mr-2"><Link href="./home">Home <i className="ion-ios-arrow-forward"></i></Link></span> <span>Blog <i className="ion-ios-arrow-forward"></i></span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 ">
                            <div className="blog-entry">
                                <Link href="#" className="block-20 d-flex align-items-end" style={{
                                    backgroundImage: "url(images/Blog.jpg)",
                                }}>
                                    <div className="meta-date text-center p-2">
                                        <span className="day">26</span>
                                        <span className="mos">June</span>
                                        <span className="yr">2019</span>
                                    </div>
                                </Link>
                                <div className="text bg-white p-4">
                                    <h3 className="heading"><Link href="#">Skills To Develop Your Child Memory</Link></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="d-flex align-items-center mt-4">
                                        <p className="mb-0"><Link href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs
