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
import TimerModal from "../components/TimerModal";

const BusinessCentralImplementation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>
          Dynamics 365 Business Central Implementation | Dynamics Square
        </title>
        <meta
          name="description"
          content="We ensure that your Dynamics 365 Business Central implementation process goes smoothly. Explore our Business Central implementation methodology and guide."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-business-central-implementation/"
        />
        
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365 <br />
                Business Central Implementation
              </h1>
              <p>
                Bring Transparency and drive connected experience across your
                processes by implementing Dynamics 365 Business Central
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
                <h2>Why Choose Business Central for Implementation?</h2>
                <p>
                  To overcome business challenges and maximize outcomes,
                  implement Microsoft Dynamics 365 Business Central—a cloud ERP
                  designed for SMBs to boost sales, drive customers, manage
                  projects, improve financial visibility, optimize supply chain
                  and warehousing, and accelerate decision-making with AI-driven
                  insights. Our certified Business Central consultants work with
                  you to achieve the best possible results while minimizing
                  expenses and risks.
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
                        <div className="wr-in">
                          <img
                            src="/img/icons_finance.svg"
                            alt="icons_finance"
                          />
                        </div>
                        <span>Financial Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        With{" "}
                        <Link href="/products/dynamics-365-business-central/">
                        <a target="_blank">D365 Business Central</a>
                        </Link>
                        , you can manage your inventory levels, forecast demand,
                        predict future potential, and drive smarter experiences
                        throughout your supply chain. Keep an eye on stock-out
                        conditions and enable automatic purchase order creation
                        with real-time insights into your entire supply chain
                        pipeline.
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
                          <img src="/img/icons_sales.svg" alt="icons_sales" />
                        </div>
                        <span>Customer Relationship Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <Link href="/dynamics-365-business-central-implementation/">
                        <a target="_blank">Implement Dynamics 365 Business Central</a>
                        </Link>{" "}
                        to accelerate your entire sales process. Keep tracking
                        your interactions with your customers, get real-time
                        guidance to manage upsell and cross-sell situations, and
                        get notified of renewal opportunities throughout your
                        sales while improving the flow of your cash management.
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
                            src="/img/icons_customer.svg"
                            alt="icons_customer"
                          />
                        </div>
                        <span>Service Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Ensure a smoother transition from sales to the service
                        part. With centralized data, you can automatically feed
                        your shipped items as service items, enable
                        collaboration between sales and service teams to respond
                        to customer inquiries quickly, track customer order
                        returns, stay updated with service agreements, and more
                        with D365 Business Central.
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
                            src="/img/icons_project.svg"
                            alt="icons_project"
                          />
                        </div>
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
                        Improve your project management, from costing and
                        accounting to job costing and reporting. Optimize
                        resource levels. Track and manage customer invoicing for
                        both the planned and actual order costs. Leverage
                        real-time project insights to stay updated with project
                        status, resource utilization key data, and profitability
                        reports.
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
                        <div className="wr-in">
                          <img
                            src="/img/icons_supply-chain.svg"
                            alt="icons_supply-chain"
                          />
                        </div>
                        <span>Supply Chain Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        Drive smoother engagement with your suppliers; convert
                        offers into orders. Ensure regulatory compliance with
                        both internal and external policies. With transparent
                        and built-in intelligence views into inventory levels
                        and process flow, they can predict stock replenishment
                        and analyze demand.
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
                        <div className="wr-in">
                          <img
                            src="/img/icons_warehouse.svg"
                            alt="icons_warehouse"
                          />
                        </div>
                        <span>Warehouse Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        Set up and manage bins and zones along with racks and
                        shelves in your Business Central account to view your
                        warehousing layout. Streamline product receiving and
                        capacity to ensure the right placement of items and
                        faster shipments. Seamlessly optimize your warehousing
                        practices by connecting customers and operations.
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
                        <div className="wr-in">
                          <img
                            src="/img/icons_manufacturing.svg"
                            alt="icons_manufacturing"
                          />
                        </div>
                        <span>Manufacturing</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        Manufacture according to supply and capacity. Plan your
                        production even in an agile environment or complex
                        situations. Determine raw materials, bills of materials,
                        etc., that will comprise a finished product. Support
                        assembly to order processing, register consumption
                        output across your BOMs, and reconcile scrap in
                        consumption and output.
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
                <h3>Implement Dynamics 365 Business Central</h3>
                <p>
                  Got questions about Business Central Implementation? Talk to
                  our experts today!
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
                <Image src="/img/imp-left.svg" alt="imp-left.svg"
                width={531} height={771} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box-6">
                <div className="box-6-top-head">
                  <h2>Our D365 Business Central Implementation Methodology</h2>
                  <p>
                    We follow Microsoft's Sure Step Methodology to optimise your
                    business operations while guaranteeing optimum security and
                    transparency.
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
                            In this phase, we deep-dive into your project idea
                            and create a project plan suited to your specific
                            business practices and process flow.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Design Phase</h4>
                          <p>
                            Once your project analysis is done, we come up with
                            functional requirements defining your specific
                            customization, configuration, and integration needs.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>
                            In this phase, we start developing your project,
                            comprising custom coding, interface designing,
                            system integration, data migration, and more.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>
                            Once the development phase gets over, we ensure the
                            final deployment of your project, which includes key
                            user training, user acceptance testing, etc.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Post Go-Live Support</h4>
                          <p>
                            In this phase, we provide end-user training, and
                            technical support wherever required, and finally
                            ensure that your system is working as you
                            anticipated. For a free Business Central trial,{" "}
                            <a
                              href="https://www.dynamicssquare.co.uk/blog/dynamics-365-business-central-trial/"
                              target="_self"
                            >
                              click here
                            </a>
                            .
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
                  Why Choose Dynamics Square As Your Implementation Partner?
                </h2>
                <p>
                  The team at Dynamics Square provides a holistic approach to
                  the implementation process. Our primary aim is to understand
                  your business operations and deliver the best plan for a
                  smoother and stress-free Business Central implementation.
                </p>
              </header>
            </div>
          </div>
          <div className="row pdd1">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Gain <br />
                    Financial Insights
                  </h3>
                  <div className="overlay">
                    <p>
                      Make informed decisions leveraging financial data insights
                      from customer transactions to inventory, purchasing,
                      accounting, financial reporting & key analytics. Gain
                      insights into accounts payable and receivables, track
                      general ledger, predict sales, analyze budgeting, and
                      more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Improve
                    <br />
                    Customer Experience
                  </h3>
                  <div className="overlay">
                    <p>
                      With Dynamics 365 Business Central Implementation, gain an
                      in-depth overview of your customers. Effortlessly engage
                      and serve a personalized deal to your customers.
                      Accelerate your project flow and ensure on-time project
                      delivery with cost-effectiveness and improved efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Maximize
                    <br />
                    Your Sales
                  </h3>
                  <div className="overlay">
                    <p>
                      Manage your resources, simplify your end-to-end sales
                      process, forecast sales, optimize planning & execution,
                      and keep tracking your sales data in real-time via
                      AI-based sales insights, reporting, and key analytics all
                      through with Microsoft Dynamics 365 Business Central
                      Implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Optimize
                    <br />
                    Supply Chain
                  </h3>
                  <div className="overlay">
                    <p>
                      Build improved suppliers' relationships and convert your
                      offers into orders while ensuring compliance with both
                      internal and external policies. Track and ensure
                      replenishment of your inventories by leveraging built-in
                      intelligence, sales forecasts, and automatically generated
                      purchase orders whenever there is a stock-out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Automate <br />
                    Your Processes
                  </h3>
                  <div className="overlay">
                    <p>
                      Automate your entire workflow and processes with cloud
                      data-driven strategies embedded with AI insights and
                      integrated with Microsoft tools such as Microsoft Outlook
                      and Excel. Drive continuity with real-time synchronized
                      dashboards and KPIs as well as faster query response
                      within Teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Ensure Data <br />
                    Security & GDPR Compliance
                  </h3>
                  <div className="overlay">
                    <p>
                      Business Central is a highly embedded and secure ERP
                      platform. With Microsoft's cloud model, it is stored,
                      processed, and transferred securely. It ensures and
                      protects your data from any unauthorized attempts, as your
                      data privacy is highly protected with GDPR law compliance.
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
            <div className="col-lg-8 col-md-8 col-sm-8">
              <header className="section-header">
                <h2>Dynamics 365 Business Central Implementation Pricing</h2>
                <p>
                  As a leading Microsoft Dynamics 365 Business Central partners
                  UK, we provide cost effective Business Central Implementation
                  plans.
                </p>
              </header>
            </div>
          </div>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-4">
              <div className="box box-22">
                <h3>
                  Business Central
                  <br />
                  Essentials
                </h3>
                <div className="price">
                  <sup>£</sup>52.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    An intelligent, automated, and trusted core financial
                    management solution.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box box-22">
                <h3>
                  Business Central
                  <br />
                  Premium
                </h3>
                <div className="price">
                  <sup>£</sup>75.40<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    An intelligent, automated, and trusted core financial
                    management solution.
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
                <h3>Connect With Our Experts</h3>
                <p>
                  It's our responsibility to suggest the best possible solution
                  for your business. Let's connect, discuss, and reveal the
                  essentials for your business.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get In Touch</span>
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
              about Business Central Implementation?
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
                      Is Business Central an ERP?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Business Central is a highly embedded ERP designed to
                        support end-to-end enterprise practices while improving
                        the entire workflow and accelerating the overall
                        performance to maximize profitability. Business Central
                        can be configured either{" "}
                        <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">
                        <a target="_blank">on-cloud or on-premises</a>
                        </Link>{" "}
                        depending on your specific needs. Further, it can be
                        customized as per your specific business domain or
                        industry context.
                      </p>
                      <p>
                        To drive streamlined enterprise practices, D365 Business
                        Central can be integrated with any of your existing
                        Microsoft apps or even any third-party applications.
                        This helps to seamlessly manage, access, and drive your
                        data to attain overall success. To know{" "}
                        <Link href="/products/dynamics-365-business-central/advantages-capabilities/">
                        <a target="_blank">how Business Central can help</a>
                        </Link>{" "}
                        or work for your business, connect with{" "}
                        <Link href="/contact-us/">
                        <a target="_blank">our experts at Dynamics Square</a>
                        </Link>
                        . We can help.
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
                      What is Business Central used for?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        D365 Business Central helps manage your day-to-day tasks
                        or processes in sales, customers, finance, projects,
                        supply chain, warehousing,{" "}
                        <a
                          href="https://www.dynamicssquare.co.uk/blog/microsoft-dynamics-365-business-central-for-manufacturing/"
                          target="_self"
                        >
                          manufacturing
                        </a>
                        , and human resources. It helps to centralize your data
                        and drive a collaborative data experience.
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
                      What is included in Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        When you implement a cloud-based ERP system like
                        Business Central, it includes a complete set of business
                        solutions, helping businesses to automate their manual
                        processes, streamline their data-driven activities in
                        real-time, and connect people, processes, and workflows.
                        D365 Business Central also enables you to manage your
                        sales, inventory, warehousing, manufacturing, and
                        finance practices. Everyone from top management to the
                        executive level can benefit from D365 Business Central.
                      </p>
                      <p>
                        With AI-built business insights, people in your
                        organization can forecast data and can have real-time
                        insight into actual performance, profit or margins, and
                        potential for improvement.
                      </p>
                      <p>
                        If you are seeking more information about D365 Business
                        Central, do not hesitate to contact our team of{" "}
                        <Link href="/products/microsoft-dynamics-365/">
                        <a target="_blank">Dynamics 365 experts</a>
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
                      data-bs-target="#faq-content-4"
                    >
                      How do I implement Microsoft Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central implementation process
                      requires a step-by-step effort to be followed. Let's
                      understand the implementation process flow for Business
                      Central. Steps are given below:
                      <br />
                      <br />
                      <strong>Setup</strong>
                      <br />
                      <br />
                      First you need to leverage Business Central Setup just to
                      install the different required components. The components
                      include Business Central production or development
                      environment.
                      <br />
                      <br />
                      Setup can be found in installation media named with
                      setup.exe file. Once you run the installation, you will
                      have options on whether to install the individual
                      components or select the predefined option to install the
                      logical set of components.
                      <br />
                      <br />
                      <strong>Configuration</strong>
                      <br />
                      <br />
                      During the installation phase, several configuration
                      settings will be demonstrated wherein you can either
                      choose to customize the settings or can go with the
                      initial settings. Once your settings are done, you can
                      even change the configuration settings by making use of
                      tools like Business Central Server Administration tool and
                      Business Central Administration Shell.
                      <br />
                      <br />
                      <strong>Prerequisite Installations</strong>
                      <br />
                      <br />
                      To complete the installation process, you are required to
                      install the other software too such as database requiring
                      SQL Server and Web client requiring IIS.
                      <br />
                      <br />
                      <strong>
                        Downloading Business Central to Install Further
                      </strong>
                      <br />
                      <br />
                      Business central is available and can be downloaded from
                      Microsoft Support. The downloaded file will contain
                      setup.exe file. You can find several versions to choose
                      from. Every release is equipped even with minor updates
                      that are published on a regular basis.
                      <br />
                      <br />
                      <strong>Download Files</strong>
                      <br />
                      <br />
                      Now, all you need is to go to the update page to download
                      the release that you are willing to install. Once your
                      download is completed, you are required to install the
                      setup. To download the setup, follow the initial steps.
                      <br />
                      <br />
                      Implementing Dynamics 365 Business Central requires expert
                      practices, training, and support, if you need experts for
                      Dynamics 365 Business Central Services, discuss your
                      requirement with Dynamics Square, we can help to implement
                      a highly customized solution suited to your exact business
                      needs.
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
                      How long does it take to implement Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <a href="https://www.dynamicssquare.co.uk/blog/what-is-business-central-implementation-methodology/">
                          D365 Business Central implementation process
                        </a>{" "}
                        may vary from project to project, business to business,
                        and industry to industry. Depending on your project
                        complexity, customization requirements, and integration
                        needs, it can take 3 to 9 months. If you are seeking to
                        implement Dynamics 365 Business Central, contact
                        Dynamics Square. By evaluating and analyzing your exact
                        implementation needs, we can tell you how long your
                        project implementation will take.
                      </p>
                      <p>
                        You can also contact us for a{" "}
                        <Link href="/free-dynamics-365-system-health-check/">
                        <a target="_blank">free system health check</a>
                        </Link>{" "}
                        as we are here to implement your dream project in the
                        most productive way associated with our appropriate
                        training and assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TimerModal />
    </>
  );
};

export default BusinessCentralImplementation;
