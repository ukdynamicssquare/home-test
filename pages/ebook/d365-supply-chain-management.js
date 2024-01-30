import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import emailjs from "@emailjs/browser";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
const StartGuideThree = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [closeModal, setCloseModal] = useState(false);
  function handleCloseModal() {
    document
      .getElementById("exampleModal1")
      .classList.remove("show", "d-block");
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.classList.remove("modal-backdrop"));
  }
  const sendEmail = (e) => {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4voumj7",
        "template_68k24ku",
        form.current,
        "mJ38M6WTmU7KRrtuZ"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(function () {
      setCloseModal(true);
      e.target.reset();
      router.push("/guides/download/Pdf-d365-supply-chain-management/");
    }, 500);
  };

  return (
    <>
      <Head>
        <title>The Extensive Guide to Dynamics 365 Supply Chain Management</title>
        <meta
          name="description"
          content="Download our free eBook - Dynamics 365 Supply Chain Management20 to simplify your customer relationship journey and enhance profitability along with rapid growth."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/ebook/d365-supply-chain-management/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/ebook/d365-supply-chain-management/" />
        <meta property="og:title" content="Ultimate Dynamics 365 Supply Chain eBook" />
        <meta property="og:description" content="Learn how to streamline your supply chain processes and optimize your operations with our Dynamics 365 Supply Chain Management guide. Download our free eBook to discover expert tips, real-world examples, and best practices for achieving supply chain excellence." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/dynamics-SCM-Ebook-og.png" />
        <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/ebook/d365-supply-chain-management/" />
        <meta property="twitter:title" content="Ultimate Dynamics 365 Supply Chain eBook" />
        <meta property="twitter:description" content="Learn how to streamline your supply chain processes and optimize your operations with our Dynamics 365 Supply Chain Management guide. Download our free eBook to discover expert tips, real-world examples, and best practices for achieving supply chain excellence." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/dynamics-SCM-Ebook-og.png" />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                A Complete Guide to Dynamics 365 <br /> Supply Chain Management
              </h1>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal1">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Download Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <Image
                src="/img/dynamics-SCM-Ebook-featured-banner.png"
                alt="dynamics-SCM-Ebook-featured-banner"
                width={800} height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>This Ultimate eBook Will Walk You Through</h2>
              </header>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-let">
                  <h3>Top Challenges in Supply Chain</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Need of Supply Chain Management</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Top Capabilities to help you Grow</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <Image
                  src="/img/Supply-chain-management-ebook-tab.png"
                  alt="Supply-chain-management-ebook-tab"
                  width={487} height={613}
                />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>Top Benefits to Choose D365 SCM</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>Most Effective Pricing and Licensing</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>How to avail free trial?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboot-erp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="pic-ll">
                <Image src="/img/erp-left-about.png" alt="erp-left-about" width={337} height={460} />
              </div>
            </div>
            {/* <div className="col-lg-1 align-self-center"></div> */}
            <div className="col-lg-6 align-self-center">
              <div className="aboot-erp-content">
                <h3>What's more about this eBook?</h3>
                <p>
                  D365 Supply Chain Management offers end-to-end solutions for
                  retailers, distributors, and manufacturers to make the
                  operation smooth and simple. To meet modern and global
                  business needs, it is crucial for any business to have
                  real-time data insights into various supply chain processes,
                  including production, procurement, and distribution. Real-time
                  data on resources, production, and distribution assists any
                  business in remaining current and ahead of the competition.
                </p>
                <p>
                  Our eBook is a perfect guide for organisations who are looking
                  for a better, more agile and highly robust supply chain system
                  to centralise the information and offer insights to offer
                  data-driven decisions.
                </p>
                <p>
                  If you want to meet modern and global business needs to create
                  a sustainable supply chain management system, this guide is a
                  perfect solution.
                </p>
                <p>
                  t is a powerful application that centralises data by
                  connecting all warehousing, planning, and transportation
                  processes in order to provide actionable and intelligent
                  insights for making efficient and smart decisions. Such
                  insights help the organisation to identify the potential
                  issues in the entire supply chain and resolve them without
                  hampering the constant data flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="images" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left call_to_action-lefts">
                <h3>
                  Get started with the Ultimate Guide to Microsoft Dynamics 365
                  Supply Chain Management.
                </h3>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal1">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Download Now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="header-title-left">
            <h3>FAQ</h3>
          </div>
          <div className="row pd-121">
            <div className="col-lg-6 align-self-center">
              <div className="fax-accd">
                <div className="accordion" id="faqaccer">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Why should I choose Dynamics SCM?
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                          When businesses start climbing the success ladder,
                          it's obvious that their existing systems will no
                          longer handle complexities, manage customers, and
                          enhance loyalty. As a result, it becomes crucial to
                          have an advanced supply chain management solution like
                          Dynamics Supply Chain Management to help you get easy
                          scalability and more growth.
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
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I customize my Microsoft Dynamics 265 SCM?
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                          Dynamics SCM is a highly configurable and customizable
                          platform that enables businesses to tailor it to their
                          specific needs or integrate it with other systems or
                          apps to manage their entire supply chain while making
                          actionable decisions in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How will this supply chain guide help me?
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                          At Dynamics Square, we adhere to Microsoft's mission:
                          "to empower every person and every organisation on the
                          planet to achieve more." And helping people helps us
                          provide authentic, fruitful solutions to their
                          business in the best way possible. This guide contains
                          crisp and necessary content that you exactly need.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        What are the core areas in Dynamics 365 SCM?
                      </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                          Dynamics SCM covers various areas of supply chain
                          management, product distribution, and centralised
                          marketing and customer retention. This is a complete
                          application for overall supply chain management and
                          product distribution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        Why do I need to fill out the information requested?
                      </button>
                    </h3>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                          We will keep your information confidential. The
                          information from your end helps us provide you with an
                          improved and personalised experience every time you
                          visit our website and provides you with the best
                          solution so that your business can make waves.
                        </p>
                        <p>
                          You can read more about our{" "}
                          <Link href="/privacy-policy">privacy policy</Link>{" "}
                          here.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="pic-l2">
                <Image src="/img/Cover_Book_Moc.png" alt="Cover_Book_Moc" width={582} height={466} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {!closeModal && (
        <div
          className="modal fade form-main-model"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Register For Free EBook
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <p></p>
              </div>
              <p>Fill the form and receive it straight to your inbox.</p>
              <div className="modal-body">
                <div className="main-form-wrper">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Full Name"
                        name="name"
                        required
                      />
                      <input type="hidden" value={router.asPath} name="url" />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="*Work Email"
                        name="email"
                        pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Company Name"
                        name="company_name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="*Phone Number"
                        name="phone"
                        pattern="^\d{10,13}$"
                        required
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        I agree to the {" "}
                        <Link href="/privacy-policy/">
                          <a target="_blank">Privacy Policy</a>
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms-of-use/" target="_blank">
                        <a target="_blank">Terms of Service</a>
                        </Link>
                        .
                      </label>
                    </div>

                    <div className="spiner-wrper">
                      <button
                        type="submit"
                        className="btn btn-primary fomr-submit"
                      >
                        Download Now
                      </button>
                      <div className={display} role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StartGuideThree;
