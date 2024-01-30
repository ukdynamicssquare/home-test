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
const ProjectOperationImplementation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>
          Dynamics 365 Project Operations Implementation | Dynamics Square
        </title>
        <meta
          name="description"
          content="Avail Project Automation, optimize resources, and drive project success with increased profitability through the Dynamics 365 Project Operations implementing today!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-project-operations-implementation/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365 <br />
                Project Operations <br /> Implementation
              </h1>
              <p>
                Avail Project Automation, optimize resources, and drive project
                success with increased profitability through the implementation
                of Dynamics 365 Project Operations.
                <br />
                <br />
                <b>
                  Learn how Dynamics 365 Project Operations implementation can
                  help you build a customer-centric environment to manage a
                  prospect from sales to delivery.
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
              <Image
                src="/img/FieldServicebanner.png"
                alt="Field-implementation-banner"
                width={771} height={478}
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
                  How can Dynamic 365 Project Operations can help you accelerate
                  project deliveries while assuring optimum quality?
                </h2>
                <p>
                  Dynamics 365 Project Operations is an end-to-end business
                  solution to help you streamline all projects while ensuring
                  seamless deliveries and maximising growth. It provides an
                  intuitive centralised dashboard to connect Sales, Invoicing,
                  Resources, Planning, and Delivery to drive team collaboration
                  with increased visibility for each project. The successful
                  Dynamics 365 Project Operations implementation would help you
                  track quotes, project costs, resources, cost consumption, and
                  revenue in order to provide an exceptional customer experience
                  while unlocking the doors to greater growth and profitability.
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
                        <span>Delivering Projects with High Margins</span>
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
                          <Link href="/products/dynamics-365-project-operations/">
                            <a target="_blank">Dynamics 365 Project Operations</a>
                          </Link>{" "}
                          provides a unified platform to connect and collaborate
                          while providing a transparent and concise view of each
                          project's status in real-time. From providing a quote
                          to finally delivering the project, D365 Project
                          Operations supervises everything, including pricing,
                          resourcing, testing, and delivery. Also, it optimises
                          the existing processes, operations, and resources to
                          become more profitable within limited boundaries.
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
                        <span>Encourage Team Collaboration</span>
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
                          Dynamics 365 Project Operations is a cloud-based
                          application that allows you to manage any operation
                          from any location at any time. The seamless team
                          collaboration lets the team communicate together,
                          share insights, and make decisions for the assured
                          success of a project. It lets the team supervise any
                          process in real-time and make data-driven decisions
                          whenever needed, resulting in more efficiency with
                          enhanced productivity.
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
                        <span>Stay Connected</span>
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
                          D365 Project Operations is a versatile platform that
                          can be accessed from any computer or mobile device and
                          enables team collaboration. It makes use of the
                          capabilities of contemporary technologies like AI, ML,
                          Mixed Realty, and IoT because it is a cloud-based
                          application.
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
                        <span>Easy Business Growth</span>
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
                          Successful project management is the key to easy
                          business growth, even when resources are limited. D365
                          Project Operations lets users successfully manage
                          multiple projects with real-time status tracking of
                          projects to streamline the operations while allocating
                          the right resources to the right project.
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
                        <span>Accurate Resource Planning</span>
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
                          Utilising resources properly and accurately leads to
                          easy profitability and maximised revenue. This is a
                          powerful solution that enables the team to plan a
                          project using needed resources. It also makes it easy
                          for the users to make estimates, create invoicing,
                          allocate resources, track resource consumption, and
                          much more.
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
                        <span>Forecast Profitability</span>
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
                          Dynamics 365 Project Operations comes with built-in
                          technologies including AI, BI, and IoT to help users
                          predict the profitability of a project before
                          acquiring it. Even after acquiring, it shows the
                          budget, true vitals, and data to give an estimate of
                          the profit from a particular project. Even so, users
                          can modify the budget and allocated resources to get
                          the desired results.
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
                        <span>Expense Management</span>
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
                          Expense management is one of the critical tasks of a
                          project, which should be managed precisely to get more
                          with fewer time and resources. D365 Project Operations
                          records each activity of the project, whether it
                          belongs to the expense or resources. Due to proper
                          tracking of a project, the invoicing or billing
                          becomes smooth and accurate.
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
                        <span>Adaptable with customisation </span>
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
                          and customer demand.
                          <Link href="/products/microsoft-dynamics-365/">
                            <a target="_blank">D365</a>
                          </Link>{" "}
                          Project Operations is flexible with unique
                          customizations to perform specific business
                          operations, enabling more focus on growth and
                          scalability rather than being consumed with core
                          operations.{" "}
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
                  Join hands with a cost-effective D365 Project Operations
                  implementation partner today and avail support beyond it.
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
                <Image src="/img/imp-left.svg" alt="imp-left.svg" width={531} height={771} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box-6">
                <div className="box-6-top-head">
                  <h2>
                    Our Simple yet Powerful D365 Project Operations
                    Implementation Methodology
                  </h2>
                  <p>
                    We evaluate your current existing system using the Microsoft
                    certified implementation approach to give you a successful,
                    safe, and open method.
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
                            Our team will begin working on the FRD (Functional
                            Requirement Document) in order to comprehend the
                            organization's current processes, as well as
                            anticipate future requirements.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Design Phase</h4>
                          <p>
                            Our team will analyse your current requirements and
                            build a GAP-FIT document based on given functional
                            requirements. The standard requirements can be named
                            as FIT and the customised requirements can be known
                            as GAP. In this, we specify the necessary, standard,
                            add-on configurations and integration needs.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>
                            Our team is dedicated to creating a Dynamics 365
                            Project Operations solution that is tailored to your
                            specific needs. We want to help you achieve maximum
                            growth and profitability by providing you with a
                            solution that is easy to use and understand.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>
                            We deploy the system on your servers, whether cloud
                            or on-premise for testing purpose and to see if it
                            meets the requirements of GAP-FIT and FRD. If it
                            does not, we will make changes to ensure that it is
                            an ideal solution for the business.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Post Go-Live Support</h4>
                          <p>
                            In the last phase, we make the system live so your
                            team can start working on it with full efficiency
                            and productivity.
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
                  Project Operations Implementation Partner?
                </h2>
                <p>
                  Our primary focus before we begin working on any project is to
                  understand your business's unique operations inside and out.
                  This allows us to explore and predict any future needs you may
                  have so that we can offer a tailored business solution -
                  because we know that no two businesses are alike. We believe
                  in customer satisfaction above all else and strive to build
                  trust with our clients which is why we've been successful for
                  the past 11 years.
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
                      to businesses like yours.
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
                      We offer competitive and cost-effective pricing for all
                      services to help you make the most of your investment.
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
                      We have a team of highly qualified and experienced
                      professionals who cater to all industries, irrespective of
                      their type and size. With extensive knowledge and
                      experience in different domains, our team is equipped to
                      handle all your industry-specific needs. Trust us to give
                      you the best results, every time.
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
                      We have a quick and easy Dynamics 365 Project Operations
                      implementation process that won't get in the way of your
                      business' efficiency. Our process is unique and
                      streamlined, so you can focus on running your business
                      without worrying about the complexities of our process.{" "}
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
                      Our team is available 24/7 to help you with any issues you
                      may have, no matter where you are or what language you
                      speak. We want to help you reach your full potential and
                      exceed your expectations.
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
                      We promise to never stop until you're completely satisfied
                      with the support and services we've provided. We know the
                      process won't be easy, but we'll be with you every step of
                      the way.
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
                <h2>Dynamics 365 Project Operations Pricing</h2>
                <p>
                  Find Dynamics 365 Project Operations plans and pricing to
                  choose the applications that are right for your business
                  needs.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>Dynamics 365 Project Operations</h3>
                <div className="price">
                  <sup>£</sup>90.50<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Get the visibility, collaboration, and agility needed to
                    drive success across your project-centric business.
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
                    <span>Get the Quotes NOW!</span>
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
                      <span>Speak to a Certified Gold Microsoft Partner</span>
                    </a>
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
              about Project Operations Implementation?
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
                      What's my role in the entire implementation project?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The only thing you need to do in order for us to develop
                        a proper D365 Project Operations implementation solution
                        for you is to provide accurate information to your
                        Dynamics 365 installation partner about your current
                        procedures and future needs. You also need to cooperate
                        throughout the process to make sure the deployment is
                        smooth and hassle-free.
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
                      Does Dynamics Square provide training?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        We provide complimentary training courses to help users
                        understand how to use the system's features,
                        capabilities, and functions. In these sessions, we will
                        also teach you the basics of the system so that you can
                        have a better understanding of your current needs and be
                        able to anticipate future needs for the installation
                        process (Phase 2 implementation).
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
                      How much will it actually cost to deploy D365 Project
                      Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        A few factors that will affect the cost of
                        implementation are time and the number of people working
                        on the project. To get an accurate price quote for the
                        implementation process, please give us a call or fill
                        out the contact form on our website.
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
                      How long will it take to successfully implement the
                      project?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        To provide an adequate and accurate timeline for
                        implementing a solution, it is essential that we have a
                        clear understanding of the business and its needs. The
                        time required is contingent upon various factors, such
                        as the number of processes, the complexity of
                        operations, integrations, and customizations.
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
                      What's next after submitting my contact details?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Our team will call you to get a better understanding of
                        your company, current needs, and what potential needs
                        might arise in the future. This is what we like to call
                        the Phase 1 Discovery Call - a chance for us to ask
                        questions and for you to get to know us better too.
                        Everything will be documented so that we can move
                        forward with creating a FRD, conducting a FIT-GAP
                        analysis, and beginning the implementation phase. If
                        necessary, another Discovery Call will be scheduled with
                        one of our highly qualified functional consultants to
                        answer any additional questions.
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

export default ProjectOperationImplementation;
