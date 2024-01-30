import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, FreeMode, Mousewheel, Navigation } from "swiper";
import ModalVideo from "react-modal-video";
import Blog from "../../../components/Blog";

const BusinessCentral = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          Microsoft Dynamics 365 Business Central Partner UK
        </title>
        <meta
          name="description"
          content="We are the UK's leading Microsoft Dynamics 365 Busienss Central partner offering our cost-effective and reliable services to SMBs. Schedule a free demo today!"
        />
        <meta name="keywords" content="Microsoft Dynamics 365 Business Central, Business Central UK, Microsoft Dynamics 365 Pricing, Business Central Team Member License, Business Dynamics 365, Dynamics 365 Business Central Essentials, ERP Microsoft Dynamics 365,Microsfot 365 Business, Microsoft Bc, Microsoft Business Central Pricing UK, Microsoft Business Central Partner, Business Central Integration, MS Dynamics Business Central, Business Central Support"></meta>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/"
        />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Business Central Partner UK | Dynamics Square
" />
        <meta property="og:description" content="Dynamics Square is a top UK-based Microsoft Dynamics 365 Business Central Partner for SMBs providing support, training and consultancy. Schedule a free demo!" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/business-center-new-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" />
        <meta property="twitter:title" content="
Microsoft Dynamics 365 Business Central Partner UK | Dynamics Square
" />
        <meta property="twitter:description" content="Dynamics Square is a top UK-based Microsoft Dynamics 365 Business Central Partner for SMBs providing support, training and consultancy. Schedule a free demo!" />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/business-center-new-banner.png" />
      
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
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1 className="new-heding-colo">
                Dynamics 365 <br />
                Business Central
              </h1>
              <h2 className="heading-h2">
                Digitally transform your <br /> business to the next level
              </h2>
              <p className="banner-para">Microsoft Business Central, a finely tuned cloud-based solution to help you grow your business</p>
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
                src="/img/business-center-new-banner.png"
                alt="Dynamics 365 Business Central partner"
                width={1024}
                height={597}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>
                  Automate Your Operations
                  <br /> with Dynamics 365 Business Central
                </h2>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="vide-s">
                <video className="video-screen" autoPlay loop muted poster="/img/video-thumb.png">
                  <source src="/video/BC.mp4" />
                </video>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="new-sol-con-side">
                <p>
                  If your business is incompatible with the evolving digital
                  economy, you will lose on scalable growth opportunities, while
                  being stuck in operational complexities. Managing finances,
                  accounting, business data, and customer services is tough for
                  most small to medium businesses.
                
                  Also, a lack of visibility and insights into their business
                  performance leads to bad planning and decisions. However, that
                  shouldn't stop businesses from growing. With <strong>Microsoft
                  Dynamics 365 Business Central</strong>, you can simplify the complex
                  aspects of your business seamlessly.
                </p>
                <p>
                  You can use Microsoft's comprehensive suite of smart
                  applications to automate functions, such as sales, marketing,
                  finance, service, and operations. It brilliantly unifies ERP
                  and CRM capabilities into different applications that work in
                  harmony to deliver great results for your business.
                </p>
                <p>
                  With Dynamics Square, you can use Microsoft applications to
                  make smart business decisions and ensure profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>
                  Why Choose
                  <br /> <span> Dynamics 365 Business Central?</span>
                </h2>
                <p></p>
              </header>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div>
            <Swiper
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    speed: 20000,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    speed: 20000,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    speed: 20000,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    speed: 20000,
                  },
                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    speed: 20000,
                  },
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                    speed: 20000,
                  }
                }}
                loop={true}
                freeMode={true}
                mousewheel={false}
                pagination={{
                  clickable: false,
                }}
                modules={[Autoplay, FreeMode, Mousewheel]}
                className="mySwiper busine-swiper"
              >
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title">
                        Discover a new way of managing and innovating business
                      </h3>
                      <p className="card-text">
                        Successful <Link href ="/dynamics-365-business-central-implementation/"><a target="_blank">implementation of Dynamics 365 Business Central</a></Link> enables you to reduce your operational costs by
                        eliminating manual tasks and associated errors. By
                        automating workflows, you can boost employee
                        productivity, freeing up resources from tasks like
                        billing, and invoice creation which can help in
                        innovating business and delivering exceptional customer
                        experience.
                      </p>
                    </div>
                    <Image
                      src="/img/slider-dem-1.png"
                      className="card-img-bottom"
                      alt="..."
                      width={1239}
                      height={498}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title">
                        Give life to your data to boost your business
                      </h3>
                      <p className="card-text">
                        Dynamics 365 Business Central gives you access to
                        insights in real time so that you can make informed
                        business decisions. Its capabilities like in-depth
                        reporting, embedded analytics, and appealing
                        visualisation allow you to investigate bottlenecks and
                        define the seamless operational workflow thoroughly.
                      </p>
                    </div>
                    <Image
                      src="/img/slider-dem-2.png"
                      className="card-img-bottom"
                      alt="..."
                      width={826}
                      height={332}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title">
                        Run your business from anywhere
                      </h3>
                      <p className="card-text">
                        Our cloud-based deployment and robust Microsoft
                        integration allow you the flexibility to take care of
                        your business from anywhere.
                      </p>
                    </div>
                    <Image
                      src="/img/slider-dem-3.png"
                      className="card-img-bottom"
                      alt="..."
                      width={830}
                      height={332}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title">
                        Unlock the next level of team collaboration
                      </h3>
                      <p className="card-text">
                        You can foster stronger collaboration between
                        distributed teams using tools like Microsoft Teams &
                        Outlook. Even in a remote work setup, your team will be
                        on the same page.
                      </p>
                    </div>
                    <Image
                      src="/img/slider-dem-4.png"
                      className="card-img-bottom"
                      alt="..."
                      width={826}
                      height={332}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title">
                      Implement a winning customer experience
                      </h3>
                      <p className="card-text">Using the integrated CRM, you can accelerate your sales cycle to achieve faster closures. With CRM capabilities like customer interaction tracking, predicting opportunities like up-sell and cross-sell, tailoring pricing, and creating discounts, you can decode customer experience to your benefit.</p>
                    </div>
                    <Image
                      src="/img/slider-dem-5.png"
                      className="card-img-bottom"
                      alt="..."
                      width={826}
                      height={332}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title">
                      Make security & adaptability your business mantra
                      </h3>
                      <p className="card-text">
                      Regardless of size, security can be detrimental to businesses. Dynamics 365 Business Central is designed and deployed on an advanced security-enabled Azure cloud with multiple security features like authentication, authorization, data encryption, and auditing, to ensure enterprise-grade defences.
                      </p>
                    </div>
                    <Image
                      src="/img/slider-dem-6.png"
                      className="card-img-bottom"
                      alt="..."
                      width={826}
                      height={332}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title">
                      Make sustainability your business DNA
                      </h3>
                      <p className="card-text">
                      Cut carbon footprint by leveraging the Sustainability Manager to track and manage your emissions in real time from a unified dashboard. Using the power of business intelligence to visualise data and make informed decisions.
                      </p>
                    </div>
                    <Image
                      src="/img/slider-dem-7.png"
                      className="card-img-bottom"
                      alt="..."
                      width={826}
                      height={332}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title">
                      Drive Automation with Generative AI and Copilot 
                      </h3>
                      <p className="card-text">
                      Leverage the power of AI and Copilot to automate core business processes while simplifying the entire workflow. You can chat with Copilot to get recommendations, understand processes, and find answers. Also, you can access it to get marketing text suggestions, perform bank account reconciliation, and resolve queries with no effort. 
                      </p>
                    </div>
                    <Image
                      src="/img/copilot-in-BC.png"
                      className="card-img-bottom"
                      alt="copilot-in-BC"
                      width={826}
                      height={332}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Image src="/img/micrsoft-bc-image.png" alt="micrsoft-bc-image.png" width={2300} height={974} />
          </div>
        </div>
      </div>

      <section className="nn-bg">
        <div className="bb">
          <img src="/img/bus-bg.png" alt="bgimage" width="542" height="568" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2><span>Unique functionalities of</span> Business Central <span>Supports the Uniqueness of all Businesses</span></h2>
                <p>Business Central is a technologically advanced solution capable of being personalised based on unique business requirements. We have a vast experience in aligning MSD 365 Business Central with any business for rapid and sustainable growth. Connect, collaborate, and automate the workflows to enable a business to maximise its output.<br /><br /> <Link href="/dynamics-365-business-central-features/"><a target="_blank">Dynamics 365 Business Central features</a></Link> and <Link href="/products/dynamics-365-business-central/advantages-capabilities/"><a target="_blank">capabilities</a></Link> include:
                </p>
              </header>
            </div>
          </div>
          <div className="row solution-new-tab-content d-lg-none">
            <div className="col-lg-12">
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
                        <span>Finance</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <p>
                        Manage reports, business forecasts, and accounting
                        activities through an aggregated platform with absolute
                        visibility into your organisation's financial health.
                        Give a seamless experience to your staff by automating
                        processes and using AI-generated insights to make
                        smarter business decisions. With <Link href="/products/microsoft-dynamics-365/"><a target="_blank">Dynamics 365 applications</a></Link>, automate:
                      </p>
                      <ul>
                        <li>
                          Customer Onboarding: Personalise customer engagement
                          by leveraging a 360-degree view of the customer.
                        </li>
                        <li>
                          Customer Service: Use AI models to predict customer
                          concerns & resolve issues on the go.
                        </li>
                        <li>
                          Risk Management: Eliminate financial risks through
                          automated rules-based processes.
                        </li>
                        <li>
                          Manage Cash Flow: Evaluate the financial health of the
                          business & estimate growth opportunities via financial
                          reporting.
                        </li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
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
                        <span>Sales</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <p>Experience accelerated growth in closer rates and repeat sales by empowering the sales team to build better customer relationships. Build an automated platform that encompasses your entire sales pipeline so that you have a complete overview and context. Give your team intelligent workflows and features like AI-led lead prioritisation and smart nudges.</p>
                      <ul>
                        <li>Customer Acquisition: Use insights and AI models to predict customer intent and personalise offerings.</li>
                        <li>Streamline Pipelines: Move customers through sales cycles quickly through suggested next-best actions.</li>
                        <li>Accelerate Sales: Enable faster customer engagement by prioritising leads and automating first-contact.</li>
                        <li>Coach Teams: Empower teams with deep insights into customer behaviour via real-time coaching.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
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
                        <span>Manufacturing</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <p>Optimise manufacturing capability with improved visibility into inventory, order demands, and market disruptions. Use AI and predictive analytics to align your production with existing conditions to reduce the risk of shortage or excess. Improve workforce productivity by regularly inspecting for repairs with sensor data intelligence.</p>
                      <ul>
                        <li>Production & Supply Planning: Use intelligent order & warehouse management to drive sustainable manufacturing.</li>
                        <li>Asset Management: Maximise sensor data & AI to manage inventory efficiently.</li>
                        <li>Demand Forecasting: Bring your data on a single unified platform to assess demand trends.</li>
                        <li>Automate Tasks: Improve overall productivity by automating mundane tasks with RPA.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
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
                        <span>Warehouse Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <p>Customise your warehouse management to optimise your storage space and gain insights into your shipments and inventory. Cater to order requests and inventory queries at scale removing complexity regardless of order volumes and managing the entire product lifecycle in your storage units.</p>
                      <ul>
                        <li>Inventory Management: Simplify inventory handling, status tracking & financial reporting.</li>
                        <li>Internal Storage Processes: Automate warehouse processes like removing or adding items.</li>
                        <li>Order Processing: Manage orders at scale and ensure accurate inventory is processed as per details.</li>
                        <li>Purchase order creation: Expedite order processing by automating the purchase order creation.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel free to contact us to get a demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
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
                        <span>Human Resources</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <p>Redefine HR programs and processes like payroll management, leave reporting and talent acquisition to offer enhanced employee experience. Eliminate complexity and achieve accuracy in administrative tasks by automating workflows, and guiding HR professionals to the next best action, thereby increasing productivity and building an efficient HR practice.</p>
                      <ul>
                        <li>Mobile Employee Experience: Offer a self-service platform to employees by digitalising manual workflows.</li>
                        <li>HR Operations Automation: Automate end-to-end HR operations including payroll, tax filing & compensation programs.</li>
                        <li>Talent Acquisition Management: Streamline talent scouting & onboarding processes through a guided flow.</li>
                        <li>Workforce Insights: Gain deeper insights into performance to improve organisational efficiency.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                        
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
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
                        <span>Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <p>Empower your resources with productivity tools to streamline project management, while automating tasks like timesheet creation and document management. Manage multiple projects without any stress by accurately predicting resource requirements against the project budget.</p>
                      <ul>
                        <li>Contract Management: Manage key tasks like quotes, forecasting, estimation & scope easily.</li>
                        <li>Project Progress & Performance: Use Microsoft Project capabilities to simplify the project management cycle.</li>
                        <li>Project Account: Achieve revenue compliance with International Financial Reporting Standards.</li>
                        <li>Resource Allocation: Submit, approve, and process time & expense quickly streamlining client billing.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Streamline your projects today</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
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
                        <span>Supply Chain</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <p>Simplify your planning, movement, storage, and distribution of stock tasks by leveraging data analytics to optimise the supply chain. Manage sales orders, purchases, and inventory monitoring across multiple locations. Use sensor data intelligence to identify issues and fix them to avoid process breaks.</p>
                      <ul>
                        <li>Manage Asset Lifecycle: Streamline asset management through automated scheduling and analysing sensor data.</li>
                        <li>Automate Fulfilment: Improve customer experience by AI-led inventory fulfilment automation.</li>
                        <li>Improve Visibility: Make accurate inventory decisions and demand predictions via data analytics.</li>
                        <li>Proactive Equipment Maintenance: Reduce downtime & achieve operational excellence through timely equipment maintenance.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Book Free Consultation</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row tabs-none">
            <div className="cpl-lg-12">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3 solution-new-tab"
                  id="s-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="s-pills-home-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-1"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-1"
                    aria-selected="true"
                  >
                    <h3>Finance</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-2"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-2"
                    aria-selected="false"
                  >
                    <h3>Sales</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-hpme-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-hpme-3"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-hpme-3"
                    aria-selected="false"
                  >
                    <h3>Manufacturing</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-4"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-4"
                    aria-selected="false"
                  >
                    <h3>Warehouse Management</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-5"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-5"
                    aria-selected="false"
                  >
                    <h3>Human Resources</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-6-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-6"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-6"
                    aria-selected="false"
                  >
                    <h3>Project Management</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-7-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-7"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-7"
                    aria-selected="false"
                  >
                    <h3>Supply Chain</h3>
                  </button>
                </div>
                <div
                  className="tab-content solution-new-tab-content"
                  id="s-pills-tabContent-"
                >
                  <div
                    className="tab-pane fade show active"
                    id="s-pills-home-1"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-1-tab"
                  >
                    <div className="inner-con-div">
                      <p>
                        Manage reports, business forecasts, and accounting
                        activities through an aggregated platform with absolute
                        visibility into your organisation's financial health.
                        Give a seamless experience to your staff by automating
                        processes and using AI-generated insights to make
                        smarter business decisions. With <Link href="/products/microsoft-dynamics-365/"><a target="_blank">Dynamics 365 applications</a></Link>, automate:
                      </p>
                      <ul>
                        <li>
                          Customer Onboarding: Personalise customer engagement
                          by leveraging a 360-degree view of the customer.
                        </li>
                        <li>
                          Customer Service: Use AI models to predict customer
                          concerns & resolve issues on the go.
                        </li>
                        <li>
                          Risk Management: Eliminate financial risks through
                          automated rules-based processes.
                        </li>
                        <li>
                          Manage Cash Flow: Evaluate the financial health of the
                          business & estimate growth opportunities via financial
                          reporting.
                        </li>
                      </ul>
                      <div className="call-butt">
                      <Link href="/products/dynamics-365-business-central/financial-management/">
                          <a
                            className="btn-get-started btn-blue"
                            target="_blank"
                          >
                            <span>Learn More</span>
                          </a>
                        </Link>
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-2"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-2-tab"
                  >
                      <div className="inner-con-div">
                      <p>Experience accelerated growth in closer rates and repeat sales by empowering the sales team to build better customer relationships. Build an automated platform that encompasses your entire sales pipeline so that you have a complete overview and context. Give your team intelligent workflows and features like AI-led lead prioritisation and smart nudges.</p>
                      <ul>
                        <li>Customer Acquisition: Use insights and AI models to predict customer intent and personalise offerings.</li>
                        <li>Streamline Pipelines: Move customers through sales cycles quickly through suggested next-best actions.</li>
                        <li>Accelerate Sales: Enable faster customer engagement by prioritising leads and automating first-contact.</li>
                        <li>Coach Teams: Empower teams with deep insights into customer behaviour via real-time coaching.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-hpme-3"
                    role="tabpanel"
                    aria-labelledby="s-pills-hpme-3-tab"
                  >
                    <div className="inner-con-div">
                      <p>Optimise manufacturing capability with improved visibility into inventory, order demands, and market disruptions. Use AI and predictive analytics to align your production with existing conditions to reduce the risk of shortage or excess. Improve workforce productivity by regularly inspecting for repairs with sensor data intelligence.</p>
                      <ul>
                        <li>Production & Supply Planning: Use intelligent order & warehouse management to drive sustainable manufacturing.</li>
                        <li>Asset Management: Maximise sensor data & AI to manage inventory efficiently.</li>
                        <li>Demand Forecasting: Bring your data on a single unified platform to assess demand trends.</li>
                        <li>Automate Tasks: Improve overall productivity by automating mundane tasks with RPA.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-4"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-4-tab"
                  >
                    <div className="inner-con-div">
                      <p>Customise your warehouse management to optimise your storage space and gain insights into your shipments and inventory. Cater to order requests and inventory queries at scale removing complexity regardless of order volumes and managing the entire product lifecycle in your storage units.</p>
                      <ul>
                        <li>Inventory Management: Simplify inventory handling, status tracking & financial reporting.</li>
                        <li>Internal Storage Processes: Automate warehouse processes like removing or adding items.</li>
                        <li>Order Processing: Manage orders at scale and ensure accurate inventory is processed as per details.</li>
                        <li>Purchase order creation: Expedite order processing by automating the purchase order creation.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="/products/dynamics-365-business-central/warehouse-management/">
                          <a
                            className="btn-get-started btn-blue"
                            target="_blank"
                          >
                            <span>Learn More</span>
                          </a>
                        </Link>
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel free to contact us to get a demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-5"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-5-tab"
                  >
                    <div className="inner-con-div">
                      <p>Redefine HR programs and processes like payroll management, leave reporting and talent acquisition to offer enhanced employee experience. Eliminate complexity and achieve accuracy in administrative tasks by automating workflows, and guiding HR professionals to the next best action, thereby increasing productivity and building an efficient HR practice.</p>
                      <ul>
                        <li>Mobile Employee Experience: Offer a self-service platform to employees by digitalising manual workflows.</li>
                        <li>HR Operations Automation: Automate end-to-end HR operations including payroll, tax filing & compensation programs.</li>
                        <li>Talent Acquisition Management: Streamline talent scouting & onboarding processes through a guided flow.</li>
                        <li>Workforce Insights: Gain deeper insights into performance to improve organisational efficiency.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-6"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-6-tab"
                  >
                    <div className="inner-con-div">
                      <p>Empower your resources with productivity tools to streamline project management, while automating tasks like timesheet creation and document management. Manage multiple projects without any stress by accurately predicting resource requirements against the project budget.</p>
                      <ul>
                        <li>Contract Management: Manage key tasks like quotes, forecasting, estimation & scope easily.</li>
                        <li>Project Progress & Performance: Use Microsoft Project capabilities to simplify the project management cycle.</li>
                        <li>Project Account: Achieve revenue compliance with International Financial Reporting Standards.</li>
                        <li>Resource Allocation: Submit, approve, and process time & expense quickly streamlining client billing.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Streamline your projects today</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-7"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-7-tab"
                  >
                    <div className="inner-con-div">
                      <p>Simplify your planning, movement, storage, and distribution of stock tasks by leveraging data analytics to optimise the supply chain. Manage sales orders, purchases, and inventory monitoring across multiple locations. Use sensor data intelligence to identify issues and fix them to avoid process breaks.</p>
                      <ul>
                        <li>Manage Asset Lifecycle: Streamline asset management through automated scheduling and analysing sensor data.</li>
                        <li>Automate Fulfilment: Improve customer experience by AI-led inventory fulfilment automation.</li>
                        <li>Improve Visibility: Make accurate inventory decisions and demand predictions via data analytics.</li>
                        <li>Proactive Equipment Maintenance: Reduce downtime & achieve operational excellence through timely equipment maintenance.</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Book Free Consultation</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="casestudys" className="casestudys ">
        <div className="container" data-aos="fade-up">
          <div className="row  gy-4">
            <div className="col-lg-5 align-self-center">
              <Image
                src="/img/case-study-side-banner.png"
                alt="case-study-side-banner"
                width={640}
                height={592}
              />
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>Glimpse Of What We Delivered</h2>
                <p>Dynamics 365 Case Stories</p>
              </div>
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper casestudys-sled-1"
              >
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/img/case-1.png"
                        className="casestudys-slider-item-img"
                        alt="casestudys-slider-item-img"
                        width="180"
                        height="75"
                      />
                      <p>
                        A leading British based manufacturer of Military
                        Equipment implemented Microsoft Dynamics 365 Business
                        Central to streamline their finance and inventory
                        management process.
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>2X</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                        <div className="case-content">
                          <p>80%</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/nav2009R2-to-business-central/">
                          <a target="_blank" className="btn btn-md btn-custom-1">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/img/crm-trading.png"
                        className="casestudys-slider-item-img"
                        alt="crm-trading"
                        width="180"
                        height="75"
                      />
                      <p>
                        UK's leading fragrance, skincare, cosmetics, and
                        haircare wholesaler was looking to improve its
                        operational efficiencies with Microsoft Dynamics NAV
                        2018. Discover now.
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>4x</p>
                          <span>Improved Inventory System</span>
                        </div>
                        <div className="case-content">
                          <p>100%</p>
                          <span>Alliance with HMRC</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/nav09-nav18-upgrade/">
                          <a target="_blank" className="btn btn-md btn-custom-1">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/img/wipersupplywide.png"
                        className="casestudys-slider-item-img"
                        alt="wipersupplywide"
                        width="180"
                        height="75"
                      />
                      <p>
                        British-based Hygienic Disposable Cleaning & Wiping
                        Products wholesaler wanted to up and cross sell to
                        increase the sales volume with customers. Read how they
                        did it!
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>10x</p>
                          <span>Improved Customer Experience</span>
                        </div>
                        <div className="case-content">
                          <p>50%</p>
                          <span>Increased Sales Revenue</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/nav-2016-support-services/">
                          <a target="_blank" className="btn btn-md btn-custom-1">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-business-why">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 align-self-center">
              <div className="wy-sultion-left-head wy-sultion-left-head-busines">
                <h2>
                  Why Follow{" "}
                  <span>Industry Leaders in choosing Business Central?</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="row gx-4">
                <div className="slider-cap">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="slider-inner-solution-1">
                        <h3>Unlock unimaginable capabilities</h3>
                        <p>
                          Join the cohort of successful businesses that have
                          switched from QuickBooks, Xero, Sage, <Link href="/products/microsoft-dynamics-gp/"><a target="_blank">Microsoft Dynamics GP</a></Link>, and Google Spreadsheets to explore a wide range of functionalities that Dynamics 365 Business
                          Central offers to power accounting & finance management.
                        </p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="slider-inner-solution-1">
                        <h3>Automate your way to success</h3>
                        <p>Do what you do best while we help you automate all the tedious, repetitive, and resource-draining tasks so that you can perfectly optimise your time and workforce.</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-inner-solution-1">
                        <h3>Continuous learning to excellence</h3>
                        <p>Don't let voluminous rows & columns of numbers give you nightmares. Business Central turns your data into attractive and easy-to-understand visualisations so that you maximise its value.</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-inner-solution-1">
                        <h3>Expansive capabilities to scale</h3>
                        <p>Increase efficiency, enhance ROI, and delight customers from one single platform that is highly interoperable/ allows multiple integrations. Eliminate silos within your business achieving greater visibility.</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-inner-solution-1">
                        <h3>Break Open Data Silos for Growth</h3>
                        <p>With D365 Business Central you can eliminate siloed approach to data management with the Microsoft ecosystem building a unified and comprehensive view of your business performance.</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>
                  <span>A Dynamics 365 partner that</span> global brands{" "}
                  <span>trust</span>
                </h2>
                <p>
                  With numerous applications and hundreds of features to manage,
                  Dynamics 365 Business Central can be overwhelming. However,
                  Dynamics Square is poised to help you manoeuvre the
                  complexities of the digital transformation by building
                  intuitive, robust business solutions that add value to your
                  people, processes, and data. Being a certified Business Central <Link href="/"><a target="_blank">Microsoft Gold partner</a></Link> UK, we worked with clients across domains including
                  Finance, Sales, Customer Service, and Manufacturing.
                </p>
                <p style={{ color: "var(--color-blue)", fontSize: "18px" }}>
                  <b>Our services include:</b>
                </p>
              </header>
            </div>
          </div>
          <div className="row ppd-top">
            <div className="col-lg-4">
              <div className="new-card-sol">
                <div className="head-img">
                  <img src="/img/bc-icons-new-1.png" alt="icons" width="210" height="119" />
                </div>
                <div className="body">
                  <h3>Business Central Implementation</h3>
                  <p>
                    Build a hyperconnected business ecosystem with successful
                    implementation driving sales numbers through enhanced
                    customer experience, financial visibility, and AI engine
                    churning out insights to enable informed decision-making.
                  </p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Implement Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="new-card-sol">
                <div className="head-img">
                  <img src="/img/bc-icons-new-2.png" alt="icons"  width="210" height="119" />
                </div>
                <div className="body">
                  <h3>Migrate to Business Central</h3>
                  <p>
                    Realise the true potential of your business processes with
                    powerful capabilities to maximise your productivity by
                    migrating to Business Central. Push your processes to the
                    fast lane for evolved growth.
                  </p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Migrate to BC Today</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="new-card-sol">
                <div className="head-img">
                  <img src="/img/bc-icons-new-3.png" alt="icons"  width="210" height="119" />
                </div>
                <div className="body">
                  <h3>Business Central Support</h3>
                  <p>
                    Our embedded support helps you review existing processes,
                    analyse issues, recommend dynamic solutions, and predict
                    results to build a streamlined workflow maximising growth
                    and enabling scalability.
                  </p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Call For Support</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="back-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="sidenn-wr">
                <h2>What makes Dynamics Square <br /><span>Stand Out</span> in the Crowd?</h2>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <h3>Wide & Deep Expertise</h3>
                    <p>
                      With over 140+ Microsoft certified consultants with
                      in-depth expertise in implementing Business Central
                      strategies across domains and functions.
                    </p>
                  </div>
                </div>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <h3>Cost Effective Pricing</h3>
                    <p>We understand your need to build an operating system for your business without burning a hole in your pocket, so we offer unbelievably affordable prices, and at a price lesser than the other Microsoft partners.</p>
                  </div>
                </div>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <h3>Client-centric Approach</h3>
                    <p>Our approach to <Link href="/dynamics-365-business-central-implementation/"><a target="_blank">Business Central implementation</a></Link> is centred around your business requirements and need of the hour instead of loading it up with unnecessary apps.</p>
                  </div>
                </div>
                <div className="cll-bt">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to expert</span>
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
            <h2>Dynamics 365 Business Central Pricing & Licensing</h2>
            <p>
              Checkout the latest Dynamics 365 <Link href="/dynamics-365-business-central-pricing-licensing/"><a target="_blank">Business Central Pricing</a></Link> and
              capabilities of Essential, Premium, and Team Members plans.
            </p>
          </header>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="box boc-bc-scroll">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Essentials
                </h3>
                <div className="price">
                £57.50<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box boc-bc-scroll">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Premium
                </h3>
                <div className="price">
                £82.20<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Sales Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Service Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Manufacturing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 boc-bc-scroll">
              <div className="box boc-bc-scroll">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Team Members
                </h3>
                <div className="price">
                £6.60<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Read and Approve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Employee Self Serve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Run All Reports
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Started Now</span>
                  </a>
                </Link>
                <Link href="/pdf/Dynamics-365-Licensing-Guide-June-2022.pdf">
                  <a target="_blank" className="btn-get-whit">
                    <span>See Licensing Guide</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>
                  What Our Clients <br /> Have To Say About Us
                </h2>
              </div>
              <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper test-client-page"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/img/testimonials/Terence-Turner.png"
                              className="testimonial-img"
                              alt="testimonial-img"
                              width="125"
                              height="125"
                            />
                            <div className="imginner">
                              <img src="/img/Icon metro-quote.png" width="51" height="51" alt="metro-quote" />
                            </div>
                            <p>
                              Dynamics Square Team provided us a top-level
                              service. Well trained staff as well as excellent
                              support when needed. Very professional and
                              trustworthy.
                            </p>
                            <h3>Terence Turner</h3>
                            <h4>General Manager, Arteak</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/img/testimonials/Nicolas-Hopwood.png"
                              className="testimonial-img"
                              alt="Nicolas-Hopwood"
                              width="125"
                              height="125"
                            />
                            <div className="imginner">
                              <img src="/img/Icon metro-quote.png" alt="metro-quote" width="51" height="51" />
                            </div>
                            <p>
                              The team at Dynamics Square helped us in upgrading
                              our erp system to the latest version of D365
                              Business Central resulting in a successful rollout
                              to our staff.
                            </p>
                            <h3>Nicolas Hopwood</h3>
                            <h4>Facilities Manager, Pasante</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/img/testimonials/Jonathan-W.png"
                              className="testimonial-img"
                              alt="Jonathan-W.png"
                              width="125"
                              height="125"
                            />
                            <div className="imginner">
                              <img
                                src="/img/Icon metro-quote.png"
                                alt="metro-quote"
                                width="51" height="51"
                              />
                            </div>
                            <p>
                              We have worked with Dynamics Square since 2019.
                              Our working relationship has built during this
                              period, and we have found them to be very
                              professional
                            </p>
                            <h3>Jonathan W</h3>
                            <h4>Technical Director, Parweld</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="testimonials-bg">
                <div className="testimonials-rigt-iner">
                  <Image
                    src="/img/testmonial-side-pic.png"
                    className="testmonial-side-pic"
                    alt="testmonial"
                    width={802}
                    height={764}
                  />
                  {/* <div className="testimonials-rigt-iner-1">
                    <img src="/img/test-side-1.jpg" alt="" />
                  </div>
                  <div className="testimonials-rigt-iner-2">
                    <h4>250+</h4>
                    <span>
                      Happy Clients
                      <br />
                      Worldwide
                    </span>
                  </div>
                  <div className="testimonials-rigt-iner-3">
                    <img src="/img/test-side-3.jpg" alt="" />
                  </div>
                  <div className="testimonials-rigt-iner-4">
                    <img src="/img/test-side-2.jpg" alt="" />
                  </div> */}
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
              Have you got
              <br />
              questions about Business Central?
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
                      What is Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="https://www.dynamicssquare.co.uk/blog/what-is-dynamics-365-business-central/">
                          <a target="_blank">
                            <b>Dynamics 365 Business Central</b>
                          </a>
                        </Link>
                        &nbsp;is a one-stop solution for all your enterprise
                        needs. Since Business Central is built with excel-like
                        features and easy-to-use navigation, anyone exposed to
                        advanced excel functionality can easily adapt and
                        leverage the powerful use of Business Central.
                      </p>
                      <p>
                        Business Central is designed as a complete{" "}
                        <Link href="/products/microsoft-dynamics-erp/">
                          <a target="_blank">
                            <b>ERP solution</b>
                          </a>
                        </Link>{" "}
                        for modern enterprises seeking to simplify end-to-end
                        enterprise practices from financials to sales,
                        warehousing to supply chain, project management to
                        general reporting, assembly to manufacturing; Business
                        Central is embedded with all potential business
                        management solutions that give you real-time eyes into
                        your business.&nbsp;
                      </p>
                      <p>
                        You can host your application whether on cloud (private
                        or public) or on-premise; the choice is yours. When it
                        comes to{" "}
                        <Link href="https://www.dynamicssquare.co.uk/blog/what-is-dynamics-365-business-central/">
                          <a target="_blank">
                            <b>Dynamics 365 Business Central Overview</b>
                          </a>
                        </Link>
                        , it comprises huge things.&nbsp;
                      </p>
                      <p>
                        To get more information about Business Central, how it
                        works, and how it can transform your business context,
                        do contact Dynamics Square. Our{" "}
                        <Link href="/">
                          <a target="_blank">
                            <strong>
                              Dynamics 365 Business Central experts
                            </strong>
                          </a>
                        </Link>{" "}
                        can assist you with the right and precise information.
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
                      How is Business Central related to Dynamics NAV?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is the updated version of <Link href="/products/microsoft-dynamics-nav/"><a target="_blank">Dynamics NAV</a></Link>. With its upgrade, Microsoft changed its name
                      too. The Core functionality remains the same and is
                      updated with advanced features and navigation to support
                      modern enterprises and to serve every industry. However,
                      existing Dynamics NAV users can still avail of the support
                      services. Dynamics Square offers highly reliable and
                      efficient NAV and Business Central Support Services at
                      cost-effective rates.
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
                      How do I upgrade to Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Often, enterprises seem confused about when is the right
                        time to upgrade to Dynamics 365 Business Central. If the
                        same question is rolling out in your mind, contact{" "}
                        <Link href="/">
                          <a target="_blank">
                            <strong>Dynamics Square</strong>
                          </a>
                        </Link>
                        . We provide free-system health-check to identify your
                        system lacks and upgrading needs considering your
                        current business practices. Our experts can let you know
                        whether you are in need to upgrade your current system
                        or not.
                      </p>
                      <p>
                        To know more about Why move to Dynamics 365 Business
                        Central?&nbsp;
                        <Link href="/contact-us/">
                          <a target="_blank">
                            <b>Contact our Dynamics 365 experts</b>
                          </a>
                        </Link>
                        , we can help you with all your questions. For instance,
                        when you need to upgrade, what are possible personalized
                        options for you? What sort of implementation practices
                        do we follow while upgrading your existing business
                        solution to Microsoft Dynamics 365 Business Central?
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
                      Is there any training available to understand Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Business Central comes with a
                        simple, easy-to understand user interface and provides a
                        smooth experience to all users, whether administrators
                        or operators. There might be a need for training to
                        understand the workings of added integrations,
                        customizations, and add-ons. In such a case, you can
                        avail yourself of the learning and training provided by
                        your Business Central implementation partner, and they
                        will guide you along the right path.{" "}
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
                      Can I customise Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, Business Central is totally customisable as per
                        your unique business and its changing needs.
                        Irrespective of the industry, business type, and size,
                        you can customise this powerful application to simplify
                        your business operations. In short, customizations are
                        the path to more productivity and easy business growth.
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
                      What industries can Dynamics 365 Business Central Support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is designed in such a way
                      that any industry from retailers to manufacturers, food &
                      beverages to operations, e-commerce industry to financial
                      services, and more can avail of seamless support in terms
                      of Dynamics 365 business central. Moreover, Business
                      Central can be personalized as per your industry-specific
                      needs, or custom operational navigation takes place in
                      your organization.To get more information about how this
                      ERP solution can be implemented and leveraged by your
                      specific industry, talk to us, we as a Business Central
                      Consulting Services Provider are here to answer all your
                      queries.
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
                      How much does Dynamics 365 Business Central cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="/dynamics-365-business-central-pricing-licensing/">
                          <a target="_blank">Dynamics 365 Business Central pricing</a>
                        </Link>{" "}
                        goes as per your specific business processes. You can
                        choose out of the given licensing options:
                      </p>
                      <ul>
                        <li>Essential</li>
                        <li>Premium</li>
                        <li>Team Member</li>
                      </ul>
                      <p>
                        Essential plan comes to fulfil your essential business
                        requirement whereas premium comes with extra
                        functionality layers.
                      </p>
                      <ul>
                        <li>
                          For Dynamics 365 Business Central Essential plan, you
                          will be charged £52.80 per user/per month.
                        </li>
                        <li>
                          For Dynamics 365 Business Central Premium plan, you
                          need to invest £75.40 per user/per month.
                        </li>
                        <li>
                          For Dynamics 365 Business Central Team Member, users
                          will be charged £5.82 per user/per month.
                        </li>
                      </ul>
                      <p>
                        If you manage processes like finance, purchase/sales,
                        and inventory, an essential license would be an ideal
                        deal for your business to start your journey.
                      </p>
                      <p>
                        If you are a manufacturer and provide services, a
                        premium license would be the best-suitable way to start
                        with.
                      </p>
                      <p>
                        So, it's up to you, you can buy Business Central suited
                        to your specific needs or user requirements. To know
                        more or which plan would be ideal for your business,
                        Dynamics Square - Microsoft authorized Business Central
                        Consulting Services provider can help.
                      </p>
                      <p>
                        Here you need to understand that this cost is just a
                        licensing cost, it doesn't include any sort of
                        implementation, customization, or integration cost. Your
                        actual costs can be revealed by your Dynamics 365
                        Business Central Implementation Partner once you share
                        your requirement with them.
                      </p>
                      <p>
                        Initially, you can start with Microsoft{" "}
                        <Link href="https://www.dynamicssquare.co.uk/blog/how-to-avail-the-dynamics-365-business-central-trial/">
                         <a target="_blank">Business Central Trial</a>
                        </Link>{" "}
                        at no cost for 30 days. After your trial period, if you
                        find Business Central - a suitable deal for your
                        business, you can continue by availing any of the given
                        licensing suited to your budget and requirements.
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
                      How do I get ongoing support for Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        You will get direct support from Dynamics Square as we
                        are a gold partner for Microsoft's products with
                        existence in the UK market and other global locations
                        with a well-equipped support system. Our support system
                        includes end-user training, technical assistance, and
                        off-hours support whenever required.
                      </p>
                      <p>
                        If you are seeking professional and trustworthy support
                        services, selecting Dynamics Square - a trustworthy
                        Business Central Support Partner in the UK can help.
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
                      How does Power BI Fit with Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Business Central is an all-in-one ERP solution. In case
                        you want advancement in your reporting &amp; analytics
                        terms, seamless integration with <Link href="/products/microsoft-power-bi/"><a target="_blank">Power BI</a></Link> can be done as both are Microsoft's products, hence, Power BI fits well
                        with Dynamic 365 Business Central. Power BI can enable
                        visualization in your reporting, key metrics, and your
                        entire business analytics. You can create your own
                        business reports and dashboards leveraging standard
                        reporting templates and other visuals.
                      </p>
                      <p>
                        If you want expert advice on how you can leverage Power
                        BI and Business Central together, connect with us, being
                        a reliable <Link href="/dynamics-365-business-central-support/"><a target="_blank">Business Central Support</a></Link>, <Link href="/dynamics-nav-to-business-central/"><a target="_blank">NAV Upgrade</a></Link>, and Implementation partner, we can always provide you with
                        expert consulting.
                      </p>
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
          <header className="section-header">
            <h2>
              Check out our Best Resources
              <br />
              for Business Central
            </h2>
          </header>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/pdf/Is-Your-Business-Outgrowing-Your-Accounting-Software.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> Is Your
                        Business Outgrowing Your Accounting Software?
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Business-Owners-Guide.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> Business
                        Owner's Guide
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Reimagine-Productivity.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> Reimagine
                        Productivity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> Licensing
                        Guide
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Four-Technology-Trends-Helping-Businesses-Thrive-in-a-Digital-World.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> Technology
                        Trends Helping Businesses Thrive in a Digital World
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Reinvent-productivity-with-Dynamics-365-and-Microsoft-365.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> Reinvent
                        productivity with Dynamics 365 and Microsoft 365
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/The-Total-Economic-Impact-of-Microsoft-Dynamics-365-Business-Central.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> The Total
                        Economic Impact of Dynamics 365 Business Central
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/why-choose-microsoft-dynamics-365-business-central/">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i> Why Choose
                        Microsoft Dynamics 365 Business Central?
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/migrate-nav-to-business-central/">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i> NAV to Business Central Migration
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/upgrade-dynamics-nav-to-dynamics-365-business-central/">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i> Why to
                        Upgrade Dynamics NAV to Business Central
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/reasons-to-upgrade-accounting-software/">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i> Is Your
                        Business Outgrowing Your Accounting Software?
                      </a>
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

export default BusinessCentral;
