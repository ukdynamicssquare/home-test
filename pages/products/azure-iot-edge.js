import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const AzureIoTEdge = () => {
  return (
    <>
      <Head>
        <title>Azure IoT Edge | Cloud Intelligent Solutions</title>
        <meta
          name="description"
          content="With Azure IoT Edge, optimize your device performance, measure your equipment to prevent downtime, enable your devices to respond promptly."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/azure-iot-edge/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Azure IoT Edge</h1>
              <p>
                Deploy cloud intelligence on IoT edge devices to monitor devices
                remotely at scale while reducing IoT solution costs and enabling
                offline operational efficiency to ensure seamless Cloud
                Intelligence.
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
                src="/img/azure-iot-edge-banner.webp"
                alt="azure-iot-edge-banner"
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
            <h2>What is Azure IoT Edge?</h2>
            <p>
              Azure IoT Edge is a cloud intelligent solution deployed
              on-premises that enables you to remotely deploy the cloud-based
              workloads on your IoT devices to optimize IoT connected
              environment, reduce system downtime, get performance data in
              real-time to prevent system failure, or track the devices or
              equipment performance.
            </p>
            <br /> <br />
            <h2>Azure IoT Edge Benefits</h2>
            <p>
              Eliminate data silos and streamline operational data at scale
              using Azure cloud. Securely deploy and manage your cloud-equipped
              workloads with remote efficiency and run the execution directly on
              IoT devices. With Azure IoT Edge, optimize your device
              performance, measure your equipment to prevent downtime, enable
              your devices to respond promptly in case of local changes made,
              and enable them to be operated with extended capability.
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
                            src="/img/icons_Smoother-Data-Intelligence.svg"
                            alt="icons_Smoother-Data-Intelligence"
                          />
                        </div>
                        <span>Smoother Data Intelligence</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Deploy AI models built securely on the cloud and run
                        them on-premises to optimize data, device performance,
                        and cloud spend to ensure a smoother data-intelligence
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
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Real-time-Data-analysis.svg"
                            alt="icons_Real-time-Data-analysis"
                          />
                        </div>
                        <span>Real-time Data analysis</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Enable your devices to react or respond in real-time.
                        With Azure IoT Edge, get notifications in real-time and
                        process the data leveraging on-premises systems.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accneww">
                  <hr className="mob-disp" />
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
                            src="/img/icons_Monitor-Device-Health-Performance.svg"
                            alt="icons_Monitor-Device-Health-Performance"
                          />
                        </div>
                        <span>Monitor Device Health & Performance</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Remotely track and monitor your IoT Edge devices at
                        scale by integrating with the 'Azure Monitor tool'. With
                        the help of Built-in-metrics and powerful
                        visualizations, monitor your device health and your IoT
                        Edge applications' performance.
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
                            src="/img/icons_Seamless-Data-Operation.svg"
                            alt="icons_Seamless-Data-Operation"
                          />
                        </div>
                        <span>Seamless Data Operation</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Securely operate and manage your Edge devices even when
                        they are in offline mode. Azure IoT Edge facilitates
                        your devices with automation wherein data gets
                        synchronized in real-time that ensures seamless data
                        operation.
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
                <h2>Azure IoT Edge Features</h2>
                <h3>
                  How Deploying Azure IoT Edge Can Help Manage Your Cloud
                  Workload?
                </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Certified IoT <br />
                        Edge Hardware
                      </h3>
                      <div className="overlay">
                        <p>
                          Azure IoT Edge comes with certified IoT Edge hardware
                          that allows seamless compatibility with Linux and
                          windows-based devices that ensures supporting
                          container engines.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Improved <br />
                        Runtime
                      </h3>
                      <div className="overlay">
                        <p>
                          Designed with free and open-source code and comes
                          under the MIT license that enables code flexibility
                          and provides more control to customize your code
                          according to a specific workflow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Efficient
                        <br />
                        Modules
                      </h3>
                      <div className="overlay">
                        <p>
                          Create and drive your business logic at scale with
                          Docker-compatible containers provided by Azure
                          services or authorized Microsoft partners.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Seamless Cloud
                        <br />
                        Interface
                      </h3>
                      <div className="overlay">
                        <p>
                          Azure IoT Edge provides a seamless cloud interface to
                          remotely and securely manage your workloads from the
                          cloud and deploy the same while eliminating the need
                          of touching the devices physically.
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
                <h3>Talk to Our Azure IoT Edge Experts</h3>
                <p>
                  Connect to know how you can implement cloud intelligence in
                  your business through Azure IoT Edge and drive excellence.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Book a Callback</span>
                    </a>
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

export default AzureIoTEdge;
