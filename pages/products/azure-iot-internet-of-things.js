import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";

const AzureIoT = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Azure IoT | Connect Your Business With IoT</title>
        <meta
          name="description"
          content="Microsoft Azure IoT (internet of things) and Dynamics 365 help enterprises to bring efficiency, maximize revenue and security in their business. Get IoT solutions today."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/azure-iot-internet-of-things/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="2lqX8SFsO-A"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Azure IoT
                <br />
                (Internet Of Things)
              </h1>
              <p>
                Extend Your Business Capabilities by Establishing Secure
                Connection Between Your Devices and Azure IoT Apps.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                      target="_blank"
                    >
                      <span>Schedule a Demo</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/azure-Banner.png"
                alt="azure-Banner"
                width={1024}
                height={609}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Deliver A Flexible, Scalable Solution <br />
              That Adapts To Your Needs & Processes.
            </h2>
            <p>
              Streamline your supply chain, avoid production delays and
              equipment downtime, ensure quality delivery, and remotely monitor
              your devices & service equipment all through by implementing Azure
              IoT intelligence in your business.
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
                            src="/img/icons-azure_cloud-embed.svg"
                            alt="icons-azure_cloud-embed"
                          />
                        </div>
                        <span>Azure IoT hub</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Connect and manage your IoT (Internet of Things) devices
                        and drive highly secured data communications between
                        your connected devices and IoT applications. With{" "}
                        <Link href="/products/azure-iot-hub/">
                          <a target="_blank">&nbsp;Azure IoT hub&nbsp;</a>
                        </Link>
                        solutions, connect your devices virtually in the backend
                        and ensure a security-enabled communication channel to
                        send and receive data leveraging IoT devices.
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
                            src="/img/icons-azure_agile.svg"
                            alt="icons-azure_agile"
                          />
                        </div>
                        <span>Azure IoT Central</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Drive highly integrated and connected experience with
                        <Link href="/products/azure-iot-central/">
                          <a  target="_blank">&nbsp;Azure IoT Central&nbsp;</a>
                        </Link>
                        . Develop and deploy secure, scalable, and growth
                        encouraging IoT solutions. Integrate your IoT solutions
                        with your existing system or business app to drive
                        anticipated results. Predict your investments in IoT
                        solutions, ensure quick connectivity between your IoT
                        devices and drive transparency between your applications
                        and IoT data.
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_project-management.svg"
                            alt="icons-azure_project-management"
                          />
                        </div>
                        <span>Azure Sphere</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <Link href="/products/azure-sphere/">
                          <a  target="_blank">&nbsp;Azure Sphere&nbsp;</a>
                        </Link>
                        is designed to protect your data, devices, and overall
                        involved infrastructure. It helps to enable multiple
                        protection layers to secure your data and devices
                        against any security threats or attempts and ensures a
                        secure and trustworthy platform to drive new IoT
                        experiences. Azure Sphere also helps to monitor
                        potential threats and support ongoing servicing.
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
                            src="/img/icons-azure_innovation.svg"
                            alt="icons-azure_innovation"
                          />
                        </div>
                        <span>Azure Digital Twins</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        With
                        <Link href="/products/azure-digital-twins/">
                          <a  target="_blank">&nbsp;Azure Digital Twins&nbsp;</a>
                        </Link>
                        - an IoT platform, develop a digital demonstration of
                        real-world things, data, people, or business processes
                        to get valuable integrated insights helping your
                        business to optimize operations & costs and drive better
                        product strategy along with improved customer experience
                        with continuity and reliability.
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
                            src="/img/icons-azure_security.svg"
                            alt="icons-azure_security"
                          />
                        </div>
                        <span>Azure IoT Edge</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Implement
                        <Link href="/products/azure-iot-edge">
                          <a target="_blank">&nbsp;Azure IoT Edge&nbsp;</a>
                        </Link>
                        on-premises to centralize data and seamlessly drive
                        operational data in the Microsoft Azure cloud. Ensure
                        secure and remote deployment of cloud-native processes
                        or workloads including AI, Azure services, etc. to
                        directly connect and process on your IoT devices.
                        Effectively drive IoT connected approach with cloud
                        intelligence implemented locally on IoT devices.
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
                            src="/img/icons-azure_machine-learning.svg"
                            alt="icons-azure_machine-learning"
                          />
                        </div>
                        <span>Azure Machine Learning</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Strengthen your development capability and equip your
                        developers to develop, deploy, and manage high-end data
                        models. With
                        <Link
                          href="/products/azure-machine-learning/"
                          traget="_blank"
                        >
                          &nbsp;Azure Machine Learning&nbsp;
                        </Link>
                        , leverage integrated tools and ensure premium support
                        to available open-source frameworks and libraries.
                        Deploy data models with just a single click and manage
                        efficiently all through Machine Learning Operations.
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
            <div className="col-lg-5  align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Azure IoT (Internet of things) Features</h2>
                <h3>
                  How IoT Implementation help to improve your operational flow?
                </h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize <br />
                        Supply Chain
                      </h3>
                      <div className="overlay">
                        <p>
                          Optimize your supply chain by monitoring and
                          regulating in real-time. Stay updated with inventory
                          levels, warehousing flow, product delivery, and more
                          to ensure continuity.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Improve <br />
                        Production Flow
                      </h3>
                      <div className="overlay">
                        <p>
                          Get notified whenever there is a moisture or
                          temperature imbalance, so that you can intervene in
                          production to maintain product quality standards while
                          minimizing waste.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Reduce <br />
                        Equipment Downtime
                      </h3>
                      <div className="overlay">
                        <p>
                          With Dynamics 365 and Azure IoT, get notified whenever
                          outage threshold gets exceeded so that to drive
                          production rescheduling or equipment can be sent for
                          maintenance.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Reduce <br />
                        Production Delays
                      </h3>
                      <div className="overlay">
                        <p>
                          Compare actual production cycle time with the planned
                          one. With Microsoft IoT Suite, get notified when your
                          production is on schedule and when you need to
                          interrupt production.
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
                    src="/img/InternetTHingsSide.png"
                    className="fix-im"
                    alt="bisin_leftimg"
                    width={553}
                    height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/Video-Azure-IoT.png"
                            alt="iot"
                            width={390}
                            height={259}
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
                <h2>Microsoft Azure IoT Service</h2>
                <p>
                  We offer a full range of IoT services to support you on your
                  Dynamics journey including implementation, upgrade and
                  support.
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
                    Start uplifting your business with our Dynamics 365 and
                    Microsoft IoT implementation.
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
                    Continuously grow and scale your business with our optimum
                    IoT support services.
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
                    Integrate IoT and Dynamics 365 to upgrade and level-up your
                    system capabilities.
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
                <h3>Maximize your business potentials</h3>
                <p>Drive new business challenges by implementing Azure IoT</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span>
                  </Link>
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
                <h3>Important Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <>
                    <li>
                      <Link href="https://www.youtube.com/watch?v=xn32a320sv4">
                        <a  target="_blank">
                          {" "}
                          <i className="bi bi-box-arrow-up-right"></i> Microsoft
                          Azure IoT manufacturing solutions
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel=""
                        href="https://www.youtube.com/watch?v=-Fwc3dwbM3w"
                        target="_blank"
                      >
                        <a  target="_blank">
                          {" "}
                          <i className="bi bi-box-arrow-up-right"></i> IoT for
                          Earth: helping farmers grow a brighter future for us
                          all
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel=""
                        href="https://www.youtube.com/watch?v=n0LqqadplIA"
                        target="_blank"
                      >
                        <a  target="_blank">
                          <i className="bi bi-box-arrow-up-right"></i> Why to
                          Upgrade Dynamics NAV to Business Central
                        </a>
                      </Link>
                    </li>
                  </>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AzureIoT;
