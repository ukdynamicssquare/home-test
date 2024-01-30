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

      <section id="hero" className="hero hero-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5  align-self-center">
              <h1 data-aos="fade-up">
                UK's Trusted <br /> Microsoft Dynamics 365 Partner
              </h1>
              <p>
                Simplify your end-to-end business processes to maximise ROI,
                agility, and growth with Microsoft cloud technology.
              </p>
              <div>
                <div className="text-center text-lg-start btn-welcome">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Book A Free Demo Today</span>
                    </a>
                  </Link>
                </div>
                <div className="bnner_inline_images">
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
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 hero-img hero-img-home"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                src="/img/banner-head-image.png"
                alt="dynamicssquare banner image UK"
                className="icon"
                width={1000}
                height={800}
                priority={true}
                quality={70}
              />
            </div>
            
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>
                  Microsoft Business Apps: Innovative Solutions to Boost
                  Business Performance
                </h2>
                <p>
                  Microsoft business applications offer various efficient
                  solutions for better ROI, including ERP (Dynamics NAV, AX),
                  CRM (Dynamics 365 CE), and Power Platform (Power BI
                  implementation).
                </p>
              </header>
            </div>
          </div>
          <div className="row gy-2">
            <div className="col-lg-4 col-md-6">
              <div className="service-box  service-box-blue">
                <div className="top">
                  <img
                    src="/img/business-center-logo.svg"
                    alt="business-center-logo"
                    className="icon"
                    width="45"
                    height="45"
                  />
                  <h3>
                    Dynamics 365 <br /> Business Central
                  </h3>
                </div>
                <p>
                  Drive an efficient business model on the cloud while keeping
                  real-time eyes on your sales insights, effectively manage your
                  finance, and ensure a sound customer experience.
                </p>
                <Link href="/products/dynamics-365-business-central/">
                  <a target="_blank" className="read-more"> 
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/finace-icons.svg"
                    alt="finace-icons"
                    className="icon"
                    width="45"
                    height="45"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Finance
                  </h3>
                </div>
                <p>
                  Simplify your finance hierarchy and boost your organisation's
                  ability to develop, modify and control budgets, make faster
                  and more informed financial decisions.
                </p>
                <Link href="/products/microsoft-dynamics-365-finance/">
                  <a target="_blank" className="read-more">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/supplychain-logo.svg"
                    alt="supplychain-logo"
                    className="icon"
                    width="45"
                    height="45"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Supply Chain
                  </h3>
                </div>
                <p>
                  Optimise resources, maximise operational efficiency, and
                  accelerate time to market while keeping real-time eyes in your
                  end-to-end supply chain operations.
                </p>
                <Link href="/products/dynamics-365-supply-chain-management/">
                  <a className="read-more" target="_blank">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/Sales_scalable.svg"
                    alt="Sales_scalable"
                    className="icon"
                    width="45"
                    height="45"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Sales
                  </h3>
                </div>
                <p>
                  Boost your sales, build better customer relationships, and
                  maximise your revenue outcomes through Microsoft Dynamics 356
                  for Sales.
                </p>
                <Link href="/products/microsoft-dynamics-365-sales/">
                  <a className="read-more" target="_blank">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/powerbilogo.png"
                    alt="Powerapps_power-apps"
                    className="icon"
                    width="45"
                    height="45"
                  />
                  <h3>
                    Microsoft <br />
                    Power BI
                  </h3>
                </div>
                <p>
                  Steadily monitor your business activities with power-packed
                  data visualisation and real-time reporting insights to make
                  informed decisions for better productivity ahead.
                </p>
                <Link href="/products/microsoft-power-bi/">
                  <a className="read-more" target="_blank"> 
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                    width="45"
                    height="45"
                  />
                  <h3>
                    Internet Of <br />
                    Things
                  </h3>
                </div>
                <p>
                  Outreach more efficient, scalable, and secure data
                  distribution practices by simply integrating cloud-equipped,
                  modernised, and seamless data-driven solutions with Microsoft
                  Azure.
                </p>
                <Link href="/products/azure-iot-internet-of-things/">
                  <a className="read-more" target="_blank">
                    <span>Learn More...</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serve-more-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="more-new-inner pad12">
                <h3>Looking for a Dynamics 365 implementation partner?</h3>
                <p>
                  We can help you get a stress-free and cost-effective Dynamics
                  365 implementation to minimise efforts and maximise outcomes
                  that bring continuous growth for your business.
                </p>
                <div className="cla-brn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn btn-md btn-danger btn-custmm"
                    >
                      Request a Demo <span className="screen-reader-text">Details</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <hr className="ds-nnn-mo" />
            <div className="col-lg-6">
              <div className="more-new-inner pad13">
                <h3>Want to know what more Dynamics 365 can do?</h3>
                <p>
                  Microsoft Dynamics 365 can be your steppingstone for rapid
                  business growth and scalability to your business powered by
                  Microsoft cloud technology. Want Dynamics 365 in action?
                </p>
                <div className="cla-brn">
                  <Link href="/products/microsoft-dynamics-365/">
                    <a className="btn btn-md btn-danger btn-custmm" target="_blank">
                      Learn More <span className="screen-reader-text">Details</span>
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
          <div className="row ns-bdd">
            <div className="col-lg-12">
              <div className="new-hh">
                <h2>What Your Microsoft Partner can Deliver:</h2>
                <p>
                  With more than 11 years of experience, we have a proven record
                  of scaling businesses to new <br /> heights with seamless and
                  highly scalable services.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our-serv-new-de">
                <img src="/img/imp-1.png" alt="Implementation Services" />
                <h3>Implementation</h3>
                <p>
                  Our stress-free Dynamics 365 implementation services, catered
                  by a proactive team of Microsoft consultants, offer customised
                  solutions with superior technical expertise to scale your
                  business.
                </p>
                <Link href="/our-services/dynamics-365-implementation-services/">
                  <a target="_blank">Learn More <span className="screen-reader-text">Details</span></a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our-serv-new-de">
                <img src="/img/imp-2.png" alt="Upgrade" />
                <h3>Upgrade</h3>
                <p>
                  Modernise your legacy system by leveraging new capabilities to
                  revolutionise your business with our Dynamics 365 upgrade
                  services. Get automatic updates, seamless integrations, and
                  better RoI.
                </p>
                <Link href="/our-services/dynamics-365-upgrade-services/">
                  <a target="_blank">Learn More <span className="screen-reader-text">Details</span></a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our-serv-new-de">
                <img src="/img/imp-3.png" alt="Support" />
                <h3>Support</h3>
                <p>
                  Avail our comprehensive and adaptive remote or on-site
                  Dynamics 365 support for all Microsoft business applications,
                  including NAV, GP, AX, Business Central, Finance & Supply
                  Chain, and Power BI.
                </p>
                <Link href="/our-services/dynamics-365-support-services/">
                  <a target="_blank">Learn More <span className="screen-reader-text">Details</span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services bg-shape">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Become an Industry leader</h2>
            <p>By implementing Dynamics 365 Business Applications</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/StartUp-icons.png"
                    width="64"
                    height="64"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Startups</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Startups</h3>
                  <p>
                    With Microsoft Dynamics Business Solutions, startups can
                    streamline their business efficiency and ensure levelling up
                    their business in a shorter time span.
                  </p>
                  <Link href="/industries/startups/">
                    <a target="_blank" className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More <span className="screen-reader-text">Details</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Not-for-Profit-icons.png"
                    width="64"
                    height="64"
                    className="boxshadow"
                    alt="Not for Profit"
                  />
                  <h3>Not for Profit</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Not for Profit</h3>
                  <p>
                    Our experienced Dynamics consultants in the UK can help to
                    streamline your end-to-end non-profit practices across your
                    organisation or divisions.
                  </p>
                  <Link href="/industries/microsoft-cloud-for-nonprofit/">
                    <a target="_blank" className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More <span className="screen-reader-text">Details</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/E-Commerce-icons.png"
                    width="64"
                    height="64"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>E-Commerce</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>E-Commerce</h3>
                  <p>
                    Automate your entire e-commerce operations from ordering and
                    inventory management to supply chain efficiency to final
                    customer delivery with Dynamics 365 E-commerce.
                  </p>
                  <Link href="/industries/ecommerce/">
                    <a target="_blank" className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More <span className="screen-reader-text">Details</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Manufacturing-Distribution-icons.png"
                    width="64"
                    height="64"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Manufacturing & Distribution</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Manufacturing & Distribution</h3>
                  <p>
                    By eliminating redundancies, our experts in the United
                    Kingdom can boost efficiency in your manufacturing &
                    distribution model through D365 Business Applications.
                  </p>
                  <Link href="/industries/microsoft-cloud-for-manufacturing/">
                    <a target="_blank" className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More <span className="screen-reader-text">Details</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Professional-Services-icons.png"
                    width="64"
                    height="64"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Professional Services</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Professional Services</h3>
                  <p>
                    We help to automate and streamline your professional
                    services from managing finances, customers, and clients to
                    projects while reducing costs and equipping efficiency.
                  </p>
                  <Link href="/industries/professional-services/">
                    <a target="_blank" className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More <span className="screen-reader-text">Details</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Food-and-Beverages-icons.png"
                    width="64"
                    height="64"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Food & Beverages</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Food & Beverages</h3>
                  <p>
                    We deep-dive your industry-specific needs and implement a
                    next-generation Microsoft D365 Solution delivering true
                    values to your food & beverages business domain.
                  </p>
                  <Link href="/industries/food-and-beverages/">
                    <a target="_blank" className="boxshadow kallyas-button kallyas-button-nn">
                      Learn More <span className="screen-reader-text">Details</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Health-Check">
        <div className="container">
          <header className="section-header">
            <h2>
              Dynamics 365 <br /> System Health Check
            </h2>
            <p>
              Enlarge your business capabilities and ensure your business <br />
              continuity with our Dynamics 365 system health check program.
            </p>
          </header>
          <div className="row">
            <div className="col-lg-6 aos-init align-self-center">
              <Image
                src="/img/system-health-check.png"
                className="system-health-check"
                alt="Dynamics 365 System Health Check"
                width={553}
                height={531}
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content align-self-center">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Considering your present business requirements and future
                      business anticipations, we diagnose your real-time
                      requirements demonstrating your future approach.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Consultants at Dynamics Square provide free system
                      health-check to discover the optimum and customised
                      Microsoft Dynamics 365 needs as per your distinct business
                      context.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Now, it's time to decide whether you want to stay with
                      your existing equipped system or would love to schedule a
                      Microsoft Dynamics Demo to implement a modern-equipped
                      system.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <Link href="/free-dynamics-365-system-health-check/">
                <a
                  className="read-more"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  target="_blank"
                >
                  Get Free System Health Check
                  <i className="bi bi-long-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom07">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="side-heading-custom-01">
                <h2>About Dynamics Square</h2>
              </div>
              <div className="custom-p-001 custom-p-009">
                <p>
                  As a Gold Microsoft Dynamics Partner, we can help you
                  revolutionise your business processes and operations while
                  leveraging the power of the cloud, AI, and ML.
                </p>
                <p>
                  Since 2011, we have been serving our global customers,
                  enabling them to make more profits by implementing tech-driven
                  cloud solutions.
                </p>
                <p>
                  We are one of the trusted dynamics consultants and certified
                  Microsoft CRM & ERP partners, helping businesses like yours to
                  achieve exponential growth while resolving critical business
                  problems with 100% user satisfaction.{" "}
                </p>
                <Link href="/about-us/">
                  <a target="_blank">Find Out Our Approach</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/about-home-left.png"
                  alt="about-home-left"
                  width={489}
                  height={514}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" className="counts counts-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-user-check.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  {/* <span>
                    <AnimatedNumber
                      component="text"
                      value={135}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span> */}
                  <span className="inner">150+</span>
                  <p>Microsoft Consultants</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-award.png"
                    alt="Icon awesome-award"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  {/* <span>
                    <AnimatedNumber
                      component="text"
                      value={11}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span> */}
                  <span className="inner">12+</span>
                  <p>Years of Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-globe-asia.png"
                    alt="Icon awesome-globe-asia"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  {/* <span>
                    <AnimatedNumber
                      component="text"
                      value={6}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span> */}
                  <span className="inner">6+</span>
                  <p>Global Presence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon ionic-md-thumbs-up.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  {/* <span>
                    <AnimatedNumber
                      component="text"
                      value={99}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span> */}
                  <span className="inner">99%</span>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>
                  What Our Clients <br /> Have To Say About Us
                </h2>
              </div>
              <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper test-client-page"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/img/testimonials/Terence-Turner.png"
                              className="testimonial-img"
                              alt="Terence-Turner"
                              width="125"
                              height="125"
                            />
                            <div className="imginner">
                              <img src="/img/Icon metro-quote.png" alt="metro-quote" width="51" height="41" />
                            </div>
                            <p>
                              Dynamics Square Team provided us a top-level
                              service. Well trained staff as well as excellent
                              support when needed. Very professional and
                              trustworthy.
                            </p>
                            <h3>Terence Turner</h3>
                            <h4>General Manager</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/img/testimonials/Nicolas-Hopwood.png"
                              className="testimonial-img"
                              alt="Nicolas-Hopwood"
                              width="125"
                              height="125"
                            />
                            <div className="imginner">
                              <img src="/img/Icon metro-quote.png" alt="metro-quote" width="51" height="41" />
                            </div>
                            <p>
                              The team at Dynamics Square helped us in upgrading
                              our erp system to the latest version of D365
                              Business Central resulting in a successful rollout
                              to our staff.
                            </p>
                            <h3>Nicolas Hopwood</h3>
                            <h4>Facilities Manager</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/img/testimonials/Jonathan-W.png"
                              className="testimonial-img"
                              alt="Jonathan-W.png"
                              width="125"
                              height="125"
                            />
                            <div className="imginner">
                              <img
                                src="/img/Icon metro-quote.png"
                                alt="metro-quote"
                                width="51" height="41"
                              />
                            </div>
                            <p>
                              We have worked with Dynamics Square since 2019.
                              Our working relationship has built during this
                              period, and we have found them to be very
                              professional
                            </p>
                            <h3>Jonathan W</h3>
                            <h4>Technical Director</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="testimonials-bg">
                <div className="testimonials-rigt-iner">
                  <Image
                    src="/img/testmonial-side-pic.png"
                    className="testmonial-side-pic"
                    alt="testmonial"
                    width={802}
                    height={764}
                  />
                  {/* <div className="testimonials-rigt-iner-1">
                    <img src="/img/test-side-1.jpg" alt="" />
                  </div>
                  <div className="testimonials-rigt-iner-2">
                    <h4>250+</h4>
                    <span>
                      Happy Clients
                      <br />
                      Worldwide
                    </span>
                  </div>
                  <div className="testimonials-rigt-iner-3">
                    <img src="/img/test-side-3.jpg" alt="" />
                  </div>
                  <div className="testimonials-rigt-iner-4">
                    <img src="/img/test-side-2.jpg" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="casestudys" className="casestudys ">
        <div className="container" data-aos="fade-up">
          <div className="row  gy-4">
            <div className="col-lg-5 align-self-center">
              <Image
                src="/img/case-study-side-banner.png"
                alt="case-study-side-banner"
                width={640}
                height={592}
              />
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>Glimpse Of What We Delivered</h2>
                <p>Dynamics 365 Case Stories</p>
              </div>
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper casestudys-sled-1"
              >
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <p>
                        A leading British based manufacturer of Military
                        Equipment implemented Microsoft Dynamics 365 Business
                        Central to streamline their finance and inventory
                        management process.
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>2X</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                        <div className="case-content">
                          <p>80%</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/nav2009R2-to-business-central/">
                          <a target="_blank" className="btn btn-md btn-custom-1">Read More <span className="screen-reader-text">Details</span></a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                
                      <p>
                        UK's leading fragrance, skincare, cosmetics, and
                        haircare wholesaler was looking to improve its
                        operational efficiencies with Microsoft Dynamics NAV
                        2018. Discover now.
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>4x</p>
                          <span>Improved Inventory System</span>
                        </div>
                        <div className="case-content">
                          <p>100%</p>
                          <span>Alliance with HMRC</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/nav09-nav18-upgrade/">
                          <a target="_blank" className="btn btn-md btn-custom-1">Read More <span className="screen-reader-text">Details</span></a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <p>
                        British-based Hygienic Disposable Cleaning & Wiping
                        Products wholesaler wanted to up and cross sell to
                        increase the sales volume with customers. Read how they
                        did it!
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>10x</p>
                          <span>Improved Customer Experience</span>
                        </div>
                        <div className="case-content">
                          <p>50%</p>
                          <span>Increased Sales Revenue</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/nav-2016-support-services/">
                          <a target="_blank" className="btn btn-md btn-custom-1">Read More <span className="screen-reader-text">Details</span></a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
