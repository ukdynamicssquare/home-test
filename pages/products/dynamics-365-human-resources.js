import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ModalVideo from "react-modal-video";
const HumanResource = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Human Resources UK Partner</title>
        <meta
          name="description"
          content="Manage workforce, maximise resource utilisation, leverage valuable AI insights to craft a better workspace with Dynamics 365 Human Resources. Schedule a demo today." />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-human-resources/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-human-resources/" />
        <meta property="og:title" content="Dynamics 365 Human Resources | Optimize HR Programs" />
        <meta property="og:description" content="Manage workforce, maximize resource utilization, leverage valuable AI insights to craft a better workspace with Dynamics 365 Human Resources. Schedule a demo today." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Human-Resource-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-human-resources/" />
        <meta property="twitter:title" content="Dynamics 365 Human Resources | Optimize HR Programs" />
        <meta property="twitter:description" content="Manage workforce, maximize resource utilization, leverage valuable AI insights to craft a better workspace with Dynamics 365 Human Resources. Schedule a demo today." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/Human-Resource-banner.png" />
       
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Human Resources
              </h1>
              <p>Connect your people, optimise HR policies, and drive enhanced profitability with Dynamics 365 Human Resource.</p>
              <div>
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
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Human-Resource-banner.png"
                alt="D365-Human-Resources"
                width={778} height={473}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              What is dynamics 365
              <br />
              Human Resources?
            </h2>
            <p>Microsoft Dynamics 365 Human Resources (formerly known as Microsoft Dynamics 365 Talent) is designed to boost your resourcing capabilities and manage your entire workforce to produce better results. It builds a bridge between management and people, helps onboard the right talent, and shows ways to retain the dedicated resources of the organisation for easy growth and rapid scalability.</p>
            <p>D365 Human Resources solution works towards reducing the overall recruiting cost and improving their performance through optimised policies. Employees can submit leave requests, improve their experience, adhere to a predetermined reporting hierarchy, and receive feedback on the same dashboard.</p>
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
                            src="/img/icons-_Highly-Flexible-Solution.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Highly Flexible Solution</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Explore your business capabilities with Dynamics 365
                        Human Resource solution. Extend your resource
                        optimisation by connecting it with partner solutions or
                        integrating with other Microsoft solutions.
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
                            src="/img/icons-_Connected-HR-Practices.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Connected HR Practices</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Manage end-to-end tasks from onboarding, compensation &
                        benefits management, leave, absence, & compliance
                        management, payroll & performance management to training
                        & certification.
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-_Highly-Flexible-Solution.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Collect Staff Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      With the cloud deployment, you can centralise the entire data while reducing the complexity of the system. You can visualise the data to empower planning and strategies using <Link href="/products/microsoft-power-bi/"><a target="_blank">Power BI</a></Link>. 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnews">
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
                            src="/img/icons-_Actionable-Insights.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Actionable Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        Attain built-in AI insights of your workforce, ensure
                        regulatory compliance, and empower your HR people with
                        depth insights to make timely decisions and drive
                        smoother human resourcing practices.
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
                            src="/img/icons-_Highly-Flexible-Solution.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Offer an Enhanced Experience</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      Human Resources easily integrates with other native Microsoft solutions to offer a seamless and connected work experience. It provides a variety of self-service tools to help employees with their needs.
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-_Actionable-Insights.svg"
                            alt="icons"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Improve HR Policies</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      Based on staff insights, you can create customised policies that meet defined guidelines to maximise efficiency as well as productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-style-bg">
        <div className="container">
        <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>Microsoft Dynamics 365 Human Resources Benefits</h2>
               <p>Uplift your HR capabilities to add more opportunities for growth with Dynamics Square.</p>
              </header>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
              <div class="style-grid-icons">
              <Image
                src="/img/Seamless-Recruiting.svg"
                alt="Seamless-Recruiting"
                width={88} height={88}
              />
              </div>
                <div className="style-grid-content">
                  <h3>Seamless Recruiting</h3>
                  <p>The Microsoft Dynamics 365 Human Resources module will empower you to process the onboarding of new employees seamlessly. It manages the entire process, from choosing a suitable candidate to hiring and beyond.</p>
                </div>
              </div>
              <div className="style-grid-1">
              <div class="style-grid-icons">
              <Image
                src="/img/Access-Automation.svg"
                alt="Access-Automation"
                width={88} height={88}
              />
              </div>
                <div className="style-grid-content">
                  <h3>Access Automation</h3>
                  <p>If you are from the human resources department, you will understand that a number of recurring and manual tasks consume a lot of time and effort. With D365 HR, you can automate such cumbersome processes with automation and self-service portals.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
              <div class="style-grid-icons">
              <Image
                src="/img/Time-and-Attendance-Management.svg"
                alt="Time-and-Attendance-Management"
                width={88} height={88}
              />
              </div>
                <div className="style-grid-content">
                  <h3>Time and Attendance Management</h3>
                  <p>It is one of the most complicated tasks for all HR professionals. But, with this solution, you can track, evaluate, and manage all such tasks without any hassle. Employees can also apply for leaves and receive feedback through the same portal by using self-help tools.</p>
                </div>
              </div>

              <div className="style-grid-1">
              <div class="style-grid-icons">
              <Image
                src="/img/Effortless-Reporting-Analytics.svg"
                alt="Effortless-Reporting-Analytics"
                width={88} height={88}
              />
              </div>
                <div className="style-grid-content">
                  <h3>Effortless Reporting and Analytics</h3>
                  <p>You can analyse the employee data to evaluate the performance of all areas. Also, you can view the data related to working hours, sick leaves, vacations, reimbursement, training, and much more using an expressive table and diagram.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Microsoft Dynamics 365 Human Resources Features</h2>
                <h3>
                  Streamline your entire Human Resource operations with D365
                  Human Resources.
                </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Boost Employee <br /> Experience
                      </h3>
                      <div className="overlay">
                        <p>
                          Empower your HR managers with the right tools,
                          centralise your employees’ data, enable your employees
                          with self-service capability, drive improved employee
                          engagement and development with HR solutions.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimise HR
                        <br />
                        Practices
                      </h3>
                      <div className="overlay">
                        <p>
                          Enterprises can optimise their human resource
                          practices, improve employee engagement, and manage
                          end-to-end HR tasks embedded with AI insights that
                          drive growth and sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Maximise
                        <br />
                        Agility
                      </h3>
                      <div className="overlay">
                        <p>
                          Automate HR administration, streamline HR process
                          flow, and easily integrate with third-party HR
                          solutions to improve your business performance while
                          ensuring security, privacy, and compliance part.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Gain Workforce
                        <br />
                        Insights
                      </h3>
                      <div className="overlay">
                        <p>
                          Centralise your human resource data, stay updated with
                          real-time employees’ insights, and make instant
                          decisions leveraging embedded analytics with Microsoft
                          Dynamics 365 Human Resource solution.
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
      
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/human-resource-side.png"
                    className="fix-im"
                    alt="Dynamics 365 Human Resources Service"
                    width={561}
                    height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <img
                            src="/img/Video-Human Resource.png"
                            alt="Video-Human-Resource"
                          />
                          <span className="cente-icns">
                            <img src="/img/play_icons.svg" alt="play_icons" />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics 365 Human Resources Service</h2>
                <p>
                  Boost your human resource capabilities and enhance employee
                  engagement while availing our top-notch services
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>
                    Drive smoother human resourcing practices by Dynamics 365
                    Human Resources implementation.
                  </p>
                  <div className="action-content">
                    <Link  href="/dynamics-365-human-resources-implementation/">
                     <a target="_blank">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                    Update or upgrade your system with advanced human resource
                    capabilities with Dynamics Square.
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" href="#exampleModal">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Maximise your resource utilisation and optimise your
                    existing resources with our simple yet powerful{" "}
                    <Link href="/our-services/dynamics-365-support-services/">
                     <a target="_blank">Dynamics 365 support services</a>
                    </Link>
                    .
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" href="#exampleModal">
                      Get Started
                    </Link>
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
                <h3>Maximise the Growth Opportunities</h3>
                <p>Streamline your human resources operations by implementing Dynamics 365 Human Resources.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#about">
                    <a target="_blank" className="btn-get-started scrollto">
                      <span>Get Started Now!</span>
                    </a>
                  </Link>
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
                <p>
                  Check out the latest Human Resource pricing and choose the
                  most suitable package as per your needs.
                </p>
              </header>
            </div>
          </div>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Human Resources</h3>
                <div className="price">
                  £98.60<span>Per-User/Per Month</span>
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
                £3.30<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Employee and manager self-service capabilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
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
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>
                  Have you got <br /> questions about Dynamics 365 HR?
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
                      What is the Dynamics 365 HR system?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        D365 Human Resource is an employee management solution
                        built to empower HR people and drive improved employee
                        engagement practices. It is a powerful solution that
                        improves organisational agility, provides actionable
                        insights, and accelerates recruitment, among other
                        benefits.
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
                      Is Dynamics 365 Human Resources free?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        No, D365 Human Resources isn't free. You can, however,
                        take advantage of a free 30-day trial period.You can get
                        the trial by following the{" "}
                        <Link href="/products/microsoft-dynamics-365/">
                        <a target="_blank">Microsoft Dynamics 365</a>
                        </Link>{" "}
                        page. And, when it comes to D365 Human Resource pricing
                        and licensing, you can check out the pricing section
                        available above.
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
                      What are the top features of D365 Human Resources?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        This is a powerful application that offers immense
                        features and capabilities to all users, including,
                        empowering employees, optimising current processes,
                        pushing employees for their personal development, and
                        optimising HR policies for a more engaging employee
                        experience.
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
                      What is the cost of D365 Human Resource Implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The cost of implementation is not fixed because the cost
                        of a business solution depends on the complexity of the
                        business and its changing requirements. If you want to
                        get an accurate quote for the cost of this application
                        so that you can get started working with it, contact the
                        certified{" "}
                        <Link href="/dynamics-365-human-resources-implementation/">
                        <a target="_blank">D365 Human Resource Implementation Partner</a>
                        </Link>
                        .
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
                      How much time will it take to implement D365 HR?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The implementation time varies from business to
                        business. With the individualised demands and increased
                        need for customisation, it would not be right to give
                        you exact data. However, you can contact a certified
                        gold support partner like{" "}
                        <Link href="/"><a target="_blank">Dynamics Square</a></Link> to discuss your
                        needs. Once our expert consultants understand your
                        needs, we will give you an estimate of the time and cost
                        of the entire process.
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

export default HumanResource;
