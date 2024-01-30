import Link from "next/link"; 
import Head from 'next/head';
import Image from 'next/image';

const BusinessCentralFeatureComparison = () => {
    return (
      <>
        <Head>
        <title>Dynamics 365 Business Central Feature Comparison | Dynamics Square</title>
        <meta
          name="description"
          content="Read this article to find out the key differences between Business Central and previous versions of NAV."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-business-central-feature-comparison/ "
        />
        </Head>
        <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-4 align-self-center">
              <h1>
              Dynamics 365 Business Central Feature Comparison
              </h1>
              <p>
              Dynamics 365 Business Central is the latest version of Microsoft Dynamics NAV, and it includes several new features and improvements over previous NAV versions. Here's a quick comparison of some of the most notable changes. 
              </p>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <div className="ext-contsd">
                <ul>
                  <li>One of the biggest changes is the new user interface, which is based on the Microsoft Fluent Design System. This makes the software more intuitive and easier to use, especially on mobile devices.</li>
                  <li>Another significant change is the introduction of the Azure-based cloud platform. This allows businesses to take advantage of the scalability and flexibility of the cloud, without sacrificing the robust functionality of the on-premises software.</li>
                  <li>Perhaps the most important change, though, is the addition of artificial intelligence (AI) and machine learning capabilities. This allows Business Central to automatically suggest improvements and make predictions based on your data.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Major Differences between D365 Business Central and prior NAV versions 
            </h2>
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
                        <span>Previous versions of NAV are no longer supported </span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Microsoft has already discontinued primary support for NAV 2016 and previous NAV versions. This indicates that Microsoft will not issue any further updates for these versions. NAV 2017 will be decommissioned by the end of the year. 
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
                        <span>Productivity Enhancements</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      There are various productivity improvements in Business Central (BC) in terms of how users operate in the system. Combine shipments, Customer Payment Registration, Vendor Payments directly from Ledger, and simple Azure Machine Learning connection are a few examples. 
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
                        <span>Microsoft Excel and Outlook integration</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Unlike NAV, Dynamics 365 Business Central offers seamless integration with Microsoft Excel and Outlook, making it easy for businesses to manage their data and stay connected with customers and prospects. It enables the majority of purchase and sales activities to be managed from within Business Central. This includes contact and quote management, order management, customer details, item details and more. 
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
                        <span>Integration with Microsoft Teams</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      The integration of Dynamics 365 Business Central with Microsoft Teams brings the power of these two solutions together. Teams brings people together to collaborate on projects and share ideas without opening Business Central separately.  
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
                        <span>Power BI reports available in D365 Business Central </span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      If you are using or intend to utilise Power BI, the tool displays reports from Business Central. To access the reports, end users do not need to open the Power BI interface. 
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
                        <span>The extension features facilitate future improvements</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      The new extension technology in BC means that development licenses are no longer required, and all developments must adhere to a "plug & play" extension model. This makes it much easier to upgrade to BC, as all future updates will be automatic (if you are in SaaS) or very low cost (if you remain On-Premises). 
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
                        data-bs-target="#fin9"
                        aria-expanded="false"
                        aria-controls="fin9"
                      >
                        <span>Named licenses instead of concurrent</span>
                      </button>
                    </h3>
                    <div
                      id="fin9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      The License model is moving from concurrent in NAV to named in BC. However, as a promotion, Microsoft will give you 3 times the number of your current licences if you stay on-premises, or a 40% discount on licences if you move to SaaS. Furthermore, when you transfer your BC to SaaS, Microsoft handles the licencing and infrastructure. This is an excellent promotion for individuals wishing to go to SaaS because it provides a large savings on licence costs. 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            General Functionalities
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/General-Funcionalities.png" alt="General-Funcionalities" width={1380} height={904} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Financial Management
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/Finance-Management-chart.png" alt="Finance-Management-chart" width={1380} height={658} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Manufacturing
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/Manufacturing-chart.png" alt="Manufacturing-chart"  width={1380} height={257} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Supply Chain Management
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/Supply-Chain-Management-chart.png" alt="Supply-Chain-Management-chart"  width={1380} height={616}/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Business Intelligence and Reporting
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/Business-Intelligence-and-Reporting-chart.png" alt="Business-Intelligence-and-Reporting-chart"  width={1380} height={346} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Service Management
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/Service-Management-chart.png" alt="Service-Management-chart"  width={1380} height={242} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Project Management
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/Project-management-chart.png" alt="Project-management-chart"  width={1380} height={215} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Sales & Marketing
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/Sales-marketing-comparsion.png" alt="Sales-marketing-comparsion"  width={1380} height={285}/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
            <h2>
            Cloud, Workflow and Documents
            </h2>
          </header>
            </div>
            <div className="col-lg-12">
              <div className="newfigure">
                <Image src="/img/Cloud-workflow-document.png" alt="Cloud-workflow-document"  width={1380} height={306}/>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <p className="text-center">We hope you found this comparison useful. If you still have questions about Dynamics 365 Business Central or any other Dynamics 365 application, please feel free to reach out to us at <Link href="tel:+442071932502"><b>+44 207 193 2502</b></Link> or email <Link href="mailto:info@dynamicssquare.co.uk"><b>info@dynamicssquare.co.uk</b></Link></p>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };

  export default BusinessCentralFeatureComparison;
  
