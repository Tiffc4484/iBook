import React from "react";
import Navigation from "../Navigation";
import "./About.css";
import Footer from "../ShoppingCart/Footer";

const AboutScreen = () => {
    return (
        <>
            <Navigation/>

            <div className="d-flex justify-content-center">
                <div className="d-none d-lg-block">
                    <div className="d-flex">
                        <img
                            className="ib-about-header-img "
                            src="/images/about.png"/>
                        <div className="d-flex align-items-center ib-about-header">
                            About Us
                        </div>
                    </div>
                </div>

                <div className="d-block d-lg-none">
                    <div className="d-flex flex-column align-items-center">
                        <img
                            className="ib-about-header-img "
                            src="/images/about.png"/>
                        <div className="d-flex align-items-center ib-about-header">
                            About Us
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className="d-flex justify-content-center">
                    <span className="ib-about-subheader"> Our Mission </span>
                </div>

                <div className="mt-3 d-flex justify-content-center">
                    <div className="p-4 ib-about-container-1">
                        <span className="ib-about-text">
                            Books have the power to transport us to new worlds and different times, but they can also take us back to the important moments in our own lives.
                            At iBook, we strive to provide a welcoming platform that encourages readers to explore a variety of books and exchange ideas.
                            We believe in the power of story; we believe that literature can change the world.
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className="d-flex justify-content-center">
                    <span className="ib-about-subheader"> Our Team </span>
                </div>

                <div className="mt-5 d-flex justify-content-center">
                    <div className="p-4 row ib-about-container">
                        <div className="col-6 d-flex flex-column align-items-center mb-5">
                            <img
                                className="ib-about-team-img"
                                src="/images/male1.png"/>

                            <div className="mt-3 d-flex flex-column align-items-center">
                                <span className="ib-about-team-title">Zhihao Lyu</span>
                                <span>lv.zh@northeastern.edu</span>
                            </div>

                        </div>

                        <div className="col-6 d-flex flex-column align-items-center mb-5">
                            <img
                                className="ib-about-team-img"
                                src="/images/female1.png"/>

                            <div className="mt-3 d-flex flex-column align-items-center">
                                <span className="ib-about-team-title">Qiqi Chen</span>
                                <span>chen.qiq@northeastern.edu</span>
                            </div>
                        </div>

                        <div className="col-6 d-flex flex-column align-items-center">
                            <img
                                className="ib-about-team-img"
                                src="/images/female2.png"/>

                            <div className="mt-3 d-flex flex-column align-items-center">
                                <span className="ib-about-team-title">Yu-Hsuan Lin</span>
                                <span>lin.yuhsu@northeastern.edu</span>
                            </div>

                        </div>

                        <div className="col-6 d-flex flex-column align-items-center">
                            <img
                                className="ib-about-team-img"
                                src="/images/female3.png"/>

                            <div className="mt-3 d-flex flex-column align-items-center">
                                <span className="ib-about-team-title">Yuyan Zhou</span>
                                <span>zhou.yuy@northeastern.edu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 mb-3">
                <Footer/>
            </div>
        </>
    )


}

export default AboutScreen;

