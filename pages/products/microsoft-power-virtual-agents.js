import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";
const PowerVirtualAgents = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
          Microsoft Power Virtual Agents: Demo & Pricing UK | Dynamics Sqaure</title>
        <meta
          name="description"
          content="Enhance customer experience and boost sales using AI enabled chatbots built with Microsoft Power Virtual Agents. Schedule a free demo today!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-power-virtual-agents/"
        />
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
                Microsoft
                <br />
                Power Virtual Agents
              </h1>
              <p>
                Enhance customer experience and boost sales using AI enabled
                chatbots built with Power Virtual Agents.
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
                src="/img/virtual-agent-banner-01.svg"
                alt="virtual-agent-banner-01"
                width={1024}
                height={586}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>What is Power Virtual Agents?</h2>
            <p>
              Power Virtual Agents is a tool to build powerful chatbots without
              the need to write code, and that allows you to automate
              communication with potential clients or employees. The goal is to
              easily create and maintain virtual agents without programming,
              using a guided graphical interface without the need for data
              analysts or developers.
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
                            src="/img/icons-power-apps_Quick-and-Easy.svg"
                            alt="icons-power-apps_Quick-and-Easy"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Easy Chatbot Creation</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        The very first feature of the platform is no doubt the
                        easy-to-use graphical interface that helps in creating
                        chatbots in a super comfortable and easy way. The
                        creator does not have to be any developer, data
                        scientist, or AI expert.
                        <br />
                        <br />
                        The platform offers a plethora of tools and functions
                        that help the user in understanding how to do what in
                        creating the chatbot that is required for the purposes
                        that the organization has.
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
                        <span>Instant Actions</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Not only creating the chatbots is easy, taking action
                        with the chatbots is equally convenient. Once the
                        chatbot is ready, you can instantly integrate it into
                        the service or product that you have targeted earlier.
                        <br />
                        <br />
                        It also allows you to check records of conversations
                        that have already taken place for taking references.
                        Also, the tool allows you to integrate functions such as
                        handing over the chat conversation to some live agents
                        in case of extreme necessity or also to call up the
                        APIs.
                        <br />
                        <br />
                        You can also integrate other tools along with Virtual
                        Agents to get a better result such as integrating Power
                        Automate to create automated workflows. Similarly, you
                        can integrate Microsoft Bot Framework to handle complex
                        situations.
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
                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                            alt="icons-power-apps_Enhancing-Capabilities"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Smarter Bots</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        The platform does not just help you in coming up with
                        chatbots but also helps you in creating them in a much
                        smarter way. Thus it offers you suggestions about the
                        topics on which you can create chatbots. It helps you in
                        creating rich chats that are not just customized but are
                        available in natural language to convince the customers
                        and clients much better.
                        <br />
                        <br />
                        The tool makes use of insights that are data-driven as
                        well as are well-supported by AI technology. This
                        enhances the performance of the chatbots that are being
                        created with the use of the platform. Moreover, this
                        tool from Microsoft has come up to be one of the best
                        options to create chatbots that are not just helpful for
                        the organizations in saving time but also are created in
                        the most professional way to offer high-end results.
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
                            src="/img/icons-power-apps_Responsive-Design.svg"
                            alt="icons-power-apps_Responsive-Design"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Easy to Start</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        Once you are convinced with the features and working of
                        the tool, you will surely wish to try out this wonder
                        option to create chatbots for your organization too.
                        <br />
                        <br />
                        The best thing is that if you are already using
                        Microsoft Office 365, you will already get this tool
                        integrated into it. The existence of power virtual
                        agents for office 365 is a great thing that will allow
                        the users to make use of the tool without the
                        requirement of downloading any extra tool on the
                        systems.
                        <br />
                        <br />
                        All you need to do is to search for Power Virtual Agents
                        in your Microsoft Office 365 applications and then you
                        can get started with it instantly. Take a dive into a
                        huge number of features and functions available and then
                        start trying out the functions to create your own
                        chatbots using the platform instantly.
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
                <h2>Why choose Power Virtual Agents?</h2>
                <h3>What are Power Virtual Agents Features</h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Easy
                        <br />
                        Integration
                      </h3>
                      <div className="overlay">
                        <p>
                          Easily register, create the bot and embed it on your
                          website with just a few clicks. There is no
                          infrastructure to maintain and no complex systems to
                          implement.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        No Coding
                        <br />
                        Required
                      </h3>
                      <div className="overlay">
                        <p>
                          Train your teams by allowing them to easily build bots
                          without the need for intermediaries, coding or
                          artificial intelligence expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Automate
                        <br />
                        Queries
                      </h3>
                      <div className="overlay">
                        <p>
                          Easily automate the most common common queries thanks
                          to the Power Virtual Agent chatbot.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Customer
                        <br />
                        Satisfaction
                      </h3>
                      <div className="overlay">
                        <p>
                          Improve customer satisfaction by enabling customers to
                          quickly self-help and resolve issues 24/7 using
                          personalized bot conversations.
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
                    src="/img/virtual-agent-side.png"
                    className="fix-im"
                    alt="virtual-agent-side"
                    width={553} height={531}
                    
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/video-Virtual Agents.png"
                            alt="power-apps-video-banner"
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
                <h2>Power Virtual Agents Services</h2>
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
                    width="64" height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>
                    Successfully implement Power Virtual Agents solutions by our
                    experts to ensure your needs are met on time and within
                    budget.
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
                    width="64" height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Get constant and seamless support from Dynamics Square team
                    to manage your Chat bot
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
            <h2>Power Virtual Agents Pricing</h2>
            <p>
              Explore Power Apps Plans, Costs, And Availability To Start Running
              Your Business Apps.
            </p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-4">
              <div className="box box-66">
                <h3>Power Virtual Agents</h3>
                <p>
                  Run intelligent chatbots across websites and other channels.
                </p>
                <div className="price">
                £164.40<span>Per month for 2,000 sessions</span>
                </div>
                <ul>
                  <li>
                    Only pay for two-way engagement between users and your
                    chatbots, with sessions serving each end-to-end interaction.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-66">
                <h3>Sessions add-on</h3>
                <p>
                  Add additional sessions to your Power Virtual Agents plan.
                </p>
                <div className="price">
                £82.20<span>Per month for 1,000 sessions</span>
                </div>
                <ul>
                  <li>Requires a Power Virtual Agents licence.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Best Price Quotes</span>
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

      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>
                  Have you got <br /> questions about Microsoft Power Virtual Agents?
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
                      What is Power Virtual Agents?  
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Built by Microsoft, Power Virtual Agents offer AI-enabled chatbots to enhance the customer experience while increasing the credibility of the business. Microsoft Power Virtual Agents is capable of empowering users or businesses to create a desired chatbot with desired features without learning to code. 
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
                      Is Power Virtual Agent available for free? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      No, it isn't free, but you can avail of a 60-day trial to know its capabilities and benefits as per your business. You can sign up for the trial on the Microsoft website. 
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
                    Is Power Virtual Agent included with Power Platform?  
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Yes, it is one of the applications offered by Microsoft under the Power application. The <Link href="/products/microsoft-power-platform/"><a target="_blank">Power Platform</a></Link> contains <Link href="/products/microsoft-power-bi/"><a target="_blank">Power BI</a></Link>, <Link href="/products/microsoft-power-apps/"><a target="_blank">Power Apps</a></Link>, Power Pages, <Link href="/products/microsoft-power-automate/"><a target="_blank">Power Automate</a></Link>, and Power Virtual Agents. These applications are also known as elements of the Power Platform. All of these applications are designed to boost the overall productivity and efficiency of the business while utilising existing resources. 
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
                      What type of offering is Power Virtual Agents?  
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      It is based on a SaaS platform to help you build chatbots for different purposes. You can easily create the required bot and embed it on the website without any knowledge of programming. It offers a drag-and-drop feature to bots and deploys them in a matter of a few clicks. 
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
                      What types of bots can I create using Power Virtual Agents?  
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      You can create any kind of bot using this application based on your needs. It may be a chatbot or a VA (virtual agent). Even so, you can integrate other native applications with Power Virtual Agents to fetch more customer data in real-time.
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
                <h3>Important Power BI Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/blog/what-is-power-bi/">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>What is
                        Power BI?
                      </a>
                    </Link>
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
                    <Link href="/blog/power-bi-architecture/">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Architecture
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/power-bi-reports/">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Reports
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/implement-power-bi-for-your-business/">
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Why Your
                        Business Should Implement Power BI?
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

export default PowerVirtualAgents;
