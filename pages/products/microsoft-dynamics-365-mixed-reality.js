import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Blog from "../../components/Blog";
const MicrosoftDynamics365MixedReality = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Remote Assist &amp; Mixed Reality</title>
        <meta
          name="description"
          content="Empower your workforce and optimize your operations with Dynamics 365 Mixed Reality Applications like remote assist, product visualize and guides."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-mixed-reality/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-mixed-reality/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Remote Assist & Mixed Reality" />
        <meta property="og:description" content="Empower your workforce and optimize your operations with Dynamics 365 Mixed Reality Applications like remote assist, product visualize and guides." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Mixed-Reality-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-mixed-reality/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Remote Assist & Mixed Reality" />
        <meta property="twitter:description" content="Empower your workforce and optimize your operations with Dynamics 365 Mixed Reality Applications like remote assist, product visualize and guides." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/Mixed-Reality-banner.png" />

      </Head>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="3NJ6DulFK_g"
        onClose={() => setOpen(false)}
      />

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Mixed Reality
              </h1>
              <p>
                Empower your workforce and optimize your operations with
                Dynamics 365 Mixed Reality Applications.
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
                src="/img/Mixed-Reality-banner.png"
                alt="D365 Mixed-Reality"
                width={723} height={473}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>What is dynamics 365 Mixed Reality</h2>
            <p>
              Dynamics 365 Mixed Reality Apps enable your workforce with instant
              & timely collaboration to improve overall work performance, drive
              effective growth, and maximize desired revenues. Share & solve
              problems in real-time and provide instant support to your
              customers or clients to impact the overall organizational success.
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
                          <img src="/img/1.jpg" alt="icons" />
                        </div>
                        <span>Microsoft Dynamics 365 Remote Assist</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Optimize operations and transform your business flow
                        while reducing costs and delays by leveraging Microsoft
                        Dynamics 365 Remote Assist solutions. Perform seamless
                        remote inspections across global clients or customers
                        embedded with video interactions, screenshots sharing,
                        annotations, etc. utilizing Dynamics 365 Remote assist
                        Mobile.
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
                            src="/img/Mixed-Reality-Layout.svg"
                            alt="Mixed-Reality-Layout"
                          />
                        </div>
                        <span>Microsoft Dynamics 365 Layout</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Manage all your complicated tasks instantly and
                        efficiently by simply bridging the gap between
                        real-world and digital world objects with Microsoft
                        Dynamics 365 Layout. Share your ideas, visions, or
                        concepts with your team or stakeholders and edit the
                        layouts like a real-world experience to support improved
                        decision-making prior to implementation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <hr className="mob-disp" />
              <div className="finace-acc">
                <div className="accordion" id="accnew">
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
                            src="/img/Mixed-Reality-Guide.svg"
                            alt="Mixed-Reality-Guide"
                          />
                        </div>
                        <span>Microsoft Dynamics 365 Guides</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Train your staff in real-time with self-created
                        Mix-reality guides embedded with step-by-step
                        instructions followed by necessary images, videos, and
                        3D holograms. Businesses can bring continuity in their
                        workspace even when complex tasks are performed and
                        improve their entire workflow with the help of <Link href="/products/microsoft-dynamics-365/"><a target="_blank">Microsoft
                        Dynamics 365 guides</a></Link>.
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
                            src="/img/Mixed-Reality-Product-Visualize.svg"
                            alt="Mixed-Reality-Product-Visualize"
                          />
                        </div>
                        <span>Microsoft Dynamics 365 Product Visualize</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Accelerate your sales process, build customer trust, and
                        close the deal faster by simply enabling your product
                        visualization during your sales process. With Microsoft
                        Dynamics 365 Product Visualize, empower your salespeople
                        to visualize large, complex, customizable, or highly
                        configurable products in a real-world environment to
                        reduce risk and boost customer satisfaction.
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
                <h2>Dynamics 365 Mixed Reality Features</h2>
                <h3>
                  How does Microsoft Dynamics 365 Mixed Reality help to Elevate Your
                  Business Capabilities?
                </h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Intelligent
                        <br />
                        Services
                      </h3>
                      <div className="overlay">
                        <p>
                          Empower your workforce by bringing a 3D experience to
                          mobile devices, headsets, and more. Allow your people
                          to create, learn, and collaborate seamlessly with the
                          intelligent information to drive clients and customers
                          more effectively.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimal
                        <br />
                        Hardware
                      </h3>
                      <div className="overlay">
                        <p>
                          Optimal hardware of Mixed Reality devices equipped
                          with advanced sensor technology allows people to gain
                          in-depth understanding and gather more relevant data
                          about the physical environment to ensure an immersive
                          user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Cross-platform
                        <br />
                        Support
                      </h3>
                      <div className="overlay">
                        <p>
                          Leverage Mixed Reality for across mobile devices,
                          headsets, personal desktops, and AR (Augmented
                          Reality) platforms to boost your user capability.
                          Mixed Reality apps demonstrate seamless compatibility
                          with HoloLens, iOS, and Android devices.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Secured
                        <br />
                        Cloud Model
                      </h3>
                      <div className="overlay">
                        <p>
                          Allow your employees to directly access the Mixed
                          Reality data over a secured and trusted cloud model
                          with Azure Active Directory. Businesses can safeguard
                          their vital data, monitor workloads, fix
                          vulnerabilities, and ensure Azure backup.
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
                    src="/img/mixed-reality-side-image.png"
                    className="fix-im"
                    alt="mixed-reality-side-image"
                    width={553} height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/video Mixed Reality.png"
                            alt="video Mixed Reality"
                            width={390} height={259}
                          />
                          <span className="cente-icns">
                            <img
                              src="/img/play_icons.svg"
                              alt="play_icons"
                            />
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
                <h2>Dynamics 365 Mixed Reality Services</h2>
                <p>Take Your Business One Step Ahead</p>
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
                    Unlock new business potentials with our highly customized
                    Mixed Reality implementation.
                  </p>
                  <div className="action-content">
                    <Link href="/contact-us/"><a target="_blank">Get Started</a></Link>
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
                    Upgrade your existing system capabilities to drive an
                    effective and scalable Mixed Reality approach.
                  </p>
                  <div className="action-content">
                  <Link href="/contact-us/"><a target="_blank">Get Started</a></Link>
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
                    Drive continuity and growth in your business with our
                    dedicated Mixed Reality support system.
                  </p>
                  <div className="action-content">
                  <Link href="/contact-us/"><a target="_blank">Get Started</a></Link>
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
                <h3>Looking to implement mixed reality applications?</h3>
                <p>
                  Let's discuss how smarter you can drive with our Mixed Reality
                  services.
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
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Dynamics 365 Mixed Reality?
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
                      What is Mixed Reality and how does it work?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Mixed Reality is a next-generation solution that can be
                      leveraged to empower people in your organization and to
                      improve your customer experience while reducing risks and
                      costing. Mix Reality combines physical and digital worlds
                      to interact in real-time to serve several purposes from
                      remote services to virtual visualization to preparing
                      learning guides for the users within your organization.
                      <br />
                      <br />
                      Mixed Reality bridges the gap between people and objects
                      that are on distance. Here, one does not need to visit
                      miles just to collaborate with the object, things can be
                      managed from the distance. For instance, businesses can
                      showcase their complicated, large, customizable products
                      to the customers using Mixed Reality concepts or devices.
                      Microsoft's HoloLens is an example of a Mixed Reality
                      device.
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
                      What are Mixed Reality Services?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When it comes to Microsoft's Mixed Reality Services, it
                      helps to improve your workflow, customer trust, and
                      facilitate your workforce with the self-created Mix
                      Reality guides to learn the required information in
                      real-time and implement the same to ensure smoother and
                      continuous operational flow in your organization.
                      <br />
                      <br />
                      Mixed Reality Services can be availed of in the following
                      terms:
                      <br />
                      <br />
                      <ul>
                        <li>Microsoft Dynamics 365 Remote Assist</li>
                        <li>Microsoft Dynamics 365 Layout</li>
                        <li> Accounts Receivable</li>
                        <li>Cash & Bank Management</li>
                        <li>Microsoft Dynamics 365 Product Visualize</li>
                        <li>Microsoft Dynamics 365 Guides</li>
                      </ul>
                      To know more about contact Dynamics Square Team, we can
                      help.
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
                      How businesses can improve their workflow with Mixed
                      Reality solutions?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Mixed Reality is a business transforming solution that
                      enables the organization in various terms. It can help to
                      simplify your complex processes and ease your day-to-day
                      tasks by bringing the digital information to demonstrate
                      like real-world experience. Here are few key benefits that
                      can be availed with Mixed Reality licensing:
                      <br />
                      <br />
                      <ul>
                        <li>
                          Showcase complicated products or issues from distance
                          in real-time.
                        </li>
                        <li>
                          Generate trust and improve customer satisfaction
                          during the process.{" "}
                        </li>
                        <li>
                          Reduce downtime and eliminate the traveling need.
                        </li>
                        <li>
                          Collaborate in real-time and proactively solve the
                          problems.
                        </li>
                        <li>
                          Quickly identify issues and get technical assistance
                          anywhere.
                        </li>
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
                      data-bs-target="#faq-content-4"
                    >
                      What is also known as Mixed Reality?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Mixed Reality is also referred to as Hybrid Reality or
                      Extended Reality. As it combines Augmented Reality and
                      Virtual Reality, thereby, most commonly known as Mixed
                      Reality.
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
                      What are the three components of Mixed Reality?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Mixed Reality is achieved by seamlessly blending the
                      physical world with the digital world. Mixed Reality is
                      based on three components:
                      <br />
                      <br />
                      <ul>
                        <li>
                          Mixed Reality is achieved by seamlessly blending the
                          physical world with the digital world. Mixed Reality
                          is based on three components:
                        </li>
                        <li>Real World</li>
                        <li>Digital Objects</li>
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
                      data-bs-target="#faq-content-6"
                    >
                      What are the benefits of Mixed Reality?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      As the name suggests, it combines the attributes of both
                      AR (Augmented Reality) and VR (Virtual Reality) that
                      allows users to create a new environment by leveraging
                      physical and digital objects in real-time. Mixed Reality
                      can provide a proven experience to both the consumers and
                      businesses. Eliminating the wait time and saving the
                      travel efforts, Mixed Reality can help to solve the
                      problems in real-time.
                      <br />
                      <br />
                      When integrated with <Link href="/products/microsoft-dynamics-365-field-service/"><a target="_blank">Dynamics 365 Field Service</a></Link>, it can
                      help businesses to capture the asset information. If there
                      is a piece of critical or complex information, can be
                      transformed into easy visualization by <Link href="/products/microsoft-power-bi/"><a target="_blank">integrating with
                      Power BI</a></Link> or any other enterprise-level application.
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
                      How is Mixed Reality used in Businesses?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When there is a complex, harsh, or risk-enabled task,
                      Mixed Reality can help with Experiential Training which
                      allows the workforce to learn things in the process
                      without indulging in any risk. This enables continuity in
                      business flow and empowers people in your organization to
                      resolve the interruptions by self-learning in real-time.{" "}
                      <br />
                      <br />
                      If you are running a kind of business wherein you have
                      complex, customizable, large-size products that can't be
                      carried by your workforce while client or customer
                      visiting, Mixed Reality can help to start improving your
                      customer experience as well as their trust while being in
                      the process. <br />
                      <br />
                      If you want to solve your business problems or want to
                      improve your business flow, contact us, we can suggest and
                      configure the best possible solution for your business.
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
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>
              Whether you are a start-up, an SMB, or an enterprise, the Dynamics
              Square blog is the best place to get inspired and learn more about
              Microsoft Business Applications.
            </p>
          </header>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Mixed Reality Important Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/watch?v=00gPg4-sBc8"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>How this auto
                      manufacturing company uses Dynamics 365 mixed reality to
                      boost operational efficiency.
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/watch?v=0ySQV6gbbUw"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Introduction
                      to Mixed Reality Business Applications
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/watch?v=2h86OJT9OPo"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                      Guides with HoloLens 2
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

export default MicrosoftDynamics365MixedReality;
