import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

const ImplementationServices = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 Implementation Services & Process | Dynamics Square UK</title>
        <meta
          name="description"
          content="Dynamics Square delivers trusted solutions through a proven Dynamics 365 Implementation process to businesses across the UK, As your requirements & budgets."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/our-services/dynamics-365-implementation-services/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/our-services/dynamics-365-implementation-services/" />
        <meta property="og:title" content="Dynamics 365 Implementation Services Partner" />
        <meta property="og:description" content="Dynamics Square delivers trusted solutions through a proven Dynamics 365 Implementation process to businesses across the UK, As your requirements & budgets." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/implimenation-service-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/our-services/dynamics-365-implementation-services/" />
        <meta property="twitter:title" content="Dynamics 365 Implementation Services Partner" />
        <meta property="twitter:description" content="Dynamics Square delivers trusted solutions through a proven Dynamics 365 Implementation process to businesses across the UK, As your requirements & budgets." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/implimenation-service-banner.png" />

        
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-4 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Implementation <br />
                Services
              </h1>
              <h2 style={{marginBottom:'-50px',fontWeight:600,color:'#bb2b36',lineHeight:1.3}}>Partner with the most experienced Dynamics 365 implementation experts</h2>
              
              <p>Don't let outdated systems hinder your growth. Choose Dynamics Square for concrete Dynamics 365 implementation services. Proper implementation is vital; failing to implement effectively could mean missing out on crucial growth opportunities. </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk To Expert </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/implimenation-service-banner.png"
                alt="Dynamics 365 implimenation service"
                width={805} height={473}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <header className="section-header">
                <h2>
                  Implementation of Microsoft Dynamics 365 <br />
                  ERP and CRM Solutions
                </h2>
                <p>
                  To ensure a successful implementation comprises choosing a
                  domain-specific solution, modernized methodologies, and a
                  trustworthy Dynamics 365 implementation partner embedded with
                  the high-end understanding, right skill set, and ability to
                  deliver within eligible time-frame and cost.
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom05">
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
                  Microsoft Dynamics 365
                  <br />
                  Implementation Partner
                </h2>
              </div>
              <div className="custom-p-001">
                <p>
                  Experts at Dynamics Square - an authorized Microsoft Gold
                  Partner have the proficiency to understand your complex
                  business requirement and undertake challenges involved to
                  deliver highly customized, process-integrated, and
                  profitability-driven implementation.
                  <br />
                  <br />
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

      <section className="custom-bg-001 hero-001">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="custom-bg-001-left">
                <h2>
                  Delivering
                  <br />
                  Domain-Specific & <br />
                  Agile Implementation Approach
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-bg-001-right">
                <Image
                  src="/img/Dynamics-365-overview.svg"
                  alt="Dynamics-365-overview"
                  width={455}
                  height={432}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-style-bg">
        <div className="container">
          <div className="row g-5">
           
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/supply-chain-icons.svg"
                    alt="supply-chain-icons"
                    width={94} height={94}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Supply Chain</h3>
                  <p>
                    Enabling resilient supply chain integrated with AI practices
                    and seamlessly adaptable to bring transparency, faster time
                    to market, optimize inventory & logistics, predict potential
                    disruptions, and enhance asset productivity & longevity.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/marketing-icons.svg" alt="marketing-icons"  width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Marketing</h3>
                  <p>
                    Personalize your customer journey, engage the right
                    customers, build trust, and drive business success by
                    gaining a holistic customer view wrapped with AI analytics,
                    easy-to-use tools to drive seamless yet productive marketing
                    strategies.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/Field-Service-icons.svg"
                    alt="Field-Service-icons"
                    width={94} height={94}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Field Service</h3>
                  <p>
                    Bring acceleration in your service part comprising customer
                    management, field service, and remote assist. We implement
                    highly configured, connected, and integrated solutions
                    simplified with AI, IoT, and{" "}
                    <Link href="/products/microsoft-azure/">
                      Machine Learning capabilities
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/commerce-icons.svg" alt="commerce-icons"  width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Commerce</h3>
                  <p>
                    We create a highly unified and omnichannel experience for
                    your customers or partners equipped with AI-driven insights,
                    centralized commerce management, and modernized commerce
                    tools that simplify your commerce and enable growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/finance-icns-1.svg" alt="finance-icns-1" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Finance</h3>
                  <p>
                    With real-time and seamless financial reporting, Key
                    analytics, and AI insights, we enable enterprises to unify
                    their finance practices and automate their processes while
                    minimizing the potential risks and global financial
                    complexities.
                  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/sales.svg" alt="sales"  width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Sales</h3>
                  <p>
                    Optimize sales and drive profitability with agile sales
                    insights and connected sales practices through our Microsoft
                    Dynamics 365 Implementation services. Predict, manage, and
                    streamline your sales and close more deals faster.
                  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/Customer-Service.svg" alt="Customer-Service"  width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Customer Service</h3>
                  <p>
                    We implement highly embedded customer management solutions
                    helping your business to transform your customer experience
                    by delivering them personalized solutions integrated with
                    proactive support and omnichannel experience.
                  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/Project-Management-icons.svg"
                    alt="Project-Management-icons"
                    width={94} height={94}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Project Management</h3>
                  <p>
                    Track and manage your workflow and enable a project-centric
                    approach with a single integrated solution for your
                    business. We implement a solution to automate and streamline
                    your project cycle and ensure overall project success.
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
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Get Dedicated Implementation Support!</h3>
                <p>
                  Our specialists have implemented Dynamics 365 in businesses of
                  all sizes.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Request a Call Back</span></a>
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
                <Image src="/img/imp-left.svg" alt="imp-left.svg" width={531} height={771} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box-6">
                <div className="box-6-top-head">
                  <h2>Our Dynamics 365 Implementation Methodology</h2>
                  <p>
                    We adapt standard yet custom approach by embracing
                    Microsoft's Sure Step Methodology to streamline your
                    business processes, ensuring maximum security and
                    transparency.
                  </p>
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
                      modules={[FreeMode, Thumbs, Autoplay]}
                      className="mySwiper2"
                    >
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>ANALYSIS PHASE</h4>
                          <p>
                            Before we start, we listen to your project ideation,
                            understand your process flow, and evaluate how
                            implementing Dynamics 365 can improve or support
                            your business practices. We examine what sort of
                            customization or integration should be performed to
                            strategically help your business to streamline and
                            automate your practices along with the future scope.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>DESIGNING PHASE</h4>
                          <p>
                            Once the analysis phase gets done, we start
                            structuring your functional needs including your
                            customization part, specific configuration, and
                            integration either with Microsoft's products or
                            third-party solutions. In this phase, we
                            strategically define your functional values and
                            ensure a design simplifying and automating your
                            concurrent processes as well as supporting your
                            futuristic needs.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>DEVELOPMENT PHASE</h4>
                          <p>
                            When it comes to developing your project, we involve
                            custom coding, strategic & custom interface
                            designing, system integration, data modeling, and
                            migration. During data migration, we gradually and
                            strategically migrate your data from your previous
                            system or software solution to the newly implemented
                            system to ensure successful data migration.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>DEPLOYMENT PHASE</h4>
                          <p>
                            In this phase, we finally deploy your project that
                            includes key user training & acceptance, module
                            testing, and more just to ensure whether your system
                            is implemented with required modules, strategies,
                            and defined specifications. We apply standard
                            methodology and deploy & monitor changes that ensure
                            agile and successful deployment.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>POST-GO-LIVE SUPPORT</h4>
                          <p>
                            Once your project is ready to go live, we ensure all
                            the final changes are made, your system is molded as
                            per your expectation, and user training is performed
                            so that your end-users can quickly and seamlessly
                            adapt the newly configured and implemented features
                            & functionalities to encourage and drive efficiency
                            throughout the organization.
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
                            width="181"
                            height="181"
                          />
                          <img
                            src="/img/Component-1-iconss.svg"
                            className="over"
                            alt="Component-1-icons-red"
                            width="181"
                            height="181"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-2.svg"
                            className="overmain-thumb-1"
                            alt="Component-2"
                            width="181"
                            height="181"
                          />
                          <img
                            src="/img/Component-2-iconss.svg"
                            className="over-1"
                            alt="Component-2-icons-red"
                            width="181"
                            height="181"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-3.svg"
                            className="overmain-thumb-2"
                            alt="Component-3"
                            width="181"
                            height="181"
                          />
                          <img
                            src="/img/Component-3-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                            width="181"
                            height="181"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-4.svg"
                            className="overmain-thumb-3"
                            alt="Component-4"
                            width="181"
                            height="181"
                          />
                          <img
                            src="/img/Component-4-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                            width="181"
                            height="181"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-5.svg"
                            className="overmain-thumb-4"
                            alt="Component-5"
                            width="181"
                            height="181"
                          />
                          <img
                            src="/img/Component-5-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                            width="181"
                            height="181"
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

      <section className="bg-3334">
        <div className="container">
          <header className="section-header">
            <h2>
              why dynamics square for
              <br />
              implementation services Applications
            </h2>
          </header>
          <div className="row pad15x">
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/microsft-p-icons.svg" alt="microsft-p-icons" />
                  <h3>
                    Authorized Microsoft <br />
                    Gold Partner
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    Dynamics Square is an authorized gold Microsoft Partner that
                    delivers trustworthy Microsoft Dynamics 365 implementation
                    services followed by standard practices, specialized with
                    modernized methodologies, and strategized with high-end post
                    support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/Group997.svg" alt="Group997.svg" />
                  <h3>
                    High-End <br />
                    Implementation Team
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    Since we are a trustworthy Microsoft Dynamics implementation
                    partner and hence, comprise a team of certified people with
                    years of implementation proficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/Group772.svg" alt="Group772" />
                  <h3>
                    Dedicated <br />
                    Support Model
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    To ensure and drive continuity, we provide a dedicated
                    support model from the planning & analysis phase to user
                    training to post-deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/Group1003.svg" alt="Group1003" />
                  <h3>
                    Cost-Effective <br />
                    Solution
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    We deploy a standard Microsoft Dynamics implementation at
                    40% discounted rates in comparison to other implementation
                    partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img
                    src="/img/proffesionalserviceicon.svg"
                    alt="proffesionalserviceicon"
                  />
                  <h3>
                    Highly <br />
                    Customized
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    By deeply reviewing your process flow and involved domain
                    modules, we deploy enterprise-specific implementation
                    practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/Group1000.svg" alt="Group1000" />
                  <h3>
                    Flexible <br />
                    Delivery
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    Considering the importance of your time constraints, we
                    invest our full potential efforts to ensure flexible and
                    dedicated delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <header className="section-header">
                <h2>
                  Have you got questions about Dynamic 365 Implementation
                  Service?
                </h2>
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
                    >
                      What is Microsoft Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="/products/microsoft-dynamics-365/">
                          Microsoft Dynamics 365
                        </Link>{" "}
                        is an all-in-one business management tool with the added
                        applications of ERP and CRM. It is a cloud-based tool
                        capable of enhancing the efficiency and productivity of
                        your business using technologies like AI and ML.
                      </p>
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
                    >
                      How much time does implementation take?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        There is no absolute data about the exact time taken in
                        the implementation process. It depends on various
                        factors, including business requirements, deployment
                        options, the complexity of business, and customized
                        requirements.
                      </p>
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
                    >
                      How to choose the right Dynamics 365 implementation
                      partner?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Selecting the right partner is a task that needs a lot
                        of effort. However, various factors must be evaluated
                        before selecting the right partner, including precious
                        work, expertise in a particular module, support
                        availability, time to implement, and implementation
                        cost.
                      </p>
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
                    >
                      What is the cost of implementing Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The cost of implementation depends on various factors,
                        including business requirements, server deployment,
                        business complexity, process types, and data amount.
                        However, your implementation partner will get you the
                        exact cost and resolve your related issues.
                      </p>
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
                    >
                      Are there any specialized Dynamics 365 implementation
                      partners?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, many partners have been providing D365
                        implementation services for years. They have specified
                        industry verticals for whom they serve. You need to
                        check with the partner whether they belong to your
                        industry or not.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      What is the role of Dynamics Square in D365
                      Implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics Square is one of the leading implementation
                        support partners in the UK and has been providing its
                        services for the last 11 years. Our team is an expert in
                        consulting, implementing, upgrade, and providing support
                        for modules of Dynamics Square.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      What is the process of Dynamics 365 Sales implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The implementation process of Dynamics 365 and{" "}
                        <Link href="/products/microsoft-dynamics-365-sales/">
                          Dynamics 365 Sales
                        </Link>{" "}
                        is slightly different. Dynamics 365 is a full package
                        consisting of CRM and ERP solutions, whereas Sales is
                        one of the modules of 365 to streamline the whole sales
                        process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                      Is Business Central Implementation different from Dynamics
                      365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes,{" "}
                        <Link href="/dynamics-365-business-central-implementation/">
                          Business Central implementation
                        </Link>{" "}
                        is a low-cost and less time-consuming process than D365.
                        Microsoft Dynamics Business Central is an ERP solution
                        with some parts of CRM, but Dynamics 365 is a
                        fully-fledged ERP and CRM solution built to transform
                        the overall business management.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >
                      Can we integrate Microsoft Dynamics 365 Finance with
                      Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="/products/microsoft-dynamics-365-finance/">
                          MS Dynamics 365 Finance
                        </Link>{" "}
                        is a part of Dynamics 365 and comes together in the
                        package. However, you need to pay an extra licensing fee
                        starting from £71.60 per user/month to avail the
                        features and capabilities of Sales.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-10"
                    >
                      Does Dynamics 365 Supply Chain Management come with
                      Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, being a part of Dynamics 365, Supply Chain
                        Management comes as a standard. To avail of{" "}
                        <Link href="/products/dynamics-365-supply-chain-management/">
                          D365 Supply Chain Management services
                        </Link>
                        , users have to pay a subscription fee starting from
                        £135.70 per user per month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImplementationServices;
