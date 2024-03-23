import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { useNavigate } from 'react-router-dom';

function Aboutus() {
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
                      <h2>About Us</h2>    
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a onClick={reloadHomePage}>Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* breadcrumb-area-end */}
          {/* about-area */}
          <section className="about-area2 about-p pt-120 pb-120 p-relative fix">
            <div className="container">
              <div className="row justify-content-center align-items-center">                        
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                    <div className="section-title2 second-title pb-25">  
                      <h5>About Our University</h5>
                      <h2>A Few Words About the University</h2>                                   
                    </div>
                    <p>Education is a vital aspect of human development, providing individuals with knowledge, skills, and opportunities to acquire new information.encompasses formal learning institutions</p>
                    <div className="about-content3 mt-30 mb-30">
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="green">                                              
                            <li>9 Product Market Fit Mistakes </li>
                            <li>100 Product Management tip</li>     
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="green">                                              
                            <li>How to Get Any Startup Idea </li>
                            <li>3 Ways to Improve Your Conver</li>  
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="slider-btn mt-20">  
                      <span className="award-btn"><div className="img"><img src="img/icon/award-btn-icon.png" alt="icon01" /></div> 20+ Winning award</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                    <img src="img/features/about_img_02.png" alt="img" />   
                    <div className="about-text second-about text-left"> 
                      <div className="box-text">
                        <div className="icon"> <img src="img/features/ab-ani-01.png" alt="img" /> </div>
                        <div className="text">
                          <span>1.5k+</span> 
                          Awards Winner
                        </div>                                       
                      </div>                                    
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                      <div /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-area-end */}
          {/* counter-area */}
          <div className="counter-area pt-90 pb-60" style={{background: '#FCFAF8'}}>
            <div className="container">
              <div className="row p-relative cont-color">
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div className="section-title section-title2 p-relative wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                    <h2>
                      Our Achievement Milestones
                    </h2>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                  <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="counter p-relative" style={{backgroundImage: 'url(img/bg/c-object.html)', backgroundRepeat: 'no-repeat'}}>
                      <span className="count">200</span><small>+</small>                                   
                      <p>Team member</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                  <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="counter p-relative" style={{backgroundImage: 'url(img/bg/c-object.html)', backgroundRepeat: 'no-repeat'}}>
                      <span className="count">20</span> <small>+</small>                                  
                      <p>Winning award</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                  <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="counter p-relative" style={{backgroundImage: 'url(img/bg/c-object.html)', backgroundRepeat: 'no-repeat'}}>
                      <span className="count">10</span> <small>k+</small>                                  
                      <p>Complete project</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                  <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="counter p-relative" style={{backgroundImage: 'url(img/bg/c-object.html)', backgroundRepeat: 'no-repeat'}}>
                      <span className="count">900</span><small>+</small>                               
                      <p>Client review</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* counter-area-end */}	
          {/* team-area */}
          <section id="team" className="team-area fix p-relative pt-120 pb-90">  
            <div className="animations-09"><img src="img/bg/slider_shape06.png" alt="contact-bg-an-01" /></div>
            <div className="container">  
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div className="section-title section-title2 p-relative mb-50 wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                    <h5>Our team member</h5>
                    <h2>
                      Navigate Challenges with Consulting Expertise
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8" />
              </div>
              <div className="row team-active">                   
                <div className="col-xl-3 col-lg-3">
                  <div className="single-team mb-30">
                    <div className="team-thumb">
                      <div className="brd">
                        <img src="img/team/team01.png" alt="img" />  
                      </div>
                      <div className="team-info">  
                        <div className="team-social">
                          <a href="#" className="share-alt"><i className="fal fa-share-alt" /></a>
                          <ul>
                            <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li> <a href="#"><i className="fab fa-twitter" /></a></li>    
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li> 
                          </ul>       
                        </div>
                        <h4><a href="team-single.html">H.Alexander Anna</a></h4>
                        <p>Managing Director</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="single-team mb-30">
                    <div className="team-thumb">
                      <div className="brd">
                        <img src="img/team/team02.png" alt="img" /> 
                      </div> 
                      <div className="team-info">        
                        <div className="team-social">
                          <a href="#" className="share-alt"><i className="fal fa-share-alt" /></a>
                          <ul>
                            <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li> <a href="#"><i className="fab fa-twitter" /></a></li>    
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li> 
                          </ul>       
                        </div>
                        <h4><a href="team-single.html">Elizabeth Joseph</a></h4>
                        <p>Managing Director</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="single-team mb-30">
                    <div className="team-thumb">
                      <div className="brd">
                        <img src="img/team/team03.png" alt="img" /> 
                      </div>
                      <div className="team-info">  
                        <div className="team-social">
                          <a href="#" className="share-alt"><i className="fal fa-share-alt" /></a>
                          <ul>
                            <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li> <a href="#"><i className="fab fa-twitter" /></a></li>    
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li> 
                          </ul>       
                        </div>
                        <h4><a href="team-single.html">Benjamin Evelyn</a></h4>
                        <p>Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="single-team mb-30">
                    <div className="team-thumb">
                      <div className="brd">
                        <img src="img/team/team04.png" alt="img" /> 
                      </div>
                      <div className="team-info"> 
                        <div className="team-social">
                          <a href="#" className="share-alt"><i className="fal fa-share-alt" /></a>
                          <ul>
                            <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li> <a href="#"><i className="fab fa-twitter" /></a></li>    
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li> 
                          </ul>       
                        </div>
                        <h4><a href="team-single.html">Jack Martin</a></h4>
                        <p>Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-area-end */} 
          {/* testimonial-area */}
          <section id="testimonial" className="testimonial-area pt-120 pb-90  p-relative fix" style={{background: 'url(img/bg/testimonial-bg.png) no-repeat', backgroundPosition: 'center top'}}>
            <div className="container">
              <div className="row justify-content-center align-items-center mb-60">
                <div className="col-xl-7 col-lg-10 col-md-12">
                  <div className="section-title section-title2 center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5>Testimonial</h5>
                    <h2>Education is the foundation of mind growth</h2>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testimonial-active wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="single-testimonial">
                      <div className="qt-img">
                        <img src="img/testimonial/qt-icon.png" alt="img" />
                      </div>                                                      
                      <p>Education is a vital aspect of human a development, providing pro individuals such knowledge a skills, and opportunities to acquire new  universities info rma tion.e ncompasses formal lear </p>
                      <div className="testi-author">                                        
                        <div className="ta-info">
                          <h6>Miranda H. Halim</h6>
                          <span>Head Of Idea</span>  
                        </div>                                          
                        <div className="testi-author-img"> <img src="img/testimonial/testi_avatar.png" alt="img" /></div>
                        <div className="review-icon">
                          <img src="img/bg/test-icon-01.png" alt="img" />
                        </div>
                      </div>              
                    </div>
                    <div className="single-testimonial">
                      <div className="qt-img">
                        <img src="img/testimonial/qt-icon-02.png" alt="img" />
                      </div>                                                      
                      <p>Education is a vital aspect of human a development, providing pro individuals such knowledge a skills, and opportunities to acquire new  universities info rma tion.e ncompasses formal lear </p>
                      <div className="testi-author">                                        
                        <div className="ta-info">
                          <h6>Braitly Dcosta</h6>                    
                          <span>Head Of Offcer</span>  
                        </div>                                          
                        <div className="testi-author-img"> <img src="img/testimonial/testi_avatar_02.png" alt="img" /></div>               
                        <div className="review-icon">
                          <img src="img/bg/test-icon-02.png" alt="img" />
                        </div>
                      </div>              
                    </div>
                    <div className="single-testimonial">
                      <div className="qt-img">
                        <img src="img/testimonial/qt-icon.png" alt="img" />
                      </div>                                                      
                      <p>Education is a vital aspect of human a development, providing pro individuals such knowledge a skills, and opportunities to acquire new  universities info rma tion.e ncompasses formal lear </p>
                      <div className="testi-author">                                        
                        <div className="ta-info">
                          <h6>Miranda H. Halim</h6>
                          <span>Head Of Idea</span>  
                        </div>                                          
                        <div className="testi-author-img"> <img src="img/testimonial/testi_avatar.png" alt="img" /></div>
                        <div className="review-icon">
                          <img src="img/bg/test-icon-01.png" alt="img" />
                        </div>
                      </div>              
                    </div>
                    <div className="single-testimonial">
                      <div className="qt-img">
                        <img src="img/testimonial/qt-icon-02.png" alt="img" />
                      </div>                                                      
                      <p>Education is a vital aspect of human a development, providing pro individuals such knowledge a skills, and opportunities to acquire new  universities info rma tion.e ncompasses formal lear </p>
                      <div className="testi-author">                                        
                        <div className="ta-info">
                          <h6>Braitly Dcosta</h6>                    
                          <span>Head Of Offcer</span>  
                        </div>                                          
                        <div className="testi-author-img"> <img src="img/testimonial/testi_avatar_02.png" alt="img" /></div>               
                        <div className="review-icon">
                          <img src="img/bg/test-icon-02.png" alt="img" />
                        </div>
                      </div>              
                    </div>
                  </div>
                </div>                       
              </div>
            </div>
          </section>
          {/* testimonial-area-end */}
          {/* frequently-area */}
          <section className="faq-area pt-120 pb-120 p-relative fix">
            <div className="animations-09"><img src="img/bg/slider_shape05.png" alt="contact-bg-an-01" /></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <div className="faq-img">
                    <img src="img/bg/faq-img.png" alt="img" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="section-title section-title2 wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <h5>FAQ</h5>
                    <h2>Expand your mind through education growth</h2>                              
                  </div>
                  <div className="faq-wrap mt-50 pr-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button className="faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                              1. What are the benefits of education?
                            </button>
                          </h2>
                        </div>
                        <div id="collapseThree" className="collapse show" data-bs-parent="#accordionExample">
                          <div className="card-body">
                            Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing netus. Lorem at ac ut morbi ullamcorper molestie lacu
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                              2. What is the role of education in society?
                            </button>
                          </h2>
                        </div>
                        <div id="collapseOne" className="collapse" data-bs-parent="#accordionExample">
                          <div className="card-body">
                            Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing netus. Lorem at ac ut morbi ullamcorper molestie lacu
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                            <button className="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                              3. How does education development?
                            </button>
                          </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" data-bs-parent="#accordionExample">
                          <div className="card-body">
                            Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing netus. Lorem at ac ut morbi ullamcorper molestie lacu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>               
                </div>
              </div>
            </div>
          </section>
          {/* frequently-area-end */}	
        </main>
        {/* main-area-end */}
        {/* footer */}
       <Footer/>
        {/* footer-end */}
    </div>
  )
}

export default Aboutus
