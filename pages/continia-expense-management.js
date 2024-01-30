import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";

const Bccontinia = () => {


  return (
    <>
      <Head>
        <title>What is Continia Expense Management?</title>
        <meta
          name="description"
          content="Get Continia Expense Management to track and monitor corporate expenses and digitalize the entire reimbursement process."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/continia-expense-management/"
        />
      </Head>


      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Continia Expense Management for D365 Business Central</h1>
              <p>Monitor your entire corporate expenses while eliminating the chances of manual errors with Continia Expense Management.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Integrate Now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Continia-bg.png"
                alt="Continia for business central"
                width={964}
                height={452} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-9">
              <header className="section-header">
                <h2>Transform your Expense Management while Simplifying Reporting</h2>
                <p>Continia Expense Management is an ultimate solution for businesses that want a simple yet powerful expense management solution. <Link href="/continia-for-dynamics-365-business-central/"><a target="_blank">Continia integrates with Business Central</a></Link> and empowers businesses to avail of automation in tracking daily expenses, including travel and business expenses. </p>
                <p>Earlier, businesses used to report, claim, and approve all expense requests manually, resulting in a time-consuming and cumbersome process. Even employees have to manage all physical receipts, enter data, and apply for reconciliation manually, leading to errors and mistakes. </p>
                <p>Employ the Continia Expense Management app to report expenses in real-time. It comes with the tight integration of Business Central that enables you to get 100% visibility of all expenses, reports, and approvals using the admin panel. Along with such powerful capabilities, it offers an interactive and seamless user experience to all Business Central users. </p>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section className="new-style-bg" style={{ background: '#f9f9f9' }}>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <header className="section-header">
                <h2>Modernise your Expense Management Practices </h2>
                <p>Get a real-time overview of all spending, upload receipts in real-time, and quickly process all expenses for approval. These are the few features of Contina Expense Management. More powerful features are listed below: </p>
              </header>
            </div>
          </div>
          <div className="row g-5 pad2xyr">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Credit Card Transactions </h3>
                  <p>Contina has a tie-up with a major credit card provider that enables submitting automatic card transactions with Contina Online Expense Management. In the event of a missing receipt, the system automatically generates an incomplete expense report and sends it to the user. </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Per Dim</h3>
                  <p>Contina lets you calculate and monitor all your daily travel expenses, which include travel, food, and accommodation. You can easily submit all reports in real-time using the Continia Mobile Expense App or web portal to claim your expenses. </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Mileage</h3>
                  <p>The Continia Expense Management app is integrated with Google Maps, which empowers users to accurately calculate the total distance from point A to point B. It lets them apply for the correct reimbursement for the mileage they have covered without guessing or skipping any route.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Secure Storage </h3>
                  <p>Continia is a cloud-based application that empowers users to save documents, information, and receipts online without securing them manually. Just open the app, upload documents, and find them whenever required.</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Pre-approval of Expense </h3>
                  <p>You can easily apply for a settlement amount before the actual expense. Once you get approval, you can continue booking accommodations and other expenses using a pre-approved budget. After boooking is complete, your approver will be notified for final approval. </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>AI Receipt Scanner </h3>
                  <p>Continia Online Expense Management comes with AI technologies that let you read data available on receipt. Once you scan the receipt, the AI Receipt Scanner or <Link href="/continia-document-capture-with-business-central/"><a target="_blank">Continia OCR</a></Link> will scan the entire document to find the amount, data, merchant, currency, and other available data. </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Autozoom in Business Central Add-In </h3>
                  <p>This feature allows you to get the full view of receipt images directly from <Link href="/products/dynamics-365-business-central/"><a target="_blank">Business Central</a></Link>. This will save you a lot of time when you have to check various receipts one after another.</p>
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
                <h3>Streamline Expense Management with a Dedicated Mobile App </h3>
                <p>Track, monitor, and register all expenses using a mobile or web portal for quick reimbursement.  </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo Now! </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                  width={625} height={651} />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>Contina Expense Management Pricing - Cost-Effective and Simple </h2>
              </div>
              <div className="custom-p-001">
                <p>Continia Expense Management is an integration for Business Central, which means you need to purchase a <Link href="/dynamics-365-business-central-pricing-licensing/"><a target="_blank">Business Central licence</a></Link> before purchasing access to Continia. However, the licencing terms of both solutions are based on per user. Also, the Continia pricing structure is based on various factors that include modules, the number of users, organisational requirements, and more. </p>
                <p>To get detailed information, you need to contact the team at Dynamics Square UK directly at <a  href="tel:+442071932502" target="_self"> 0207 193 2502</a>. Also, you can write us a message at <a href="mailto:info@dynamicssquare.co.uk">info@dynamicssquare.co.uk</a> with any query you have. Our Business Central consultants will understand your business needs and offer you the best and most cost-effective solution. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Bccontinia;
