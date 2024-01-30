import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

const MarketingImplementation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 Marketing Implementation | Dynamics Square</title>
        <meta
          name="description"
          content="Centralises customer information, utilize marketing automation, and enhance overall marketing performance through implementing Dynamics 365 Marketing."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-marketing-implementation/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365 <br />
                Marketing <br /> Implementation
              </h1>
              <p>
                Centralises customer information, utilize marketing automation,
                and enhance overall marketing performance through implementing
                Dynamics 365 Marketing.
                <br />
                <br />
                <b>
                  Learn how Dynamics 365 Marketing implementation can help you
                  transform the potential prospects into more recurring
                  customers while build strong relationship.
                </b>
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo Now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/img/FieldServicebanner.png"
                alt="Field-implementation-banner"
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
                  How can Dynamic 365 Marketing can help you accelerate your
                  marketing performance while engaging customers in real-time?
                </h2>
                <p>
                  Dynamics 365 Marketing is a powerful automation application
                  that can help you streamline all your marketing campaigns in a
                  more efficient and profitable manner. With the help of AI and
                  BI, it designs, predicts, and delivers accurate marketing
                  practises to the right audience for the sake of better ROI.
                  Dynamics 365 Marketing implementation enables you to
                  communicate with your audience using the right set of
                  marketing channels, content, customer segments, and more,
                  resulting in a seamless customer journey from the beginning.
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
                        <span>Unified Marketing Data</span>
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
                          <Link href="/products/microsoft-dynamics-365-marketing/">
                            <a target="_blank">Dynamics 365 Marketing</a>
                          </Link>{" "}
                          allows the users to collaborate and share all kinds of
                          marketing data in real-time, ensuring a smooth
                          workflow. It makes all the users independent when it
                          comes to collecting and utilising the right set of
                          information, irrespective of the marketing campaign or
                          the channel.
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
                        <span>Make informed decisions</span>
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
                          In a more practical sense, marketing is a hit-and-miss
                          method. We don't know when a campaign becomes
                          successful and when a campaign becomes a failure. It
                          all depends on various fluctuating factors and
                          conditions. However,{" "}
                          <Link href="/products/microsoft-dynamics-365/">
                            <a target="_blank">Dynamics 365</a>
                          </Link>{" "}
                          allows the organisation or the user to make real-time,
                          data driven decisions anytime and anywhere to reduce
                          the chances of failed marketing campaigns and provides
                          the flexibility of optimising a running campaign for
                          more profitability.
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
                        <span>Marketing Tools Automation</span>
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
                          D365 Marketing is a practical tool that allows you to
                          consume the automated in-built tools, ensuring smooth
                          flow of all marketing processes, including email,
                          social media, and event management. These different
                          automation tools can help you nurture your leads in a
                          more efficient manner and build a personalised
                          interaction with all customers.
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
                        <span>Know Your Customer</span>
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
                          Understanding the customer's needs is one of the most
                          important tasks for an organisation that must be
                          followed for sustainable growth. Dynamics 365
                          Marketing comes with inbuilt forms features that
                          enable you to conduct surveys to determine exactly
                          what your customers want from you. And, the best part
                          about forms feedback is that they can be integrated
                          with most of the functions, like emails, paid
                          campaigns, and events.
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
                        <span>Engaging Customer Journey</span>
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
                          From turning into a lead to becoming a recurring
                          customer, the customer journey must be engaging so
                          that customers stay hooked with the organization.
                          There is no need for the team to directly interact
                          with customers because Dynamics 365 Marketing
                          implementation would make your system proficient
                          enough to automate such manual and recurring tasks.
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
                        <span>Personalised customer experience</span>
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
                          Personalization is the key to more revenue and
                          organisational growth. When you start to give
                          personalised offers, content, and engagement to the
                          customers, you will gain credibility and authority,
                          resulting in more customer engagement and an improved
                          customer experience.
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
                        <span>Allows Multi-channel Marketing</span>
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
                          We are living in a digital world where customers are
                          spread across different marketing channels as per
                          their choice. It lets you run marketing campaigns
                          based on targeted customers. Dynamics 365 Marketing
                          accepts this change and allows you to communicate with
                          your customers using various marketing channels and
                          different marketing modes, including SMS integration,
                          web landings, and landing pages.
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
                        <span>Utilize Customer Insights</span>
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
                          D365 Marketing is a cloud-based solution that collects
                          and records all customer data and shares it with the
                          concerned user whenever there is a need. You can
                          access this data from anywhere and anytime using any
                          device.
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
                  Avail Continuous Support for your Business Beyond
                  Implementation!
                </h3>
                <p>
                  Join hands with a cost-effective D365 Marketing implementation
                  partner today and avail support beyond it.
                </p>
                <div className="text-center m-o-t new-btn-nn">
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
                    Our Simple yet Powerful D365 Marketing Implementation
                    Methodology
                  </h2>
                  <p>
                    We analyse your current legacy system using the Microsoft
                    certified implementation approach to give you a successful,
                    safe, and efficient solution.
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
                            In order to comprehend the organization's current
                            operations and even forecast future requirements,
                            our team will commence working to prepare the FRD
                            (Functional Requirement Document).
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Design Phase</h4>
                          <p>
                            In order to analyse the requirements, our team will
                            develop a GAP-FIT handbook based on functional
                            requirements we have discussed previously. Here, we
                            outline the essential, typical add-on setups and
                            integration requirements.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>
                            Our team will then start working on developing a
                            tailored and suitable Dynamics 365 Marketing
                            solution that comprehends your objectives and helps
                            you achieve maximum growth with greater
                            profitability.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>
                            In this, we set up the system on servers for people
                            to test. Additionally, it enables us to check
                            whether the system was built in accordance with
                            GAP-FIT and FRD. If not, we will adjust further to
                            offer the best possible option for the company.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Post Go-Live Support</h4>
                          <p>
                            The system is made live in the last phase so that
                            your team may begin working on it effectively and
                            productively.
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
                  Why Choose Dynamics Square as Your Trusted Dynamics 365
                  Marketing Implementation Partner?
                </h2>
                <p>
                  Our only objective is to comprehend your business processes,
                  investigate potential needs, and then present a customised
                  business solution before the implementation process ever
                  begins. We prioritise complete client satisfaction and
                  fostering enduring relationships of trust with them (a major
                  reason for being successful for the last 11 years).
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
                      We have a group of trained experts that have years of
                      expertise helping companies just like yours deploy,
                      upgrade, and support new technology.
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
                      For all of our services, we offer fair and affordable
                      pricing so you may maximise your hard-earned money.
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
                      No matter the type or scale of the industry, we have
                      people that have a wealth of knowledge and expertise in
                      various fields who serve it.
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
                      Without relying on the complexity of the operations and
                      processes, we follow a quick, distinct, and seamless
                      Dynamics 365 Marketing setup method to keep your
                      organisation operating effectively.
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
                      Without regard to time, place, or language constraints,
                      our committed team is always there to support you when you
                      need it so that you can surpass your limitations.
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
                      We will keep working until you express complete pleasure
                      with the help and services we have given you. We won't
                      lie: the entire process won't be simple.
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
            <h2>Dynamics 365 Marketing Pricing</h2>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Marketing</h3>
                <p>
                  <b>
                    For organisations without any other Dynamics 365 application
                  </b>
                </p>
                <div className="price">
                  <sup>£</sup>1,131.20<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Includes 10,000 contacts, 100,000 interactions, 1,000 SMS
                    Messages<sup>2</sup>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Marketing Attach</h3>
                <p>
                  <b>
                    For organisations with a qualifying Dynamics 365 application
                    <sup>3</sup>
                  </b>
                </p>
                <div className="price">
                  <sup>£</sup>565.60<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Includes 10,000 contacts, 100,000 interactions, 1,000 SMS
                    Messages
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
                  {" "}
                  Looking for Customized Pricing as per your business
                  requirements?{" "}
                </b>
              </p>
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Started Now</span>
                  </a>
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
                  Because it's a versatile{" "}
                  <Link href="/products/microsoft-dynamics-crm/">
                    <a target="_blank">CRM solution</a>
                  </Link>
                  , you can quickly extend its capabilities in accordance with
                  the expansion of your organisation and shifting consumer
                  demands. Starting with the prerequisites as they are now, you
                  can improve the system later.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link   href="#exampleModal"><a
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
              about Dynamics 365 Marketing Implementation?
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
                        After you submit your information, one of our
                        specialists will call you to learn more about your
                        company, its current needs, and potential future needs.
                        This process is known as the Phase 1 Discovery Call.
                        Everything will be documented, a FRD will be created, a
                        FIT-GAP analysis will be done, and then the
                        implementation phase will begin. If necessary, we set up
                        another Discovery Call with one of our highly qualified
                        functional consultants to address the questions.
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
                        In order for us to develop a proper D365 Marketing
                        implementation solution for you, your only
                        responsibility will be to provide correct information to
                        your Dynamics 365 installation partner regarding the
                        present procedures and future demands. You must also
                        cooperate throughout the process to ensure a flawless
                        and easy deployment.
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
                        We offer free training sessions to help users become
                        familiar with the system's features, capabilities, and
                        functions in order to make the most of the recently
                        installed solution. Additionally, we will assist you in
                        comprehending the fundamental capabilities so that you
                        may comprehend your present and upcoming needs for the
                        Phase 2 implementation procedure (in case of need).
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
                        Without fully comprehending the business and its needs,
                        neither we nor anyone else can provide you a precise
                        timeline for implementing a solution. The time is
                        determined by a number of elements, such as the quantity
                        of processes, the complexity of operations,
                        integrations, and customizations.
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
                      What is the accurate cost of D365 Marketing
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
                        The exact cost of implementation is determined by a
                        number of factors. To receive a precise price for the
                        implementation process, you may just phone us or
                        complete the Contact Form, and one of our executive will
                        contact you soon.
                      </p>
                      <p>
                        <b>See Also - </b>
                      </p>
                      <ul>
                        <li>
                          <Link href="/dynamics-365-finance-implementation/">
                            <a target="_blank">Dynamics 365 Finance Implementation</a>
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

export default MarketingImplementation;
