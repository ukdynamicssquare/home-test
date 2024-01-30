import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";

const CustomerService = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Customer Service Partner UK | Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics 365 Customer Service CRM optimise customer interactions with unified data, AI-driven insights, and efficient case management for exceptional support."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Customer Service Partner | Dynamics Square" />
        <meta property="og:description" content="Dynamics 365 Customer Service CRM optimise customer interactions with unified data, AI-driven insights, and efficient case management for exceptional support." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/customer-service-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Customer Service Partner | Dynamics Square" />
        <meta property="twitter:description" content="Dynamics 365 Customer Service CRM optimise customer interactions with unified data, AI-driven insights, and efficient case management for exceptional support." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/customer-service-banner.png" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wVFZVajK2YI"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Customer Service
              </h1>
              <p>Enhance the Customer Experience, Empower your Agents using AI, and Collect Customer Insights to Offer a Personalised Experience With Microsoft Dynamics 365 Customer Service.</p>
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
                src="/img/customer-service-banner.png"
                alt="Dynamics 365 Customer Service"
                width={759}
                height={513}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-lg-11">
              <header className="section-header">
                <h2>
                  What is dynamics 365
                  <br />
                  Customer Service?
                </h2>
                <p>Microsoft Dynamics 365 Customer Service is a powerful solution that empowers businesses to offer an exceptional customer experience. Dynamics 365 Customer Service offers an omnichannel experience to the agents so that they can avail of real-time insights, communicate with customers using channels, collect necessary data, and get a 360-degree view of customer issues.</p>
<p>It lets you analyse the data insights to pitch customers with personalised offers and services. This will retain customers in the long run while offering an optimum level of customer satisfaction. Being a part of <Link href="/products/microsoft-dynamics-crm/"><a target="_blank">Microsoft Dynamics CRM </a></Link> solutions, it can be customised to align with unique business needs. Also, Microsoft allows seamless integration with native and third-party applications to enhance the overall capability of D365 Customer Service.</p>
              </header>
            </div>
          </div>
        </div>
      </section>


        <section className="busine_service_bottom">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                  width={625} height={651}
                />
              </div>
            </div> */}
            <div className="col-lg-12 align-self-center">
              <div className="side-heading-custom-01">
              <h2>Why does a Business needs Dynamics 365 CRM Customer Service? </h2>
              <p>In today's competitive business landscape, retaining customers is crucial for survival and growth. Dynamics 365 CRM Customer Service empowers businesses to foster lasting customer relationships that drive business success. </p>
              <p>Dynamics 365 CRM Customer Service breaks down communication barriers by unifying customer interactions across various channels, including phone, email, chat, and social media, providing a consistent and personalised customer experience. </p>
              <p>With Dynamics 365 CRM Customer Service, businesses can align customer interactions with their core values, offerings, and service principles, ensuring that every touchpoint reinforces the brand promise and fosters customer loyalty. </p>
              <p>By analysing customer data and preferences, Dynamics 365 CRM Customer Service empowers businesses to anticipate customer needs, deliver personalised recommendations, and offer tailored services that exceed customer expectations, leading to increased customer retention and loyalty. </p>
             
              </div>
             
            </div>
            <div className="col-lg-12">
             <div className="row" style={{paddingTop:'40px'}}>
             <div className="col-lg-8">
              <div className="custom-p-001">
              <p><b>Businesses can leverage the functionalities of D365 Customer Service CRM to: </b></p>
           <ul>
             <li>Connects all communication channels, like text, call, and chat, for collected insights. </li>
             <li>Tracks customers throughout the issue resolution process. </li>
             <li>Record all communication and interaction with the customer. </li>
             <li>Collects data from the knowledge base and shares it with customers whenever required. </li>
             <li>Comes with unified routing features that let you efficiently route items. </li>
             <li>built with AI to offer you accurate and predictive insights. </li>
             <li>Supercharge agent performance using a unified data dashboard. </li>
             <li>Enhances the overall productivity of the agent. </li>
             <li>Optimise resources to maximise the ROI. </li>
             <li>Automate recurring and manual processes to increase efficiency. </li>
           </ul>
         </div>
              </div>
              <div className="col-lg-4 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                  width={625} height={651}
                />
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
            <div className="col-lg-5  align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Dynamics 365 Customer Service Features</h2>
                <h3>Some of the unique and most important features are listed below: </h3>
              </div>
              {/* <div className="m-o-t m-o-t-b">
              <Link href="#about" className="btn-get-started scrollto">
                <span>Know More</span>
              </Link>
            </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6 align-self-center">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>Omnichannel <br /> Experience </h3>
                      <div className="overlay">
                        <p>Get a unified view of customer data and interactions across multiple modes of communication on a common dashboard. It will allow you to track each customer and their activity to offer consistent customer experiences. </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>Get AI-Power <br /> Insights </h3>
                      <div className="overlay">
                        <p>Dynamics 365 Customer Service is built using the latest technology that includes AI, BI, and ML to perform a deep analysis of each customer movement. This data analysis will help you understand changing trends, customer needs, and demands. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m align-self-center">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>In-built <br /> Knowledge Base </h3>
                      <div className="overlay">
                        <p>It comes with a knowledge base that stores the information you need to offer support to the customer. Both the customer and the customer service agent can access this knowledge base to get the desired information. </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>Unified <br /> Routing and SLAs </h3>
                      <div className="overlay">
                        <p>D365 Customer Service comes with unified routing that transfers customer queries to the agent based on qualification, availability, workload, and skill set. Also, you can define SLAs to specify the expected time a query needs to be resolved.</p>
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
        <div className="row justify-content-center">
            <div class="col-lg-10">
              <header className="section-header">
                <h2>Dynamics 365 Customer Service Capabilities </h2>
                <p>D365 Customer Service can exceed your customer expectations from your business in minimal resources. Some of its capabilities that you should check are:  </p>
              </header>
            </div>
          </div>
          <div className="row" style={{paddingTop:'30px'}}>

            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content  style-grid-content-1">
                  <h4>Strengthen Agents with Smart Tools </h4>
                  <p>Agents can leverage the power of <Link href="/blog/microsoft-dynamics-copilot/"><a target="_blank">Microsoft Copilot</a></Link> to search for relevant information in simple language to resolve issues. Even, you can transfer the call to an expert professional in case of complex issue through Microsoft Teams.   </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content  style-grid-content-1">
                  <h4>Inbuilt Smart Self-Service </h4>
                  <p>Resolve customer issues using automated conversational chatbots and human-like IVR responses. You can automate the simple issues by leveraging AI, BI, knowledge articles, and community portals.  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content  style-grid-content-1">
                  <h4>Optimise Customer Service Operations </h4>
                  <p>You can get accurate data insights to track the performance of conversational analytics and customer analytics. This will help you find the areas of improvement where you can optimise the performance to get enhanced results. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content  style-grid-content-1">
                  <h4>Connect with Customer - Anytime and Anywhere  </h4>
                  <p>Connect with the customer using voice, social networks, a virtual assistant, and chatbots to resolve their query. Customer Service <Link href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365/"><a target="_blank">Dynamics 365</a></Link> is a multilingual solution that allows you to communicate with customers in any language. </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content  style-grid-content-1">
                  <h4>Case Management </h4>
                  <p>Get a comprehensive view of all queries, customers, and resolutions using a case management system. Also, it comes with task management, queue management, and case escalation features to accelerate the case resolution process.  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content  style-grid-content-1">
                  <h4>Unified Agent Desktop </h4>
                  <p>Dynamics 365 Customer Service comes with aa unified agent desktop that gives you access of all information from a single screen. This customer information includes customer profile, query status, case history, customer journey, and knowledge base data.  </p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/customer-service-side-image.png"
                    className="fix-im"
                    alt="Dynamics 365 Customer Service"
                    width={553}
                    height={591}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a data-bs-toggle="modal" onClick={() => setOpen(true)}>
                          <img
                            src="/img/video-Customer Service.png"
                            alt="Customer-Service"
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
                <h2>Dynamics 365 Customer Service</h2>
                <p>Dynamics 365 Customer Service will revolutionise the way you deal with your agents, empowering them to meet customer satisfaction at all levels. </p>
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
                  <p>Improve your customer experience and maximise your sales by implementing Dynamics 365 Customer Service Automation.  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-customer-service-implementation/">
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
                  <p>Upgrade your system to D365 Customer Service CRM and drive smarter business operations with strong customer engagement.    </p>
                  <div className="action-content">
                    <Link  href="#exampleModal">
                     <a data-bs-toggle="modal"> Get Started</a>
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
                  <p>Improve your customer retention rate with a long-lasting impact by embracing Dynamics 365 Customer Service capabilities.   </p>
                  <div className="action-content">
                  <Link  href="#exampleModal">
                     <a data-bs-toggle="modal"> Get Started</a>
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
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>Dynamics 365 Customer Service Pricing</h2>
                <p>Dynamics 365 Customer Service Pricing is simple and cost-effective for all businesses. It comes in two plans - Dynamics 365 Customer Service Professional and Enterprise.  </p>
                <p>Below, you can do a Dynamics 365 Customer Service Professional vs Enterprise comparison to analyse its features and capabilities and find the best plan that suits you.</p>
                <p>Also, you can avail yourself of the Microsoft Dynamics 365 Customer Service trial to know its capabilities based on your unique business requirements.</p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Professional
                </h3>
                <div className="price">
                £41.10<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Knowledge management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> SLAs
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Templates
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unlimited number of users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Additional Capabilities
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Personal Views and Dashboards 
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Essentials
                </h3>
                <div className="price">
                £78.10<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unified service desk 
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Embedded intelligence 
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Context-driven suggestions 
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Service gamification
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Customization and extensibility 
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Analytics and KPI reporting 
                  </li>

                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Personlised Pricing Now! </span>
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
                <h3>Empower Exceptional Customer Service: Discover the Power of Dynamics 365 Customer Service </h3>
                <p>Transform customer interactions into exceptional experiences with Dynamics 365 Customer Service consultants, the unified solution that empowers agents to deliver personalized support anytime, anywhere. </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Free Demo Today! </span>
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
              questions about Microsoft Dynamics Customer?
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
                      What is Microsoft Dynamics Customer Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Microsoft Dynamics Customer Service is designed to
                      streamline and automate the customer engagement and
                      support system for enterprises seeking to simplify and
                      automate their customer data and improve their customer
                      experience while eliminating repetitive and redundant
                      tasks. It enables businesses to serve personalized
                      customer experience while keeping real-time eyes through
                      an integrated dashboard.
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
                      What is Dynamics 365 Customer Service Insights?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 customer service insights enable enterprises
                      to access actionable data related to key analytics,
                      operational data, and other industry-related trends. These
                      insights help businesses to make faster and smarter
                      decisions to support growth and profitability. Leveraging
                      customer service insights, businesses can roll out their
                      required changes to improve customer satisfaction,
                      maximize operational efficiency, and more.
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
                      How do I install Dynamics 365 Customer Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Customer Service app is recommended to be
                      installed manually in your instance and user roles should
                      be assigned before you allow your users to access it.
                      <br />
                      <br />
                      Following steps are needed while installing Dynamics 365
                      Customer Service: <br />
                      <br />
                      <ul>
                        <li>
                          Administrators are needed to sign in Power Platform
                          administration center.
                        </li>
                        <li>
                          Now, go through the drop-down list of “Resources”, and
                          select{" "}
                          <Link href="/products/microsoft-dynamics-365/">
                          <a target="_blank">Dynamics 365</a>
                          </Link>{" "}
                          Apps.
                        </li>
                        <li>
                          On this app list page, you will see “customer service
                          Team member”, now, select install.
                        </li>
                        <li>
                          Once you reach on “Install Customer Service Team
                          Member” panel, simply select an environment from the
                          list.
                        </li>
                        <li>
                          Now, select “Terms of Service” to get agreed upon, and
                          then select install.
                        </li>
                        <li>
                          Now, it’s time to assign user roles in the Customer
                          Service app.
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
                      What are the key features of Dynamics 365 Customer
                      Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 customer service comes with a number of vital
                      features to seamlessly and effectively drive your
                      customers, track customer behavior to serve them a
                      personalized solution. Here is the list of Dynamics 365
                      Customer Service key features:
                      <br />
                      <br />
                      <ul>
                        <li>Tracking customer issues and case management</li>
                        <li>
                          Record customer interactions pertained to a particular
                          case
                        </li>
                        <li>Sharing information in the knowledge database.</li>
                        <li>Creating queues and routing cases</li>
                        <li>Creating and tracking service levels</li>
                        <li>Defining service terms using entitlements</li>
                        <li>
                          Track and manage performance through reports and
                          dashboards
                        </li>
                        <li>Creating and scheduling services</li>
                        <li>Taking part in chats</li>
                        <li>
                          Managing conversations across the configured channels.
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
                      data-bs-target="#faq-content-5"
                    >What is the difference between D365 sales and customer service? </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p><Link href="/products/microsoft-dynamics-365-sales/"><a target="_blank">Dynamics 365 Sales</a></Link> is a Microsoft CRM business solution capable of streamlining all sales activities with ease. Whereas customer service comes into play after making a sale. It manages the customer to offer optimum customer satisfaction.</p>
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
                    >What are the benefits of Dynamics 365 customer service?</button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>There are numerous Dynamics 365 customer service benefits for small, medium, and large businesses. It includes advance reporting, self-service options, seamless integration, is easy to scale, and adapts to changing business requirements.</p>
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
                    >How does Dynamics 365 Customer Service CRM help improve customer service?</button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The Dynamics 365 for Customer Service CRM collects, monitors, and tracks customer data to give them a personalised and data-driven offer. Also, D365 Customer Service CRM enables the business to offer after-sales service to retain customers for the long run.</p>
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
                    >Can Dynamics 365 Customer Service CRM be customised for specific business needs?</button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, you can customise this solution to meet the unique needs of your business. You can utilise the <Link href="/products/microsoft-dynamics-365/"><a target="_blank">Microsoft Dynamics 365</a></Link> ecosystem to align the solution with your business using integrations, add-ons, and customizations.</p>
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
                    >What is the role of the knowledge base in Dynamics 365 Customer Service CRM?</button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The Microsoft Knowledge Base contains a lot of knowledge about issues, queries, and resolutions. It is a kind of forum where anyone can post an issue or a query, and anyone can answer it based on their experience with D365 Customer Service. </p>
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
            <div class="col-lg-9">
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
                    <Link href="/pdf/Microsoft-Dynamics-365-ROI-case-study.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Nucleus
                        Research Report - Dynamics 365 ROI Case Study
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Five-ingredients-to-ignite-always-on-service.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Five
                        Ingredients to Ignite Always-On Service
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/How-technology-benefits-the-customer-experience.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>How Technology
                        Benefits The Customer Experience
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/CNTNT-ebook-2018-State-of-Global-Customer-Service.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>State of
                        Global Customer Service Report
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide-3.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> Licensing
                        Guide
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                      <h4>Learn More</h4>
                   </div>
                   <div className="blogs-extra-right">
                   <ul>
                           <li><Link href="/blog/dynamics-crm-guide-overview/"><a target="_blank"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 CRM Guide</a></Link></li>
                           <li><Link href="/blog/top-benefits-of-dynamics-365-customer-service/"><a target="_blank"><i className="bi bi-box-arrow-up-right"></i> 9 Benefits of Dynamics 365 Customer Service</a></Link></li>
                          
                        </ul>
                   </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerService;
