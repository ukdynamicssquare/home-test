import React, { useState } from "react";
import Link from "next/link"; 
import Head from 'next/head';
import Image from 'next/image';
import ModalVideo from "react-modal-video";
const Commerce = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Commerce UK Partner</title>
        <meta
          name="description"
          content="Enhance your system with our exclusive Microsoft Dynamics 365 Commerce packages to seamlessly unify your back-office, in-store, and digital experiences."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-commerce/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-commerce/" />
        <meta property="og:title" content="Dynamics 365 Commerce | Retail ERP Solution" />
        <meta property="og:description" content="Unify your back-office, in-store, and digital experience by empowering your system with our exclusive Microsoft Dynamics 365 Commerce packages." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/commerce-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-commerce/" />
        <meta property="twitter:title" content="Dynamics 365 Commerce | Retail ERP Solution" />
        <meta property="twitter:description" content="Unify your back-office, in-store, and digital experience by empowering your system with our exclusive Microsoft Dynamics 365 Commerce packages." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/commerce-banner.png" />
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
              <h1>Microsoft Dynamics 365 Commerce</h1>
              <p>
                <b>(Formerly Dynamics 365 Retail)</b>
              </p>
              <p>
                Unify Your Back-Office, In-Store, And Digital Experience By
                Empowering Your System With Dynamics 365 Commerce
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/commerce-banner.png"
                alt="Dynamics 365 Commerce-Retail"
                width={723} height={473}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>What is Dynamics 365 Commerce?</h2>
                <p>
                  Drive consistent engagement across your online and offline
                  channels, offer an omnichannel experience to your customers
                  wherein they can make a purchase anytime, from anywhere using
                  any device whether mobile phones, tablets, or personal
                  systems. Implementing Microsoft Dynamics 365 Commerce helps
                  brands to develop customer loyalty and drive massive
                  relationships for the long run.
                </p>
                <p>
                  Personalize your <Link href="/products/dynamics-365-customer-engagement/"><a target="_blank">customer engagement</a></Link>, maximize revenues, boost
                  your employee productivity, and optimize your operations, and
                  drive improved supply chain practices while reducing costs and
                  increasing efficiency.
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
                            src="/img/icons-commerce_user-experience.svg"
                            alt="icons-commerce_user-experience"
                          />
                        </div>
                        <span>User Experience</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Enrich your user experience with modern POS, E-commerce
                        storefront, etc. to parallelly work with external
                        applications to centralize your sales, inventory, order
                        fulfillment, reporting, and more.
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
                            src="/img/icons-commerce_back-office.svg"
                            alt="icons-commerce_back-office"
                          />
                        </div>
                        <span>Back Office</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Stimulate your back-office processes including supply
                        chain, finance, operations, and human resource all
                        through Microsoft Dynamics 365 Commerce- an integrated
                        solution for across your commerce needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="news">
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
                            src="/img/icons-commerce_ecommerce-platform.svg"
                            alt="icons-commerce_ecommerce-platform"
                          />
                        </div>
                        <span>E-commerce Platform</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#news"
                    >
                      <div className="accordion-body">
                        Easily manage your contents, digital assets, and web
                        storefront with a fully enriched e-commerce platform
                        designed as an integrated solution to drive uplifted
                        results in the commerce domain.
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
                            src="/img/icons-commerce_Commerce-Surround-Services.svg"
                            alt="icons-commerce_Commerce-Surround-Services"
                          />
                        </div>
                        <span>Commerce Surround Services</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#news"
                    >
                      <div className="accordion-body">
                        Protect your data through Dynamics 365 fraud protection,
                        leverage <Link href="/products/microsoft-dynamics-365/"><a target="_blank">Dynamics 365</a></Link> Customer insights to have a
                        360-degree view into customer data, and drive
                        centralization with Microsoft Bing for Commerce.
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
            <div className="col-lg-5 m--t align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Dynamics 365 Commerce Features</h2>
                <h3>
                  Elevate Your Commerce Practices and Drive Profitability with
                  Dynamics 365 Commerce
                </h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Omnichannel
                        <br />
                        Experience
                      </h3>
                      <div className="overlay">
                        <p>
                          Allow your customers to make purchases anytime using
                          any device whether mobile, tablet, or desktop while
                          concluding the modern payment methods, facilitating
                          the delivery model, and more.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Interconnected
                        <br />
                        Processes
                      </h3>
                      <div className="overlay">
                        <p>
                          Connect people in your enterprise by automating your
                          organizational data and streamlining your processes to
                          manage and accelerate the entire operational flow
                          while improving the productivity ratio.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Unified Data
                        <br />
                        Experience
                      </h3>
                      <div className="overlay">
                        <p>
                          Embedded with AI intelligence and Machine Learning
                          algorithms, Microsoft Dynamics 365 commerce enables to
                          optimize your operations and enables everyone to make
                          productive decisions in real-time.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Equipped With
                        <br />
                        AI & Analytics
                      </h3>
                      <div className="overlay">
                        <p>
                          AI-based reporting and key analytics help people in
                          your organization to maintain the right process flow,
                          optimize operations, and ensure a smoother
                          distribution & satisfactory delivery model.
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
            <div className="col-lg-6">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/Ecommerce-side.png"
                    className="fix-im"
                    alt="Ecommerce side"
                    width={553} height={532}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/video-Ecommerce.png"
                          alt="video-banner-commerce"
                        />
                        {/* <span className="cente-icns">
                        <img
                          src="/img/play_icons.svg"
                          alt="play_icons"
                        />
                      </span> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="side-heading">
                <h2>Dynamics 365 Commerce Services</h2>
                <p>
                  Avail rapid, safe, and sustainable services from a Microsoft
                  certified partner: Dynamics Square
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
                    Turn your running commerce into a profit-making machine by
                    optimising existing processes after implementing D365
                    Commerce.
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
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                    Boost your business operations for more profitability and
                    easy scalability by eavailing seamless Dynamics 365 Commerce
                    upgrade services.
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
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Reduce the chances of errors and run processes without
                    interruptions with our optimal Dynamics 365 upgrade
                    services.
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
                <h3>Connect & Share with Experts</h3>
                <p>
                  Let’s connect to share and discuss your business requirements
                  to reveal revenue-generating solutions.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Commerce pricing</h2>
            <p>
              Below, check out the most efficient D365 Commerce pricing for this
              powerful business application.
            </p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Commerce</h3>
                <div className="price">
                  £147.90<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Includes core capabilities to manage omnichannel retail
                    operations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>E-Commerce Add-In for Dynamics 365 Commerce</h3>
                <div className="price">
                  £3,287.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Includes e-commerce management for Dynamics 365 Commerce.
                  </li>
                  <li className="text-center">
                    <i className="bi bi-check-lg"></i> Requires Dynamics 365
                    Commerce
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a
                  data-bs-toggle="modal"
                  
                  className="btn-get-red"
                >
                  <span>Get Started Now</span></a>
                </Link>
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
              questions about Dynamics 365 Commerce?
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
                      What is D365 Commerce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Commerce is a proven retail
                        solution that integrates or unifies your back-office,
                        in-store, and digital experiences. D365 Commerce enables
                        you to optimize your operations, improve your employee
                        productivity, boost customer engagement, and drive
                        efficient results while reducing costs, time, and
                        energy. With built-in AI capabilities, streamline your
                        core operations from efficiently managing customers to
                        resources to supply chain to marketing practices, and
                        more.
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
                      What is D365 Commerce scale?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The Commerce Scale Unit allows stores to sell products
                        even if their internet connection is not consistent! It
                        means that your store can still process credit card
                        transactions, issue gift cards, and sync data with HQ
                        despite poor internet service.
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
                      Is Dynamics 365 Retail the same as Dynamics 365 commerce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 Retail is now Dynamics 365 Commerce. It has
                        recently had an important upgrade. Because of the way it
                        was named before, people had difficulty connecting the
                        name to what this system is capable of doing. Dynamics
                        365 commerce contains features such as e-commerce and
                        back office control, among others. See Also -{" "}
                        <Link href="/products/microsoft-dynamics-365-sales/">
                          <a target="_blank">Dynamics 365 Sales Professional</a>
                        </Link>{" "}
                        |
                        <Link href="/products/dynamics-365-project-operations/">
                          <a target="_blank">Dynamics 365 Project and Operations</a>
                        </Link>
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
                      What are the top benefits of D365 Commerce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The Dynamics 365 Commerce platform provides numerous
                        benefits to users, including cloud-based features,
                        simplified customer engagement, increased customer
                        loyalty, business-specific flexibility, adaptability to
                        modern business requirements, and an easy-to-use user
                        interface.{" "}
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
                      What are some important capabilities of D365 Commerce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        It has numerous capabilities that can assist you in
                        providing a more functional customer experience. It
                        offers capabilities including centralised data, smart
                        operations, good customer engagement, an adaptable
                        platform, and much more.
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
                      Are integrations allowed with this business application?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, you can integrate the desired apps, whether native
                        or third-party, with Dynamics 365 Commerce. However, you
                        will need to contact your support partner to build the
                        required application that understands your requirements
                        and works accordingly.
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
                      What is the cost of a Dynamics 365 Commerce
                      implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        D365 Commerce implementation isn't fixed. It varies from
                        business to business. One of the critical factors that
                        determines the cost of implementation is the complexity
                        of the solution and the business requirements. To get an
                        accurate estimate, you need to contact a
                        Microsoft-certified gold partner like Dynamics Square.
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

export default Commerce;
