import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { useNavigate } from 'react-router-dom';

function Contact() {
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
                      <h2>Contact Us</h2>  
                    </div>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a onClick={reloadHomePage}>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                      </ol>
                    </nav>
                  </div>
                </div>                        
              </div>
            </div>
          </section>
          {/* breadcrumb-area-end */}
          {/* contact-area */}
          <section id="contact" className="contact-area after-none contact-bg pt-120 p-relative fix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 ">
                  <div className="contact-bg03">                             
                    <form action="https://htmldemo.zcubethemes.com/scholary/mail.php" method="post" className="contact-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-name mb-20">  
                            <label>First Name</label>
                            <input type="text" id="firstn" name="firstn" placeholder="First Name" required />                                   
                          </div>                               
                        </div>
                        <div className="col-lg-6">                               
                          <div className="contact-field p-relative c-subject mb-20">       
                            <label>Email</label>
                            <input type="text" id="email" name="email" placeholder="Email" required />
                          </div>
                        </div>		
                        <div className="col-lg-6">                               
                          <div className="contact-field p-relative c-subject mb-20">      
                            <label>Phone No</label>
                            <input type="text" id="phone" name="phone" placeholder="Phone No." required />                                    
                          </div>
                        </div>
                        <div className="col-lg-6">                               
                          <div className="contact-field p-relative c-subject mb-20">       
                            <label>Your Area</label>
                            <select name="area" id="area">
                              <option value="sports-massage">Select Capacity</option>
                              <option value={1}>Area 01</option>
                              <option value={2}>Area 02</option>
                              <option value={3}>Area 03</option>
                              <option value={4}>Area 04</option>
                              <option value={5}>Area 05</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="contact-field p-relative c-message mb-20">  
                            <label>Your Area</label>
                            <textarea name="message" id="message" cols={30} rows={50} placeholder="Write comments" defaultValue={""} />                                   
                          </div>
                          <div className="slider-btn  text-center">                                          
                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Make An Request <i className="fal fa-long-arrow-right" /></button>				
                          </div>                             
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-img2">
                    <img src="img/bg/contact-img.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact-area-end */}
          {/* contact-area */}          
          <section className="contact-area pt-120 pb-90 fix">
            <div className="container">                  
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="contact-box text-center">
                    <div className="services-icon">
                      <img src="img/bg/contact-icon01.png" alt="image" />
                    </div>
                    <div className="services-content2">
                      <h5>Phone Support</h5>   
                      <p><a href="tel:+14440008888">+1 (444) 000-8888</a></p>
                    </div>
                  </div>   
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="contact-box text-center active">
                    <div className="services-icon">
                      <img src="img/bg/contact-icon02.png" alt="image" />
                    </div>
                    <div className="services-content2">
                      <h5>Email Address</h5>   
                      <p><a href="mailto:jobs@webtrueexample.com">jobs@webtrueexample.com</a></p>
                    </div>
                  </div>   
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="contact-box text-center">
                    <div className="services-icon">
                      <img src="img/bg/contact-icon03.png" alt="image" />
                    </div>
                    <div className="services-content2">
                      <h5>Office Address</h5>   
                      <p>12/A, New Jone, NYC</p>
                    </div>
                  </div>   
                </div>
              </div>
            </div>
          </section>
          {/* contact-area-end */}
          {/* map-area-end */}
          <div className="map fix" style={{background: '#f5f5f5'}}>
            <div className="container-flud">
              <div className="row">
                <div className="col-lg-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          {/* map-area-end */}            
        </main>
        {/* main-area-end */}
        {/* footer */}
       <Footer/>
        {/* footer-end */}
    </div>
  )
}

export default Contact
