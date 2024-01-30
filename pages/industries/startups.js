import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Blog from "../../components/Blog";
import { Autoplay, FreeMode, Pagination } from "swiper";
const Startup = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
          Dynamics 365 For Startups &amp; Small Business | Dynamics Square
        </title>
        <meta
          name="description"
          content="Dynamics 365 for Startups - ERP, CRM, and business intelligence powered by Dynamics 365 and enabled by Dynamics Square, gold certified Industry Partner."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/startups/"
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
                  Dynamics 365
                  <br />
                  For Startups
                </h1>
                <p>
                  Leverage maximum possible resources to manage end-to-end
                  business processes for your Startup with <br />
                  Microsoft Dynamics 365.
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
                <Image
                  src="/img/industry-startup-banner.png"
                  alt="Dynamics 365 For Startups"
                  width={805} height={473}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>
                kickstart your startup
                <br />
                with microsoft dynamics 365
              </h2>
              <p>
                {" "}
                Speed up your processes, accelerate your productivity, and
                support your continuous add-on practices for your startup
                business. Simply upgrade your system to enlarge your business
                capabilities and support your current as well as a futuristic
                workflow with Microsoft Dynamics 365 solutions configured and
                highly customized suited to your specific domain and operational
                flow.
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                  Why Choose
                  <br />
                  Dynamics 365 For <br />
                  Startups ?
                </h2>
                <p>
                  Support your startup ideation and maximize your growth
                  potential with customized offerings of Microsoft Dynamics 365
                  for small business. Maximize your resource utilization and
                  drive scalable growth strategy in your startup business.
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
                        Leverage potential tools and integrate with your
                        existing system to start running your business with an
                        efficient flow from the very initial stage.
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
                        Bring continuous flow with customized technical
                        sessions, content help, and online mentorship with the
                        help of Microsoft 365 Startup solutions.
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
                        Start outreaching your potential customer base utilizing
                        the highly customized and integrated system suited to
                        your hourly business needs.
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
                  <img src="/img/MaskGroup8.png" alt="imagea" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>
                    Implement
                    <br />
                    Dynamics 365 for Startups!
                  </h3>
                  <p>
                    Share your customized process flow to get personalized
                    solution
                    <br />
                    for your startup business.
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
          <header className="section-header">
            <h2>
              Build & Run Your Business With Dynamics
              <br />
              365 Startup Solutions
            </h2>
            <br />
          </header>
          <div className="container">
            <div className="row g-xxl-0">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-seamless-customisation.svg"
                      alt="icons-_seamless customisation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Seamless Customization</h3>
                    <p>
                      Manage your specific startup practices leveraging highly
                      configurable and seamlessly customizable Dynamics 365 for
                      the startup industry.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_centralised data.svg"
                      alt="centralised data"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Centralize Data</h3>
                    <p>
                      Get a complete view of real-time data including customer
                      insights, sales, and reports & analytics that drives
                      innovation.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_manage customer.svg"
                      alt="icons-_manage customer"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Manage Customers</h3>
                    <p>
                      Connect, engage, and provide seamless support &
                      personalized experience to your customers with Dynamics
                      365 for Startups.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_decison making.svg"
                      alt="icons-_decison making"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Decision Making</h3>
                    <p>
                      By leveraging real-time data efficiency of Microsoft
                      Dynamics 365, support instant decision making to overcome
                      startup challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_connect collobrate.svg"
                      alt="icons-_connect collobrate"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Connect & Collaborate</h3>
                    <p>
                      Dynamics 365 for small business levels enable people to
                      connect and collaborate to drive innovation and
                      productivity.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_drive automation.svg"
                      alt="icons-_drive automation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Drive Automation</h3>
                    <p>
                      Improve your entire organizational flow with AI-equipped
                      practices and drive automation over a cloud-facilitated
                      platform.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_enterprise mobility.svg"
                      alt="icons-_enterprise mobility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Enterprise Mobility</h3>
                    <p>
                      Streamline and transform your entire organizational data
                      to drive transparency and impact enterprise mobility.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_Predict Opportunity.svg"
                      alt="icons-_Predict Opportunity"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Predict Opportunity</h3>
                    <p>
                      With real-time key data, analytics, and insights, evaluate
                      and analyze the current situations and predict future
                      opportunities.
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
                    Experts at Dynamics Square can embed your system to support
                    your entire startup practices.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Get Started Now</span>
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
              <div className="col-lg-6">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <Image
                      src="/img/startup-side.png"
                      className="fix-im"
                      alt="bisin_leftimg"
                      width={546} height={524}
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <Link href="#javascript:void(0)">
                          <a onClick={() => setOpen(true)}>
                            <Image
                              src="/img/videoForstartups.png"
                              alt="videoForstartups"
                              width={390} height={259}
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
                    How Dynamics 365
                    <br />
                    Can Enable Transformation
                    <br />
                    in Your Startup?
                  </h2>
                  <p>
                    Empower maximum resource utilization and boost your process
                    flow with simplified and highly configured Microsoft
                    Dynamics 365 startup solutions.
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
                          <div className="industries-list-more">
                            <Link href="/industries/food-and-beverages/">
                              <a>
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
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/microsoft-cloud-for-nonprofit/">
                                <a>
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
                                      Your Non-Profit Organization With
                                      Microsoft Dynamics 365 For Charities.
                                    </p>
                                    <span>Explore Now</span>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/ecommerce/">
                                <a>
                                  <div className="img-wrp">
                                    <img
                                      src="/img/Ecommerce.svg"
                                      alt="Ecommerce"
                                    />
                                  </div>
                                  <div className="text-wrp-content">
                                    <h3>E-Commerce</h3>
                                    <p>
                                      Optimize Your End-To-End Ecommerce
                                      Processes And Improve Your Customer
                                      Experience.
                                    </p>
                                    <span>Explore Now</span>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/professional-services/">
                                <a>
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
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/microsoft-cloud-for-manufacturing/">
                                <a>
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
                              </Link>
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
              <h2>Explore Our Recent Blogs & Resources</h2>
              <p>
                Whether you are a start-up, an SMB, or an enterprise, the
                Dynamics Square blog is the best place to get inspired and learn
                more about Microsoft Business Applications.
              </p>
            </header>
            <div className="row top-2 gx-5">
              <Blog />
              <div className="col-lg-6 align-self-center">
                <Image src="/img/industry-startup-banner.png" alt="startup-banner"   width={805} height={473} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Startup;
