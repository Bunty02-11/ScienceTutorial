import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate();

    const reloadHomePage = () => {
        navigate("/");
        window.scrollTo(0, 0);
        window.location.reload();
    }

    const reloadAboutPage = () => {
        navigate("/about");
        window.scrollTo(0, 0);
        window.location.reload();
    }

    const reloadCoursePage = () => {
        navigate("/course");
        window.scrollTo(0, 0);
        window.location.reload();
    }

    const reloadContactPage = () => {
        navigate("/contact");
        window.scrollTo(0, 0);
        window.location.reload();
    }


    return (
        <div>
            <footer className="footer-bg footer-two footer-three footer-p pt-90" style={{ backgroundColor: '#F8DC95' }}>
                <div className="footer-top pb-30">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="footer-widget mb-30">
                                    <div className="f-widget-title">
                                        <h2> <img src="img/logo/logo2.png" alt="img" /></h2>
                                    </div>
                                    <div className="f-contact">
                                        <p>Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply.</p>
                                    </div>
                                    <div className="footer-social mt-10">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                                <div className="footer-widget mb-30">
                                    <div className="f-widget-title">
                                        <h2>Our Links</h2>
                                    </div>
                                    <div className="footer-link">
                                        <ul>
                                            <li><a onClick={reloadHomePage}>Home</a></li>
                                            <li><a onClick={reloadAboutPage}> About</a></li>
                                            <li><a onClick={reloadCoursePage}>Courses</a></li>
                                            <li><a onClick={reloadContactPage}> Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                                <div className="footer-widget mb-30">
                                    <div className="f-widget-title">
                                        <h2>Services</h2>
                                    </div>
                                    <div className="footer-link">
                                        <ul>
                                            <li><a onClick={reloadHomePage}>Edu Smart</a></li>
                                            <li><a onClick={reloadAboutPage}> Learn Well</a></li>
                                            <li><a onClick={reloadCoursePage}>Knowledge Hub</a></li>
                                            <li><a onClick={reloadContactPage}> Skill Master</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                                <div className="footer-widget mb-30">
                                    <div className="f-widget-title">
                                        <h2>Contact</h2>
                                    </div>
                                    <div className="f-contact">
                                        <ul>
                                            <li>
                                                <i className="icon fa-solid fa-phone" />
                                                <span><a href="tel:+14440008888">+1 (444) 000-8888</a></span>
                                            </li>
                                            <li><i className="icon fa-solid fa-envelope" />
                                                <span>
                                                    <a href="mailto:info@example.com">info@example.com</a>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="icon fa-solid fa-paper-plane" />
                                                <span>1247/Plot No. 39, 15th Phase,<br /> LHB Colony, Kanpur</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                Copyright © scholary 2024 . All rights reserved.
                            </div>
                            <div className="col-lg-6 text-right text-xl-right">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms Of Service</a></li>
                                    <li><a href="#">Legal</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
