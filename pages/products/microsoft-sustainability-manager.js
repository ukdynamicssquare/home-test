import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; 

const Microsoftsustainabilitymanager = () => {
  return (
    <>
      <Head>
      <title>Microsoft Sustainability Manager | Dynamics Square </title>
        <meta
          name="description"
          content="Looking to make your business more sustainable? Microsoft Sustainability Manager can help you access environmental data and make changes to reduce your company's impact on the planet. Get started today and make a difference. "
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-sustainability-manager/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <h1>Microsoft Sustainability Manager</h1>
              <p>
                A powerful solution to help you sustain climate changes with
                centralized and comprehensive data by automating the manual
                processes to report, record, and reduce the environmental
                impacts.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Talk to Expert</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Microsoft-Sustainability-Manager.png"
                alt="Microsoft Dynamics CRM"
                width={665} height={447}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-9 col-md-8">
                  <header className="section-header">
                    <h2>What is Microsoft Cloud for Sustainability? </h2>
                    <p>
                      <Link
                        href="/blog//microsoft-cloud-for-sustainability/"
                      ><a target="_blank">Microsoft Cloud for Sustainability
                    </a></Link> is the latest launched application to help organizations
                      simplify their sustainability process by offering many
                      data insights to accelerate the environment sustainability
                      journey. Sustainability Manager is a SaaS (Software as a
                      Service) application to share real-time data sources,
                      boost reporting and integration, accurate carbon emission
                      data, and measure progress to help decision-makers make
                      efficient and robust decisions.
                    </p>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-bg">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5 align-self-center">
              <div className="side-heding-new">
                <h3>Microsoft Sustainability Manager Features</h3>
                <p>
                  With Microsoft Sustainability Manager, organizations can track
                  their sustainability performance, carbon footprints, emission
                  activities, and more.
                </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
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
                        <div className="wr-ins">
                          <img
                            src="/img/Record-ico.svg"
                            alt="Record Emission"
                          />
                        </div>
                        <span>Record</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          It accurately collects all emission footprints data of
                          an organization's processes or operations using
                          automation and direct data connections.
                          <br />
                          <br />
                          <ul>
                            <li>It disintegrates the data structures </li>
                            <li>Collect data using automation </li>
                            <li>
                              Calculate emissions and footprint data precisely.
                            </li>
                          </ul>
                        </p>
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
                        <div className="wr-ins">
                          <img
                            src="/img/reduce-ico.svg"
                            alt="Reduce Emission"
                          />
                        </div>
                        <span>Reduce</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          It helps the organizations take action to reduce
                          emissions and set goals for it. Also, users can track
                          the progress and updates in the sustainability data
                          model.
                          <br />
                          <br />
                          <ul>
                            <li>It helps reduce emission targets</li>
                            <li>Set and track sustainability goals</li>
                            <li>Assimilate sustainability data insights</li>
                          </ul>
                        </p>
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
                        <div className="wr-ins">
                          <img
                            src="/img/report-ico.svg"
                            alt="Report emission"
                          />
                        </div>
                        <span>Report </span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          It manages, visualizes, analyzes, and reports the
                          consumption of resources, their impact on the
                          environment, and real-time sustainability progress.
                          <br />
                          <br />
                          <ul>
                            <li>Simplify the reporting </li>
                            <li>
                              Analyze the impact of resources on the environment
                            </li>
                            <li>Track sustainability progress in real-time</li>
                          </ul>
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

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="call-to-action-content">
                <h3>
                  Implement Microsoft Sustainability Manager for your business
                </h3>
                <p>
                  Are you looking to set up Microsoft Sustainability Manager to
                  track and reduce carbon emissions?
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Request a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-333">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <header className="section-header">
                <h2>Microsoft Sustainability Manager Capabilities</h2>
                <p>
                  The journey to reduce emissions isn't easy, but Sustainability
                  Manager can help you improve progress and take collective
                  measures significantly.
                </p>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons size-new">
                  <img
                    src="/img/Sustainable-Infrastructure.svg"
                    alt="Sustainable-Infrastructure"
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>Sustainable Infrastructure </h3>
                  <p>
                    It helps organizations find opportunities to replace the
                    progress, system, activities, and operations with renewable
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons size-new">
                  <img
                    src="/img/Centralize-Data-Insights.svg"
                    alt="Centralize-Data-Insights"
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>Centralize Data Insights</h3>
                  <p>
                    It centralizes entire emissions data and makes it available
                    to the users for sustainable reporting, helping the business
                    to transform in a better way.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons size-new">
                  <img
                    src="/img/Reducing-Impacts.svg"
                    alt="Reducing-Impacts"
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>Reducing Impacts</h3>
                  <p>
                    It tracks and reports the environmental impacts of the
                    organizations and helps them reduce their emissions and
                    footprints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Microsoft Sustainability Manager Pricing</h2>
                <p>
                  Explore the Microsoft Sustainability Manager pricing for
                  business and organizations.
                </p>
              </header>
            </div>
          </div>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>
                  Sustainability Manager
                  <br /> Standard Pricing
                </h3>
                <div className="price">
                  <sup>£</sup>3300<span>Per Tenant/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> Dedicated Customer
                    Support
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Microsoft Sustainability
                    Manager Solution
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Microsoft Cloud for
                    Sustainability Data Model
                  </li>
                </ul>
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
                  Helping Businesses to Implement Sustainability Manager for the
                  People and Planet{" "}
                </h3>
                <p>
                  Minimize the environmental impacts by reducing the carbon
                  footprints from devices, apps, and the cloud by implementing
                  Microsoft Cloud for Sustainability.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link  href="#exampleModal"><a
                    data-bs-toggle="modal"              
                    className="btn-get-started scrollto"
                  >
                    <span>Request a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Microsoftsustainabilitymanager;
