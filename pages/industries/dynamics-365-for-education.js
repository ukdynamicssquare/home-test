import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Blog from "../../components/Blog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const Education = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Microsoft Dynamics 365 for Education Industry | Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics 365 for higher education Industry solutions is a tool to seamlessly manage operations, assets and infrastructure. Contact Dynamics Square UK for FREE Demo."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/dynamics-365-for-education/"
        />
        <meta name="robots" content="index,follow"/>
      </Head>
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Dynamics 365 <br />
                  For Education
                </h1>
                <p>
                Effectively manage your students, staff, and stakeholders for the overall growth of the institution by implementing Microsoft Dynamics 365 for Education.  
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
                  src="/img/dynamics-365-for-education.png"
                  alt="Dynamics 365 For education"
                  width={708}
                  height={447}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>
              Why you Should Implement Dynamics 365 Education <br />
              in Your Institution?
              </h2>
              <p>
              Dynamics 365 for Education is a ERP + <Link href="/products/microsoft-dynamics-crm/">CRM solution</Link> that centralises the data of all students and streamlines communication while providing real-time insights. You can not only manage students' data but also the data related to programme curriculum and stakeholders. Based on AI and ML technologies, it is capable to maintaining relationships with students, simplifying most of the existing processes, optimising the use of resources, and much more. 
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                How Dynamics 365 for Education is the Best                  
                  <br />
                  CRM for Education Industry?
                </h2>
                <p>
                Microsoft Dynamics for Education offers powerful capabilities with a simplified user interface to enable all levels of users to properly utilise it. With <strong>Dynamics 365 for higher education</strong>, you can optimise the student journey, enhance staff engagement, maximise institution efficiency, provide data insights in real-time, forecast future possibilities, and predict results. 
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
                      Dynamics 365 for Education is a CRM for higher education that provides dashboard access to stakeholders, student data and insights, an admin dashboard, and much more. 
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
                      Dynamics 365 Education is also available for K-12 education to offer a parent-student portal, a student management form, and more. In short, it offers various other capabilities that make it a suitable ERP for the education sector. 
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
                      <Link href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</Link> for Education offers a uniform platform that can streamline the management of all stakeholders and their data from a single screen. Later, users can integrate other native Microsoft applications, like <Link href="/products/microsoft-dynamics-365-sales/"> D365 for Sales</Link> , <Link href="/products/microsoft-dynamics-365-marketing/">Dynamics 365 Marketing</Link> and <Link href="/products/microsoft-dynamics-365-customer-service/">Dynamics 365 for Customer Service</Link>, to collect and share data in real-time. 
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
                  Talk to Our Education Industry <br />
                  Expert Team
                  </h3>
                  <p>
                  Talk to our experts and let them show you the right path towards the great success of your education institution. 
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
                  Top Benefits of Microsoft Dynamics 365 For Education
                  </h2>
                  <p>
                  Being a <strong>CRM and ERP software for educational institutes</strong>, D365 for Education offers real-time transparency to all operations while enhancing the overall ROI.  
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
                    <h3>All-Around View of Institution</h3>
                    <p>
                    With the centralised data platform, you can easily create, collect, and share data across the entire platform. Such information includes student data, staff details, fee information, curriculum information, and much more.
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
                    <h3>Enhanced Student Retention</h3>
                    <p>
                    The captured data will let you track the interactions of students while simplifying and automating the processes related to them.
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
                    <h3>Reduce Complexities from Processes</h3>
                    <p>
                    As a cutting-edge AI and ML application, it eliminates redundancies in the system, making it more efficient and effective.
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
                    <h3>Unifies Data and Promotes Teamwork</h3>
                    <p>
                    Dynamics 365 for Education is a cloud-based application capable of connecting entire data sources and promoting collaboration for sustainable growth.
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
                    <h3>Fully Secured Data</h3>
                    <p>
                    Microsoft Azure is a cloud service provider that ensures data security while remaining accessible to users 24 hours a day, seven days a week.
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
                    <h3>Centralizes all Departments</h3>
                    <p>
                    There is no need to manually share the data with other departments, as D365 for Education unifies all departments and connects their processes with one another.
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
                    <h3>Empower Productivity with Integrations</h3>
                    <p>
                    Microsoft has made this software adaptable in terms of connecting native and third-party integration in order to maximise productivity and efficiency.
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
                    <h3>Offers Seamless Reporting</h3>
                    <p>
                    Being a cloud-based CRM and ERP for the education sector, it offers a seamless reporting feature to share the relevant information and reports with other fellow users.
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
                  <h3>Let's Discuss your Issues and Find you a Better Solution</h3>
                  <p>
                  Because each educational institution has its own distinct methodology, they must deal with unique requirements. You can book a call with our Microsoft certified consultant to discuss your current needs and predict your future requirements. It will open up the possibility of new future goals.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Let's Get Started </span>
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
                    <Image
                      src="/img/dynamics-365-for-higher-education.png"
                      className="fix-im"
                      alt="dynamics-365-for-higher-education"
                      width={483}
                      height={513}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>
                  How can Dynamics 365 for <br />Education help you <br />
                  Enhance your Revenue?
                  </h2>
                  <p>
                  Let us understand your business and offer you the most suitable solutions for all those factors that are stopping you from making more profits.
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
              <Image
                  src="/img/dynamics-365-for-education.png"
                  alt="Dynamics 365 For education"
                  width={708}
                  height={447}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Education;
