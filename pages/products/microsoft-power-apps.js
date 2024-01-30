import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";
const PowerApps = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          Microsoft Power Apps Partner: Demo & Pricing UK | Dynamics Square
        </title>
        <meta
          name="description"
          content="Microsoft Power Apps can let you build low-code apps and drive swiftness across the core operations of the business. Call us for Demo & pricing! "
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-power-apps/"
        />

      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Az1NOVaHexs"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Power Apps</h1>
              <p>
                Build low-code applications, drive swiftness and modernize
                processes across your organization without compromising quality
                and speed with Microsoft Power Apps.
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
                src="/img/power-apps-banner-01.svg"
                alt="power-apps-banner-01"
                width={1024} height={586}
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
                <h2>What are Power Apps?</h2>
                <p>
                  Microsoft Power Apps is a collection of powerful services,
                  solutions, and data platforms to help you build customised
                  apps for your changing business requirements. These customised
                  apps allow users to turn most of the manual and recurring
                  tasks into automated processes with the flexibility to operate
                  on any device, whether web, mobile, or PC. Power Apps is
                  capable of revolutionising the way of building customised apps
                  rapidly without using code, resulting in low investment and
                  high revenue.
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
                            src="/img/icons-power-apps_Quick-and-Easy.svg"
                            alt="icons-power-apps_Quick-and-Easy"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Quick and Easy</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Power Apps offers easy-to-use tools that allow your team
                        in developing the best applications in a much faster
                        way. There are several essential features and tools to
                        use such as prebuilt templates that help in developing
                        the right application in a much shorter time. The user
                        just can develop the required application by customizing
                        and offering some modifications to the already existing
                        templates.
                        <br />
                        <br />
                        The platform also enables the users to incorporate new
                        updates and improvements as and when they are needed in
                        the application ahead.
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
                            src="/img/icons-power-apps_App-Development.svg"
                            alt="icons-power-apps_App-Development"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Professional App Development</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Power Apps enable the employees to create applications
                        that are well featured with advanced functionalities to
                        offer a professional look to the applications.The
                        platform includes AI (
                        <Link href="/products/microsoft-dynamics-365-ai/">
                        <a target="_blank">Artificial Intelligence</a>
                        </Link>
                        ) components that are pre-built-in order to offer
                        features and specifications to the applications that are
                        high-end so that they offer a professional look and
                        experience.
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
                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                            alt="icons-power-apps_Enhancing-Capabilities"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Enhancing Capabilities</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Making use of the Power Apps Microsoft platform ensures
                        that you allow your employees the freedom to develop the
                        applications in the best possible way. There are several
                        functions and tools to allow the users to integrate
                        several features and specifications in the applications
                        to make them super professional. Apart from this, the
                        platform also enables the users to enhance the
                        capabilities of the applications from time to time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="acccm">
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
                            src="/img/icons-power-apps_Responsive-Design.svg"
                            alt="icons-power-apps_Responsive-Design"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Responsive Design</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        Power Apps ensure that the applications that are getting
                        developed are perfect for several platforms and devices.
                        It is due to the responsive design of the applications
                        attained that the applications designed on this platform
                        run well on any of the browsers and on devices such as
                        smartphones as well as tablets.
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
                            src="/img/icons-power-apps_Data.svg"
                            alt="icons-power-apps_Data"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Data</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        The platforms enable the customized applications to make
                        use of the data already available on the platform for
                        analysis purposes. The applications can collect such
                        data from the platform and can use them for the results.
                        Apart from the data already existing on the platform,
                        the applications also are offered the capabilities to
                        extract data from external sources and use them to get
                        the desired result.
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
                <h2>What are Power Apps Features</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Enable everyone
                        <br />
                        to build apps
                      </h3>
                      <div className="overlay">
                        <p>
                          Everyone can build apps - from data analysts to
                          professional software developers. Bring more
                          efficiency and accuracy to solve business problems
                          with PowerApps pre-built templates, AI components that
                          require low code or minimal code.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Develop smart
                        <br />
                        applications
                      </h3>
                      <div className="overlay">
                        <p>
                          Leverage Power Apps canvas to begin your designing
                          journey from scratch to professional. Customize every
                          aspect of your app to optimize for specific tasks and
                          functions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Create modern apps
                        <br />
                        from your data
                      </h3>
                      <div className="overlay">
                        <p>
                          Automatically generate interactive, immersive, and
                          responsive business applications from your data model
                          that can run on any device. The drag-and-drop designer
                          enables your team to customize business entities and
                          tailor the user experience to specific roles.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Integrate and
                        <br /> extend your apps
                      </h3>
                      <div className="overlay">
                        <p>
                          Take advantage of more than 200+ connectors to
                          integrate data and systems you already use. Extend
                          Power Apps further as a professional developer with
                          custom connectors and logic.
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
                    src="/img/power apps-side.png"
                    className="fix-im"
                    alt="power apps-side"
                    width={553} height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btn">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/video-ower-apps.png"
                            alt="Power-apps"
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
                <h2>Power Apps Service</h2>
                <p>
                  We offer a full range of services to support you on your
                  Dynamics journey including implementation, upgrade and
                  support.
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
                    Successfully implement PowerApps solutions by our experts to
                    ensure your needs are met on time and within budget.
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
                    width="64"
                    height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Get constant and seamless support from Dynamics Square team
                    to manage your web and mobile apps.
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
            <h2>Microsoft Power Apps Pricing</h2>
            <p>
              Explore Power Apps Plans, Costs, And Availability To Start Running
              Your Business Apps.
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-44">
                <h3>Subscription plans</h3>
                <p>
                  Best for businesses that want predictable user-based licensing
                  with the flexibility to licence users to run one app at a time
                  or run unlimited apps.
                </p>
                <div className="price">
                  £4.10<span>Per-User/App/Per Month</span>
                </div>
                <ul>
                  <li>
                    Run one app or portal per user, stacking licences for access
                    to each additional as their needs change.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-44">
                <h3>Subscription plans</h3>
                <p>
                  Best for businesses that want predictable user-based licensing
                  with the flexibility to licence users to run one app at a time
                  or run unlimited apps.
                </p>
                <div className="price">
                £16.40<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    Run unlimited apps and portals per user for one flat monthly
                    rate.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-44">
                <h3>Pay-as-you-go plan</h3>
                <p>
                  Best for businesses that want the agility to pay only when a
                  user runs an app during a monthly period.
                </p>
                <div className="price">
                  £8.20<span>Per Active User/App/Month2</span>
                </div>
                <ul>
                  <li>Azure subscription to pay per user, Based on the number of unique apps a user runs each month.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Power Apps Now</span>
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
                <h3>
                  Looking to reduce development costs and improve overall
                  efficiency?
                </h3>
                <p>Talk to our Power Apps experts to schedule a free demo.</p>
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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>
                  Have you got <br /> questions about Microsoft Power Apps?
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
                      Which apps are included in Power Apps?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Power Apps consists of six solutions, which are: AI
                        Builder, Automate Processes, Azure + Power Apps, Build
                        Apps, Connect Data, and Pages. All these solutions have
                        separate motives and can be used for different purposes.
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
                      What kinds of apps can I build using Power Apps?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        You can rapidly build custom apps to connect your data
                        sources to different{" "}
                        <Link href="/products/microsoft-power-platform/">
                        <a target="_blank">Microsoft platforms</a>
                        </Link>
                        . These customised apps are based on your business needs
                        and complexity. It allows you to build various kinds of
                        responsive applications that can be operated using the
                        web and mobile.
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
                      Is there any need to learn code to build apps?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        No, there is no need to learn any kind of code language
                        to build a customised app using Power Apps. It comes
                        with built-in templates and a simple user interface to
                        help you understand the exact requirements and build the
                        app accordingly. It is a kind of drag-and-drop platform
                        where you only need to align the desired functions to
                        get the desired result.
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
                      How much time will it take to build an app using Power
                      Apps?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        There can be no accurate answer to this question. It
                        totally depends on the complexity of the app and the
                        functions you want in an app. Users can build the
                        required app whenever it is needed and modify it later
                        to meet their changing needs.
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
                      How many apps or services can I connect with Power Apps?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        You can connect an unlimited number of data sources,
                        apps, and services with Power Apps to make the whole
                        system work together and enhance the growth of the
                        organsation. You can avail yourself of a library of
                        Microsoft Dataverse and connectors to connect various
                        data sources together. Not only data sources, but you
                        can also integrate some other applications too,
                        including Azure, Power Platform,{" "}
                        <Link href="/products/microsoft-dynamics-365/">
                        <a target="_blank">Microsoft Dynamics 365</a>
                        </Link>
                        , and more native apps.{" "}
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
                      What are the top features of Power Apps?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Power Apps offers numerous features and capabilities to
                        help users efficiently build customised apps using low
                        code. Some of the powerful features are pre-built
                        templates, a drag-and-drop builder, a role based
                        personalised user experience, a built-in website
                        development tool, private submission of information, and
                        much more.
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
                      What are the available Power Apps pricing options?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The Power Apps pricing and licencing is based on two
                        basic plans: subscription or pay-as-you-go. The
                        Subscription Plan is more flexible for businesses,
                        allowing them to offer licences to users based on app
                        usage. The pay-as-you-go Plan is designed for businesses
                        that want to be charged monthly, per user, for the apps
                        they use.
                      </p>
                      <p>
                        <b>
                          There are two per-app plan options available under the
                          subscription plan:{" "}
                        </b>
                      </p>
                      <ul>
                        <li>£4.10 per user/app/month </li>
                        <li>£16.40 per user/month</li>
                      </ul>
                      <p>
                        The pay-as-you-go plan is £8.20 per active
                        user/app/month.
                      </p>
                      <p>
                        <b>See Other Power Platforms: </b>
                      </p>
                      <ul>
                        <li>
                          <Link href="/products/microsoft-power-bi/">
                          <a target="_balnk">Power BI</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/microsoft-power-virtual-agents/">
                           <a target="_blank">Power Virtual Agents</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/microsoft-power-automate/">
                          <a target="_blank">Power Automate</a>
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
                <h4>Important Power BI Links:</h4>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a href="/blog/what-is-power-bi/" target="_blank">
                      <i className="bi bi-box-arrow-up-right"></i>What is Power
                      BI?
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/watch?v=Evkj4zfpk0Q"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Free Power BI
                      Webinar
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://docs.microsoft.com/en-us/power-bi/consumer/end-user-license"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Licensing Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dynamicssquare.co.uk/blog/power-bi-architecture/" target="_blank">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Architecture
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dynamicssquare.co.uk/blog/power-bi-reports/" target="_blank">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Reports
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dynamicssquare.co.uk/blog/implement-power-bi-for-your-business/" target="_blank">
                      <i className="bi bi-box-arrow-up-right"></i>Why Your
                      Business Should Implement Power BI?
                    </a>
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

export default PowerApps;
