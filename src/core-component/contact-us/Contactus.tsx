import React from 'react'

const Contactus = () => {
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
        </div>
    )
}

export default Contactus
