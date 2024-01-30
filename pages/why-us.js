import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
const WhyUs = () => {
  return (
    <>
      <Head>
        <title>
          Why Dynamics Square | Your Trusted Microsoft Partner in UK
        </title>
        <meta
          name="description"
          content="Why Dynamics Square? Because, we&#039;re Microsoft Gold Partner in the USA helping businesses to scale up their processes through Microsoft ERP &amp; CRM software solutions."
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/why-us/" />
      </Head>
      <main>
        <section className="Solution-banner hero-1 hero about-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  mobile-1">
                <h1>Why Us?</h1>
                <p>
                  We inspire clients to make their most challenging <br />
                  business decisions with confidence.
                </p>
              </div>
              <div className="col-lg-6">
                <Image src="/img/about-pic.png" alt="image" width={775} height={528} />
              </div>
            </div>
          </div>
        </section>

        <section className="domain-expertise domain-expertise-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="domain-expertise-right-pic">
                  <Image src="/img/why-side.png" alt="why-side" width={514} height={534} />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="domain-expertise-left domain-expertise-left-1">
                  <div className="title-header">
                    <h3>
                      You deserve the full return on each dollar you invest in
                      your business solutions.
                    </h3>
                  </div>

                  <div className="domain-Expertise-list domain-Expertise-list-p">
                    <ul>
                      <li>
                        At Dynamics Square, our job is to act as your trusted
                        partner, using our expert product knowledge and industry
                        understanding to help you get the most out of your
                        software systems.
                      </li>
                      <li>
                        We've worked on hundreds of projects around the world,
                        helping our clients find enterprise software solutions
                        that push the boundaries of modern technology to solve
                        problems and provide a positive ROI.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-slider">
          <div className="container">
            <header className="section-header">
              <h2>Why Dynamics Square?</h2>
              <p>
                We employ market leading technologies, consultants, processes
                and proven methodologies to help clients to design, implement
                and manage their business solutions that align to business
                priorities, maximum return on their investment and to create
                high performance organizations.
              </p>
            </header>
            <div className="row pad-3y">
              <div className="col-lg-12">
                <Swiper
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1400: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper mySwiperwhy"
                >
                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>Years of Expertise</span>
                      </h3>
                      <p>
                        Our team of consultants bring together their many years
                        of experience to new projects. Our consultants have
                        numerous successful projects to their credit, and they
                        can do the same for your business.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>Experienced Team</span>
                      </h3>
                      <p>
                        Dynamics Square consultants are leading subject matter
                        experts in their fields. They bring their solid
                        credibility and impressive experience to every client's
                        project.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>Quality Driven</span>
                      </h3>
                      <p>
                        Our dynamic professional teams help your business
                        implement the best software solutions for your
                        particular needs. We take the utmost pride in the
                        quality of our work, delivering the best possible
                        results for every client.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>In-depth Product Knowledge</span>
                      </h3>
                      <p>
                        The team at Dynamics Square have in-depth product
                        knowledge so that you can get concrete, top-quality
                        implementation, support and upgrade services. Get in
                        touch with one of our Microsoft consultants to schedule
                        a free demo.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>Timely Execution</span>
                      </h3>
                      <p>
                        Our extensive experience and product knowledge empower
                        us to deliver solutions in accordance with your expected
                        timeline, keeping the implementation process as
                        efficient as possible.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>Fuelled by Passion</span>
                      </h3>
                      <p>
                        We strive to provide every one of our clients with the
                        best possible results. We’re driven to establish
                        ourselves as a leading name in consulting services, and
                        we work continuously to streamline and improve our
                        services.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>Flexible Engagement Model</span>
                      </h3>
                      <p>
                        At Dynamic Square, our services feature a remarkable
                        degree of flexibility. We’ll be there when you need us
                        to keep your project on schedule and ensure its success.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>Focused on Innovation</span>
                      </h3>
                      <p>
                        We deliver creative solutions to clients, using our
                        experience and expertise to develop new and efficient
                        implementation strategies.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h3>
                        <i className="bi bi-check-lg"></i>{" "}
                        <span>High Customer Satisfaction</span>
                      </h3>
                      <p>
                        Our high success rate is a testament to our dedication
                        to quality, flexibility, and efficiency. Our
                        uncompromising efforts and dedication have brought
                        considerable returns for hundreds of businesses
                        worldwide.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="call_to_action call_to_action-height">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="call_to_action-right over-img">
                  <img src="/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>Give us a call today</h3>
                  <p>
                    Selecting the right implementation partner is most important
                    along with
                    <br />
                    right business solution for success of the project.
                  </p>
                  <div className="m-o-t m-o-t-inde">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Request a Call Back</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients clients-bt">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Our Valuable Customers</h2>
              <p>
                We employ market leading technologies, consultants, processes
                and proven methodologies to help clients to design, implement
                and manage their business solutions that align to business
                priorities, maximum return on their investment and to create
                high performance organizations.
              </p>
            </header>
            <div className="row pdd1">
              <div className="col-lg-12">
                <div className="clients-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <Swiper
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        992: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1200: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        1400: {
                          slidesPerView: 5,
                          spaceBetween: 30,
                        },
                      }}
                      slidesPerView={5}
                      spaceBetween={30}
                      freeMode={true}
                      pagination={{
                        clickable: false,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="/img/clients/client-1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <img
                            src="/img/clients/client-2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="/img/clients/client-3.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <img
                            src="/img/clients/client-4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="/img/clients/client-5.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="/img/clients/client-4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhyUs;
