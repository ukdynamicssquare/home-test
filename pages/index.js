import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trusted Microsoft Dynamics 365 Partner UK | Business Central Partner - Dynamics Square™</title>
        <meta
          name="description"
          content="As a leading Microsoft Dynamics 365 Partner in the UK, our experts help businesses achieve desired results with the implementation of Dynamics 365 apps such as Business Central, NAV, AX, and Power BI. Contact us Today!"
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/" />
        <meta property="og:title" content="Trusted Microsoft Dynamics 365 Partner UK | Business Central Partner - Dynamics Square™" />
        <meta property="og:description" content="Dynamics Square is UK's leading Gold Microsoft Dynamics 365 Partner helping businesses to achieve desired results with Dynamics 365 apps and services." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/home-page-og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/" />
        <meta property="twitter:title" content="Trusted Microsoft Dynamics 365 Partner UK | Business Central Partner - Dynamics Square™" />
        <meta property="twitter:description" content="Dynamics Square is UK's leading Gold Microsoft Dynamics 365 Partner helping businesses to achieve desired results with Dynamics 365 apps and services." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/home-page-og.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.dynamicssquare.co.uk/#organization",
                  name: "Dynamics Square",
                  url: "https://www.dynamicssquare.co.uk/",
                  sameAs: [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://twitter.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare",
                  ],
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://www.dynamicssquare.co.uk/#logo",
                    inLanguage: "en-GB",
                    url: "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                    contentUrl:
                      "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                    width: "1024",
                    height: "1024",
                    caption: "Dynamics Square UK",
                  },
                  image: { "@id": "https://www.dynamicssquare.co.uk/#logo" },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dynamicssquare.co.uk/#website",
                  url: "https://www.dynamicssquare.co.uk/",
                  name: "Trusted Microsoft Dynamics 365 Partner UK | Business Central Partner - Dynamics Square™",
                  description:
                    "Dynamics Square is UK's leading Microsoft Dynamics 365 Partner. We help businesses implement Microsoft Dynamics 365 solutions. Contact us to know more.",
                  publisher: {
                    "@id": "https://www.dynamicssquare.co.uk/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://www.dynamicssquare.co.uk/?s={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "en-GB",
                },
                {
                  "@type": "ImageObject",
                  "@id": "https://www.dynamicssquare.co.uk/#primaryimage",
                  inLanguage: "en-GB",
                  url: "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  contentUrl:
                    "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  width: 1561,
                  height: 667,
                  caption: "dynamicssquare",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.dynamicssquare.co.uk/#webpage",
                  url: "https://www.dynamicssquare.co.uk/",
                  name: "Dedicated Dynamics 365 CRM and ERP Partner for UK Region | Dynamics Square UK",
                  isPartOf: {
                    "@id": "https://www.dynamicssquare.co.uk/#website",
                  },
                  about: {
                    "@id": "https://www.dynamicssquare.co.uk/#organization",
                  },
                  primaryImageOfPage: {
                    "@id": "https://www.dynamicssquare.co.uk/#primaryimage",
                  },
                  datePublished: "2021-08-31T06:09:16+00:00",
                  dateModified: "2021-11-07T09:15:37+00:00",
                  description:
                    "Dynamics Square is Dynamics 365 partner in the UK who help your business succeed by deploying the finest CRM, ERP, and Microsoft cloud solutions for your unique needs.",
                  breadcrumb: {
                    "@id": "https://www.dynamicssquare.co.uk/#breadcrumb",
                  },
                  inLanguage: "en-US",
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: ["https://www.dynamicssquare.co.uk/"],
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.dynamicssquare.co.uk/#breadcrumb",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home" },
                  ],
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Dynamics Square UK Ltd.",
              description:
                "We assist your company business in scaling up by giving unbiased advise on the best Microsoft ERP and CRM solutions.",
              image:
                "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
              alternateName:
                "Dynamics Square software company in London, United Kingdom",
              telephone: "+44-207-193-2502, +44-747-927-3380",
              email: "info@dynamicssquare.co.uk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kemp House, 152-160 City Road",
                addressLocality:
                  "Kemp House, 152-160 City Road, London, EC1V 2NX, U.K.",
                addressRegion: "London",
                addressCountry: "United Kingdom",
                postalCode: "EC1V 2NX",
              },
              brand: {
                "@type": "Brand",
                name: "Dynamics Square UK Ltd.",
                logo: "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.3",
                reviewCount: "1280",
              },
              url: "https://www.dynamicssquare.co.uk/",
              sameAs: [
                "https://www.facebook.com/dynamicssquareuk/",
                "https://twitter.com/dsquare_uk",
                "https://www.linkedin.com/showcase/dynamics-square-uk/",
                "https://www.youtube.com/c/DynamicsSquare",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              Headline:
                "We help you effectively leverage the potential of Microsoft Dynamics CRM, ERP, and cloud technologies.",
              description:
                "What do you have a goal, a vision, or a problem to solve? We have 260+ Microsoft certified consultants, creative thinkers, and developers ready to assist you with your digital transformation journey. Our objective is to solve your challenges and turn your idea into a reality.",
              Keywords: [
                "dynamics 365 partner uk",
                "erp consultants UK",
                "crm consultancy",
                "d365 business central",
                "crm expert online",
                "d365 for finance",
                "Microsoft NAV partner",
                "dynamics crm implementation",
                "d365 field service",
                "crm implementation services",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dynamics Square UK Ltd.",
              alternateName:
                "Dynamics Square Microsoft Gold Partner company in London, UK",
              url: "https://www.dynamicssquare.co.uk/",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "localBusiness",
              name: "Dynamics Square UK Ltd.",
              description:
                "As a Dynamics 365 partner, we assist your business in scaling up by giving unbiased advise on the best Microsoft dynamics ERP and CRM solutions.",
              image:
                "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
              alternateName: "Dynamics Square Software company in London, UK",
              telephone: "+442071932502, +447479273380",
              email: "info@dynamicssquare.co.uk",
              priceRange: "£££-£££",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kemp House, 152-160 City Road",
                addressLocality:
                  "Kemp House, 152-160 City Road, London, EC1V 2NX, U.K.",
                addressRegion: "London",
                addressCountry: "UK",
                postalCode: "EC1V 2NX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.52706865727293,
                longitude: -0.08876773400079006,
              },

              brand: {
                "@type": "Brand",
                name: "Dynamics Square UK Ltd.",
                logo: "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.3",
                reviewCount: "1260",
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednessday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "5:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday - closed",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday - Closed",
                },
              ],

              url: "https://www.dynamicssquare.co.uk/",
              sameAs: [
                "https://www.facebook.com/dynamicssquareuk/",
                "https://twitter.com/dsquare_uk",
                "https://www.linkedin.com/showcase/dynamics-square-uk/",
                "https://www.youtube.com/c/DynamicsSquare",
              ],
            }),
          }}
        />
      </Head>
      <main>
        <section id="h-banner" className="hero hero-home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 data-aos="fade-up">
                  UK's <span>Trusted</span>  Microsoft <br /> Dynamics 365 Partner
                </h1>
                <p>
                  Simplify your end-to-end business processes to maximise ROI,
                  agility, and growth with Microsoft cloud technology.
                </p>
                <div>
                  <div className="text-center btn-welcome">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Get Started</span>
                      </a>
                    </Link>
                  </div>
                  {/* <div className="bnner_inline_images">
                  <ul>
                    <li>
                    <Image
                        src="/img/Microsoft-Partner-black.png"
                        alt="Microsoft Partner black.png"
                        width={260}
                        height={115}
                      />
                    </li>
                  </ul>
                </div> */}
                </div>
              </div>


            </div>
          </div>
        </section>

        <section>
          <div className="containesr">
            <div className="vide-s-home">
              <video className="video-screen-home" autoPlay loop muted poster="/img/h-bnner.png">
                <source src="/video/home-video.mp4" />
              </video>
            </div>
          </div>
        </section>



        <section id="services" className="services home-serv-bg">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <header className="section-header section-header-home">
                  <h2>500+ Global Businesses Trust Dynamics Square</h2>
                  <p>Our AI-driven Microsoft Cloud Solutions are helping 500+ worldwide businesses grow and scale at a rapid <br /> rate, leveraging digital transformation.</p>
                </header>
              </div>
            </div>
            <div className="row gy-2">
              <div className="col-lg-12">
                <div className="bg-h-color">
                  <img src="/img/client-logs.png" alt="client-logs" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <header className="section-header section-header-home">
                  <h2>Microsoft Business Apps: Innovative <br /> Solutions to Boost Business Performance</h2>
                  <p>Microsoft business applications offer various efficient solutions for better ROI, including ERP <br /> (Dynamics NAV, AX), CRM (Dynamics 365 CE), and Power Platform (Power BI implementation).</p>
                </header>
              </div>
            </div>
            <div className="row">


              <div className="tabs-service-slide">
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-service-one-tab" data-bs-toggle="tab" data-bs-target="#nav-service-one" type="button" role="tab" aria-controls="nav-service-one" aria-selected="true">Dynamics 365 <br /> Business Central</button>
                  <button className="nav-link" id="nav-service-two-tab" data-bs-toggle="tab" data-bs-target="#nav-service-two" type="button" role="tab" aria-controls="nav-service-two" aria-selected="true">Dynamics 365 <br /> Finance</button>
                  <button className="nav-link" id="nav-service-three-tab" data-bs-toggle="tab" data-bs-target="#nav-service-three" type="button" role="tab" aria-controls="nav-service-three" aria-selected="true">Dynamics 365 <br /> Sales</button>
                  <button className="nav-link" id="nav-service-four-tab" data-bs-toggle="tab" data-bs-target="#nav-service-four" type="button" role="tab" aria-controls="nav-service-four" aria-selected="true">Dynamics 365 <br /> Marketing</button>
                  <button className="nav-link" id="nav-service-five-tab" data-bs-toggle="tab" data-bs-target="#nav-service-five" type="button" role="tab" aria-controls="nav-service-five" aria-selected="true">Dynamics 365 <br /> Supply Chain</button>
                  <button className="nav-link" id="nav-service-six-tab" data-bs-toggle="tab" data-bs-target="#nav-service-six" type="button" role="tab" aria-controls="nav-service-six" aria-selected="true">Dynamics 365 <br /> Customer Service</button>



                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade active show" id="nav-service-one" role="tabpanel" aria-labelledby="nav-service-one-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <figure>
                          <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                        </figure>
                        <div className="inner-info-left">
                          <h3>Dynamics 365 Business Central</h3>
                          <p>Drive an efficient business model on the cloud while keeping real-time eyes on your sales insights, effectively manage your finance, and ensure a sound customer experience.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Optimizes and simplifies business processes for enhanced efficiency</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Gain insights with integrated financial tools in Business Central</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Grow confidently with Business Central's flexible platform</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Make informed decisions with embedded data analytics.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Integrated Business Processes</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Enhanced Productivity</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Data-Driven Decision-Making</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Scalability and Flexibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Cloud-Based Accessibility</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-service-two" role="tabpanel" aria-labelledby="nav-service-two-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <figure>
                          <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                        </figure>
                        <div className="inner-info-left">
                          <h3>Dynamics 365 Business Central</h3>
                          <p>Drive an efficient business model on the cloud while keeping real-time eyes on your sales insights, effectively manage your finance, and ensure a sound customer experience.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Optimizes and simplifies business processes for enhanced efficiency</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Gain insights with integrated financial tools in Business Central</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Grow confidently with Business Central's flexible platform</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Make informed decisions with embedded data analytics.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Integrated Business Processes</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Enhanced Productivity</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Data-Driven Decision-Making</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Scalability and Flexibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Cloud-Based Accessibility</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-three" role="tabpanel" aria-labelledby="nav-service-three-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <figure>
                          <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                        </figure>
                        <div className="inner-info-left">
                          <h3>Dynamics 365 Business Central</h3>
                          <p>Drive an efficient business model on the cloud while keeping real-time eyes on your sales insights, effectively manage your finance, and ensure a sound customer experience.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Optimizes and simplifies business processes for enhanced efficiency</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Gain insights with integrated financial tools in Business Central</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Grow confidently with Business Central's flexible platform</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Make informed decisions with embedded data analytics.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Integrated Business Processes</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Enhanced Productivity</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Data-Driven Decision-Making</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Scalability and Flexibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Cloud-Based Accessibility</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-four" role="tabpanel" aria-labelledby="nav-service-four-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <figure>
                          <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                        </figure>
                        <div className="inner-info-left">
                          <h3>Dynamics 365 Business Central</h3>
                          <p>Drive an efficient business model on the cloud while keeping real-time eyes on your sales insights, effectively manage your finance, and ensure a sound customer experience.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Optimizes and simplifies business processes for enhanced efficiency</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Gain insights with integrated financial tools in Business Central</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Grow confidently with Business Central's flexible platform</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Make informed decisions with embedded data analytics.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Integrated Business Processes</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Enhanced Productivity</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Data-Driven Decision-Making</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Scalability and Flexibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Cloud-Based Accessibility</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-five" role="tabpanel" aria-labelledby="nav-service-five-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <figure>
                          <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                        </figure>
                        <div className="inner-info-left">
                          <h3>Dynamics 365 Business Central</h3>
                          <p>Drive an efficient business model on the cloud while keeping real-time eyes on your sales insights, effectively manage your finance, and ensure a sound customer experience.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Optimizes and simplifies business processes for enhanced efficiency</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Gain insights with integrated financial tools in Business Central</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Grow confidently with Business Central's flexible platform</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Make informed decisions with embedded data analytics.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Integrated Business Processes</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Enhanced Productivity</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Data-Driven Decision-Making</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Scalability and Flexibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Cloud-Based Accessibility</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-six" role="tabpanel" aria-labelledby="nav-service-six-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <figure>
                          <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                        </figure>
                        <div className="inner-info-left">
                          <h3>Dynamics 365 Business Central</h3>
                          <p>Drive an efficient business model on the cloud while keeping real-time eyes on your sales insights, effectively manage your finance, and ensure a sound customer experience.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Optimizes and simplifies business processes for enhanced efficiency</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Gain insights with integrated financial tools in Business Central</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Grow confidently with Business Central's flexible platform</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Make informed decisions with embedded data analytics.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Integrated Business Processes</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Enhanced Productivity</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Data-Driven Decision-Making</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Scalability and Flexibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Cloud-Based Accessibility</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>




            </div>
          </div>
        </section>

        <section className="m-botom-120">
          <div className="container">
            <div className="row mascot-bg">
              <div className="col-lg-6">
              <div className="mas-left">
                 <div className="text-ar">
                 <h3>Looking for a Dynamics 365 <br /> implementation partner?</h3>
                  <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="scrollto-tops"
                      >
                        <span>Get Started <i className="bi bi-arrow-right"></i></span>
                      </a>
                    </Link>
                 </div>
                  <video className="video-l" autoPlay loop muted poster="/img/h-bnner.png">
                <source src="/video/animation-hover.mp4" />
              </video>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mas-left-right">
                  <div className="text-ar">
                  <h3>Want to know what more <br />Dynamics 365 can do?</h3>
                  <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="scrollto-tops-right"
                      >
                        <span>Get Started <i className="bi bi-arrow-right"></i></span>
                      </a>
                    </Link>
                  </div>
                  <video className="video-r" autoPlay loop muted poster="/img/h-bnner.png">
                <source src="/video/animation-hover.mp4" />
              </video>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="post-mas"><img src="/img/mascut-png.png" alt="" /></div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}
