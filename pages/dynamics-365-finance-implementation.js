import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

const FinanceImplementation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 Finance Implementation Partner UK</title>
        <meta
          name="description"
          content="Dynamics 365 Finance Implementation is an enterprise-grade ERP platform that helps businesses manage their finances and operations more efficiently. Get in touch Today!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-finance-implementation/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-4 align-self-center">
              <h1>
                Dynamics 365 Finance Implementation
              </h1>
              <p>
                Expand your business capabilities and maximize your
                profitability with Dynamics 365 Finance Implementation
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Talk to Expert</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/implimenation-service-banner.png"
                alt="implimenation-service-banner"
                width={805} height={473}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom07">
        <div className="container">
          <div className="row">
          <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                  width={625} height={651}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>
                  Dynamics 365 Finance & Operations Implementation
                </h2>
              </div>
              <div className="custom-p-001">
                <p>
                  <Link href="/products/microsoft-dynamics-365-finance/">
                  <a target="_blank">Microsoft Dynamics 365 Finance</a>
                  </Link>{" "}
                  (formerly known as Dynamics 365 Finance &amp; Operations) is
                  designed to automate, streamline, and faster your finance
                  processes to drive agility and ensure profitability.
                </p>
                <p>
                  By implementing Dynamics 365 Finance, Dynamics Square empowers
                  enterprises to drive automation across their financial
                  practices, improve their operational performance, and deliver
                  exceptional customer experience all through leveraging the
                  smarter connected experience using any device with real-time
                  efficiency even from remote locations.
                </p>
                <p>
                  Experts at Dynamics Square - an authorized{" "}
                  <Link href="/">
                    <a>Microsoft Gold Partner</a>
                  </Link>{" "}
                  have the proficiency to understand your complex business
                  requirement and undertake challenges involved to deliver
                  highly customized, process-integrated, and
                  profitability-driven implementation.
                </p>
                <p>
                  We ensure highly embedded implementation practices whether to
                  support your ERP needs, CRM practices, finance operations,
                  project automation respectively, and even your entire
                  integrated business needs with a single unified solution.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Dynamics 365 Finance <br />
              Implementation Benefits
            </h2>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_cloud-embed.svg"
                            alt="icons-azure_cloud-embed"
                          />
                        </div>
                        <span>Improved Decision-Making</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Take advantage of in-depth AI insights, key financial
                        reporting, and embedded analytics to ensure financial
                        control, faster your processes, and drive agility to
                        maximize your business outcomes.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_agile.svg"
                            alt="icons-azure_agile"
                          />
                        </div>
                        <span>Process Automation</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Unify your processes and drive integrated experience
                        with Microsoft Dynamics 365 Finance. Automate your
                        financial tasks to accelerate operational performance
                        and increase your productivity level.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accneww">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_innovation.svg"
                            alt="icons-azure_innovation"
                          />
                        </div>
                        <span>Global Expansion</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Optimize your costs, maximize resource utilization,
                        control budget, and ensure seamless planning & analysis
                        to drive strategic impact in your global expansion while
                        reducing costs.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_security.svg"
                            alt="icons-azure_security"
                          />
                        </div>
                        <span>Manage Risks</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Implement Dynamics 365 Finance via Dynamics Square to
                        simplify your regulatory key reporting, faster your
                        financial flow with electronic invoicing, manage risks
                        with seamless global payments, and more.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>
                  Thinking about implementing Dynamics 365 Finance & Operations?
                </h3>
                <p>Chat to us about your project requirements</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Book a Personalised Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box-6-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-6-pic">
                <img src="/img/imp-left.svg" alt="imp-left.svg" />
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <div className="box-6">
                <div className="box-6-top-head">
                  <h2>Dynamics 365 Finance implementation process</h2>
                </div>
                <div className="box-6-bottom">
                  <div className="posi-bottm">
                    <Swiper
                     autoplay={{
                      delay: 4000,
                      disableOnInteraction: true,
                    }}
                      loop={true}
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Thumbs,Autoplay]}
                      className="mySwiper2"
                    >
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Analysis Phase</h4>
                          <p>
                            In this phase, we deep-dive your project idea and
                            create a project plan suited to your specific
                            business practices and process flow.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Designing Phase</h4>
                          <p>
                            Once your project analysis gets done, we come up
                            with functional requirements defining your specific
                            customization, configuration, and integration needs.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>
                            In this phase, we start developing your project
                            comprising custom coding, interface designing,
                            system integration, data migration, and more.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>
                            Once the development phase gets over, we ensure the
                            final deployment of your project that includes Key
                            User training, User acceptance testing, etc.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Post Go-Live Support</h4>
                          <p>
                            In this phase, we provide end-user training,
                            technical support wherever required, and finally
                            ensure that your system is working as you
                            anticipated.
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="posi">
                    <Swiper
                    
                      onSwiper={setThumbsSwiper}
                      loop={false}
                      spaceBetween={5}
                      slidesPerView={5}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-1-icons.svg"
                            className="overmain-thumb"
                            alt="Component-1-icons"
                          />
                          <img
                            src="/img/Component-1-iconss.svg"
                            className="over"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-2.svg"
                            className="overmain-thumb-1"
                            alt="Component-2"
                          />
                          <img
                            src="/img/Component-2-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-3.svg"
                            className="overmain-thumb-2"
                            alt="Component-3"
                          />
                          <img
                            src="/img/Component-3-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-4.svg"
                            className="overmain-thumb-3"
                            alt="Component-4"
                          />
                          <img
                            src="/img/Component-4-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-5.svg"
                            className="overmain-thumb-4"
                            alt="Component-5"
                          />
                          <img
                            src="/img/Component-5-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-style-bg">
        <div className="container">
          <header className="section-header">
            <h2>
              Why Choose Dynamics 365 <br />
              Finance for Implementation?
            </h2>
            <p>
              Go beyond the basics and implement a unified platform for your
              organization
            </p>
          </header>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/img/Customer-Service.svg"
                    alt="Customer-Service"
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Budgeting</h3>
                  <p>
                    Dynamics 365 Finance is designed to optimize total costs
                    across your investment areas leveraging process automation.
                    It allows you to control, manage, and modify budgets. It
                    enables you to predict the data accurately and ensure
                    seamless planning & analysis. By taking advantage of key
                    financial insights, instant reporting, and actionable
                    analytics, you can improve the overall financial health of
                    your business.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img src="/img/sales.svg" alt="sales" />
                </div>
                <div className="style-grid-content">
                  <h3>Unified Processes</h3>
                  <p>
                    Implementing Dynamics 365 Finance helps to connect, unify,
                    and streamline your processes since it facilitates seamless
                    integration with your existing system, database, or even
                    other products of Microsoft. Submitting invoices to workflow
                    automatically is no longer a complex job now. It also allows
                    you to effectively manage and control credit risks and
                    collections.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/img/supply-chain-icons.svg"
                    alt="supply-chain-icons"
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Improved Financials</h3>
                  <p>
                    When it comes to financials, implementing Dynamics 365
                    Finance allows organizing, controlling, and managing
                    financial records by simply using a general ledger as it's
                    no longer a typical job now. By taking advantage of Dynamics
                    365 Finance solution, you can effortlessly manage your
                    accounts payable, receivable, taxes, and global accounting
                    while reducing auditing costs.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/img/Field-Service-icons.svg"
                    alt="Field-Service-icons"
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Global Accounting</h3>
                  <p>
                    Subject matter experts at Dynamics Square can help you to
                    Seamlessly manage your global accounting comprising
                    regulatory reporting, compliance, electronic invoicing,
                    calculating & filing taxes by availing of Microsoft's
                    finance solution. Leverage its full potential to bring
                    automation and accuracy wrapped with a simplified process to
                    effectively manage your global payments, taxes, and more.
                  </p>
                  <p>See Also: <Link href="/d365-supply-chain-management-implementation/"><a target="_blank">Dynamics 365 Supply Chain Implementation</a></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinanceImplementation;
