import React, { useState } from "react";
import Head from 'next/head';
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const NonProfits = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <title>Dynamics 365 for Nonprofits | Dynamics 365 for Charities</title>
<meta name="description" content="Get Microsoft Dynamics 365 for nonprofits to manage charity, NFP accounts, financial grants, global payments, expenses, payroll activities, and more crucial activities."/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/industries/non-profits/" />
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
                  For NonProfit
                </h1>
                <p>Manage Funds, Track Resources, and Streamline Manpower to drive full Transparency and Growth with Microsoft Dynamics 365 For Nonprofits. </p>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Let's Get Started! </span></a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <Image
                  src="/img/Dynamics-non-profit-Banner.png"
                  alt="Dynamics-non-profit-Banner"
                  width={790} height={470}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>Supercharge your Charity  <br />
With Dynamics 365 Solutions </h2>
              <p>
                <b>Engage volunteers, manage grants, track expenses, and share real-time reports with donors, stakeholders, or staff by implementing Microsoft Dynamics 365 for Nonprofits. </b>
                <br /> <br />Dynamics 365 for nonprofits empowers the charity with powerful tools to manage cash flow at each milestone of an investment or expense. Also, it lets you build real-time financial summary reports to inform donors, board members, and volunteers about different donations. <br /> <br />Dynamics 365 for charities offers an end-to-end donation management system to manage, track, and monitor all donations while monitoring expenses for report generation. Embedded with AI (artificial intelligence), it eliminates most of the monotonous and recurring tasks from the system to accelerate efficiency and productivity.
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                  Why Implement
                  <br />
                  Dynamics 365 <br />
                  for Nonprofits
                </h2>
                <p>Being a simple yet powerful solution to manage various charity tasks, <Link href="/products/microsoft-dynamics-365/"><a>Dynamics 365</a></Link> Nonprofits is the perfect solution for small, medium, and large charities. Implementing this solution, you can manage donations, NFP trust funds, general expenses, bank reconciliation, electronic payments, and staff payroll.</p>
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
                      <p>Manage donations, expenditures, resources, and manpower while reporting to board members in real-time. </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Automate cash-flow management and track restricted funds to focus more on charity growth rather than managing different core activities. </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Streamline budgeting to monitor all projects while distributing funds equally. </p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Transform the way you interact with donors and the public to build a sustainable relationship with them. </p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Utilise data to make actionable decisions for greater impact in society. </p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Ensure the success of your fund-raising campaign and drive real-time collaboration with volunteers to attain mission success. </p>
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
                  <h3>Talk to Our Nonprofit ERP or CRM Consultant </h3>
                  <p>Let's communicate and discuss the core responsibilities of your charity to drive smooth marketing and fundraising activities. </p>
                  <div className="m-o-t m-o-t-inde">
                    <Link href="#exampleModal"><a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo </span></a>
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
              <h2>Microsoft Dynamics 365 For Nonprofits Features </h2>
            </header>
              </div>
            </div>
            <div className="row position-relative g-5">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent-Management-1.svg"
                      alt="icons-nonprofits_Constituent-Management-1"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Unified Data Dashboard </h3>
                    <p>Get a complete, holistic view of your entire charity through a single, unified dashboard. You can avail yourself of data like donation history, marketing campaigns, available resources, and more. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Awards-Management.svg"
                      alt="icons-nonprofits_Awards-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Seamless Collaboration </h3>
                    <p>Being a cloud-based solution, it offers a collaborative platform where donors, employees, and stakeholders can communicate together, anytime and anywhere. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Fundraising.svg"
                      alt="Fundraising"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Global Data Access  </h3>
                    <p>You can access the data, track available resources, monitor donations, and get real-time reporting 24 hours a day, whenever needed. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_program-delivery-1.svg"
                      alt="Program Delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Funds Management </h3>
                    <p>You can track the receipt of funds, allotment, and distribution - from start to finish. Also, you can set up fund reminder automation to receive recurring grants before they expire. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/IATI-Processes.svg"
                      alt="IATI-Processes"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Fundraising & Membership Management </h3>
                    <p>You can access a <Link href="/products/dynamics-365-non-profit-accelerator/"><a>nonprofit accelerator</a></Link> to track your high-end fundraising activities. Also, you can create different membership levels and track them in real time. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_CRM-integrator-1.svg"
                      alt="Finance & CRM Data Integrator"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Resource Management </h3>
                    <p>Manage and allot resources to different projects based on their requirements. Also, you can track the restricted funds and distribute them wherever required. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Assessment-Management.svg"
                      alt="Assessment-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Data Reporting </h3>
                    <p>Build real-time reports to get essential insights into the nonprofit organisation. This data will empower you to make actionable decisions with greater impact. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Project-Management-Program-Design.svg"
                      alt="Project-Management-Program-Design"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Donation & Award Management </h3>
                    <p>Get a single, real-time view of your donations and award data while tracking them with Dynamics 365 for non-profits. </p>
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
                      src="/img/non-profit side.png"
                      className="fix-im"
                      alt="non-profit side"
                      width={553} height={548}
                    />
                    <div className="video-ytube">
                      <div className="popup-btn">
                        <Link
                          href="#javascript:void(0)"><a
                          onClick={() => setOpen(true)}
                        >
                          <Image
                            src="/img/Video-Non Profit.png"
                            alt="Video-Non Profit"
                            width={390} height={259}
                          />
                          <span className="cente-icns">
                            <img
                              src="/img/play_icons.svg"
                              alt="play_icons"
                            />
                          </span></a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>Boost the Cash Flow with Microsoft Dynamics 365 for Non-profit </h2>
                  <p>Accelerate and streamline the cash flow while distributing the funds for the right cause. Want to know how? </p>
                  <div className="text-lg-start mm-t">
                    <Link href="#exampleModal"><a
                      data-bs-toggle="modal"
                  
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo Today! </span></a>
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
              <div className="col-lg-12">
                <div className="call-to-action-content">
                  <h3>Implement Technology to <br /> Make a Significant Impact on society. </h3>
                  <p>Management of charity processes isn't an easy task as it requires less resources, less manpower, and less funds. With the scarcity of resources, there remains pressure on charities to perform better than expected. </p>
                  <p>The <Link href="/our-services/dynamics-365-implementation-services/"><a></a></Link> of modern solutions, like Dynamics 365, can empower you to leverage the power of technology for your nonprofit's growth. It lets you manage your charity, NFP accounts, financial grants, global payments, promote collaboration, track expenses, monitor staff activities, and more crucial activities. </p>
                  <p>Leverage the trust of Microsoft Dynamics 365 to make a remarkable impact on society.</p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <Link href="#exampleModal"><a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo Now! </span></a>
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
              <h2>EXPLORE Other Industries</h2>
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
                            <Link href="/food-and-beverages/">
                              <a><div className="img-wrp">
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
                              </div></a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/ecommerce/">
                                <a><div className="img-wrp">
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
                                </div></a>
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
                                <a><div className="img-wrp">
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
                                </div></a>
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
                                <a><div className="img-wrp">
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
                                </div></a>
                              </Link>
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

export default NonProfits;
