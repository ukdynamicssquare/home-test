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

const HumanResourceImplementation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 Human Resources Implementation Partener UK</title>
        <meta
          name="description"
          content="Manage your entire workforce, onboard right talent, and transform employee experiences through the implementing Dynamics 365 Human Resources today!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-human-resources-implementation/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365 <br /> Human Resources Implementation
              </h1>
              <p>
                Manage your Entire Workforce, onboard right talent, and
                revolutionise employee experiences while driving smoother human
                resource practices through implementing Dynamics 365 Human
                Resource. <br />
                <br />
                <strong>
                  Learn how Dynamics 365 Human Resources implementation can help
                  you improve your organizational agility while streamlining
                  entire HR operations from recruitment to administration.
                </strong>
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
                src="/img/Human-Resource-banner.png"
                alt="Human-Resource-banner"
                width={778} height={473}
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
                  How can Dynamic 365 Human Resources can help you accelerate
                  recruitment process with enhanced employee engagement?
                </h2>
                <p>
                  Dynamics 365 Human Resource is a powerful business solution
                  that can help you run more efficient human resource operations
                  while encouraging your entire workforce to be more efficient
                  and productive. It enables you to hire the right talent with
                  limited resources and engage the dedicated workforce with the
                  organisation for its betterment and easy scalability. It comes
                  with various powerful functions, including employee
                  development, personnel management, self-service portals,
                  benefits management, compensation, absence management,
                  employee management, and self-service portals, to let you
                  manage the employee lifecycle efficiently.
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
                        <span>Unified Data Management</span>
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
                          <Link href="/products/dynamics-365-human-resources/">
                          <a target="_blank">Dynamics 365 Human Resources</a>
                          </Link>{" "}
                          is a practical solution that displays all employees'
                          centralised data, regardless of location, on a single
                          screen. The unified data allows users to utilise
                          embedded analytics and other BI tools to help you make
                          informed and correct decisions whenever needed.
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
                        <span>Automate Attendance Tracking</span>
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
                          One of the crucial tasks for HR management is to
                          manage the attendance, leave, and compensation of
                          employees without any errors. If you are doing it
                          manually or using a legacy system, you must be well
                          versed in the errors you encounter at the end of each
                          month. Don't you worry, Dynamics 365 Human Resources
                          has got you covered by offering an advanced solution
                          that will track and record all such data while
                          focusing on employee productivity.
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
                        <span>Understanding Employee Needs</span>
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
                          You will agree with me when I say that employees'
                          needs are subject to change with time. With D365 Human
                          Resource, you can easily understand the changing needs
                          of the employees by performing and recording forms or
                          small tasks regularly. Also, you can address the
                          individual concerns by providing the required
                          resources or resolving the respective issues on time.
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
                        <span>Simplify the Recruitment Process</span>
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
                          A recruitment process consists of a number of complex
                          milestones, which must be cleared for a smooth
                          recruitment practice. D365 HR simplifies the whole
                          process, starting from finding a candidate that suits
                          the requirements to retaining them for a long-term
                          plan. It collects data for each milestone, stores it
                          on the portal, and shows it to the concerned person.
                          It lets the organisation keep track of each successful
                          milestone covered.
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
                        <span>Hire and Retain the Best Talent</span>
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
                          The growth of a company depends on the right choice of
                          talent. When the right employee is hired, it directly
                          leads to the growth of the organisation as well as the
                          employee. As per the specific selection criteria,
                          Dynamics 365 HR enables the recruitment team to
                          shortlist the candidate, record the data, and share
                          the profile with the concerned person, who decides
                          whether the candidate is good to go for the next round
                          or not.
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
                        <span>Optimise HR Policies</span>
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
                          D365 Human Resources employs cutting-edge technology
                          such as AI, BI, and IoT to assist you in developing
                          new policies for a more sustainable candidate
                          experience, as well as optimising existing policies
                          where there is room for improvement. It not only
                          optimises HR policies, but many of the admin-level
                          policies to create an employee-centric environment.
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
                        <span>Improve Employee Experiences</span>
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
                          The organisation must try to provide a liveable and
                          pleasant experience to all employees so that they stay
                          engaged with the company, resulting in a high employee
                          retention rate and low resignation rate.{" "}
                          <Link href="/products/microsoft-dynamics-365/">
                            <a target="_blank">Dynamics 365</a>
                          </Link>{" "}
                          provides a platform consisting of all data and
                          necessary information with the flexibility to access
                          self-service human resource tools and resolve simple
                          queries without bothering anyone.{" "}
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
                        <span>Utilize Workforce Insights</span>
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
                          Dynamics 365 Human Resources is a cloud-based solution
                          that comes with real-time workforce insights. It comes
                          with embedded analytics that tracks all data related
                          to the human workforce, with the option of Power BI
                          integration to visualise as well as utilise the data
                          efficiently. Based on this knowledge, the HR team can
                          conduct surveys to determine the exact needs of the
                          employees and provide them with all positivity.
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
                  JJoin hands with a cost-effective D365 Human Resources
                  implementation partner today and avail support beyond it.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now!</span></a>
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
                    Our Simple yet Powerful D365 Human Resources Implementation
                    Methodology
                  </h2>
                  <p>
                    Microsoft has a certified implementation methodology that we
                    use to understand your existing legacy system. With this
                    process, we can guarantee you a successful, secure, and
                    transparent process.
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
                            Our team will begin work on preparing the FRD
                            (Functional Requirement Document) in order to gain
                            an understanding of the organization's current
                            processes as well as to predict any future
                            requirements.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Design Phase</h4>
                          <p>
                            Based on the specifications you've provided, our
                            team will examine your present needs and create a
                            GAP-FIT document that defines what you require. We
                            will identify the items that are standard and
                            already available under FIT, and we will list the
                            modifications you require that are not yet available
                            under GAP. This document will assist us in
                            determining the typical integrations and
                            configurations you require, as well as any potential
                            add-ons.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>
                            In this stage of the project, our team will develop
                            a Dynamics 365 Human Resources solution that is
                            personalized and caters to your company
                            specifically. This will help you reach new levels of
                            growth and profitability.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>
                            By deploying the system on servers, we are able to
                            provide users with a test version of the system.
                            This also allows us to test whether the system has
                            been built according to the GAP-FIT and FRD. If not,
                            we will make further changes to ensure that we are
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
                            and productivity. Our team will be there to help you
                            with the transition and to ensure that everything
                            runs smoothly.
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
                  Why Choose Dynamics Square as Your Trusted Dynamics 365 Human
                  Resources Implementation Partner?
                </h2>
                <p>
                  At the beginning of every project, our goal is to learn about
                  your company's specific operations, get an idea of your future
                  needs, and offer a custom-made solution. We're dedicated to
                  customer satisfaction and developing trust between us and our
                  clients - which has been a big part of our success over the
                  past 11 years.
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
                      We're here to help you take your business to the next
                      level with our team of certified professionals. We have
                      years of experience in providing implementation, upgrade,
                      and support services to businesses like yours, so you can
                      rest assured that you're in good hands.
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
                      We work hard to provide you with competitive and
                      cost-effective pricing for all of our services so that you
                      feel confident and good about the money you're spending
                      with us.
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
                      OWe have experts with extensive knowledge and experience
                      in different industries who can cater to all types and
                      sizes of businesses
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
                      Our Dynamics 365 Human Resources implementation process is
                      quick, unique, and efficient - perfect for businesses who
                      want to avoid the complexities that come with other
                      methods. You can rely on us to keep your operations
                      running smoothly without any unnecessary stress or
                      complications.
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
                      Our professional team of experts is available 24/7 to help
                      you with whatever you need, no matter what time it is,
                      where you are, or what language you speak. We're here to
                      help you break through any barriers that might be holding
                      you back.
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
                      We will continue working diligently until you are
                      completely satisfied with the support and services we have
                      provided. The process may not be easy, but we give you our
                      word that we will see it through.
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
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Dynamics 365 Human Resources pricing</h2>
              </header>
            </div>
          </div>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Human Resources</h3>
                <div className="price">
                  <sup>£</sup>90.50<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Includes full application capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Human Resources Self-Service</h3>
                <div className="price">
                  <sup>£</sup>3<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Employee and manager self-service capabilities
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
                <Link href="#exampleModal">
                  <a
                  data-bs-toggle="modal"
                  
                  className="btn-get-red"
                >
                  <span>Get the Quotes NOW!</span></a>
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
              Most searched Dynamics 365 <br /> Human Resources Implementation
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
                        Your sole responsibility will be to provide your
                        Dynamics 365 installation partner with correct
                        information about your present processes and anticipated
                        future needs so that we may create the ideal D365
                        Project Operations implementation solution for you.
                        Additionally, for a flawless and easy deployment, you
                        must be cooperative throughout the process.
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
                        We provide free comprehensive training to users so they
                        can get the most out of the new solution. This not only
                        includes learning about all the features and
                        capabilities, but also understanding the fundamental
                        capabilities to recognise present and future needs for
                        Phase 2 implementation (if necessary).
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
                        Following the submission of your information, one of our
                        experts will contact you to conduct a Phase 1 Discovery
                        Call in which they will learn more about your company's
                        history, current needs, and potential future
                        requirements. The implementation phase will begin after
                        we have finished documenting everything, creating a FRD,
                        and running a FIT-GAP analysis. In the event that it is
                        necessary, we set up another Discovery Call with one of
                        our knowledgeable functional consultants to address the
                        issues.
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
                      What is the accurate cost of D365 Human Resources
                      implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The exact cost of implementation is determined by a
                        number of factors, just as time. To receive a precise
                        price for the implementation process, you may just phone
                        us and complete the Contact Form.
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
                      How long will it take to implement the project
                      successfully?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
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
                        integrations, and customizations.{" "}
                      </p>
                      <p>
                        <b>See Also -</b>
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

export default HumanResourceImplementation;
