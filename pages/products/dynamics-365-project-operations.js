import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";
import Form from "../../components/Form";
const ProjectOperations = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Project Operations Partner UK</title>
        <meta
          name="description"
          content="Looking for a Dynamics 365 Project Operations partner? Improve project transparency, increase agility & streamline your operations. Call us for a demo and pricing today! "
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-project-operations/"
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
                Dynamics 365
                <br />
                Project Operations
              </h1>
              <p>
                Bring Agility, Improve Transparency, and Streamline Your
                Projects with Dynamics 365 Project Operations
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
              <img src="/img/project-operation-banner.png" alt="d365 project operation" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>What is dynamics 365 Project Operations?</h2>
                <p>Empower your team to drive visibility and agility for ensuring on-time project deliveries while optimizing budget for a maximum revenue with <strong>Dynamics 365 Project Operations</strong>. </p>

 

                <p>Seamlessly manage all projects of your business, from sales to finance, by effectively leveraging Dynamics 365 Project Operations; a simple yet powerful solution built by Microsoft. Being a unified and reliable solution, it can help you bring your team together to drive collaboration, accelerate project delivery, and maximise growth potential. </p>

 

                <p>Dynamics 365 Project Operations modules can offer real-time actionable insights to help you generate more leads, close deals faster, and accelerate project delivery with enhanced profitability. Such insights let the business match the right professional with the right project, resulting in better decisions regardless of any scenario. </p>
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
                          <img src="/img/icon-automation.svg" alt="icons" />
                        </div>
                        <span>Project Automation</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Enable project automation to allow people involved from
                        the top level to executive level to stay updated with
                        the real-time status of the project to plan and execute
                        the project accordingly.
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
                            src="/img/icons_resource-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Resource Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Elevate your project delivery model by aligning the
                        right talent to the right project impacting the overall
                        project development cycle while ensuring the quality of
                        the project and fulfilling deadlines.
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
                            src="/img/icons_resource-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Superior Deal Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Simplify your bid management strategies using automation, along with shortlisting deals for higher profit margins. Track contract status, deliver project quotes, forecast winning leads, and make an accurate estimation. 
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_finance-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Finance Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        Simplify your finance from project costing, budgeting,
                        invoicing & billing, revenue recognition, and compliance
                        management while enabling visibility into every project
                        status.
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
                            src="/img/icons_data-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Data Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        Streamline your data to be accessed and utilized by
                        everyone involved in the project to accelerate project
                        delivery, drive quality assurance, and attain project
                        success.
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
                            src="/img/icons_data-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Manage Time and Expense</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      Track time and expense on each point of a business transaction to evaluate the business and its ROI. You can easily submit, approve, and conform all transactions for faster and smoother settlement.
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
                <h2>Microsoft Dynamics 365 Project Operations Benefits</h2>
               <p>Optimise existing resources and generate more revenue using D365 Project Operations Modules.</p>
              </header>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Project Financial Management</h3>
                  <p>Access the financial data of projects in real-time to take instant actionable decisions that result in enhanced business performance and maximised efficiency.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Enhance Project Transparency</h3>
                  <p>Bring visibility, eliminate data silos, and access business intelligence to track each project accurately and precisely.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Maximised Customer Satisfaction</h3>
                  <p>Streamline project management, enhance the customer experience, and keep customers updated for each milestone of a project to offer optimum customer satisfaction.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Accelerate Team Collaboration</h3>
                  <p>Access a unified platform, get a 360-degree holistic view, and connect all departments to accelerate team collaboration for maximised returns.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-12">
            <p className="text-center" style={{paddingTop:"30px",fontSize:"20px"}}><b>Want to avail of a Dynamics 365 Project Operations trial?<br /> <Link href="/contact-us/"><a target="_blank">Connect to our certified Microsoft consultants</a></Link> and start using it now! </b></p>
          </div>
        </div>
      </section>



      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Microsoft Dynamics 365 Project Operations Features</h2>
                <h3>
                  Streamline your Project Operations & Accelerate Delivery with
                  D365 Project Operations
                </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize <br />
                        Resource Utilization
                      </h3>
                      <div className="overlay">
                        <p>
                          With Dynamics 365 Project Service Automation, assign
                          the right people to the right project leveraging
                          skill-matching, scheduling, and resourcing insights.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Accelerate Project <br />
                        Management
                      </h3>
                      <div className="overlay">
                        <p>
                          Make effective use of inbuilt Microsoft Project
                          Management capabilities such as Kanban boards, Gantt
                          charts, etc. to faster the Project delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Streamline Project <br />
                        Financials
                      </h3>
                      <div className="overlay">
                        <p>
                          Streamline your project financials from project
                          accounting, budgeting to ensuring global financial
                          reporting standards compliance.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Time & Expense <br />
                        Management
                      </h3>
                      <div className="overlay">
                        <p>
                          Effortlessly submit time and expenses, automate the
                          entire workflow, and improve your submissions,
                          approvals, and reporting capabilities.
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
                  <img
                    src="/img/Project-operation-side image.png"
                    className="fix-im"
                    alt="Project-operation-side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <img
                            src="/img/Video-Video-Project-Operation.png"
                            alt="Project-Operation"
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
                <h2>Dynamics 365 Project Operations</h2>
                <p>
                  Avail a range of hassle-free implementation, upgrade, and
                  support services to boost your project operations.
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
                    Manage your project seamlessly while leveraging the Dynamics
                    365 Project Service implementation service.
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-project-operations-implementation/">
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
                    Bring agility and build robust project operations with our
                    enhanced and highly recommended support system.
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
                    Get instant support to drive a project-centric approach
                    across your business operations with the D365 Project
                    Operations Support Service.
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
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>Dynamics 365 Project Operations Pricing</h2>
                <p>
                  Find Dynamics 365 Project Operations plans and pricing to
                  choose the applications that are right for your business
                  needs.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>Dynamics 365 Project Operations</h3>
                <div className="price">
                  £98.60<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Get the visibility, collaboration, and agility needed to
                    drive success across your project-centric business.
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
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Connect & Talk with Our Experts</h3>
                <p>
                  To enhance business operations and fully utilize business
                  capabilities, connect and reveal a favorable deal for your
                  company.
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


      <section className="busine_service_bottom custom001">
        <div className="container">
          <div className="row p-433">
            <div className="col-lg-6 align-self-center">
              <div className="side-heading side-heading-system">
                <h2 style={{fontSize:"24px"}}>Why should you choose Dynamics Square as your D365 Project Operations implementation partner? </h2>
              </div>
              <div className="custom002">
                <p>Choosing the right partner is a critical choice for all business owners or decision-makers. A wrong choice can make you bear a huge investment loss, whereas a right choice can double or triple the revenue by simplifying the entire business operations.</p>
                <p>This is where Dynamics Square comes in. With 11+ years of experience in the industry and a huge team of <Link href="/"><a target="_blank">Microsoft certified consultants</a></Link>, we are the ideal partner for your Dynamics 365 Project Operations implementation needs.</p>
                <p>At Dynamics Square, our motto is to offer best-in-class customer satisfaction and take a collaborative approach to ensure your project's success, irrespective of the complexity or the scenario.</p>
      
                <p>We offer end-to-end services, including <Link href="/products/microsoft-dynamics-365/"><a target="_blank">Dynamics 365</a></Link> Project Operations consulting, solution customization, deployment, on-site training, and durable support. For all businesses, we offer Microsoft's proven methodology and our expertise to deliver a tailored solution for your unique business requirements.</p>
                <p>Partnering with us means you can expect a smooth implementation process, increased productivity, and a measurable return on investment. Let's collaborate and take your business to the next level.</p>
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="busine_service_bottom-left common-side-form">
                <Form />
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
              questions about Project Operations?
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
                      data-bs-target="#faq-content-2"
                    >
                      What is Project Operations in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Project Operations is an ERP
                        (Enterprise Resource Planning) solution capable of
                        managing and streamlining projects effortlessly. It
                        comes with many extensive capabilities, including team
                        collaboration, opportunity management, project planning,
                        resource management, customer billing, and expense
                        management.
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
                      data-bs-target="#faq-content-1"
                    >
                      Does Microsoft Project Operation integrate with Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics Project Operations is a powerful
                        application to seamlessly manage operations with full
                        productivity and efficiency. However, organisations can
                        integrate it with{" "}
                        <Link href="/products/dynamics-365-business-central/">
                        <a target="_blank">Business Central</a>
                        </Link>{" "}
                        or other native integrations to enhance the features for
                        smooth operations. There are a few more modules that can
                        be integrated without any restrictions, such as Human
                        Resources, Sales, Marketing, Customer Service, and more.
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
                      How do I install Project Operations in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        When installing project operations from{" "}
                        <Link href="/products/microsoft-dynamics-365/">
                        <a target="_blank">microsoft dynamics 365</a>
                        </Link>
                        , there are several installation options available. You
                        have two options to start the installation:
                      </p>
                      <ul>
                        <li>Using the existing CDS environment</li>
                        <li>Using a new CDS environment</li>
                      </ul>
                      <p>
                        You must have access to Power Platform Administrator and
                        a Project Operations to install project operations in a
                        new environment.
                      </p>
                      <p>
                        In case, you have to create a new CDS environment using
                        the Power Platform admin.
                      </p>
                      <p>
                        In the case of an existing CDS, you must have access to
                        a{" "}
                        <Link href="/products/microsoft-power-platform/">
                        <a target="_blank">Power Platform</a>
                        </Link>{" "}
                        Administrator with a licence for Project Operations.
                        Using{" "}
                        <Link href="/products/microsoft-power-bi/">
                        <a target="_blank">Power BI</a>
                        </Link>
                        , you have to locate the environment using the Power
                        Platform admin center.
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
                      What are the core modules in Dynamics 365 Project
                      Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        There are a few core modules which are: Contract
                        Management, Sales, Project Management, Resource
                        Management, Team Collaboration, Finance Management, and
                        Time and Expense Management. These are the modules that
                        let users seamlessly manage an entire project in an
                        organisation for easy growth.
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
                      What is the price of D365 Project Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft doesn't sell its business management solutions
                        directly to customers. You have to search for and
                        collaborate with a reliable support partner like
                        Dynamics Square for any kind of update,{" "}
                        <Link href="/our-services/dynamics-365-upgrade-services/">
                        <a target="_blank">upgrade</a>
                        </Link>
                        , or{" "}
                        <Link href="/our-services/dynamics-365-implementation-services">
                        <a target="_blank">implementation</a>
                        </Link>{" "}
                        service for your business. The pricing for D365 Project
                        Operations is entirely dependent on your company's needs
                        and the type of deployment. The standard cloud
                        deployment pricing is £98.60 per user/month and is also
                        available on Microsoft's website. On-premises deployment
                        always comes with customised pricing, and it depends on
                        business to business.
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
                      Can D365 Project Operations help businesses boost sales
                      and enhance revenue?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        D365 Project Operations helps users to increase
                        transparency across different processes and departments
                        and to provide accurate data insights using advanced
                        technologies like{" "}
                        <Link href="/products/microsoft-dynamics-365-ai/">
                        <a target="_blank">Artificial Intelligence</a>
                        </Link>
                        ,{" "}
                        <Link href="/products/azure-machine-learning/">
                        <a target="_blank">Machine Learning</a>
                        </Link>
                        , and Business Intelligence. This helps the users to
                        take actionable decisions in real-time, resulting in
                        improved efficiency and productivity to get more deals.
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
                      How to start using Dynamics 365 Project Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The first step you have to take is to search for the
                        right support partner for proper implementation of your
                        D365 Project Operations solution as per your business
                        needs. Following that, you must be patient until the
                        implementation is completed, at which point your partner
                        will train you on the solution's functions and features.
                        Once everything is set up, you or your team members can
                        start using the solution at full pace.
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
                      What are the core functions of Dynamic 365 Project
                      Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Project Operations covers a lot of areas of a business,
                        resulting in overall growth of almost all departments.
                        Some of the areas are listed below:
                      </p>
                      <ul>
                        <li>Project Planning</li>
                        <li>Project Sales</li>
                        <li>Invoicing</li>
                        <li>Revenue management</li>
                        <li>Ledger management</li>
                        <li>Project allocation</li>
                        <li>Management of project finances</li>
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
                      data-bs-target="#faq-content-9"
                    >
                      How does Project Operation work?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Project Operations works by offering the capabilities to
                        manage and streamline various projects efficiently with
                        minimal errors. It analyses the existing resources,
                        optimises them for optimum productivity, and delivers
                        results to gain maximised revenue using minimum
                        resources.
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
                    <a
                      target="_blank"
                      href="/pdf/Remote-Service-Modernise-Your-Operations-with-Mixed-Reality.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Remote Service
                      Modernise Your Operations with Mixed Reality
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Transform-your-field-service-with-IoT-AI-and-mixed-reality.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Transform Your
                      Field Service With IoT, AI, and Mixed Reality
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Five-ways-to-know-if-connected-field-service-is-right-for-your-business.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Connected Field
                      Service is Right for Your Business?
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/5-innovative-ways-industry-leaders-modernize-their-field-service.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Innovative Ways
                      Industry Leaders Modernize Their Field Service
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/5-case-studies-from-manufacturing.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>5 Case Studies
                      From Manufacturing
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide-1-1.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Licensing Guide
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

export default ProjectOperations;
