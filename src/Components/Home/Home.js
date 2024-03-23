import React from 'react'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

function Home() {
    return (
        <div>
        {/* header */}
        <Header/>
        {/* header-end */}
        {/* main-area */}
        <main style={{background: '#FCFAF8'}}>
          {/* slider-area */}
          <section id="parallax" className="slider-area slider-two fix p-relative">                
            <div className="slider-active">
              <div className="single-slider slider-bg3 d-flex align-items-center" style={{background: 'url(img/slider/slider_img03.png) no-repeat', backgroundPosition: 'center top', backgroundColor: '#FCFAF8'}}>
                
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-10 col-md-10">
                      <div className="slider-content slider-content2  s-slider-content text-center mt-60">
                        <h2 data-animation="fadeInUp" data-delay=".4s">Create New <span>Experience</span> With Ways Of <br /><span style={{color: 'rgba(33, 54, 73, 1)'}}>Perfect</span> Learning</h2>    
                      </div>
                    </div> 
                    <div className="col-lg-12 col-md-12 mt-100">
                      <div className="slider-img-3" data-animation="fadeInUp" data-delay=".4s">
                        <img src="img/slider/slider_img04.png" alt="shape" />
                      </div>                                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* slider-area-end */}
          {/* counter-area */}
          <div className="counter-area2 pt-40 pb-40 mt-120  p-relative fix" style={{background: '#fff'}}>
            <div className="animations-01"><img src="img/bg/slider_shape09.png" alt="an-img-01" /></div>
            <div className="container">               
              <div className="row p-relative cont-color">
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div className="section-title section-title2 p-relative wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                    <h2>
                      Our Achievement <span style={{color: 'rgba(33, 54, 73, 1)'}}>Milestones</span>
                    </h2>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                  <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="counter p-relative" style={{backgroundImage: 'url(img/bg/c-object.html)', backgroundRepeat: 'no-repeat'}}>
                      <span className="count">200</span><small>+</small>                                   
                      <p>Team member</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                  <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="counter p-relative" style={{backgroundImage: 'url(img/bg/c-object.html)', backgroundRepeat: 'no-repeat'}}>
                      <span className="count">20</span> <small>+</small>                                  
                      <p>Winning award</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                  <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="counter p-relative" style={{backgroundImage: 'url(img/bg/c-object.html)', backgroundRepeat: 'no-repeat'}}>
                      <span className="count">10</span> <small>k+</small>                                  
                      <p>Complete project</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
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
          {/* about-area */}
          <section className="about-area3 about-p pt-200 pb-120 p-relative fix">              
            <div className="container">
              <div className="row justify-content-center align-items-center">  
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="s-about-img3 p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                    <img src="img/features/about_img_04.png" alt="img" />   
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                    <div className="section-title section-title2 pb-25">  
                      <h5 style={{color: 'rgba(235, 97, 33, 1)'}}>About Us</h5>
                      <h2>Unlock your tr potential through education</h2>                                   
                    </div>
                    <p>We have been operating for over a decade, providing top-notch  our clients and building a strong track record in the industry.</p>      
                    <div className="slider-btn mt-30">                                          
                      <a  className="btn2">Read More</a>				
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-area-end */}           
          {/* service-area */}
          <section className="service-details-two service-details-four pt-120 pb-90 p-relative fix">
            <div className="container">
              <div className="row justify-content-center align-items-center"> 
                <div className="col-xl-6 col-lg-10">
                  <div className="section-title section-title2 center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5 style={{color: 'rgba(33, 54, 73, 1)' }}>Our Features</h5>
                    <h2>
                      Building Brighter Minds One Lesson at a Time
                    </h2>
                  </div>
                </div>
              </div>
              <div className="service-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">                        
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-1 col-md-6 td"><div className="td-numner">01</div></div>  
                  <div className="col-lg-6 col-md-6 td">
                    <h3>Learn succeed with education</h3>
                    <p>We have been operating for over a decade, providing top-notch  our clients and building a strong track record in the industry.</p>
                  </div>
                  <div className="col-lg-3 col-md-6 td text-center"><div className="td-icon"><img src="img/icon/book-icon-01.png" alt="img" /></div></div>
                  <div className="col-lg-2 col-md-12 td text-right"><a href="about.html" className="read">Read More <i className="fa-regular fa-arrow-right" /></a></div>
                </div> 
              </div> 
              <div className="service-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">                        
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-1 col-md-6 td"><div className="td-numner">02</div></div>  
                  <div className="col-lg-6 col-md-6 td">
                    <h3>Your potential through education</h3>
                    <p>We have been operating for over a decade, providing top-notch  our clients and building a strong track record in the industry.</p>
                  </div>
                  <div className="col-lg-3 col-md-6 td text-center"><div className="td-icon"><img src="img/icon/book-icon-01.png" alt="img" /></div></div>
                  <div className="col-lg-2 col-md-12 td text-right"><a href="about.html" className="read">Read More <i className="fa-regular fa-arrow-right" /></a></div>
                </div> 
              </div> 
              <div className="service-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">                        
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-1 col-md-6 td"><div className="td-numner">03</div></div>  
                  <div className="col-lg-6 col-md-6 td">
                    <h3>Education is the key to success</h3>
                    <p>We have been operating for over a decade, providing top-notch  our clients and building a strong track record in the industry.</p>
                  </div>
                  <div className="col-lg-3 col-md-6 td text-center"><div className="td-icon"><img src="img/icon/book-icon-01.png" alt="img" /></div></div>
                  <div className="col-lg-2 col-md-12 td text-right"><a href="about.html" className="read">Read More <i className="fa-regular fa-arrow-right" /></a></div>
                </div> 
              </div> 
            </div>
          </section>
          {/* service-details2-area-end */}     
          {/* newslater-area */}
          {/* <section className="newslater-area5 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
            <div className="container" style={{backgroundImage: 'url(img/bg/newslater-bg.png)', backgroundRepeat: 'no-repeat'}}>
              <div className="row align-items-center">                          
                <div className="col-xl-7 col-lg-7 col-md-7">
                  <div className="section-title section-title2 mb-30">
                    <h5>Stay Connected</h5>
                    <h2>Education is the passport to a successful career</h2>    
                  </div>
                  <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                    <div className="form-group">
                      <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." defaultValue required /> 
                      <button type="submit" className="btn btn-custom" id="send2">Subscribe</button>
                    </div>
                  </form>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 text-right">                            
                </div>
              </div>
            </div>
          </section> */}
          {/* newslater-aread-end */}
          {/* skill-area */}
          <section className="skill-area pt-120 pb-90 p-relative fix">              
            <div className="animations-01"><img src="img/bg/slider_shape10.png" alt="contact-bg-an-01" /></div>
            <div className="animations-02"><img src="img/bg/slider_shape11.png" alt="contact-bg-an-01" /></div>
            <div className="container">
              <div className="row justify-content-center align-items-center">  
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="s-about-img2 p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                    <img src="img/features/skill_img.png" alt="img" />   
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="skill-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                    <div className="section-title section-title2 pb-25">  
                      <h5 style={{color: 'rgba(33, 54, 73, 1)' }}>Our Skill</h5>
                      <h2>Education is the  better foundation society</h2>                                   
                    </div>
                    <p>We have been operating for over a decade, providing top-notch  our clients and building a strong track record in the industry.</p> 
                  </div>
                </div>
              </div>
              <div className="row justify-content-center pt-60 align-items-center">  
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="skill-box text-center mb-30">
                    <div className="icon">
                      <img src="img/icon/skill-icon-01.png" alt="img" />   
                    </div>
                    <div className="text">
                      <strong>Immersion</strong>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="skill-box text-center mb-30">
                    <div className="icon">
                      <img src="img/icon/skill-icon-02.png" alt="img" />   
                    </div>
                    <div className="text">
                      <strong>History Lectures</strong>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="skill-box text-center mb-30">
                    <div className="icon">
                      <img src="img/icon/skill-icon-03.png" alt="img" />   
                    </div>
                    <div className="text">
                      <strong>Writing Workshops</strong>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="skill-box text-center mb-30">
                    <div className="icon">
                      <img src="img/icon/skill-icon-04.png" alt="img" />   
                    </div>
                    <div className="text">
                      <strong>Career Counseling</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* skill-area-end */}
          {/* galler-area */}
          <section className="galler-area pt-120 pb-90 p-relative fix">  
            <div className="container">
              <div className="row"> 
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-30">
                  <div className="galler-box-title wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                    <div className="section-title">  
                      <h5>Our Gallery</h5>
                      <h2>Knowledge is power get educated</h2>   
                      <p>We have been operating for over a decade, providing top-notch  our clients and building a strong track record in the industry.</p>  
                    </div>
                    <div className="slider-btn mt-30">                                          
                      <a href="about.html" className="btn">Read More</a>				
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-30">
                  <div className="galler-box wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                    <div className="featur-img">
                      <img src="img/gallery/gallery-img-1.png" alt="img" />   
                    </div>
                    <div className="text">
                      <p>Test preparation</p>
                      <h3><a href="#">A lifelong investment</a></h3>
                    </div>
                  </div>                          
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12  mb-30">
                  <div className="galler-box">
                    <div className="featur-img">
                      <img src="img/gallery/gallery-img-2.png" alt="img" />   
                    </div>
                    <div className="text">
                      <p>Essay editing</p>
                      <h3><a href="#">Gateway To Success</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12  mb-30">
                  <div className="galler-box">
                    <div className="featur-img">
                      <img src="img/gallery/gallery-img-3.png" alt="img" />   
                    </div>
                    <div className="text">
                      <p>Essay editing</p>
                      <h3><a href="#">Innovation Progress</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12  mb-30">
                  <div className="galler-box">
                    <div className="featur-img">
                      <img src="img/gallery/gallery-img-4.png" alt="img" />   
                    </div>
                    <div className="text">
                      <p>Math tutoring</p>
                      <h3><a href="#">Expanding Horizons</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                  <div className="galler-box">
                    <div className="featur-img">
                      <img src="img/gallery/gallery-img-5.png" alt="img" />   
                    </div>
                    <div className="text">
                      <p>music lessons</p>
                      <h3><a href="#">Success &amp; Education</a></h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* brand-area */}
              {/* brand-area-end */}      
            </div>
          </section>
          {/* skill-area-end */}
          {/* Benefits-area */}
          <section className="benefits-area benefits-area2  after-none contact-bg pt-120 pb-120 p-relative fix">
            <div className="animations-01"><img src="img/bg/slider_shape13.png" alt="contact-bg-an-01" /></div>
            <div className="animations-02"><img src="img/bg/slider_shape12.png" alt="contact-bg-an-01" /></div>
            <div className="container">             
              <div className="row align-items-center">						
                <div className="col-lg-5 col-md-12 order-1">
                  <img src="img/bg/benefits-img2.png" alt="img" data-aos="fade-right" data-aos-duration={1000} />               
                </div>
                <div className="col-lg-7 col-md-12 order-2 pl-60">
                  <div className="section-title section-title2 mb-40">  
                    <h5 style={{color: 'rgba(33, 54, 73, 1)' }}>Why Chose Us</h5>
                    <h2>Education Building a brighter tomorrow</h2> 
                  </div>
                  <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1600}>
                    <ul className="nav nav-tabs" data-aos="fade-up" data-aos-duration={1400}>
                      <li>
                        <span className="active" id="home-tab" data-bs-toggle="tab" data-bs-target="#voverview">Benefits</span>
                      </li>
                      <li>
                        <span id="profile-tab" data-bs-toggle="tab" data-bs-target="#degre">Spirituality </span>
                      </li>
                      <li>
                        <span id="contact-tab" data-bs-toggle="tab" data-bs-target="#vgallery">SkillMaster</span>
                      </li>
                      <li>
                        <span id="sdev-tab" data-bs-toggle="tab" data-bs-target="#sdev">Self Development</span>
                      </li>
                    </ul>
                    <div className="tab-pane fade show active" id="voverview" role="tabpanel">
                      <div className="benefits-text">   
                        <p>Education is a vital aspect of human development, providing individuals knowledge a skills, and opportunities to acquire new  universities info rma tion.e ncompasses formal lear  institutions such</p>
                        <p>Education is a vital aspect of human development, providing individuals with knowledge a skills, and opportunities to acquire new infor mation.enco mp as ses formal ld opportun</p>
                      </div> 
                    </div>
                    <div className="tab-pane fade" id="degre" role="tabpanel">
                      <div className="benefits-text">   
                        <p>Education is a vital aspect of human development, providing individuals knowledge a skills, and opportunities to acquire new  universities info rma tion.e ncompasses formal lear  institutions such</p>
                        <p>Education is a vital aspect of human development, providing individuals with knowledge a skills, and opportunities to acquire new infor mation.enco mp as ses formal ld opportun</p>
                      </div> 
                    </div>
                    <div className="tab-pane fade" id="vgallery" role="tabpanel">
                      <div className="benefits-text">
                        <p>Education is a vital aspect of human development, providing individuals knowledge a skills, and opportunities to acquire new  universities info rma tion.e ncompasses formal lear  institutions such</p>
                        <p>Education is a vital aspect of human development, providing individuals with knowledge a skills, and opportunities to acquire new infor mation.enco mp as ses formal ld opportun</p>
                      </div> 
                    </div>
                    <div className="tab-pane fade" id="sdev" role="tabpanel">
                      <div className="benefits-text">  
                        <p>Education is a vital aspect of human development, providing individuals knowledge a skills, and opportunities to acquire new  universities info rma tion.e ncompasses formal lear  institutions such</p>
                        <p>Education is a vital aspect of human development, providing individuals with knowledge a skills, and opportunities to acquire new infor mation.enco mp as ses formal ld opportun</p>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Benefits-area-end */}
          {/* pricing-area */}
          <section id="pricing" className="pricing-area pt-120 pb-180 fix p-relative">
          </section>
          {/* pricing-area-end */}
          {/* video-area */}
          <section id="video" className="video-area p-relative">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="s-video-wrap" style={{backgroundImage: 'url(img/bg/video-img.png)'}}>
                    <div className="s-video-content text-center">                                   
                      <h6><a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="popup-video mb-50"><img src="img/bg/play-button3.png" alt="circle_right" /></a></h6> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* video-area-end */}
          {/* contact-area */}
          <section id="contact" className="contact-area after-none contact-bg  pb-120 p-relative fix">
          </section>
          {/* contact-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer */}
       <Footer/>
        {/* footer-end */}
      </div>
    )
}

export default Home
