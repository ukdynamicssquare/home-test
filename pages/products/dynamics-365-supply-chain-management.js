import React, { useState } from "react";
import Head from "next/head";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";
import Blog from "../../components/Blog";
const SupplyChainManagement = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Dynamics 365 Supply Chain Management Partner UK | Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics 365 Supply Chain management helps organizations simplify, streamline, and accelerate their supply chain practices just to produce, drive, and scale high."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-supply-chain-management/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-supply-chain-management/" />
        <meta property="og:title" content="Dynamics 365 Supply Chain Management | Dynamics Square" />
        <meta property="og:description" content="Dynamics 365 Supply Chain management helps organizations simplify, streamline, and accelerate their supply chain practices just to produce, drive, and scale high." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Supplychain%20banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-supply-chain-management/" />
        <meta property="twitter:title" content="Dynamics 365 Supply Chain Management | Dynamics Square" />
        <meta property="twitter:description" content="Dynamics 365 Supply Chain management helps organizations simplify, streamline, and accelerate their supply chain practices just to produce, drive, and scale high." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/Supplychain%20banner.png" />
      </Head>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="R3Ol_-prHeI"
        onClose={() => setOpen(false)}
      />

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365 <br />
                Supply Chain Management
              </h1>
              <p>
                Explore new Supply Chain capabilities, optimize resources,
                maximize operational efficiency, and accelerate time to market
                while keeping real-time eyes in your end-to-end supply chain
                operations.
              </p>
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
                src="/img/Supplychain banner.png"
                alt="Dynamics 365 Supply Chain Management"
                width={782} height={473}
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
              Supply Chain Management?
            </h2>
            <p>
              Microsoft Dynamics 365 Supply Chain helps organizations simplify,
              streamline, and accelerate their supply chain practices just to
              produce, drive, and scale high. You can bring a unified view of
              your entire supply chain cycle from inventory, warehousing,
              manufacturing, logistics, and more along with predictive data to
              support instant and strategic decision-making.
            </p>
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
                            src="/img/Accelerate-Time-to-Market.svg"
                            alt="Accelerate-Time-to-Market"
                          />
                        </div>
                        <span>Accelerate Time to Market</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        With Dynamics 365 Supply Chain Management, accelerate
                        time to market, simplify your order management, and
                        seamlessly manage & resolve product quality issues to
                        improve customer satisfaction.
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
                            src="/img/Demand-Analysis-Fulfillment.svg"
                            alt="Demand-Analysis-Fulfillment"
                          />
                        </div>
                        <span>Demand Analysis & Fulfillment</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Organize and manage your entire financial records using
                        a general ledger. Manage your account payable, accounts
                        receivable, tax management, and more with{" "}
                        <Link href="/products/microsoft-dynamics-365-finance/">
                        <a target="_blank">D365 Finance</a>
                        </Link>
                        .
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
                            src="/img/Sell-smarter-and-improve-customer-service.svg"
                            alt="Sell-smarter-and-improve-customer-service"
                          />
                        </div>
                        <span>Optimize Inventory & Logistics</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Dynamics 365 inventory management feature lets you drive
                        omnichannel inventory with real-time access and automate
                        your logistics and warehousing processes at ease. Also,
                        it lets you simplify your procurement management, and
                        estimate accurate landed costs with D365 Supply Chain
                        Management with the seamless integration of{" "}
                        <Link href="/products/dynamics-365-business-central/">
                        <a target="_blank">Dynamics 365 Business Central</a>
                        </Link>{" "}
                        Warehouse Management.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnews">
                  <hr className="mob-disp" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi4"
                        aria-expanded="false"
                        aria-controls="fi4"
                      >
                        <div className="wr-in">
                          <img src="/img/4.jpg" alt="images-name" />
                        </div>
                        <span>Intelligent Manufacturing Operations </span>
                      </button>
                    </h3>
                    <div
                      id="fi4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        Bring agility and scalability in your manufacturing
                        processes, minimize errors, and drive business
                        continuity even in remote locations by implementing
                        Dynamics Supply Chain module embedded with{" "}
                        <Link href="/products/microsoft-dynamics-365-ai/">
                        <a target="_blank">AI</a>
                        </Link>
                        ,{" "}
                        <Link href="/products/azure-iot-internet-of-things/">
                        <a target="_blank">IoT</a>
                        </Link>
                        , and{" "}
                        <Link href="/products/microsoft-dynamics-365/mixed-reality/">
                        <a target="_blank">Mixed Reality</a>
                        </Link>
                        .
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
                        data-bs-target="#fi5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/Increase-Asset-Uptime.svg"
                            alt="Increase-Asset-Uptime"
                          />
                        </div>
                        <span>Increase Asset Uptime</span>
                      </button>
                    </h3>
                    <div
                      id="fi5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        Automate resource scheduling, reduce machine downtime,
                        and proactively manage critical supply chain operations
                        by applying predictive maintenance, and improving
                        equipment effectiveness all through D365 Supply Chain
                        Solutions.
                      </div>
                    </div>
                  </div>
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
                <h2>Dynamics 365 Supply Chain Management Features</h2>
                <h3>
                  The solution includes a number of features that make it an
                  effective tool for managing supply chains.
                </h3>
              </div>
              <div className="m-o-t m-o-t-b">
                <Link href="#exampleModal">
                  <a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </div>
              {/* <div className="downlad_guid">
                        <Link href="#">
                        <span>Download Microsoft Guide</span>
                        </Link>
                     </div> */}
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Automate & <br />
                        Unify Operations{" "}
                      </h3>
                      <div className="overlay">
                        <p>
                          Bring automation in your entire supply chain pipeline
                          to accelerate processes while reducing redundant
                          tasks. Streamline operations with a unified data view
                          of inventory, manufacturing, warehousing, logistics,
                          and more.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Drive Innovation <br />& Scalability
                      </h3>
                      <div className="overlay">
                        <p>
                          Maximize operational efficiency, optimize your
                          workforce productivity, drive scalability by bringing
                          transparency in your supply chain cycle from ordering,
                          warehousing, forecasting to inventory management and
                          automation. .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Drive Strategic
                        <br /> Planning
                      </h3>
                      <div className="overlay">
                        <p>
                          Avail the Dynamics 365 Supply Chain insights and turn
                          your supply chain and logistics data into predictive
                          analytics to make informed decisions and drive
                          strategic planning for better revenue outcomes.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize
                        <br /> Resources
                      </h3>
                      <div className="overlay">
                        <p>
                          Keep tracking your inventory levels, improve cost
                          management, predict customer demand, and enable better
                          resource and inventory planning to drive productive
                          growth while reducing downtime and eliminating
                          redundancies.{" "}
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
                    src="/img/supply-chain-page-side-image.png"
                    className="fix-im"
                    alt="Supply Chain Management Service"
                    width={579} height={548}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/Video-Supply Chain Management.png"
                            alt="Video-Supply Chain Management"
                            width={390} height={259}
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
                <h2>Supply Chain Management Services</h2>
                <p>
                  Strategically Work Towards Fulfilling Your Financial Visions
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>
                    Elevate your business efficiency with our strategic and
                    highly customized D365 Supply Chain Management.{" "}
                  </p>
                  <div className="action-content">
                    <Link href="/d365-supply-chain-management-implementation/">
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
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                    Upgrade your business capabilities with our seamless Supply
                    Chain upgrade services.
                  </p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Enjoy uninterrupted business flow to maximize growth with
                    our premium{" "}
                    <Link href="/our-services/dynamics-365-support-services/">
                    <a target="_blank">support services</a>
                    </Link>
                    .
                  </p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
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
            <h2>Dynamics 365 Supply Chain Management Pricing</h2>
            <p>
              Check out the flexible, cost-effective, and effective Dynamic 365
              Supply Chain Management Pricing.
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-3">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Financial Management</li>
                           <li> <i className="bi bi-check-lg"></i> Inventory Management</li>
                           <li> <i className="bi bi-check-lg"></i> Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Purchase Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Project Management</li>
                           <li> <i className="bi bi-check-lg"></i> Additional Capabilities</li>
                        </ul>
                       
                     </div> */}
            </div>
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365
                  <br />
                  Supply Chain Management
                </h3>
                <div className="price">
                £147.90<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Build Resilience with an Agile Supply Chain with{" "}
                    <Link href="/products/microsoft-dynamics-365/">
                    <a target="_blank">Dynamics 365</a>
                    </Link>
                    . Enhance Customer Service. Drive Business Sales. Manage
                    Topline Revenue. Market Smarter. Services: Cloud-Based CRM,
                    Customer Support, Automate Sales, Marketing Features.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Read and Approve</li>
                           <li> <i className="bi bi-check-lg"></i> Employee Self Serve</li>
                           <li> <i className="bi bi-check-lg"></i> Run All Reports</li>
                        </ul>
                       
                     </div> */}
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

      <section className="new-style-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Dynamics 365 Supply Chain Management Modules</h2>
                <p>
                  Dynamics 365 Supply Chain Management modules offer seamless
                  features and capabilities to help you streamline the entire
                  supply chain while maximising revenue by utilising existing
                  resources. Some of the modules are:
                </p>
              </header>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Asset Management</h3>
                  <p>
                    Dynamics 365 SCM effectively manages all the assets,
                    irrespective of the purpose, including maintaining,
                    operating, selling, and developing. Also, it allows the
                    organisation to track and record all products precisely
                    without any errors.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Product information management</h3>
                  <p>
                    Product information management (PIM) is the process of
                    organising and sharing product data across an organization,
                    from initial conception to final sale. By maintaining a
                    shared product definition, businesses can better manage
                    configurations of a product to fit within specific
                    processes. This module can automate and streamline these
                    tasks to improve efficiency and support business growth.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Inventory management</h3>
                  <p>
                    This is a practical module that offers efficient inventory
                    management to all organisations, whether small or large.
                    This module collects and records all inventory and helps
                    organisations eliminate restrictions on shipment by
                    providing real-time insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Warehouse management</h3>
                  <p>
                    Warehouse management in D365 SCM lets the organisation
                    supervise all operations related to the warehouse. It comes
                    integrated with other departments, like{" "}
                    <Link href="/industries/microsoft-cloud-for-manufacturing/">
                    <a target="_blank">manufacturing</a>
                    </Link>
                    , transportation, quality control, sales, transfer,
                    purchase, and returns, to streamline and connect all
                    departments for better data flow.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Transportation management</h3>
                  <p>
                    D365 Supply Chain Management manages all the transportation
                    communications with accurate tracking of data. It supervises
                    all transport transactions, whether they are moving out or
                    coming in the organisation.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Rebate management</h3>
                  <p>
                    The rebate management module is designed to help businesses
                    create contracts or agreements with end customers to make
                    the entire transaction legal and valid. This allowed the
                    businesses to calculate rebates, deductions, and royalties
                    on each deal more effectively. Also, it centralises all of
                    the data so that you can create, review, and process all
                    transactions more efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p>
                The D365 Supply Chain Management possess more useful modules,
                including Master planning, Inventory visibility, Retail
                headquarter management, Production control, Procurement and
                sourcing, Service management, Cost allocation, Sales and
                marketing, Questionnaire, Project management and accounting,
                Vendor collaboration, Time and attendance,{" "}
                <Link href="/products/microsoft-dynamics-365-mixed-reality/">
                <a target="_blank">Mixed Reality integration</a>
                </Link>
                , Self-service portal, Distributed hybrid topology, Scale Unit
                Manager, Rebate management, Face recognition, and IoT
                Intelligence.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Create an intelligent and adaptable supply chain</h3>
                <p>
                  Contact us to discuss your current business needs so that we
                  can help you get a personalised solution for your business for
                  more growth and revenue.
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
      <section className="solution-faq faq">
        <div className="container">
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
                      What is Supply Chain Management in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Supply Chain Management is an excellent tool
                      for small to medium businesses who want to improve their
                      supply chain practices. The Dynamics Supply Chain module
                      gives your workforce the ability to not only plan and
                      logistically arrange things, but also to get predictive
                      insights in real-time about different aspects of the
                      supply chain including production, planning, warehousing,
                      and transportation management. This increased operational
                      efficiency will result in greater profitability and
                      scalability for your business.
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
                      How Supply Chain Management helps in business?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Considering the rapid changes in the industry, increasing
                      customer demand, and continuously evolving market
                      competitions, businesses are required to implement a
                      solution to streamline and automate their supply chain
                      operations.
                      <br />
                      <br />
                      Initially, you can manage your operations manually. Once
                      your business starts growing, you need to support your
                      business continuity with smart business solutions like
                      Microsoft Dynamics 365 Supply Chain Management – a
                      cloud-based solution to seamlessly roll out your supply
                      chain efficiency.
                      <br />
                      <br />
                      Dynamics 365 for Supply Chain is embedded with AI, Mixed
                      Reality, and IoT capabilities, that help to eliminate your
                      repetitive tasks, empower your workforce to make instant
                      strategic decisions, and reduce downtime for your
                      equipment to eventually drive continuity, scale faster,
                      and remain productive.
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
                      Why Dynamics 365 Supply Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 for Supply Chain Management is the key
                      solution to manage all your supply chain, warehousing, and
                      operational needs. You can stay updated with all the
                      happening in real-time with D365 Supply Chain Management
                      services. Whether you want to keep real-time eyes on your
                      inventory status, simplify your procurement process, or
                      drive seamless logistics operations, Microsoft’s Supply
                      Chain solutions help enterprises to manage their
                      end-to-end SCM practices. <br />
                      <br />
                      With Supply Chain Solutions (SCM), you can streamline your
                      processes and automate your data to modernize your supply
                      chain practices. With AI efficiency and prediction
                      capability, businesses can make informed decisions to
                      support growth, productivity, and scalability. Connect
                      with Dynamics Square to know how Microsoft’s Supply Chain.
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
                      What are the key features of Dynamics 365 Supply Chain
                      Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Some of the key features of Dynamics 365 Supply Chain
                      Management software include its business-driven abilities
                      that help manage the entire supply chain process with
                      real-time data. This data can help drive more efficient
                      and accurate decision-making for your company. Other
                      notable features of D365 Supply Chain Management software
                      include:
                      <br />
                      <br />
                      <ul>
                        <li>Asset Management</li>
                        <li>Cost Accounting</li>
                        <li>Cost Management</li>
                        <li>Inventory Management</li>
                        <li>IoT Intelligence</li>
                        <li>Master Planning</li>
                        <li>Procurement & Sourcing</li>
                        <li>Product Information Management</li>
                        <li>Production Control</li>
                        <li>Sales & Marketing</li>
                        <li>Service Management</li>
                        <li>Transportation Management</li>
                        <li>Warehouse Management</li>
                      </ul>
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
                      How D365 Supply Chain Management helps to drive smarter?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When you can automate your data and streamline your
                      practices while reducing costs and eliminating data
                      redundancies, it can help you bring a smoother flow across
                      your supply chain processes.
                      <br />
                      <br />
                      D365 Supply Chain Management can help your enterprise to
                      bring real-time data efficiency across your supply chain
                      pipeline from managing inventories, to warehousing, to
                      logistics management, procurement to service, and
                      transportation management.
                      <br />
                      <br />
                      Since it eliminates your manual efforts and enables access
                      to D365 Supply Chain Management insights in real-time to
                      make informed data-driven decisions. Hence, it helps
                      businesses to drive smarter.
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
                      How much does it cost to implement Dynamics 365 Supply
                      Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When it comes to Dynamics 365 Supply Chain Management
                      solutions, businesses are required to pay 135.70 pounds
                      (approx.) per user/per month. Rest depends on your number
                      of users; it will be calculated accordingly.
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
                      Can I customize or integrate my Supply Chain Management
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Microsoft Dynamics 365 Supply Comes with a number of
                      modules to support your business flow and bring continuity
                      in your supply chain pipeline with real-time access into
                      each process. <br />
                      <br />
                      We understand you could have a different set of practices
                      or flow in your supply chain, thereby Microsoft’s supply
                      chain solution comes with the flexibility that can be
                      customized according to your business suite and configured
                      or integrated to support your current as well as
                      futuristic needs.
                      <br />
                      <br />
                      If you want to discuss what sort of customization,
                      integration, or configuration can be performed addressing
                      your custom supply chain process, connect with Dynamics
                      Square.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs-extra">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Explore Our Recent Blogs & Resources</h2>
                <p>
                  Whether you are a start-up, an SMB, or an enterprise, the
                  Dynamics Square blog is the best place to get inspired and
                  learn more about Microsoft Business Applications.
                </p>
              </header>
            </div>
          </div>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/blog/d365-supply-chain-management-overview/">
                     <a target="_blank"><i className="bi bi-box-arrow-up-right"></i>Dynamics 365 Supply Chain Management: Overview, Benefits, Features</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/what-is-dynamics-365-supply-chain-management/">
                      <a target="_blank"><i className="bi bi-box-arrow-up-right"></i>What Is Dynamics 365 Supply Chain?</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/microsoft-supply-chain-platform/">
                     <a target="_blank"><i className="bi bi-box-arrow-up-right"></i>Microsoft Supply Chain Platform: New Approach To Designing Supply Chains For Agility, Automation, And Sustainability</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/d365-finance-and-operations-overview/">
                     <a target="_blank"><i className="bi bi-box-arrow-up-right"></i>D365 Finance And Operations: Overview, Capabilities, Benefits, FAQ</a>
                    </Link>
                  </li>
                  
                </ul>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupplyChainManagement;
