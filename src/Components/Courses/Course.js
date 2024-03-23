import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { useNavigate } from 'react-router-dom';

function Course() {
  const navigate = useNavigate();

    const reloadHomePage = () => {
        navigate("/");
        window.scrollTo(0, 0);
        window.location.reload();
    }

  return (
    <div>
         {/* header */}
         <Header/>
        {/* header-end */}
        {/* offcanvas-area */}
        <div className="offcanvas-menu">
          <span className="menu-close"><i className="fas fa-times" /></span>
          <form role="search" method="get" id="searchform" className="searchform" action="http://wordpress.zcube.in/xconsulta/">
            <input type="text" name="s" id="search" placeholder="Search" />
            <button><i className="fa fa-search" /></button>
          </form>
          <div id="cssmenu3" className="menu-one-page-menu-container">
            <ul className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="index.html">Home</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="about.html">About Us</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="courses.html">Courses</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="pricing.html">Pricing </a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="team.html">Teacher</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="projects.html">Gallery</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="blog.html">Blog</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div id="cssmenu2" className="menu-one-page-menu-container">
            <ul id="menu-one-page-menu-12" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#home"><span>+8 12 3456897</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#howitwork"><span>info@example.com</span></a></li>
            </ul>
          </div>
        </div>
        <div className="offcanvas-overly" />
        {/* offcanvas-end */}
        {/* main-area */}
        <main>
          {/* breadcrumb-area */}
          <section className="breadcrumb-area d-flex  p-relative align-items-center" style={{backgroundImage: 'url(img/bg/bdrc-bg.png)'}}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12">
                  <div className="breadcrumb-wrap text-left">
                    <div className="breadcrumb-title">
                      <h2>Courses</h2>    
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a onClick={reloadHomePage}>Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Courses</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>                        
              </div>
            </div>
          </section>
          {/* breadcrumb-area-end */}
          {/* service-area */}
          <section className="service-details-one pt-120 pb-90 p-relative fix">
            <div className="container">                  
              <div className="row sbox">                      
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="services-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">                                
                    <div className="sr-contner">
                      <div className="icon2">
                        <img src="img/icon/sve-icon1.png" alt="icon01" />
                      </div>
                      <div className="text">
                        <h3>Tutoring </h3>
                        <p>We have been operating for over a  in the  decade, providing top-notch</p>
                        <ul>
                          <li>Mistakes To Avoid</li>
                          <li>Your Startup</li>
                          <li>Knew About Fonts</li>
                          <li>Knew About Fonts</li>
                        </ul>
                        <a href="single-courses.html" className="readmore">View Details <i className="fal fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="services-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="sr-contner">
                      <div className="icon2">
                        <img src="img/icon/sve-icon2.png" alt="icon01" />
                      </div>
                      <div className="text">
                        <h3>Online courses </h3>
                        <p>We have been operating for over a  in the  decade, providing top-notch</p>
                        <ul>
                          <li>Mistakes To Avoid</li>
                          <li>Your Startup</li>
                          <li>Knew About Fonts</li>
                          <li>Knew About Fonts</li>
                        </ul>
                        <a href="single-courses.html" className="readmore">View Details <i className="fal fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="services-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="sr-contner">
                      <div className="icon2">
                        <img src="img/icon/sve-icon3.png" alt="icon01" />
                      </div>
                      <div className="text">
                        <h3>Study group </h3>
                        <p>We have been operating for over a  in the  decade, providing top-notch</p>
                        <ul>
                          <li>Mistakes To Avoid</li>
                          <li>Your Startup</li>
                          <li>Knew About Fonts</li>
                          <li>Knew About Fonts</li>
                        </ul>
                        <a href="single-courses.html" className="readmore">View Details <i className="fal fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="services-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">                                
                    <div className="sr-contner">
                      <div className="icon2">
                        <img src="img/icon/sve-icon3.png" alt="icon01" />
                      </div>
                      <div className="text">
                        <h3>Night course </h3>
                        <p>We have been operating for over a  in the  decade, providing top-notch</p>
                        <ul>
                          <li>Mistakes To Avoid</li>
                          <li>Your Startup</li>
                          <li>Knew About Fonts</li>
                          <li>Knew About Fonts</li>
                        </ul>
                        <a href="single-courses.html" className="readmore">View Details <i className="fal fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="services-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="sr-contner">
                      <div className="icon2">
                        <img src="img/icon/sve-icon1.png" alt="icon01" />
                      </div>
                      <div className="text">
                        <h3>Evening course </h3>
                        <p>We have been operating for over a  in the  decade, providing top-notch</p>
                        <ul>
                          <li>Mistakes To Avoid</li>
                          <li>Your Startup</li>
                          <li>Knew About Fonts</li>
                          <li>Knew About Fonts</li>
                        </ul>
                        <a href="single-courses.html" className="readmore">View Details <i className="fal fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="services-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="sr-contner">
                      <div className="icon2">
                        <img src="img/icon/sve-icon2.png" alt="icon01" />
                      </div>
                      <div className="text">
                        <h3>Offline courses </h3>
                        <p>We have been operating for over a  in the  decade, providing top-notch</p>
                        <ul>
                          <li>Mistakes To Avoid</li>
                          <li>Your Startup</li>
                          <li>Knew About Fonts</li>
                          <li>Knew About Fonts</li>
                        </ul>
                        <a href="single-courses.html" className="readmore">View Details <i className="fal fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* service-details2-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer */}
       <Footer/>
        {/* footer-end */}
    </div>
  )
}

export default Course
