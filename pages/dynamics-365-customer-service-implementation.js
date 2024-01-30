import React, { useRef, useState } from "react";
import Link from "next/link"; 
import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

const CustomerServiceImplementation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
      <>
        <Head>
        <title>
          Dynamics 365 Customer Service Implementation | Dynamics Square
        </title>
        <meta
          name="description"
          content="We are one of the certified Dynamics 365 Customer Service Implementation partner in UK providing effort-less and cost-effective implementation services to enhance profitability and easy growth."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-customer-service-implementation/"
        />
        </Head>
        <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365 <br /> Customer Service Implementation
              </h1>
              <p>
                Build life-long relationship, offer omni-channel experience, and
                earn customers for life through implementing Dynamics 365
                Customer Service.
                <br />
                <br />
                <strong>
                  Learn how Dynamics 365 Customer Service implementation can
                  help you strengthen customer loyalty while providing agile and
                  personalised customer service.
                </strong>
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
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
                src="/img/customer-service-banner.png"
                alt="customer service Implementation banner"width={759} height={513}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>
                  How can Dynamic 365 Customer Service help you maximise your
                  sales by offering world-class customer support?{" "}
                </h2>
                <p>
                  <Link href="/products/microsoft-dynamics-365-customer-service/">
                  <a target="_blank">Dynamics 365 Customer Service</a>
                  </Link>{" "}
                  is a world-class business solution capable of delivering
                  exceptional support to customers by offering a personalized,
                  productive, and efficient experience. It enhances customer
                  management and optimises the entire support operation to help
                  you earn customers' loyalty for life. It simplifies the
                  agent's work, comes with an AI smart assistant, works on all
                  customers' channels, and offers a 360-degree view to add value
                  to each interaction and get full visibility into the customer
                  journey.
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
                        <span>Flawlessly Manages Agent's Work</span>
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
                          D365 Customer Service is a powerful tool that comes
                          with in-built AI to help agents work with enhanced
                          productivity while getting the exact piece of
                          information at the right moment whenever needed. It
                          offers various functions to aid agents, including
                          customised agent desktops, case management, AI
                          assistance, and intelligent routing.
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
                        <span>Equipped with Intelligent Automation</span>
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
                          <Link href="/products/microsoft-dynamics-365">
                          <a target="_blank">Dynamics 365</a>
                          </Link>{" "}
                          CS comes with virtual agents that resolve most of the
                          general queries without bothering the team using
                          knowledge base portals. In the case of complex
                          queries, they transfer the customer to one of the
                          available experts/agents in no time without notifying
                          the customer.
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
                        <span>Optimises Core Operations</span>
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
                          There is always a scope for improvement. The Dynamics
                          365 Customer Service implementation enables you to
                          optimise existing operations using data analytics and
                          extensive reporting in a move to reduce costs while
                          maximising revenue. It comes with various necessary
                          functions, including customer and channel analytics,
                          robotic process automation, a unified platform, and
                          conversational analytics.
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
                        <span>24X7 Availability to Customers</span>
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
                          The best thing about implementing D365 CS with your
                          business is that it lets the customers connect with
                          you using their preferred channel or a communication
                          platform to offer a consistent user experience. It
                          offers various functions, including voice channels,
                          real-time transcription, digital engagement, and
                          sentiment-based routing.
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
                        <span>Offers Personalised Experience</span>
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
                          Dynamics 365 Customer Service records and tracks the
                          entire history of the customer to quickly recognise
                          and connect with them using more personalised
                          interactions. With a 360-degree view and customer
                          journey analytics, you can provide the exact solution
                          your customer is looking for. In simple words, D365 CS
                          enables you to earn great customers for life.
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
                        <span>Integrated Huge Knowledge Base</span>
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
                          Virtual chatbots or agents have access to a huge
                          knowledge base to give answers to general questions
                          and to some extent to complex issues as well. Once the
                          conversation with the customers becomes more complex
                          or related to some exceptional questions, it directly
                          transfers the ticket to the concerned consultant.{" "}
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
                        <span>In-built Business Intelligence</span>
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
                          Dynamics 365 Customer Service manages all the data and
                          provides it whenever needed in real-time to make
                          actionable decisions. It tracks and measures the
                          efficiency of the business and suggests the possible
                          ways to enhance it using the same resources.
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
                        <span>Flexible with Integrations</span>
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
                          and customer demand. D365 Customer Service is flexible
                          with unique customizations to perform specific
                          business operations, enabling more focus on growth and
                          scalability rather than being preoccupied with core
                          operations.
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
                  Avail Full Support to Make Continuous Growth of your Business
                  Beyond Implementation!
                </h3>
                <p>
                  Join hands with a cost-effective D365 Customer Service
                  implementation partner today and avail support beyond it.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now!</span>
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
                  <h2>
                    Our Simple yet Powerful D365 Customer Service Implementation
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
                            Our team will start working on the FRD (Functional
                            Requirement Document) to understand the
                            organization's current processes and even predict
                            future requirements. This will help us to streamline
                            and improve upon current processes, as well as
                            anticipate any future needs that the organization
                            may have.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Design Phase</h4>
                          <p>
                            After taking a look at your current needs, our team
                            will put together a GAP-FIT document that outlines
                            what you need based on the requirements you've given
                            us. The things that are standard and already
                            available will be listed under FIT, and the
                            customisations you need that aren't currently
                            available will be listed under GAP. This document
                            will help us figure out what standard configurations
                            and integrations you need as well as what add-ons
                            might be necessary.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>
                            Our team will work with you to create a customised
                            Dynamics 365 Customer Service solution that meets
                            your specific needs and helps you maximise growth
                            and profitability.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>
                            By deploying the system on your servers, we give
                            users the chance to test it out and see if it meets
                            their needs. Additionally, it allows us to test
                            whether the system adheres to the GAP-FIT and FRD.
                            If not, we will make changes to ensure that it
                            provides an ideal solution for businesses.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Post Go-Live Support</h4>
                          <p>
                            In the final stage, we make the system live so your
                            team can work on it with full efficiency and
                            productivity.
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
            <div className="col-md-9">
              <header className="section-header">
                <h2>
                  Why Choose Dynamics Square as Your Trusted Dynamics 365
                  Customer Service Implementation Partner?
                </h2>
                <p>
                  Before the start of the implementation process, our sole motto
                  is to understand your unique business operations, explore
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
                      We specialize in providing implementation, upgrade, and
                      support services to businesses just like yours. Our team
                      of certified professionals have years of experience and
                      would be more than happy to help you get your business up
                      and running as smoothly as possible.
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
                      Here at our Dynamics Square, we pride ourselves on
                      providing competitive and cost-effective pricing for all
                      of our services so that you can get the most value for
                      your money. We want to help you get the most out of your
                      investment, and we're dedicated to providing quality
                      services at an affordable price.
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
                      We have a team of highly skilled and experienced Dynamics
                      365 Customer Service professionals who cater to all
                      industries, regardless of their type or size. With a
                      wealth of knowledge and experience in different domains,
                      our team is equipped to handle any challenge that comes
                      our way.
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
                      We follow a fast, unique, and seamless Dynamics 365
                      Customer Service implementation process without depending
                      on the complexity of the processes and operations to keep
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
                    24*7 <br />
                    Customer Support
                  </h3>
                  <div className="overlay">
                    <p>
                      Our dedicated team is available 24/7 to help you with
                      whatever you need, no matter where you are or what
                      language you speak. We want to help you reach your full
                      potential and overcome any obstacles that stand in your
                      way.
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
                      provided to you. The whole process wouldn't be easy, but
                      you have our words.
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
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>Dynamics 365 Customer Service Pricing</h2>
                <p>
                  Dynamics 365 Customer Service Pricing is simple. Contact us to
                  learn about cost effective licensing based on bundled Dynamics
                  365 Customer Service Products for Commercial, Non-Profit or
                  Educational Use.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Professional
                </h3>
                <div className="price">
                  <sup>£</sup>52.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Knowledge management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> SLAs
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Templates
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unlimited number of users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Essentials
                </h3>
                <div className="price">
                  <sup>£</sup>135.70<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unified service desk
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Embedded intelligence
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Context-driven
                    suggestions
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Service gamification
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Customization and
                    extensibility
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Portals
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Analytics and KPI
                    reporting
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
                  Looking for Customised Pricing as per your business
                  requirements?
                </b>
              </p>
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get the Quotes Now!</span>
                </Link>
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
                  Being a flexible{" "}
                  <Link href="/products/microsoft-dynamics-erp/">
                  <a target="_blank">ERP solution</a>
                  </Link>
                  , you can easily increase its capabilities based on your
                  business growth and changing modern needs. You can start today
                  with the current requirements and upgrade the system later.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
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
              Most searched Dynamics 365 <br /> Customer Service Implementation
              FAQs
            </h2>
            <p>Click to explore the best answer!</p>
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
                        Our team will reach out to you after you submit your
                        information in order to learn more about your company
                        during what is known as the Phase 1 Discovery Call.
                        We'll document everything, create a FRD, do a FIT-GAP
                        analysis, and then begin the implementation phase. If
                        it's determined that another Discovery Call is
                        necessary, we'll set that up with one of our highly
                        qualified functional consultants who will address any
                        remaining questions.
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
                      How long will it take to implement the project
                      successfully?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Without first understanding the ins and outs of your
                        business, it's difficult to provide an accurate timeline
                        for implementing Customer Service - as there are many
                        factors that go into the equation such as the quantity
                        of processes, the complexity of operations,
                        integrations, and customizations. All of these elements
                        play a role in how long it will take to get up and
                        running.
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
                      What's my role in the entire implementation project?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        In order for your D365 Customer Service implementation
                        partner to develop a superb solution for you, we only
                        require that you provide us with accurate information
                        about your current procedures and future demands. We
                        also ask for your cooperation throughout the process to
                        ensure a seamless and effortless deployment.
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
                      Does Dynamics Square provide training?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        We provide free training to users so that they can
                        understand how to use the newly installed solution. This
                        includes learning about the features, capabilities, and
                        functionalities of the software. Additionally, we'll
                        assist you in comprehending the fundamental capabilities
                        so that you can recognise your present and long-term
                        needs for the Phase 2 implementation process (in case of
                        need).
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
                      What is the accurate cost of D365 Customer Service
                      implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The cost of implementation will depend on several
                        factors, just like how time is defined. If you want to
                        receive a precise price for the implementation process,
                        you can give us a call or fill out the Contact Form.
                      </p>
                      <p>
                        <b>See Also -</b>
                      </p>
                      <ul>
                        <li>
                          <Link href="/dynamics-365-finance-implementation/">
                          <a target="_balnk"></a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/power-bi-implementation/">
                          <a target="_blank">Power BI Implementation</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dynamics-365-sales-implementation/">
                          <a target="_blank">Dynamics 365 Sales Implementation</a>
                          </Link>
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

  export default CustomerServiceImplementation;
  
