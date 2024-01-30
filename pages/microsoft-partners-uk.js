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
const PartnerUK = () => {
  return (
    <>
      <Head>
        <title>Microsoft Partners UK | Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics Square is a leading Microsoft partner in the UK, delivering end-to-end business solutions and expert consulting services. Do Contact us today!"
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/microsoft-partners-uk/" />
      </Head>
      <main>
        <section className="Solution-banner hero-1 hero about-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  mobile-1">
                <h1>Microsoft Partners UK </h1>
                <p>We help businesses streamline operations, accelerate revenue, and eliminate complexities to achieve great success.</p>
              </div>
              <div className="col-lg-6">
                <Image src="/img/microsoft-new-pic.png" alt="microsoft partners UK" width={751} height={566} />
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
                    <h3>You deserve the best</h3>
                  </div>

                  <div className="domain-Expertise-list domain-Expertise-list-p">
                    <ul>
                      <li>The best implementation service, the best support service, and the best system upgrade service from a renowned Microsoft Dynamics partner in the UK.</li>
                      <li>Dynamics Square is a certified Microsoft solution partner, offering its services to businesses in the UK and Europe. We are one of those Microsoft partners who have enough resources to get your business on track in no time while boosting its efficiency in all directions.</li>
                      <li>Being a Microsoft Gold Partner, our motto is to offer the best results to our customers, offering value-for-money services to all businesses, whether small or large. However, Microsoft has reformed its partner programme and replaced the silver and gold partner titles with a single title: <strong>Microsoft Solution Partner</strong></li>
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
              <p>Microsoft has designated Dynamics Square as one of the top and most reliable Dynamics partners based in the UK. This makes us committed to offering our hassle-free, cost-effective, and seamless services for all Microsoft business solutions, including <Link href="/products/microsoft-power-platform/"><a target="_blank">Microsoft Power Platform</a></Link> and <Link href="/products/microsoft-dynamics-365"><a target="_blank">Microsoft Dynamics 365</a></Link>. </p>
              <p>With extensive experience in different industries, a deep understanding of products, optimal resources, and the expertise of consultants, we would be the best option for you. The best can transform your business and push it towards sustainable success.</p>
            </header>
            <div className="row pad-3y justify-content-center" style={{paddingTop:'30px'}}>
              <div className="col-lg-12">
                <center>  <Image src="/img/service-offer-new-pic.png" alt="microsoft partner UK" width={1200} height={254}/></center>
              </div>
            </div>
          </div>
        </section>

        <section className="new-style-bg">
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
            <header className="section-header">
            <h2>Our Most Demanding Microsoft Solutions:</h2>
          </header>
            </div>
          </div>
          <div className="row g-5 pad2xyr">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img src="/img/Group1407.svg" alt="Group1407" />
                </div>
                <div className="style-grid-content">
                  <h3>Microsoft Dynamics 365</h3>
                  <p>Streamline your business by implementing the most refined Microsoft business solutions offered by Microsoft Dynamics 365. Empower your business for sustainability, growth, optimum performance, and attainable success.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img src="/img/group-2211.png" alt="Add-ons.svg" />
                </div>
                <div className="style-grid-content">
                  <h3>Power Platform</h3>
                  <p>Integrate power solutions to accelerate your business's performance while simplifying existing processes. Enhance the capabilities of a module or a department implementing advanced applications of the Power Platform, like <Link href="/products/microsoft-power-bi/"><a target="_blank">Power BI</a></Link> and <Link href="/products/microsoft-power-apps/"><a>Power Apps</a></Link>.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img src="/img/group-2164.png" alt="Group1408" />
                </div>
                <div className="style-grid-content">
                  <h3>Microsoft Azure</h3>
                  <p>Get streamlined cloud storage to enable your business to take advantage of global business opportunities. Built using AI and other advanced technologies, <Link href="/products/microsoft-azure/"><a target="_blank">Microsoft Azure</a></Link> is a ready-to-implement product to help you resolve today's challenges and build future possibilities. </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/img/Modifications.svg"
                    alt="Modifications"
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Microsoft Office 365 </h3>
                  <p>Simplify your day-to-day business operations while enabling automation for sheer business efficiency and productivity. Get smart features, intelligent functionalities, and promote collaboration across all users of your team or business.</p>
                </div>
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
                  <img src="/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>Want to supercharge your business for continuous growth? </h3>
                  <p>We can do it, as we have been doing for other businesses as well. </p>
                  <div className="m-o-t m-o-t-inde">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Let's Discuss your Business Over a Call!</span>
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
            <div className="row pdd1 justify-content-center">
              <div className="col-lg-9">
              <header className="section-header">
              <h2 style={{textAlign:'left'}}>Our Core Features:</h2>
                  <ul style={{textAlign:'left'}}>
                    <li>12+ years Partnership with Microsoft </li>
                    <li>150+ Microsoft Certified Consultants </li>
                    <li>300+ Global Clients </li>
                    <li>20+ Microsoft Product Expertise </li>
                    <li>99% Customer Satisfaction </li>
                    <li>100+ Technical Consultants </li>
                    <li>24*7/365 Unmatchable Support </li>
                  </ul>
                  <p style={{textAlign:'left',paddingTop:'20px'}}><strong>Transparency </strong></p>
                  <p style={{textAlign:'left'}}>We are obliged to offer full transparency during the entire implementation or support services so that you can know the status of the issue in real-time. This will enable you to support or accelerate the entire process. </p>
                  <p style={{textAlign:'left'}}><strong>Specilisations </strong></p>
                  <p style={{textAlign:'left'}}>Being a top Microsoft Dynamics Partner in the UK, we are specialised in resolving even complex issues in no time with minimal resources. With our team of Microsoft certified consultants from different domains, we can resolve any issue, regardless of your industry. </p>
                  <p style={{textAlign:'left'}}><strong>Client Satisfaction</strong></p>
                  <p style={{textAlign:'left'}}>From the beginning, we have had the motto to offer top-notch customer satisfaction across all our services. This is our USP and makes us stand out from the crowd. That's why we have more than 200 recurring clients (happy and satisfied) across the world. </p>
            </header>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PartnerUK;
