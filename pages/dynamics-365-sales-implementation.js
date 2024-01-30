import React, { useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

const ImplementationSales = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 for Sales Implementation Partner UK</title>
        <meta
          name="description"
          content="Bring sales, empower team, and increase revenue through Dynamics 365 Sales implementation from UK's leading Microsoft Gold Partner - Dynamics Square"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-sales-implementation/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365 <br /> Sales Implementation
              </h1>
              <p>
                Bring sales, empower team, increase revenue, and simplify your
                existing sales processes through implementing Dynamics 365
                Sales.
                <br />
                <br />
                <b>Learn how Dynamics 365 Sales can uplift your business.</b>
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link  href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                   
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo Now!</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/img/business-central-implementation-banner-1.svg"
                alt="business-central-implementation-banner"
                width={1024} height={586}

              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>How can D365 Sales enhance your business Growth?</h2>
                <p>
                  <Link href="/products/microsoft-dynamics-365-sales/">
                    <a target="_blank">D365 for Sales</a>
                  </Link>{" "}
                  is a best-in-class cloud-based ERP solution that can
                  seamlessly streamline your entire sales management, enhancing
                  the efficiency and productivity of salespeople. With
                  built-in-intelligence and actionable insights, you can
                  revolutionize your sales processes with a personalized and
                  unified user interface. Once you opt for Dynamics 365 Sales
                  implementation, you will the following benefits:
                </p>
              </header>
            </div>
          </div>
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
                        <span>Gain New Customers </span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Establish an uninterrupted communication platform
                          between salespeople and customers to power up the
                          customer acquisition process throughout the sales
                          lifecycle. Set-up a channel that consists of true
                          customer insights, significant sales opportunities,
                          and team collaboration for a contextual experience.{" "}
                        </p>
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
                        <span>Boost Revenue</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Accelerate your sales numbers by leveraging AI to
                          identify potential customers and pitch them at the
                          time of need. Dynamics 365 Sales collects accurate
                          information using different resources and helps you
                          approach customers with personalized and prioritized
                          details.
                        </p>
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
                        <span>Improve Customer Experience</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Customers should be pampered, and it enables you to
                          strengthen the customer relationship and track
                          customer data to provide an interactive and improved
                          customer experience. D365 Sales enhances the level of
                          customer satisfaction with increased loyalty to
                          provide a unique experience and build unbreakable
                          trust.
                        </p>
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
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Advanced Data Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Selling is based on data and emotions. We cannot track
                          and record emotions, but data can be tracked,
                          recorded, and managed. D365 Sales enables you to
                          record and maintain advanced data insights in order to
                          provide an accurate solution to your customers'
                          problems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnewasd">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Enhance Productivity</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        <p>
                          Intelligent process optimization enables you to
                          perform faster and better with increased efficiency to
                          sell more using existing resources. Also, it automates
                          many of the recurring manual processes, leading to a
                          reduction in workload and increased productivity.
                        </p>
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Improved Sales Performance</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        <p>
                          The cloud's power enables users to work from anywhere
                          and at any time to keep the business running 24 hours
                          a day, seven days a week. Predictive analytics, core
                          app integrations, and relationship analytics push the
                          sales team to remain connected with the customers for
                          a constant sales flow.
                        </p>
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
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Optimize Sales Journey</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        <p>
                          Provide a revamped experience throughout the sales
                          journey using social insights, personalized selling,
                          and contextual data to target the right opportunity
                          for the customer, resulting in more sales deals. Get a
                          360-degree view of the entire sales pipeline and make
                          changes in real-time for data-driven improvements.
                        </p>
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
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <span>Flexible with Customizations</span>
                      </button>
                    </h3>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        <p>
                          Customization and integration make a solution
                          adaptable to all changing business needs as per market
                          and customer demand. Dynamics 365 Sales implementation
                          would make the whole process of adding customizations
                          unique to perform specific business operations,
                          enabling more focus on the sales process rather than
                          being preoccupied with work.
                        </p>
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
                  Avail Full support for your business beyond implementation!
                </h3>
                <p>
                  Join-Hands with effective Dynamics 365 implementation partner
                  and get the support beyond implementation.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span></a>
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

            <div className="col-lg-6">
              <div className="box-6">
                <div className="box-6-top-head">
                  <h2>
                    Our Simple yet Powerful D365 Sales Implementation
                    Methodology
                  </h2>
                  <p>
                    We follow Microsoft's certified implementation methodology
                    to understand your existing legacy system and guarantee you
                    a successful, secure, and transparent process.
                  </p>
                </div>
                <div className="box-6-bottom">
                  <div className="posi-bottm">
                    <Swiper
                      autoplay={{
                        delay: 3000,
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
                          <h4>Analysis Phase</h4>
                          <p>
                            In this, our team will start working to prepare the
                            FRD (Functional Requirement Document) to understand
                            the organization's current processes to better
                            understand the requirement better.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Design Phase</h4>
                          <p>
                            Our team will create a GAP-FIT manual based on
                            functional requirements to analyze the standard and
                            specific needs of the business. In this we specify
                            the necessary, standard, and add-on configurations
                            and integration needs.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>
                            In this phase of D365 for Sales implementation
                            process, our team will begin working to create a
                            personalized and appropriate sales solution that
                            understands your needs and assists you in achieving
                            maximum growth.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>
                            In this, we deploy the system on servers so that the
                            users can test it. Also, it lets us test the system
                            whether it is built as per GAP-FIT and FRD or not.
                            If not, we will make the further changes for full
                            user satisfaction.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Post Go-Live Support</h4>
                          <p>
                            For the last phase, we make the system live and the
                            sales team can start working on it with full
                            efficiency for the sake of business growth.
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
                            alt="Component-2-icons-red"
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

      <section className="Solution-business-why mar-back">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <header className="section-header">
                <h2>
                  Wy choose Dynamics Square as Your Trusted Implementation
                  Partner?
                </h2>
                <p>
                  Before the start of the implementation process, our sole motto
                  is to understand all your unique business operations, explore
                  future needs, and then offer a tailored business solution. We
                  believe in full customer satisfaction and building unbreakable
                  trust with our customers (a major reason for being successful
                  for the last 11 years).
                </p>
              </header>
            </div>
          </div>
          <div className="row pdd1">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Certified <br />
                    Professionals
                  </h3>
                  <div className="overlay">
                    <p>
                      We have a team of certified professionals with years of
                      experience in providing{" "}
                      <Link href="/our-services/dynamics-365-implementation-services/">
                        <a target="_blank">implementation</a>
                      </Link>
                      ,{" "}
                      <Link href="/our-services/dynamics-365-upgrade-services/">
                        <a target="_blank">upgrade</a>
                      </Link>
                      , and{" "}
                      <Link href="/our-services/dynamics-365-support-services/">
                        <a target="_blank">support services</a>
                      </Link>{" "}
                      to businesses like yours.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Cost-Effective
                    <br />
                    Pricing
                  </h3>
                  <div className="overlay">
                    <p>
                      We provide competitive and cost-effective pricing for all
                      services to help you get the most out of your hard-earned
                      investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Domain
                    <br />
                    Expertise
                  </h3>
                  <div className="overlay">
                    <p>
                      We have professionals with extensive knowledge and
                      experience in different domains to cater to all
                      industries, irrespective of their type and size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Seamless and Fast
                    <br />
                    Implementation
                  </h3>
                  <div className="overlay">
                    <p>
                      We follow a fast, unique, and seamless Microsoft Dynamics
                      365 Sales implementation process without depending upon
                      the complexity of the processes and operations to keep
                      your business running efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    24*7 Customer <br />
                    Support
                  </h3>
                  <div className="overlay">
                    <p>
                      Our dedicated team is always available to help you in a
                      time of need without any time, region, or language
                      barriers to help you rise above the limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    100% Customer <br />
                    Satisfaction
                  </h3>
                  <div className="overlay">
                    <p>
                      We will keep making efforts till you confirm 100%
                      satisfaction with the support and services we have
                      provided to you. It wouldn't be easy, but you have our
                      words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Sales Pricing</h2>
            <p>
              Choose The Applications That Are Right For Your Business Needs.{" "}
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Sales
                  <br />
                  Professional
                </h3>
                <div className="price">
                  <sup>£</sup>49<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Core sales force automation and Microsoft 365 integration
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Sales
                  <br />
                  Essentials
                </h3>
                <div className="price">
                  <sup>£</sup>71.60<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Industry-leading sales force automation with contextual
                    insights and advanced customisation capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Sales
                  <br />
                  Premium
                </h3>
                <div className="price">
                  <sup>£</sup>101.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Dynamics 365 Sales Enterprise plus prebuilt customisable
                    intelligence solutions for sellers and managers
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <p
                className="text-center"
                style={{ padding: "50px 0px 0px 0px" }}
              >
                <b>
                  Looking for Customized Pricing as per your business
                  requirements?
                </b>
              </p>
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link  href="#exampleModal">
                  <a
                  data-bs-toggle="modal"
                  
                  className="btn-get-red"
                >
                  <span>Get the Quotes NOW! </span></a>
                </Link>
                {/* <Link href="#about" className="btn-get-whit">
                              <span>See Licensing Guide</span>
                              </Link> */}
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
                <h3>Start Today and Upgrade Later</h3>
                <p>
                  Being flexible{" "}
                  <Link href="/products/microsoft-dynamics-crm/">
                    <a target="_blank">CRM application</a>
                  </Link>
                  , you can easily increase its capabilities and features with
                  your business growth. You can start today with the current
                  requirements and upgrade the system later.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link  href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                   
                    className="btn-get-started scrollto"
                  >
                    <span>Speak to a Certified Gold Microsoft Partner</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got questions
              <br />
              about Dynamics 365 Sales Implementation?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
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
                      What's next after submitting my contact details?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Once you submit your details, one of our experts will
                        call you to understand your business, its present
                        requirements, and future needs too, and the process is
                        known as Phase 1 Discovery Call. We will document
                        everything, prepare an FRD, perform a FIT-GAP analysis,
                        and start the implementation process. In case of need,
                        we arrange a Discovery Call again with our expert
                        functional consultants.
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
                      What's my role in the entire implementation project?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Your sole role would be to give us accurate information
                        about your current processes and future needs so that we
                        can implement a perfect{" "}
                        <Link href="/products/microsoft-dynamics-crm/">
                          <a target="_blank">D365 CRM</a>
                        </Link>{" "}
                        sales solution for you. Also, you need to be cooperative
                        during the process for a seamless and smooth
                        implementation.{" "}
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
                      Does Dynamics Square provide training?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        To properly utilise the newly installed solution, we
                        provide a free training session for users to understand
                        the system functions, features, and capabilities. Also,
                        we will help you understand the core capabilities so
                        that you can understand your current and future
                        requirements for the Phase 2 implementation process (in
                        case of need).
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
                      How long will it take to implement the project
                      successfully?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Neither we, nor anyone else, can give you an exact time
                        frame for implementing a solution without first
                        understanding the business and its requirements. Various
                        factors, including the number of processes, complexity
                        of operations, integrations, and customizations, specify
                        the time.
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
                      What is the accurate cost of D365 Sales implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Like time, various factors define the accurate cost of
                        implementation. You can simply call your Dynamics 365
                        Sales Implementation partner to get the exact quote for
                        the implementation process.
                      </p>
                      <ul>
                        <li>
                          <Link href="/products/microsoft-dynamics-365-field-service/">
                            <a target="_blank">Dynamics 365 Field Service</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/dynamics-365-customer-engagement/">
                            <a target="_blank">Dynamics 365 Customer Engagement</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/microsoft-dynamics-ax/">
                            <a target="_blank">Microsoft Dynamics AX</a>
                          </Link>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="/blog/dynamics-365-sales-implementation-guide/"
                          >
                            Microsoft Dynamics 365 Sales Implementation Guide
                          </a>
                        </li>
                      </ul>
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

export default ImplementationSales;
