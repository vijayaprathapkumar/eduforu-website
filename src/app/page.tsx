export default function Home() {
  return (
    <div>
      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <a className="navbar-brand" href="index.html">
                Eduforu
              </a>
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
                    <a
                      href="#"
                      className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center"
                    >
                      <span>Apply now</span>
                    </a>
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
          <form action="#" className="searchform order-lg-last">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control pl-3"
                placeholder="Search"
              />
              <button type="submit" className="form-control search">
                <span className="ion-ios-search"></span>
              </button>
            </div>
          </form>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a href="index.html" className="nav-link pl-0">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="courses.html" className="nav-link">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="teacher.html" className="nav-link">
                  Staff
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
                  <a href="#" className="btn btn-primary px-4 py-3 mt-3">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4  bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-teacher"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Certified Teachers</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4  bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-reading"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Special Education</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4  bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-books"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Book &amp; Library</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4  bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-diploma"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Sport Clubs</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="col-md-7 wrap-about py-5 pr-md-4 ">
              <h2 className="mb-4">What We Offer</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word.
              </p>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-security"></span>
                    </div>
                    <div className="text pl-3">
                      <h3>Safety First</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                      <h3>Regular Classes</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                      <h3>Certified Teachers</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                      <h3>Sufficient Classrooms</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                      <h3>Creative Lessons</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                      <h3>Sports Facilities</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{
          backgroundImage: "url(images/bg_3.jpg)",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2 d-flex">
            <div className="col-md-6 align-items-stretch d-flex">
              <div
                className="img img-video d-flex align-items-center"
                style={{
                  backgroundImage: "url(images/about-2.jpg)",
                }}
              >
                <div className="video justify-content-center">
                  <a
                    href="https://vimeo.com/45830194"
                    className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                  >
                    <span className="ion-ios-play"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 heading-section heading-section-white  pl-lg-5 pt-md-0 pt-5">
              <h2 className="mb-4">Fox University</h2>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor"></span>
                    </div>
                    <div className="text">
                      <strong className="number" data-number="18">
                        0
                      </strong>
                      <span>Certified Teachers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor"></span>
                    </div>
                    <div className="text">
                      <strong className="number" data-number="401">
                        0
                      </strong>
                      <span>Students</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor"></span>
                    </div>
                    <div className="text">
                      <strong className="number" data-number="30">
                        0
                      </strong>
                      <span>Courses</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor"></span>
                    </div>
                    <div className="text">
                      <strong className="number" data-number="50">
                        0
                      </strong>
                      <span>Awards Won</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ">
              <h2 className="mb-4">Meet Our EduForU Founders</h2>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
            </div>
          </div>
          <div className="row">
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
                  <h3>Bianca Wilson</h3>
                  <span className="position mb-2">Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
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
                  <h3>Mitch Parker</h3>
                  <span className="position mb-2">English Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
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
                  <h3>Stella Smith</h3>
                  <span className="position mb-2">Art Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
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
          </div>
        </div>
      </section>

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
            <div className="col-md-6 py-5 px-md-5">
              <div className="py-md-5">
                <div className="heading-section heading-section-white  mb-5">
                  <h2 className="mb-4">Request A Quote</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <form action="#" className="appointment-form ">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
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
                          <select name="" id="" className="form-control">
                            <option value="">Select Your Course</option>
                            <option value="">Art Lesson</option>
                            <option value="">Language Lesson</option>
                            <option value="">Music Lesson</option>
                            <option value="">Sports</option>
                            <option value="">Other Services</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={2}
                        className="form-control"
                        placeholder="Message"
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
            </div>
          </div>
        </div>
      </section>

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
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: "url(images/image_1.jpg)",
                    }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> June 27, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-5 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: "url(images/image_2.jpg)",
                    }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> June 27, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> 19
                        </a>
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
                    <a href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Deparments
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Contact
                    </a>
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
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Link back to Colorlib can't be removed. Template is licensed
                under CC BY 3.0. Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                Link back to Colorlib can't be removed. Template is licensed
                under CC BY 3.0.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
