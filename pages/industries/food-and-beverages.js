import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Blog from "../../components/Blog";
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
        <meta charSet="utf-8" />
        <title>Microsoft Dynamics 365 for Food and Beverages Industry</title>
        <meta
          name="description"
          content="Enable quick adaption, simplify processes, and drive continuity throughout your organization with Dynamics 365 for Food and Beverages Industry Solutions."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/food-and-beverages/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/industries/food-and-beverages/" />
        <meta property="og:title" content="Microsoft Dynamics 365 for Food and Beverages Industry" />
        <meta property="og:description" content="Enable quick adaption, simplify processes, and drive continuity throughout your organization with Dynamics 365 for Food and Beverages Industry Solutions." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/food-and-beverages-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/industries/food-and-beverages/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 for Food and Beverages Industry" />
        <meta property="twitter:description" content="Enable quick adaption, simplify processes, and drive continuity throughout your organization with Dynamics 365 for Food and Beverages Industry Solutions." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/food-and-beverages-banner.png" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="hiaL1f4SQCQ"
        onClose={() => setOpen(false)}
      />
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Dynamics 365 <br />
                  For Food & Beverages
                </h1>
                <p>
                  Efficiently manage your inventory and supply chain by
                  implementing Dynamics 365 for Food and Beverages business.
                </p>
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
                <img
                  src="/img/food-and-beverages-banner.png"
                  alt="Dynamics 365 For Food & Beverages"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>
                Why Dynamics 365 for your <br />
                food & beverages industry?
              </h2>
              <p>
                Dynamics 365 for Food and Beverages business solution can be
                implemented to support your entire food & beverage management
                system. At Dynamics Square, we implement a highly customized
                solution for Food & Beverage industry helping brands to
                seamlessly manage their customers, ensure quality control, and
                drive desired outcomes while enabling process automation and
                real-time efficiency.
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                  How Dynamics 365
                  <br />
                  Food & Beverage ERP
                  <br />
                  Helps to Unify Your Business Practices
                </h2>
                <p>
                  Microsoft Dynamics 365 Food & Beverage ERP is designed to
                  connect, streamline, and drive end-to-end processes from human
                  resource management to financial management to warehousing,
                  distribution, and quality assurance. With real-time tracking
                  and depth insights, it allows enterprises to make profitable
                  decisions.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Dynamics 365 for Food and Beverages helps manufacturing
                        units to analyze demand, manage inventory levels, and
                        drive real-time financial visibility to minimize costs
                        and maximize outcomes.
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
                        Drive seamless ordering and delivery model by
                        implementing Dynamics 365 for Food and Beverages
                        industry. With improved insights into the warehousing
                        pipeline, instantly respond to fulfill timely changing
                        demands and customer anticipations.
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
                        Connect, communicate, and roll out effective business
                        strategy in your food and beverage operations with
                        Dynamics 365 Food & Beverage ERP.
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
                  <img src="/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>
                    Talk to <br />
                    Our Expert Team
                  </h3>
                  <p>
                    Talk to our Dynamics 365 expert to get the best solution for
                    your Food & Beverage industry.
                  </p>
                  <div className="m-o-t m-o-t-inde">
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
              </div>
            </div>
          </div>
        </section>
        <section className="industry_service_bottoms">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8">
                <header className="section-header">
                  <h2>
                    Microsoft Dynamics 365 For Food & Beverage industry Features
                  </h2>
                  <p>
                    Bring real-time transparency into every step of your goods
                    movement while minimizing the transportation cost and
                    maximizing efficiency.
                  </p>
                </header>
              </div>
            </div>
            <div className="row position-relative">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Distribution-Delivery.svg"
                      alt="Distribution-Delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Warehouse & Distribution Management</h3>
                    <p>
                      Bring real-time transparency into every step of your goods
                      movement while minimizing the transportation cost and
                      maximizing efficiency.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Asset-Management.svg"
                      alt="Asset-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Marketing & Sales</h3>
                    <p>
                      Track and manage all your customers' activities, marketing
                      campaigns, and sales pipeline leveraging a single
                      integrated system with Food & Beverage ERP.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Customer-Management.svg"
                      alt="Customer-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Management</h3>
                    <p>
                      Connect, engage, and sustain a healthy relationship with
                      your customers. Serve them a personalized deal with
                      Dynamics 365 for Food & Beverages.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Production-Mnagement.svg"
                      alt="Production-Mnagement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Manufacturing Management</h3>
                    <p>
                      Drive seamless manufacturing from planning & organizing to
                      production and supply. Keep tracing and stay updated with
                      your manufacturing operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Design-and-Training.svg"
                      alt="Design-and-Training"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Supply Chain Management</h3>
                    <p>
                      Streamline and bring transparency across your supply chain
                      pipeline and drive efficiency by implementing Dynamics 365
                      for Food & Beverages industry.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Service-Management.svg"
                      alt="Service-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Analytics & Insights</h3>
                    <p>
                      Make smarter yet productive data-driven decisions
                      instantly without waiting for manual reports leveraging
                      AI-equipped Dynamics 365 Food & Beverage ERP.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/predict-opportunity.svg"
                      alt="predict-opportunity"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Production & Quality Control</h3>
                    <p>
                      Have control over the right production cycle and maintain
                      the quality standards while increasing food safety and
                      enabling the right planning & execution strategy.
                    </p>
                  </div>
                </div>

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-ax-_sales-management.svg"
                      alt="Sales-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Financial Management</h3>
                    <p>
                      Keep real-time eyes on your every financial move. Drive
                      strategic flow from tax & duty management to discount
                      management, and more.
                    </p>
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
                  <h3>Talk to Us to Reveal Your Actual Requirements</h3>
                  <p>
                    Every specific industry comprises a different set of
                    practices and hence, requires a highly customized solution
                    to drive innovation, flexibility, and scalability. So, you
                    are one step away to start driving productive results. With
                    Microsoft Dynamics 365 Food & Beverage ERP, enterprises can
                    efficiently manage their end-to-end operational practices to
                    accomplish the desired results.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started </span>
                    </a>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-items-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/img/food and beverages- side.png"
                      className="fix-im"
                      alt="food and beverages- side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <Link href="#javascript:void(0)">
                          <a
                            onClick={() => setOpen(true)}
                          >
                            <img
                              src="/img/Video-Food And beerages.png"
                              alt="Video-Food And beerages"
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
                    How Dynamics 365 <br /> Food and Beverages <br />
                    Can Help to Elevate Your Business Results?
                  </h2>
                  <p>
                    Let's understand, how Microsoft Dynamics 365 for Food &
                    Beverages industry can simplify & automate your processes
                    and trigger your productivity.
                  </p>
                  <div className="text-lg-start mm-t">
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
              </div>
            </div>
          </div>
        </section>

        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h2>Explore Other Industries</h2>
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
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/microsoft-cloud-for-nonprofit/">
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
                              <a href="/industries/ecommerce/">
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
                              <a href="/industries/professional-services/">
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
                              <a href="/industries/microsoft-cloud-for-manufacturing/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/microsoft-cloud-for-manufacturing.svg"
                                    alt="microsoft-cloud-for-manufacturing"
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
                                  <img src="/img/start-up.svg" alt="start-up" />
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

        <section className="blogs-extra">
          <div className="container">
            <header className="section-header">
              <h2>
                Check out our Best Resources
                <br />
                for food and beverages
              </h2>
            </header>
            <div className="row top-2 gx-5">
              <Blog />
              <div className="col-lg-6 align-self-center">
                <img src="/img/n/Dynamics-food-beverages-Banner.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Startup;
