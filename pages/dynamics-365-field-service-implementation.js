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

const FieldServicesImplementation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>
          Dynamics 365 Field Service Implementation | Dynamics Square
        </title>
        <meta
          name="description"
          content="Optimize resources, explore upsell deals, track tickets 24x7, and improve overall customer engagement through Dynamics 365 Field Service Implementation. Get it Today!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-field-service-implementation/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>Dynamics 365 Field Service Implementation</h1>
              <p>
                Optimise resources, furnish omni-channel experience, and empower
                your executives to provide superior customer experience through
                the implementation of Dynamics 365 Field Service.
                <br />
                <br />
                <b>
                  Learn how Dynamics 365 Field Service implementation can help
                  you improve the overall customer experience while availing
                  enriched capabilities.
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
                width={771}
                height={478}
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
                  How can Dynamic 365 Field Service help you enhance customer
                  engagement while empowering field executives?
                </h2>
                <p>
                  Dynamics 365 Field Service is a best-in-class solution when it
                  comes to optimising field operations and empowering
                  organisations to provide effective value to customers. It
                  enables organisations to deliver services to customers'
                  locations, avail real-time AI enabled data insights, manage
                  workflows, optimise upsell and cross-sell opportunities. The
                  successful Dynamics 365 Field Service implementation would
                  provide you with opportunities, including instant technician
                  support, track customer tickets, minimise downtime, and engage
                  customers with mindful experiences to exceed customer
                  expectations.
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
                        <span>Empower Team</span>
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
                          <Link href="/products/microsoft-dynamics-365-field-service/">
                          <a target="_blank">D365 Field Service</a>
                          </Link>{" "}
                          is a powerful tool that comes with in-built modern
                          technologies to help you empower your team, whether
                          technicians or executives. Also, you can boost the
                          productivity and efficiency of the team by offering a
                          unified experience to get and share data in real-time.
                          It builds collaboration between customers, managers,
                          field service technicians, and stakeholders.
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
                        <span>Stay Connected</span>
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
                          D365 Field Service is a cloud-based platform that is
                          accessible on any device, PC or mobile. It leverages
                          the power of modern technologies such as AI, ML, Mixed
                          Realty, and IoT.
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
                        <span>Seamless Support Service</span>
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
                          <Link href="/products/microsoft-dynamics-365">
                          <a target="_blank">Dynamics 365</a>
                          </Link>{" "}
                          Field Service offers a remote access feature to
                          seamlessly rectify the issues. It provides a
                          transparent and cooperative status of the ticket or
                          service request so that your customer should be aware
                          of each step you are following to resolve the issue.
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
                        <span>Smart Resource Management</span>
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
                          It comes with automatic resource management and task
                          scheduling that enables the users to automate the most
                          complex processes of workforce management. With the
                          new service request, it automatically allocates the
                          best resource as per the complexity of the issue,
                          dispatches, handovers the inventory, and tracks the
                          ticket status to keep the organisation as well as the
                          customer informed in real-time.
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
                        <span>Empowers Technicians</span>
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
                          Technicians have to deal with all kinds of issues
                          irrespective of the complexities. If a technician
                          encounters a more complex issue as per the
                          capabilities, he/she possesses, it would create a
                          bizarre situation and the organisation may have to end
                          up with a customer or business loss. But, Dynamics 365
                          Field Service empowers the technician and the
                          organisation to use modern features like video
                          calling, data sharing, annotation, and much more to
                          resolve the issue in no time with the correct and
                          accurate solution.
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
                        <span>Customer Insights</span>
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
                          Getting proper customer insight is the key to being
                          successful in this competitive world and staying at
                          the top. D365 Field Service offers customer data,
                          including personal details, history, and ticket data.
                          Even better, it allows the organisation to send
                          personalised offers and surveys to the customer,
                          keeping them engaged with more chances of upsell.
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
                        <span>Inventory Management</span>
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
                          Inventory management is one of the crucial tasks in a
                          business that has to be managed properly. The Dynamics
                          365 records all the purchases, returns, defective
                          products, stock, and more with precision. Also, it
                          tracks the on-site appointments, provides an efficient
                          routing, updates stocks, and much more.
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
                        <span>Customizations are adaptable</span>
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
                          and customer demand. D365 Field Service is flexible
                          with unique customizations to perform specific
                          business operations, enabling more focus on growth and
                          scalability rather than being consumed with core
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
                  Avail Continuous Support for your Business Beyond
                  Implementation!
                </h3>
                <p>
                  Join hands with a cost-effective D365 Field Service
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
                <img src="/img/imp-left.svg" alt="imp-left.svg" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box-6">
                <div className="box-6-top-head">
                  <h2>
                    Our Simple yet Powerful D365 Field Service Implementation
                    Methodology
                  </h2>
                  <p>
                    We follow Microsoft's certified implementation methodology
                    to understand your existing legacy system. This guarantees
                    you a successful, secure, and transparent process.
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
                            FRD (Functional Requirement Document) so we can gain
                            an understanding of the organization's current
                            processes. We will also use the information
                            collected to predict future requirements.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Design Phase</h4>
                          <p>
                            Our team will take a look at your current
                            requirements and construct a GAP-FIT document that
                            is based on the functional requirements that have
                            been given. The standard requirements are typically
                            called FIT while the customised requirements are
                            more commonly known as GAP. In this document, we
                            will specify what the necessary, standard, and
                            add-on configurations are as well as what
                            integration needs are required.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>
                            Our team will work with you to create a personalised
                            and appropriate Dynamics 365 Field Service solution
                            that helps you achieve maximum growth and
                            profitability. We will take the time to understand
                            your specific needs so that we can create a solution
                            that is tailored just for you.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>
                            By deploying the system on servers, we're able to
                            provide users with access for testing purposes. This
                            also allows us to test the system against the
                            GAP-FIT and FRD. If there are any discrepancies, we
                            can make changes as necessary to ensure that we're
                            providing an ideal solution for the business.
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
                  Why Choose Dynamics Square as Your Trusted Dynamics 365 Field
                  Service Implementation Partner?
                </h2>
                <p>
                  At the start of every business relationship, our number one
                  priority is understanding your company's unique operations. We
                  explore your future needs and offer a tailored solution that
                  we believe will satisfy all of your current and future
                  requirements. We're successful because we always put our
                  customers first and work to build trust - which has been our
                  number one priority for over a decade now.
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
                      Our team of certified professionals has years of
                      experience in providing implementation, upgrade, and
                      support services to businesses like yours. We're dedicated
                      to helping you get the most out of your investment.
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
                      At our company, we pride ourselves on being able to offer
                      cost-effective and competitive pricing for all of our
                      services so that you can feel confident and secure in your
                      investment with us.
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
                      We have a team of experienced professionals who cater to
                      all industries, regardless of their type and size. Our
                      team has extensive knowledge and experience in different
                      domains, so you can rest assured that you're in good
                      hands.
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
                      Our Dynamics 365 Field Service implementation process is
                      quick, easy, and painless - you won't have to worry about
                      any complex processes or operations slowing down your
                      business.
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
                      Our team is always available to help you, no matter what
                      time it is or where you are in the world. We're here to
                      help you overcome any challenges you may face, without any
                      barriers of time, region, or language.
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
                      We promise to keep working until you're completely
                      satisfied with the support and services we've provided. We
                      know the process won't be easy, but you have our word that
                      we'll see it through till the end.
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
                <h2>Dynamics 365 Field Service Pricing</h2>
                <p>
                  Optimise resources, furnish omni-channel experience, and
                  empower your executives to provide superior customer
                  experience through implementing Dynamics 365 Field Service.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Field Service</h3>
                <div className="price">
                  <sup>£</sup>71.60<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Resolve service issues the first time, every time.
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
              about Field Service Implementation?
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
                      How long will it take to implement the project
                      successfully?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        We can't give you an accurate timeline for implementing
                        a solution until we fully understand the business and
                        its needs. The time required is determined by several
                        factors, including the number of processes, the
                        complexity of operations, integrations, and
                        customizations.
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
                        Your responsibility is to give us the right information
                        about your company's current status and what you'll need
                        in the future. This way, we can together find the best
                        D365 solution for you. We also rely on your cooperation
                        to make sure the installation process is as smooth as
                        possible.
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
                      What's next after submitting my contact details?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        After you submit your information, one of our
                        specialists will call you in order to learn more about
                        your company - this includes current needs as well as
                        any potential future needs. This process is what we
                        refer to as the Phase 1 Discovery Call. Everything will
                        be documented accordingly, and then a FIT-GAP analysis
                        will be done in order to establish what the
                        implementation phase will entail. If necessary, we set
                        up another discovery call with a highly qualified
                        functional consultant in order to address any issues
                        that might have come up.
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
                        we understand that it can be difficult to learn how to
                        use a new software or solution. That's why we offer free
                        training for all of our users. We want you to be able to
                        fully comprehend the features, capabilities, and
                        functionalities of the newly installed solution so that
                        you can make the most of it. Additionally, we'll assist
                        you in comprehending the fundamental capabilities so
                        that you can recognise your present and long-term needs
                        for the Phase 2 implementation process (in case of
                        need).{" "}
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
                      What is the accurate cost of D365 Field Service
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
                        The cost of implementation can vary depending on a
                        number of factors, like time. To get an accurate quote
                        for the implementation process, simply give us a call or
                        fill out the contact form.
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

export default FieldServicesImplementation;
