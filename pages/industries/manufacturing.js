import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const Startup = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 for Manufacturing | Dyanmics Square UK</title>
        <meta
          name="description"
          content="Microsoft Dynamics 365 for Manufacturing optimises production processes, simplifies operations, and improve collaboration for efficient and agile manufacturing ecosystems."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/manufacturing/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qLjfAsQRWaM"
        onClose={() => setOpen(false)}
      />
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Microsoft Dynamics 365 
                  <br />
                  for Manufacturing
                </h1>
                <p>Drive Sustainability In Your Manufacturing Operations</p>
                <p>
                  Keep track of your production lines and bring transparency
                  with Microsoft Dynamics 365 for Manufacturing.
                </p>
                <br />
                <div className="text-center text-lg-start">
                <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Schedule a Demo</span>
                      </a>
                    </Link>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <Image
                  src="/img/Dynamics-manufacturing-Banner.png"
                  alt="Dynamics-manufacturing-Banner"
                  width={790} height={470}

                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>Dynamics 365 for Manufacturing: An all-in-one solution for your Production Business</h2>
              <p>
                Connect your systems and enable seamless distribution across
                your manufacturing unit to simplify your end-to-end
                manufacturing practices—from the production line, customer
                management to real-time reporting insights with Manufacturing
                ERP+ <Link href ="/products/microsoft-dynamics-crm/">CRM solutions</Link>.
              </p>
              <p>
                Microsoft Dynamics 365 for Manufacturing helps elevate your
                operations, support your manufacturing continuity, ensure
                real-time access into the entire supply chain and distribution
                process, and scale your business leveraging cloud facilitation.
              </p>
              <p>
                With AI insights and 360-degree data view, bring transparency in
                your field service, and enable smarter maintenance to impact the
                overall manufacturing impact throughout your organization.
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                  Why Microsoft
                  <br />
                  Dynamics 365 <br />
                  for Manufacturing?
                </h2>
                <p>
                  Dynamics 365 Manufacturing ERP, CRM and BI solutions helps to
                  unify manufacturing operations, enables better visibility, and
                  boosts customer engagement while minimizing downtime and
                  maximizing resource utilization which in turn impacts the
                  productivity level as well as scalability.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Centralize your product information while improving
                        quality, safety, and quality training practices across
                        your manufacturing unit. Effectively plan and drive
                        seamless distribution. Even you can re-plan production
                        and distribution to fulfill the continuously changing
                        customer demands with timely effect.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Forecast demand leveraging AI algorithms, simplify your
                        procurement processes while eliminating redundant and
                        repetitive efforts. Drive simplified and integrated
                        warehousing to ensure high availability up to 99.9
                        percent uptime.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Connect your manufacturing units leveraging AI and IoT
                        efficiencies. Streamline sales data and enable
                        omnichannel experience throughout your manufacturing
                        flow. Seamlessly manage Bills of Materials, Capacity
                        Planning, optimize stock, and keep running your
                        production lines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="call_to_action call_to_action-height">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="call_to_action-right over-img">
                  <img src="/img/MaskGroup8.png" alt="images" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>Connect with our Dynamics 365 Manufacturing Expert Today! </h3>
                  <p>Find your manufacturing needs and drive continuous business growth with advanced ERP capabilities.  </p>
                  <div className="m-o-t m-o-t-inde">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Schedule a Demo!</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="industry_service_bottomss">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8">
                <header className="section-header">
                  <h2>Microsoft Dynamics 365 For Manufacturing Features</h2>
                </header>
              </div>
            </div>
            <div className="row position-relative g-5">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/designing-icon.svg"
                      alt="Design-and-Training"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Design & Training </h3>
                    <p>
                      Introduce new product range and service rapidly.
                      Streamline change management while improving safety,
                      boosting quality, and maximizing productivity.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/planning-icon.svg"
                      alt="Planning-and-Sourcing"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Planning & Sourcing</h3>
                    <p>
                      Plan production cycles and enable a seamless distribution
                      process. Leveraging the AI-enriched insights; forecast
                      demand and simplify the procurement process.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Production-Mnagement.svg"
                      alt="Production-Mnagement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Production Management</h3>
                    <p>
                      Bring agility and sustainability in your manufacturing
                      using IoT & AI. With intelligent manufacturing solutions,
                      satisfy the continuously changing customers' needs.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Distribution-Delivery.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Distribution & Delivery </h3>
                    <p>
                      Track inventory levels, manage warehousing, and ful fill
                      orders effectively using real-time data. Enable seamless
                      distribution through Dynamics 365 for Distribution.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Asset-Management.svg"
                      alt="Asset-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Asset Management</h3>
                    <p>
                      Connect and manage your assets by Increasing resilience.
                      Enable predictive maintenance and process automation with
                      intelligent manufacturing solutions.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Sales-Management.svg"
                      alt="Sales-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Sales Management</h3>
                    <p>
                      Accelerate lead generation and identify opportunities.
                      Streamline & automate sales data and drive omnichannel
                      experience to attain maximized results.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/connect-collaborate.svg"
                      alt="connect-collaborate"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Management</h3>
                    <p>
                      Build and sustain your massive customer relationship with
                      real-time predictive insights. Personalize your customer
                      engagement to drive sales.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Service-Management.svg"
                      alt="Service-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Service Management</h3>
                    <p>
                      <Link href="/our-services/dynamics-365-implementation-services/">Implementing Dynamics 365</Link> solutions like Business Central for manufacturing
                      companies helps to provide an exceptional customer
                      experience while enabling proactive field service and
                      remote support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row movi-up ">
              <div className="col-lg-12">
                <div className="center-pic">
                  <img src="/img/Group-948.png" alt="Group-948.png" />
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-items-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <Image
                      src="/img/manufacturing-side.png"
                      className="fix-im"
                      alt="manufacturing side"
                      width={553} height={531}
                    />
                    <div className="video-ytube">
                      <div className="popup-btn">
                        <Link href="#javascript:void(0)">
                          <a onClick={() => setOpen(true)}>
                            <img
                              src="/img/video-Manufacturing.png"
                              alt="video-Manufacturing"
                            />
                            <span className="cente-icns">
                              <img src="/img/play_icons.svg" alt="play_icons" />
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>
                    How Dynamics 365 for Manufacturing Can Evolve Your Business
                    Values
                  </h2>
                  <p>
                    If you want to get in-depth insights on how implementing
                    Dynamics 365 for manufacturing can help to streamline their
                    process, request your demo today.
                  </p>
                  <div className="text-lg-start">
                    <Link  href="#exampleModal">
                      <a
                      data-bs-toggle="modal"
                     
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo</span></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="call-to-action-content">
                  <h3>Digitalise and simplify your complex manufacturing business with Dynamics 365 for Manufacturing</h3>
                  <p>Connect with a Dynamics 365 Manufacturing consultant to implement a tailored ERP solution for your unique manufacturing business. </p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <Link href="#exampleModal">
                      <a
                      data-bs-toggle="modal"
                      
                      className="btn-get-started scrollto"
                    >
                      <span>Tal to our experts!</span></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Have you got <br /> questions about Dynamics 365 Manufacturing?</h2>
                <p>Click through to our FAQ for the best answers!</p>
              </header>
            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >What is Dynamics 365 for Manufacturing? </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p> Dynamics 365 for Manufacturing is a powerful and seamless application to monitor the entire manufacturing process and enhance the overall efficiency of the plant. It gathers data in real-time and lets the employee make data-driven decisions. </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >Does Dynamics 365 have manufacturing? </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, <Link href="/products/microsoft-dynamics-365/"><a>Dynamics 365</a></Link> comes with various applications to manage different verticals of a business, which include manufacturing, finance, supply chain management, and warehouse operations. The manufacturing section empowers the users to streamline all processes, from picking up the raw material to checking the quality. </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >What are the different types of manufacturing processes in D365? </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>D365 for manufacturing consists of different processes that include job shop, repetitive job shop, make-to-order, make-to-stock, configure-to-order, engineer-to-order, mixed mode, and process manufacturing. </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >How can Dynamics 365 for Manufacturing help improve collaboration? </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 is a flexible solution that offers on-premises and cloud deployment options. And, with <Link href="/industries/microsoft-cloud-for-manufacturing/"><a>Dynamics 365 for cloud manufacturing</a></Link>, you can empower your team to collaborate with different departments as well as employees to make data sharing more efficient and effective.  </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >What are the benefits of using Dynamics 365 for manufacturing? </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Manufacturing offers numerous benefits to its users. You can streamline change management, improve quality, enable predictive maintenance, build a seamless distribution process, build strong relationships with customers, track inventory levels in real-time, and offer an outstanding customer experience. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h3>EXPLORE Other Industries</h3>
            </header>
            <div className="row mobile-margin-01">
              <div className="col-lg-12">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, FreeMode, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <a href="/food-and-beverages">
                              <div className="img-wrp">
                                <img
                                  src="/img/Food-and-beverage.svg"
                                  alt="Food-and-beverage"
                                />
                              </div>
                              <div className="text-wrp-content">
                                <h3>Food & Beverages</h3>
                                <p>
                                  Efficiently manage your inventory and supply
                                  chain by implementing Dynamics 365 for Food
                                  and Beverages business.
                                </p>
                                <span>Explore Now</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/microsoft-cloud-for-nonprofit">
                                <div className="img-wrp">
                                  <img
                                    src="/img/NotforProfit.svg"
                                    alt="NotforProfit"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Not for Profit</h3>
                                  <p>
                                    Bring Transparency And Drive Efficiency In
                                    Your Non-Profit Organization With Microsoft
                                    Dynamics 365 For Charities.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/ecommerce">
                                <div className="img-wrp">
                                  <img
                                    src="/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>E-Commerce</h3>
                                  <p>
                                    Optimize Your End-To-End Ecommerce Processes
                                    And Improve Your Customer Experience.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/professional-services">
                                <div className="img-wrp">
                                  <img
                                    src="/img/proffesional-service.svg"
                                    alt="proffesional-service"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Professional Services</h3>
                                  <p>
                                    Streamline And Efficiently Manage Your
                                    Professional Services with Microsoft
                                    Dynamics 365 Business Applications.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/microsoft-cloud-for-manufacturing">
                                <div className="img-wrp">
                                  <img
                                    src="/img/Food-and-beverage.svg"
                                    alt="Food-and-beverage"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Manufacturing & Distribution</h3>
                                  <p>
                                    Keep track of your production lines and
                                    bring transparency with Microsoft Dynamics
                                    365 for Manufacturing and Distribution.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/startups/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/start-up.svg"
                                    alt="start-up"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Startups</h3>
                                  <p>
                                    Leverage maximum possible resources to
                                    manage end-to-end business processes for
                                    your Startup with Microsoft Dynamics 365.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Startup;
