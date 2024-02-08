import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import ExpandableCard from '../components/ExpandableCard';


export default function Home() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);




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
                  UK's <span>Trusted</span>  Microsoft <br /> Cloud Solutions Partner
                </h1>
                <p>Being reckoned as a leading Microsoft Dynamics 365 partner, and new-gen technology innovator, Dynamics Square holds expertise in AI, advanced automation, cloud solutions, training, and consulting.</p>
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

        <section style={{ marginTop: '-20px' }} className='po-relativ'>
          <div className="containesr">
            <header className="section-header section-header-home">
              <h2>Connected in Every Way. Always.</h2>
              <p>Seamlessly Connected to Microsoft Apps - All United in One Place</p>
            </header>

            {/* <HoverSvg /> */}
            <ExpandableCard />
            {/* <div className='bb-inns'>
              <ul>
                <li><a href="">Office 365</a></li>
                <li><a href="">Copilot</a></li>
                <li><a href="">Dynamics 365</a></li>
                <li><a href="">Power Platform</a></li>
                <li><a href="">Azur Cloude Service</a></li>
              </ul>
            </div> */}
            <div className="vide-s-home" style={{ margin: '' }}>

              <video className="video-screen-home" autoPlay loop muted poster="/img/h-bnner.png">
                <source src="/video/home-video.mp4" />
              </video>
            </div>
          </div>
        </section>




        <section id="services" className="services home-serv-bg">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <header className="section-header section-header-home">
                  <h2>350+ Businesses Rely on Dynamics Square </h2>
                  <p><strong>Long-term commitment is at the heart of our mission</strong>: Formed in the year 2011, we have come a long way by building trust among 350+ clients as a reliable Microsoft Dynamics Solution Partner. We take pride in helping organizations succeed and adapt continuously, with Microsoft Dynamics 365 Product Suite.</p>
                </header>
              </div>
            </div>
            <div className="row gy-2">
              <div className="col-lg-12">
                <div className="bg-h-color">
                  <figure>
                    <img src="/img/Parweld-logo.png" alt="client-logs" />
                  </figure>
                  <figure>
                    <img src="/img/Meirion-Davies-logo.png" alt="client-logs" />
                  </figure>
                  <figure><img src="/img/Noahs-Ark-Logo.png" alt="client-logs" /></figure>
                  <figure> <img src="/img/COMXO-LIMITED-logo.png" alt="client-logs" /></figure>
                  <figure> <img src="/img/Ncc-education-logo.png" alt="client-logs" /></figure>
                  {/* <img src="/img/COMXO-LIMITED-logo.png" alt="client-logs" /> */}

                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <header className="section-header section-header-home">
                  <h2>Microsoft Business Apps: New Age Solutions to Drive Exponential Growth</h2>
                  <p>The world is changing, and so is technology! If you're struggling to thrive in a fast-paced market, don't worry. Dynamics Square will address your business challenges with Microsoft Business Apps.</p>
                </header>
              </div>
            </div>
            <div className="row">


              <div className="tabs-service-slide">
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-service-one-tab" data-bs-toggle="tab" data-bs-target="#nav-service-one" type="button" role="tab" aria-controls="nav-service-one" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure> Business Central</button>
                  <button className="nav-link" id="nav-service-two-tab" data-bs-toggle="tab" data-bs-target="#nav-service-two" type="button" role="tab" aria-controls="nav-service-two" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-finance.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure> Finance</button>
                  <button className="nav-link" id="nav-service-five-tab" data-bs-toggle="tab" data-bs-target="#nav-service-five" type="button" role="tab" aria-controls="nav-service-five" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure> Supply Chain</button>
                  <button className="nav-link" id="nav-service-three-tab" data-bs-toggle="tab" data-bs-target="#nav-service-three" type="button" role="tab" aria-controls="nav-service-three" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-sales.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure>Sales</button>
                  <button className="nav-link" id="nav-service-four-tab" data-bs-toggle="tab" data-bs-target="#nav-service-four" type="button" role="tab" aria-controls="nav-service-four" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-marketing.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure>Marketing</button>
                 
                  <button className="nav-link" id="nav-service-six-tab" data-bs-toggle="tab" data-bs-target="#nav-service-six" type="button" role="tab" aria-controls="nav-service-six" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-customer-engagement.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure> Customer Service</button>



                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade active show" id="nav-service-one" role="tabpanel" aria-labelledby="nav-service-one-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <div className="inner-info-left">
                          <h3>Smart AI-enabled ERP for SMBs</h3>
                          <p>Drive success by outperforming smartly with an ERP incorporated by 96 % of Fortune 500 companies. </p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Streamline operations with advanced AI and automated workflows.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Eliminate manual data entry and app-switching.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Discover cloud-based accessibility, enabling access from any location in the world.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Maximize revenue with accurate cash flow projections, ensuring financial stability.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Protect sensitive information with elevated security innovation. </span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Cloud-Enabled Growth</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>AI-Powered Efficiency</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Work on the Move</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Flexible Integration</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Intelligent Decision Making </span>
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

                        <div className="inner-info-left">
                          <h3>Powerful & Proven Financial Business Solutions globally acclaimed for Large Scale Businesses</h3>
                          <p>Navigate your business with the new-age financial management Microsoft solutions.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Effectual handling of finances on a single platform</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Build resiliency through intelligent forecasting solutions.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Simplify complex billing and pricing scenarios.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Optimize monetization with AI-powered solutions.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Meet global expectations with foreign exchange support.  </span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Financial Ability & Agility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>AI-powered billing</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Predictive cash flow forecasting </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Away from disjointed financial processes </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Unified data from Microsoft AppSource </span>
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

                        <div className="inner-info-left">
                          <h3>Next-gen AI sales solutions to accelerate revenue and customer relationships</h3>
                          <p>Simplify sales process with AI, automation, and real-time insights. Gear up with a high-powered CRM solution dedicated to empowering your team and clients.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Use Copilot to reduce mundane tasks </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Ease selling with intelligent customer insights </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Meet customer’s preferences with personalized interactions</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Filter the right customers with AI-based scoring and visualizations</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Integrated sales processes within the Microsoft Ecosystem</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>AI-powered Sales Automation </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Easy Integration within the Dynamics 365 Apps </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Data-driven sales strategies for enhanced performance</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Real-time insights for informed decision making</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Shorten sales cycle using AI </span>
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

                        <div className="inner-info-left">
                          <h3>Fuel Up your marketing team to generate and distribute out-of-the-box campaigns across several media</h3>
                          <p>Track potential leads, schedule viral events, and monitor every activity and performance with advanced tools.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Personalize customer journeys with targeted marketing campaigns.y</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Measure and optimize campaign performance in real-time.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Seamlessly integrate marketing efforts with sales and customer service.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Easy monitoring of multi-channel campaigns.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Efficient lead conversions. </span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Streamlined brand experiential journey </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Simplified multi-channel campaigns</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Ai-powered customer insights </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Scalable marketing automation</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Real-time performance monitoring</span>
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

                        <div className="inner-info-left">
                          <h3>Drive real change; get disruption ready with intelligent solution</h3>
                          <p>Optimize your supply chain operations with Dynamic 365 Supply Chain, an intelligent solution that offers end-to-end operational excellence.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Proactively manage inventory and demand to meet customer expectations.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Streamline procurement processes for cost savings and supply chain resilience.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Refrain stockouts with automated inventory placement using Copilot.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Leverage predictive analytics to mitigate supply risks.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Integrate vendor networks for seamless collaboration.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Unmatched Cybersecurity  </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Proactive Inventory Management </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Warehouse Optimization </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Agile Manufacturing Practices </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Minimize downtime using mobile devices. </span>
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

                        <div className="inner-info-left">
                          <h3>Take your customer service experience to another level with Dynamic 365 Customer Service. </h3>
                          <p>Pace your growth with seamless support, personalized interactions, AI-driven automation, and proactive engagement.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Advanced service delivery tracking and placements</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Deliver consistent support across multiple channels </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Personalize customer interactions through ai-powered recommendations.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Improved innovation with real-time feedback and analysis.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Enable self-service options for faster issue resolution.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>Seamless Support</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Enhanced Customer Accessibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>AI-Driven Personalization for Customers </span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Proactive Issue Resolution</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Knowledge Management </span>
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
          <div className="row justify-content-center">
              <div className="col-lg-10">
                <header className="section-header section-header-home">
                  <h2>Still Not Updated with New Gen Technology?</h2>
                  <p>Don’t Fret, I’m here to Help You Roar!</p>
                </header>
              </div>
            </div>
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
                  <video className="video-l" autoPlay loop muted poster="">
                    <source src="/video/animation-hover.mp4" />
                  </video>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mas-left-right">
                  <div className="text-ar text-r-right">
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
                  <video className="video-r" autoPlay loop muted poster="">
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

        <section className="b--colo-new">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <header className="section-header section-header-home">
                  <h2>Reimagine your Business growing at scale </h2>
                  <p>Create a breakthrough with Dynamics Square’s expertise in delivering the right implementation, upgrade or support services. Know what your business needs. </p>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="business-app-card">
                  <div className="app-head">
                    <figure>
                      <img src="/img/app-head-icons-1.png" alt="Implementation" />
                    </figure>
                    <h3>Implementation</h3>
                  </div>
                  <div className="app-body">
                    <p>Elevate your business with AI workflows you can trust with Dynamics 365 Implementation. Unify Data, Ensure cloud security, successful business operations and more. </p>
                    <a href="">Learn More </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="business-app-card">
                  <div className="app-head">
                    <figure>
                      <img src="/img/app-head-icons-2.png" alt="Implementation" />
                    </figure>
                    <h3>Upgrade</h3>
                  </div>
                  <div className="app-body">
                    <p>Drive Impact by maximizing with Dynamics 365 Upgrade Servies. Trust us whilst we upgrade your legacy system as we ensure seamless transitions and minimal disruptions to your operations.</p>
                    <a href="">Learn More </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="business-app-card">
                  <div className="app-head">
                    <figure>
                      <img src="/img/app-head-icons-3.png" alt="Implementation" />
                    </figure>
                    <h3>Support</h3>
                  </div>
                  <div className="app-body">
                    <p>Ensure long-term benefits and support as our seasoned team strives to be there for any query, resolution, training, implementation and more. </p>
                    <a href="">Learn More </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="business-app-card">
                  <div className="app-head">
                    <figure>
                      <img src="/img/app-head-icons-4.png" alt="Implementation" />
                    </figure>
                    <h3>Consulting</h3>
                  </div>
                  <div className="app-body">
                    <p>Leverage industry expertise, best practices, and emerging trends to help you navigate complex challenges, identify opportunities, and make informed decisions. </p>
                    <a href="">Learn More </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="business-app-card">
                  <div className="app-head">
                    <figure>
                      <img src="/img/app-head-icons-5.png" alt="Implementation" />
                    </figure>
                    <h3>Audit</h3>
                  </div>
                  <div className="app-body">
                    <p>Let our more than two decades of experienced auditors conduct thorough assessments of your systems and processes, and identify vulnerabilities, gaps, and areas for improvement. </p>
                    <a href="">Learn More </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="business-app-card">
                  <div className="app-head">
                    <figure>
                      <img src="/img/app-head-icons-6.png" alt="Implementation" />
                    </figure>
                    <h3>Training</h3>
                  </div>
                  <div className="app-body">
                    <p>Experience in-person training sessions, and experimental training modules, helping your business to grow as per the shift in the market. </p>
                    <a href="">Learn More </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='relt-pos'>
          <div className="container rr-bg-colgr">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <header className="section-header section-header-home">
                  <h2>Become An Industry Leader</h2>
                  <p>By implementing Dynamics 365 Business Applications.</p>
                </header>
              </div>
            </div>
            <div className="row g-66">


              <div className="tabs-service-slide-solution">
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-industry-one-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-one" type="button" role="tab" aria-controls="nav-industry-one" aria-selected="true"><div className="rounded-circle"><img src="/img/rocket_launch.png" alt="StartUp" /></div><span>StartUp</span></button>
                  <button className="nav-link" id="nav-industry-two-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-two" type="button" role="tab" aria-controls="nav-industry-two" aria-selected="true"><div className="rounded-circle"><img src="/img/volunteer_activism.png" alt="StartUp" /></div><span>Not for Profit</span></button>
                  <button className="nav-link" id="nav-industry-three-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-three" type="button" role="tab" aria-controls="nav-industry-three" aria-selected="true"><div className="rounded-circle"><img src="/img/shopping_cart.png" alt="StartUp" /></div><span>E-commerce</span></button>
                  <button className="nav-link" id="nav-industry-four-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-four" type="button" role="tab" aria-controls="nav-industry-four" aria-selected="true"><div className="rounded-circle"><img src="/img/local_shipping.png" alt="StartUp" /></div><span>Manufacturing</span></button>
                  <button className="nav-link" id="nav-industry-five-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-five" type="button" role="tab" aria-controls="nav-industry-five" aria-selected="true"><div className="rounded-circle"><img src="/img/school.png" alt="StartUp" /></div><span>Education</span></button>
                  <button className="nav-link" id="nav-industry-six-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-six" type="button" role="tab" aria-controls="nav-industry-six" aria-selected="true"><div className="rounded-circle"><img src="/img/fastfood.png" alt="StartUp" /></div><span>Food & Beverages</span></button>
                  <button className="nav-link" id="nav-industry-seven-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-seven" type="button" role="tab" aria-controls="nav-industry-six" aria-selected="true"><div className="rounded-circle"><img src="/img/add_circle.png" alt="Explore More" /></div><span>Explore More</span></button>



                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade active show" id="nav-industry-one" role="tabpanel" aria-labelledby="nav-industry-one-tab">
                    <div className="tab-industry-contant-one">

                      <div className="right-sect">
                        <div className="d-colomn">
                          <video className="video-industr-sect" autoPlay loop muted poster="/img/h-bnner.png">
                            <source src="/video/rocket.mp4" />
                          </video>
                        </div>

                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>StartUp</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Committing to helping your business stay relevant</h3>
                          <p>Grow by Incorporating digital business strategy, customer experience, marketing modernization, and Data and AI expertise with Microsoft's business solutions.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Marketing Campaigns</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Automated Workflows</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Program Dashboard </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Financial Analysis</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Informed Decision Making</span></li>
                          </ul>
                          <a href="" className="lins-indu">Know more about solutions</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-industry-two" role="tabpanel" aria-labelledby="nav-industry-two-tab">
                    <div className="tab-pane fade active show" id="nav-industry-one" role="tabpanel" aria-labelledby="nav-industry-one-tab">
                      <div className="tab-industry-contant-one">

                        <div className="right-sect">
                          <div className="d-colomn">
                            <video className="video-industr-sect" autoPlay loop muted poster="/img/h-bnner.png">
                              <source src="/video/rocket.mp4" />
                            </video>
                          </div>

                        </div>
                        <div className="left-sect">
                          <div className="tags-indy">
                            <span>Not For Profit</span>
                          </div>
                          <div className="inner-info-left">
                            <h3>Witness the Growth of Substance with Government-Specific ERP Solutions</h3>
                            <p>Make your vision a reality by ensuring the desired performance.</p>
                            <ul>
                              <li><i className="bi bi-check-circle"></i> <span>Fundraising Management </span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Volunteer Management</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Action Dashboard</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Consumer Marketing Journey</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Analysis of the Impact Created</span></li>
                            </ul>
                            <a href="" className="lins-indu">Know more about solutions</a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="tab-pane fade" id="nav-industry-three" role="tabpanel" aria-labelledby="nav-industry-three-tab">
                    <div className="tab-pane fade active show" id="nav-industry-one" role="tabpanel" aria-labelledby="nav-industry-one-tab">
                      <div className="tab-industry-contant-one">

                        <div className="right-sect">
                          <div className="d-colomn">
                            <video className="video-industr-sect" autoPlay loop muted poster="/img/h-bnner.png">
                              <source src="/video/rocket.mp4" />
                            </video>
                          </div>

                        </div>
                        <div className="left-sect">
                          <div className="tags-indy">
                            <span>E-commerce </span>
                          </div>
                          <div className="inner-info-left">
                            <h3>Visualize Success and drive growth in today's competitive market</h3>
                            <p>Delivering exceptional experiences to meet the evolving needs of e-commerce businesses.</p>
                            <ul>
                              <li><i className="bi bi-check-circle"></i> <span>Integration with eCommerce platforms</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Unified customer data</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Streamlined order management.</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Flawless support across channels</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Automated leads, and sales generation</span></li>
                            </ul>
                            <a href="" className="lins-indu">Know more about solutions</a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="tab-pane fade" id="nav-industry-four" role="tabpanel" aria-labelledby="nav-industry-four-tab">

                    <div className="tab-pane fade active show" id="nav-industry-one" role="tabpanel" aria-labelledby="nav-industry-one-tab">
                      <div className="tab-industry-contant-one">

                        <div className="right-sect">
                          <div className="d-colomn">
                            <video className="video-industr-sect" autoPlay loop muted poster="/img/h-bnner.png">
                              <source src="/video/rocket.mp4" />
                            </video>
                          </div>

                        </div>
                        <div className="left-sect">
                          <div className="tags-indy">
                            <span>Manufacturing </span>
                          </div>
                          <div className="inner-info-left">
                            <h3>Visualize Success: Transform Your Manufacturing Operations</h3>
                            <p>Time to drive innovation across the manufacturing value chain.</p>
                            <ul>
                              <li><i className="bi bi-check-circle"></i> <span>1.	Integrated Data Management</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>2.	Demand Forecasting and Planning</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>3.	End-to-End Visibility</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Constituent Marketing Journey</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>4.	Schedule preventive maintenance activities, and minimize unplanned downtime.</span></li>
                            </ul>
                            <a href="" className="lins-indu">Know more about solutions</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-industry-five" role="tabpanel" aria-labelledby="nav-industry-five-tab">

                    <div className="tab-pane fade active show" id="nav-industry-one" role="tabpanel" aria-labelledby="nav-industry-one-tab">
                      <div className="tab-industry-contant-one">

                        <div className="right-sect">
                          <div className="d-colomn">
                            <video className="video-industr-sect" autoPlay loop muted poster="/img/h-bnner.png">
                              <source src="/video/rocket.mp4" />
                            </video>
                          </div>

                        </div>
                        <div className="left-sect">
                          <div className="tags-indy">
                            <span>Education</span>
                          </div>
                          <div className="inner-info-left">
                            <h3>Let the Future of the Education Industry Be in Your Hands </h3>
                            <p>Utilize Microsoft's Dynamics 365 suite to revolutionize and empower the education realm.</p>
                            <ul>
                              <li><i className="bi bi-check-circle"></i> <span>Inclusive learning environments </span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Future-proof the admin operations.</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Student Information Management</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Alumni Relations and Fundraising</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Administration Management </span></li>
                            </ul>
                            <a href="" className="lins-indu">Know more about solutions</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-industry-six" role="tabpanel" aria-labelledby="nav-industry-six-tab">
                    <div className="tab-pane fade active show" id="nav-industry-one" role="tabpanel" aria-labelledby="nav-industry-one-tab">
                      <div className="tab-industry-contant-one">

                        <div className="right-sect">
                          <div className="d-colomn">
                            <video className="video-industr-sect" autoPlay loop muted poster="/img/h-bnner.png">
                              <source src="/video/rocket.mp4" />
                            </video>
                          </div>

                        </div>
                        <div className="left-sect">
                          <div className="tags-indy">
                            <span>Food & Beverage</span>
                          </div>
                          <div className="inner-info-left">
                            <h3>Ease Away to Gastronomical Glory </h3>
                            <p>Manage operations, including inventory, sales, customer relationships, and financials.</p>
                            <ul>
                              <li><i className="bi bi-check-circle"></i> <span>Optimize replenishment processes.</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Recipe and Formula Management</span></li>
                              <li><i className="bi bi-check-circle"></i> <span>Production Planning and Scheduling </span></li>

                            </ul>
                            <a href="#" className="lins-indu">Know more about solutions</a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>


                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="achive-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="achive-left">
                  <h3>About Dynamics Square</h3>
                  <p>As a Gold Microsoft Dynamics Partner, we can help you revolutionise your business processes and operations while leveraging the power of the cloud, AI, and ML.</p>

                  <p>Since 2011, we have been serving our global customers, enabling them to make more profits by implementing tech-driven cloud solutions.</p>
                  <p>We are one of the trusted dynamics consultants and certified Microsoft CRM & ERP partners, helping businesses like yours to achieve exponential growth while resolving critical business problems with 100% user satisfaction</p>
                  <div className="btn-welcome">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Find out our Approach</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <figure className="acive-fig">
                  <img src="/img/micro-about-pic.png" alt="micro-about-pic" />
                </figure>
              </div>
            </div>
            <div className="row world-achive">
              <div className="col-lg-4">
                <div className="w-achive-l">
                  <figure>
                    <img src="/img/group.png" alt="group" />
                  </figure>
                </div>
                <div className="w-achive-b">
                  <h4>350+</h4>
                  <p>Microsoft-certified technical consultants are just a call away to help you out</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="w-achive-l">
                  <figure>
                    <img src="/img/manage_accounts.png" alt="manage_accounts" />
                  </figure>
                </div>
                <div className="w-achive-b">
                  <h4>150+</h4>
                  <p>Microsoft-certified technical consultants are just a call away to help you out</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="w-achive-l">
                  <figure>
                    <img src="/img/rewarded_ads.png" alt="rewarded_ads" />
                  </figure>
                </div>
                <div className="w-achive-b">
                  <h4>12+</h4>
                  <p>Microsoft-certified technical consultants are just a call away to help you out</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="home-side-new-heading">
                  <h2>See how our customers drive impact</h2>
                  <p>By implementing Dynamics 365 Business Applications</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="case-mor-link">
                  <a href="/case-studies/" target="blank">Read more success stories</a>
                </div>
              </div>
            </div>


            <div className='row'>
              <div className='col-lg-12'>
                <div className='test-slider-tab-list'>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={30}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <img src="/img/timesco-logo-new.png" alt='tbalist' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <img src="/img/cqc-logo-1.png" alt='tbalist' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <img src="/img/green-star-p-logo.png" alt='tbalist' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <img src="/img/omicron-new-logo.png" alt='tbalist' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <img src="/img/green-wireless-logo.png" alt='tbalist' />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className='test-slider-contant'>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='test-s-info'>
                            <figure>
                              <img src="/img/testimonials/Terence-Turner.png" alt="erence-Turner" />
                              <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                              <h5>Terence Turner</h5>
                              <span>General Manager</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Data Simplification & <br />Processing</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              80%
                            </div>
                            <div className='r-left'>
                              <p>Increased sales Revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='test-s-info'>
                            <figure>
                              <img src="/img/testimonials/Terence-Turner.png" alt="erence-Turner" />
                              <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                              <h5>Terence Turner</h5>
                              <span>General Manager</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Data Simplification & <br />Processing</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              80%
                            </div>
                            <div className='r-left'>
                              <p>Increased sales Revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='test-s-info'>
                            <figure>
                              <img src="/img/testimonials/Terence-Turner.png" alt="erence-Turner" />
                              <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                              <h5>Terence Turner</h5>
                              <span>General Manager</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Data Simplification & <br />Processing</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              80%
                            </div>
                            <div className='r-left'>
                              <p>Increased sales Revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='test-s-info'>
                            <figure>
                              <img src="/img/testimonials/Terence-Turner.png" alt="erence-Turner" />
                              <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                              <h5>Terence Turner</h5>
                              <span>General Manager</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Data Simplification & <br />Processing</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              80%
                            </div>
                            <div className='r-left'>
                              <p>Increased sales Revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='test-s-info'>
                            <figure>
                              <img src="/img/testimonials/Terence-Turner.png" alt="erence-Turner" />
                              <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                              <h5>Terence Turner</h5>
                              <span>General Manager</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Data Simplification & <br />Processing</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              80%
                            </div>
                            <div className='r-left'>
                              <p>Increased sales Revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>


            </div>


          </div>
        </section>





      </main>
    </>
  );
}
