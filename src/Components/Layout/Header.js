import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {

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
      <header className="header-area header">  
          <div id="header-sticky" className="menu-area">
            <div className="container">
              <div className="second-menu">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <a href="index.html"><img src="img/logo/logo2.png" alt="logo" /></a>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7">
                    <div className="main-menu text-center text-xl-right">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-sub">
                            <a onClick={reloadHomePage}>Home</a>
                          </li>
                          <li><a onClick={reloadAboutPage}>About Us</a></li>        
                          <li className="has-sub">
                            <a onClick={reloadCoursePage}>Courses</a>
                          </li>    
                          <li><a onClick={reloadContactPage}>Contact</a></li>                                               
                        </ul>
                      </nav>
                    </div>
                  </div>   
                  <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block text-right text-xl-right">
                    <div className="login mt-15 mb-15">
                      <ul>
                        <li><a href="#" className="menu-tigger"><i className="fal fa-search" /></a></li>
                        <li>
                          <div className="second-header-btn">
                            <a onClick={reloadContactPage} className="btn">admission open</a>
                          </div>
                        </li>
                      </ul>
                    </div>                               
                  </div>
                  <div className="col-12">
                    <div className="mobile-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header
