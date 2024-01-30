import Link from "next/link"; 
import Head from 'next/head';
import Image from 'next/image';

const AzureIoTCentral = () => {
  return (
    <>
      <Head>
      <title>Azure IoT Central | Enterprise Grade IoT solutions</title>
        <meta
          name="description"
          content="With Azure IoT Central (SaaS) you can build IoT applications using industry-specific standardized templates for your enterprise. Know more about IoT Central."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/azure-iot-central/"
        />
        
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Azure IoT 
                Central
              </h1>
              <p>
                With Azure IoT Central (SaaS-based), develop IoT applications
                using industry-specific standardized templates.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Schedule a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/azure-iot-central-hero-image.svg"
                alt="azure-iot-central-hero-image"
                width={1024} height={586}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>What is Azure IoT Central?</h2>
            <p>
              Microsoft Azure IoT Central is a SaaS-based IoT solution to
              register, connect, and securely manage your devices over the Azure
              cloud. This IoT app platform comes with predefined standard
              templates to build industry-specific IoT apps to connect devices
              to send and receive messages or notifications in real-time. It
              acts as an application delivery platform for IoT to centralize
              devices and manage them at scale.
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
                            src="/img/icons-IoTcentral_Faster-Connectivity-.svg"
                            alt="icons-IoTcentral_Faster-Connectivity"
                          />
                        </div>
                        <span>Faster Connectivity</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Ensure quick and seamless connectivity between your IoT
                        devices and custom-configured IoT app built using
                        standardized easy-to-use templates.
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
                            src="/img/icons-IoTcentral_Real-Time-Insights.svg"
                            alt="icons-IoTcentral_Real-Time-Insights"
                          />
                        </div>
                        <span>Real-Time Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Bridge gap between your IoT apps and business data to
                        drive smoother data flow and get notified with any
                        event, activity, or end-to-end device performance in
                        real-time to ensure continuity and drive productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
              <hr className="mob-disp" />
                <div className="accordion" id="accneww">
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
                            src="/img/icons-IoTcentral_Highly-Secure-Scalable.svg"
                            alt="icons-IoTcentral_Highly-Secure-Scalable"
                          />
                        </div>
                        <span>Highly Secure & Scalable</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Azure IoT Central allows building highly secure and
                        scalable enterprise-grade IoT solutions to implement
                        simplified device interactions while reducing
                        development time, cost, and potential complexity.
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
                            src="/img/icons-IoTcentral_industry-focused.svg"
                            alt="icons-IoTcentral_industry-focused"
                          />
                        </div>
                        <span>Industry Focused </span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Develop easy, fast, and powerful industry-specific apps
                        to drive smarter and connected experience across your
                        processes whether to ensure connected logistics, enable
                        smarter in-store analytics, or experience smarter
                        inventory management.
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
              <h2>Azure IoT Central Features</h2>
              <h3>
                Rapidly Deploy Highly Secure, Reliable, & Scalable
                Enterprise-Grade IoT Applications
              </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Quick & Seamless
                        <br />
                        Connectivity
                      </h3>
                      <div className="overlay">
                        <p>
                          Azure IoT Central is designed to establish a quick and
                          seamless connection between your IoT devices and Azure
                          cloud to enable smarter flow of messages,
                          notifications, and other data transmissions.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Centralized Device <br />
                        Management
                      </h3>
                      <div className="overlay">
                        <p>
                          This Azure IoT cloud solution is designed to
                          centralize and manage your devices at scale.
                          Centralize management helps to reconfigure and update
                          the IoT devices with real-time efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Secure & Scalable
                        <br />
                        Device Interaction
                      </h3>
                      <div className="overlay">
                        <p>
                          Establish highly secure, reliable, and scalable device
                          interaction to manage data flow, stay updated with a
                          360-degree view of your device performance, failure,
                          or reconfiguration requirement.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Simplified IoT with <br />
                        Plug & Play App
                      </h3>
                      <div className="overlay">
                        <p>
                          Implement scalable solutions quickly with reduced
                          coding efforts leveraging Plug & Play app that allows
                          simplified and seamless device-to-device cloud
                          integration to launch cloud IoT solutions faster.
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
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Talk to Our Industry Experts</h3>
                <p>
                  Connect to our experts to reveal how Azure IoT Central can
                  help your enterprise build a smarter and connected experience.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link  href="#exampleModal">
                   <a data-bs-toggle="modal"
                   
                    className="btn-get-started scrollto"
                  >
                    <span>Book a Callback</span></a>
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
              questions about Azure IoT Central?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-md-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is Azure IoT Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Azure IoT Central is an IoT application development
                      platform whereby enterprise-grade IoT applications can be
                      built with reduced embedded coding, costing, and
                      management efforts. With one of these IoT Enterprise
                      solutions, enterprises can instantly establish device
                      connections, register millions of devices simultaneously,
                      and monitor device performance or real-time conditions
                      along with data throughout their process flow.
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
                      What is SLA for Azure IoT Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      The term SLA refers to Service Level Agreement for
                      Microsoft online services defined as a part of Microsoft
                      volume licensing agreement. SLA for Azure IoT Central was
                      last updated on September 2018. Through this SLA,
                      Microsoft commits that Azure IoT Central will be available
                      at least 99 percent of the overall time.
                      <br />
                      <br />
                      SLA for Azure Central comprises a multitude of terms. To
                      know more, experts at Dynamics are always available to
                      help enterprises seeking to modernize their enterprise
                      environment with IoT-connected experience.
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
                      How can I access Azure IoT Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Azure IoT Central is designed with cross-platform and
                      cross-device compatibility with almost all desktops,
                      tablets, mobile devices, or browsers. To know your system
                      compatibility, connect with our experts, we will let you
                      know your system compatibility for Azure IoT Central and
                      how deploying IoT Central with it can help your enterprise
                      to drive a smarter connected experience.
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
                      What is data retention policy for IoT Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      In Azure IoT Central, data can be retained for 30-days of
                      period. Further, businesses can export their data at
                      regular intervals by making effective use of the export
                      feature. Leveraging 'Export Feature', you can export your
                      IoT enriched or filtered data from your IoT Central
                      application. Such exported data can help to support future
                      rhythms in terms of insights, analytics, etc.
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
                      Is Azure IoT Central free?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      For new users, Azure IoT Central is available with 7-days
                      of free trial embedded with a standard message size is
                      4KB. Once your trial period gets over, you can choose from
                      the standard available plans depending on your specific
                      requirement. There are three types of standard plans
                      available for Azure IoT Central, you can choose out of
                      them: Standard Tier 0, Standard Tier 1, and Standard Tier
                      2.
                      <br />
                      <br />
                      To know which one could be a fruitful deal for your
                      business, talk to us, we will let you know by examining or
                      evaluating your exact IoT business requirement.
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

export default AzureIoTCentral;
