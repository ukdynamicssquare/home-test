import Head from 'next/head'
import FormFooterSubscriber from '../components/FormFooterSubscriber';
import Form from "../components/Form";
import Link from "next/link"; 
import Image from 'next/image';
const ContactUs = () => {
    return (
      <>
        <Head>
        <title>Contact Dynamics Square for D365 Advice</title>
        <meta
          name="description"
          content="Dynamics Square's Dyanmic 365 consultants are available to give experienced cloud IT guidance for your company."
        />
         <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/contact-us/"
        />
        </Head>
        <main>
        <section className="Solution-banner hero-1 hero about-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <h1>Contact Us</h1>
                <p>
                  Our IT experts are here to help provide <br />
                  Microsoft Business Apps support
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <Image
                  src="/img/contact-us-pic.png"
                  alt="contact-us-pic"
                  width={692} height={526}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cont-into">
          <div className="container">
            <header className="section-header">
              <h2>Get in touch with Us</h2>
              <p>
                Dynamics Square assists brands in deploying Microsoft Business
                Applications.
                <br />
                Let's chat if you are interested in learning more.
              </p>
            </header>
            <div className="row neew-pd0 justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 align-self-center">
                    <div className="addre-left">
                      <p>
                        Kemp House, 124 City Road,
                        <br />
                        London, EC1V 2NX, U.K
                      </p>
                      <a
                        href="https://g.page/dynamics-square-london?share"
                        target="_blank"
                      >
                        Locate Us on Google
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-12 align-self-center">
                    <div className="addre-rigt">
                      <div className="cont-info">
                        <span style={{color:'#343434',fontWeight:'500'}}>Sales Support: </span>
                        <span>+44 (0) 207 193 2502 </span>
                      </div>
                      <div className="cont-info">
                        <span style={{color:'#343434',fontWeight:'500'}}>Technical Support: </span>
                        <span>+44 (0) 207 097 8987 </span>
                      </div>
                      <div className="cont-info">
                        <span>
                        <span style={{color:'#343434',fontWeight:'500'}}>Email Us: </span>
                          <a href="mailto:info@dynamicssquare.co.uk">
                            info@dynamicssquare.co.uk
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cont-ff">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-10 col-md-10">
                <div className="row g-0 extra-height">
                  <div className="col-md-6 col-lg-6">
                    <div className="main-form-wrper-common">
                      <Form />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <img
                      src="/img/contactfor-sede-img.jpg"
                      alt="contactfor-sede-img"
                      className="image-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-bgs">
          <div className="container">
            <header className="section-header">
              <h2>Our offices around the world</h2>
            </header>
            <div className="row hero-bg-3">
              <div className="col-md-12">
                <ul
                  className="nav nav-tabs justify-content-center contact-tbs"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      UK
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {" "}
                      USA
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-1"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-1"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Canada
                    </button>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-2"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-2"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Europe
                    </button>
                  </li> */}
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-3"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      India
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-4"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-4"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Singapore
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-5"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-5"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Australia
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 124 City Road, London, EC1V 2NX, U.K
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            International House 61 Mosley Street, Manchester, M2
                            3HZ, United Kingdom
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 747 927 3380</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                      <div className="cont-hh">
                          <h3>Birmingham</h3>
                        </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                Izabella House, 24 - 26 Regents Place, City Centre, Birmingham
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                <a target="_self" rel="" href="tel:+441213182798">
                    +44 121 318 2798
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>California</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            2372 Morse Ave, Ste. 310 Irvine, CA 92614
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 213 784 0845</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Texas</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            10101 Southwest Freeway Houston, TX 77074
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 281 899 0865</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Illinois</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                          111 North Wabash Ave. Ste.100
                          The Garland Building
                          Chicago, IL 60602
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          
                          <div className="content-right">+1 312 488 1043</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>New Jersey</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                          500 Paterson Plank Road
                          Union City, NJ 07087
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 732 893 0520</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Massachusetts</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                          867 Boylston Street Boston, MA 02116

                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 617 765 7669</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                            info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-1"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>British Columbia</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            398-2416 Main St. Vancouver BC V5T 3E2
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 778 381 5388</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Ontario</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            800 Steeles Ave. W. #B10155 Thornhill, ON. L4J
                            7L2
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 289 807 0740</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="tab-pane fade"
                    id="contact-2"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Utrechtseweg 341, 3818 EL Amersfoort, Netherlands
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+31 970 102 57044</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    className="tab-pane fade"
                    id="contact-3"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>India</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            1114, JMD Megapolis, Sector 48, Gurugram, Haryana
                            122018
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+91 124 495 71650</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-4"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Singapore</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            #10-11, International Plaza, 10 Anson Rd, Singapore
                            079903
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+65 6232 6935</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-5"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Sydney</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            2/4A Meridian Place Bella Vista NSW 2153, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 2 8607 5117</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Brisbane</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Suite 105, 42 Manilla Street East Brisbane, QLD
                            4169, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 7 3506 2909</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Melbourne</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Suite 4847, 805/220 Collins Street Melbourne VIC
                            3000, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 3 8400 4784</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Perth</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Level 24, 77 St Georges Terrace, Perth, WA 6000,
                            Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 8 6219 8209</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  
 

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
                <Link href="/" className="logo d-flex align-items-center">
                  <Image
                      src="/img/dynamics_square_tm_logo_footer.svg"
                      alt="Dynamics Square TM Logo"
                    style={{marginBottom:"20px"}}
                    width={230} height={81}
                  />
                </Link>
                <p>
                  Dynamics Square is UK's leading Microsoft Gold Certified
                  Partner that caters to the needs of orgnisations who can
                  source next-gen Microsoft Business Apps from our highly
                  skilled Microsoft consultants.
                </p>
                <Image
                  src="/img/microsoft-partner-footer.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width={230} height={200}
                /><br />
                <Image
                  src="/img/Tech-For-Socil-Impact.svg"
                  alt="Tech-For-Socil-Impact"
                  className="footer-img m-r"
                  width={230} height={120}
                /> <br />
                 <Image
                  src="/img/UK-badge.png"
                  alt="UK badge"
                  className="footer-img"
                  width={98} height={98}
                />
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>BUSINESS APPS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/dynamics-365-business-central/">
                      Business Central
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-365-finance/">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-365-sales/">
                      Sales
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-power-bi/">
                      Power BI
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-azure/">Azure IoT</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-crm/">
                      CRM
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>QUICK LINKS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/about-us/">About us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/why-us/">Why Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/our-services/">Our Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/partner/">Our Partners</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/contact-us/">Contact Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a
                      href="https://www.dynamicssquare.co.uk/blog/"
                      rel=""
                      target="_self"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/privacy-policy/">Privacy policy</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/modern-slavery-act/">Modern Slavery Act</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 text-md-start">
                <p>CONNECT WITH US</p>

                <div className="social-links mt-3">
                  <a
                    target="_blank"
                    rel=""
                    href="https://twitter.com/dsquare_uk"
                    className="twitter"
                    aria-label="Twitter" 
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.facebook.com/dynamicssquareuk/"
                    className="facebook"
                    aria-label="Facebook" 
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.instagram.com/dynamicssquareuk/"
                    className="instagram"
                    aria-label="Instagram" 
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.linkedin.com/showcase/dynamics-square-uk/"
                    className="linkedin"
                    aria-label="Linkedin" 
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                <div className="footer-bottm-subscriber">
                  <p>Subscribe Newsletter</p>
                  <span>
                    Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                    Offers And Much More!
                  </span>
                 <FormFooterSubscriber />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2023 Dynamics Square.</span>
            <div className="footer-extra-link">
              <Link href="/terms-of-use/">Terms of Use </Link>
              <Link href="/cookie-policy/">| Cookie </Link>
              {/* <Link href="/sitemap.xml">| Sitemap</Link> */}
            </div>
          </div>
        </div>
      </footer>
      <div className='call-bb-wr'>
      <button className="fixed-button wobble" type="button">
      <a href="tel:+442071932502" target="_self" aria-label="telephone"><i className="bi bi-telephone-fill"></i></a>
</button>

      </div>
      </>
    );
  };
  
  export default ContactUs;
  
