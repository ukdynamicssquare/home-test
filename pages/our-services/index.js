import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

const Inedex = () => {
    return (
        <>
        <Head>
        <title>Microsoft Dynamics Services | Trusted by 300+ Clients</title>
        <meta
          name="description"
          content="Power your business by our unique Microsoft Dynamics Services that includes Implementation services, cloud migration, consulting services and upgrade."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/our-services/"
        />
        </Head>
        <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft <br />
                Dynamics Services
              </h1>
              <p>
                Take your business to the next level by Dynamics Square expert
                solutions.
              </p>
              <div className="text-center text-lg-start">
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Schedule a Demo</span></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <img
                src="/img/dynamics-365-hero-image.svg"
                alt="dynamics-365-hero-image.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>
                  Microsoft <br />
                  Business Solutions
                </h2>
              </div>
              <div className="custom-p-001">
                <p class="ne4">
                  We deliver comprehensive <b>Microsoft business solutions</b>{" "}
                  (&nbsp;
                  <Link
                    title="Enterprise resource planning"
                    href="/products/microsoft-dynamics-erp/"
                  >
                    enterprise resource planning
                  </Link>
                  &nbsp;(ERP) and&nbsp;
                  <Link
                    title="Customer relationship management"
                    href="/products/microsoft-dynamics-crm/"
                  >
                    customer relationship management
                  </Link>
                  &nbsp;(CRM)&nbsp;software applications ) that help your
                  business transform into an ultra-efficient, customer-centric,
                  thriving organization.
                </p>
                <p class="ne4">
                  We analyze your requirements, understand your unique work
                  style, and create a customized blueprint outlining solutions
                  ideal for your business.
                </p>
                <p class="ne4">
                  If your internal processes are consumed by chaos, we'll
                  organize them. If you plan on establishing new clear-cut
                  guidelines and standards for work and conduct, we'll devise
                  them. If you want your teams to be proficient in multiple
                  important technologies, we'll educate and train them. What we
                  offer is a complete and comprehensive solution that helps your
                  business thrive and grow.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="busine_service_bottom-left custom012">
                <img
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Dynamics Services
              <br />
              We Offer
            </h2>
            <p>
              Whether you need implementation, extension, upgrades, maintenance,
              or reassessment for your technology investments, our services help
              you assess your best options for - then bring that change to life.
            </p>
          </header>
          <div className="row p-2">
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Implementation Service</h3>
                <p>
                  Adapts standard approach, implements advanced methodologies,
                  and derive high-end process defining your business values and
                  empowering your business process flow, and enabling growth
                  potentials.
                </p>
                <br />
                <div className="text-lg-center">
                  <Link
                    href="/our-services/dynamics-365-implementation-services"><a
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Upgrade Service</h3>
                <p>
                  Upgrade your system capabilities, process flow, adapt
                  operational change, and bring quick user acceptance through
                  our highly integrated and requirement-specific Dynamics 365
                  upgrade services.
                </p>
                <br />
                <div className="text-lg-center">
                  <Link
                    href="/our-services/dynamics-365-upgrade-services/"><a
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span></a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Support Service</h3>
                <p>
                  Drive continuity in your processes and ensure a sustainable
                  approach with our seamless Dynamics 365 Support Services.
                  Continuous monitoring of your system and processes can help to
                  attain lifelong success.
                </p>
                <br />
                <div className="text-lg-center">
                  <Link
                    href="/our-services/dynamics-365-support-services"><a
                    className="btn-get-started btn-sm scrollto">
            
                    <span>View More</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Dynamics 365 Training</h3>
                <p>
                Get personalised training from experienced Microsoft ERP consultants and industry experts to properly utilise Dynamics 365 solutions, boost productivity, and empower your team to achieve goals. 
                </p>
                <br />
                <div className="text-lg-center">
                  <Link
                    href="/our-services/dynamics-365-training/"><a
                    className="btn-get-started btn-sm scrollto">
            
                    <span>View More</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Microsoft Dynamics 365 Consultants</h3>
                <p>
                Onboard Microsoft-certified Dynamics 365 consultants to resolve issues whenever you encounter them, simplify business operations, optimise processes, and push your business towards digital transformation. 
                </p>
                <br />
                <div className="text-lg-center">
                  <Link
                    href="/our-services/dynamics-365-consultant/"><a
                    className="btn-get-started btn-sm scrollto">
            
                    <span>View More</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default Inedex;
