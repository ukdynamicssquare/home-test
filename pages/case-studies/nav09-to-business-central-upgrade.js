import Link from "next/link"; 
import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

const CaseStudyPasante = () => {
    return (
      <>
        <Head>
        <title>Dynamics NAV 2009 to Business Central On-Premise Upgrade</title>
        <meta
          name="description"
          content="A sexual wellness brand collaborated with Dynamics Square to enhance their system from Dynamics NAV 2009 to Business Central on-premises. Explore the case study to discover valuable insights. "
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/nav09-to-business-central-upgrade/"
        />
        </Head>
        <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>Dynamics NAV 2009 to Business Central On-Premises</h1>
                  <p>NAV 2009 to Dynamics 365 Business Central On-Premises Upgrade</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <Image
                  src="/img/Dynamics-365-Business-Central.png"
                  alt="business centeral implementation"
                  width={1024} height={597}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cast-studi-into">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row bg-case">
                <div className="col-lg-3 align-self-center">
                <img
                    src="/img/casestudy-pic.png"
                    alt="casestudy-pic"
                  />
                </div>
                <div className="col-lg-9">
                  <p>The company was established in 1992 and world's leading condom manufacturing British brand, fully established in 2000 to manufacture sexual health products. They provide the best sexual health products to consumers and inspire them to make better choices for their health. Also, they are in partnership with NHS (National Health Services) and NPOs (Non-profit organizations) to provide safe products to the mass. The generally exports its products to more than 45 countries globally. Even, it is the largest condom supplier to NHS and for many charity organizations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
          <header className="section-header">
            <h2>
              What are The <br />
              Business Challenges
            </h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/cast-stu-pic.png" alt="cast-stu-pic" width={484} height={407}/>
            </div>
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The company was not satisfied with the working of <Link href="/products/microsoft-dynamics-nav/"><a>Dynamics NAV</a></Link> 2009. They were looking for NAV 2009 to business central On-Premises ERP upgrade solution to manage some departments like finance, supply chain, and customer service.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>They were facing performance issues from NAV09. Their NAV versions perform slower in simple tasks like opening ledgers and exporting data. These tasks were impacting the performance of the users as well as the overall efficiency.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                    Their business was expanding, but the older version of NAV was not allowing them to scale in terms of technology and functionality. They want to upgrade their NAV version to{" "}
                      <Link
                        href="/products/dynamics-365-business-central/"
                        target="_blank"
                      >
                        Dynamics 365 Business Central,
                      </Link>{" "}
                      so that they can align with current market demands.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Due to the mandatory submission of VAT returns to HMRC, they were facing issues with NAV09 as it was not compatible with the new norms of the UK government.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <header className="section-header">
            <h2>Solution Delivered</h2>
            <p>Upgrading to Microsoft Dynamics 365 Business Central On-Premises Dynamics Square upgraded the ERP of the company from NAV 2009 to Business Central on-premises.</p>
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
                      200: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    slidesPerView={3}
                    spaceBetween={15}
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
                          <div className="img-wrp">
                            <img
                              src="/img/material-lightbulb-outline.svg"
                              alt="Food-and-beverage"
                            />
                          </div>
                          <div className="text-wrp-content">
                            <p>
                              <Link href="/">Dynamics Square</Link> upgraded
                              the ERP of the company from NAV09 to Microsoft
                              Dynamics 365 Business Central On-premise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="NotforProfit"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                Dynamics 365 Business Central enables the
                                employees of the company to manage the entire
                                business from one dashboard with total security
                                due to the secured on-premises database
                                deployment.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                The whole business system of the company
                                re-structured on their legacy production
                                process. This makes the users manage the
                                processes of all departments from one dashboard.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                Dynamics 365 Business Central is capable of
                                streamlining the tasks such as setup change,
                                user tasks, maintaining employee ledger, and
                                more.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                We helped the company with the required
                                customizations and integrations for seamless
                                operations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                Dynamics Square helped the company understand the
                                Business Intelligence feature of Dynamics 365
                                Business Central. It helped them gain accurate
                                insights about all the processes and operations
                                and make informed decisions whenever needed.
                              </p>
                            </div>
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

      <section className="Solution-business-why custom-pd-3">
        <div className="container">
          <header className="section-header">
            <h2>Benefits</h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The system of the company started to perform flawlessly without any glitches after the upgrade. Also, Dynamics Square resolved the common issue of slow opening and slow execution of simple tasks.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The client now works with the new technology to make the business work smoothly without any system performance issues. Now, they are able to automate the assembly order process.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The process of importing and exporting data/reports has become easy and accurate with the new technical architecture. </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>We helped them integrate their system with other Microsoft apps like office, excel, etc. This enables the client to share the reports or data with other users in a few clicks.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      With the new{" "}
                      <Link
                        href="/products/dynamics-365-business-central/"
                        target="_blank"
                      >
                        Dynamics 365 Business Central,
                      </Link>{" "}
                      it becomes easy to submit the tax reports as MTD returns with HMRC directly from Business Central without any delay.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>As a trusted partner, Dynamics Square helped them understand the working of 365 Business Central for growth and scalability. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Group1435.png" alt="Group1435" width={640} height={598} />
            </div>
          </div>
        </div>
      </section>

      <section className="case-clent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="case-clent-test">
                <p>
                  We were quite nervous about upgrading our ERP system to the
                  new version of Business Central, fortunately Nitesh and the
                  team of Dynamics Square were there to support us through all
                  the trials and tribulations resulting in successful rollout of
                  our stall. We can already see the growth in production brought
                  by our new system and we're only one and a half months in.
                  Thanks again to the team of Dynamics Square for all the
                  support and hardwork.
                </p>
                <h4>Nicolas Hopwood</h4>
                <span> IT and Facilities Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Consult To Reveal Best Approach</h3>
                <p>
                  Connect with us to facilitate your system to drive a parallel
                  approach in the market you deal with. We help enterprises to
                  implement their unique needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
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
      </>
    );
  };

  export default CaseStudyPasante;
  
