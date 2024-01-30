import Link from "next/link";
import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Blog from "../../components/Blog";
import TimerModal from "../../components/TimerModal";
const FinanceOperations = () => {



  const [showItems, setShowItems] = useState(5);
  const data = [
    {
      id: "faq1",
      title: "1. What is included in Dynamics 365 Finance and Operations?",
      content:
        "<p>Dynamics 365 Finance and Operations is an ideal application for growing businesses to manage all their financing needs. It has various features, including accounting, finance, budgeting, project management, and more.</p>",
    },
    {
      id: "faq2",
      title:
        "2. Do we need a minimum number of Dynamics 365 Finance & Operations licenses?",
      content:
        '<p>There is a minimum of 20 full users for the Finance and Operations apps. Keep in mind that it must be 20 licenses for one app, and not 10 of each or any other combination.</p>'
    },
    {
      id: "faq3",
      title:
        "3. What kind of system software is Dynamics 365 for F and O?",
      content: "<p>Microsoft Dynamics 365 for Finance and Operations is one of the most powerful applications to streamline all financial and operational processes. With cloud computing, it becomes more powerful, letting users connect with the operations from anywhere and anytime to gather actionable insights.</p>"
    },
    {
      id: "faq4",
      title: "4. How much is Dynamics 365 F&O?",
      content: "<p>Generally, the full user license cost is £180/user/month. This isn't fixed for all users. The accurate cost depends on a few factors, like license type, number of users, app type, team member license, and more. However, the team at Dynamics Square can help you get an accurate amount of cost.</p>"
    },
    {
      id: "faq5",
      title: "5. Which are the major functions managed by Dynamics 365 Finance and Operations?" ,
      content: "<p>There are various functions that aid the financing and operations of an organisation. Some functions are inventory management, cost management, product information management, transportation management, and more.</p>"
    },
    {
      id: "faq6",
      title: "6. Is there any training available by Microsoft to learn D365 Finance and Operation?",
      content: "<p>Microsoft doesn't provide one-to-one training to its end users. However, there is lots of documentation and learning content available on Microsoft's official website. Also, the implementation partner or Dynamics 365 Finance and Operations support partner can help you understand this application.</p>"
    },
    {
      id: "faq7",
      title: "7. What are the key features of D365 for Finance and Operation?",
      content: "<p>When it comes to features, it is far superior to its competitors. Some of the major key features are accounts receivable, fixed assets, general ledger functionality, tax, invoices, billing, and so on.</p>"
    },
    {
      id: "faq8",
      title:
        "8. Can I upgrade my Dynamics AX to D365 F&O?",
      content: "<p>Yes, you can easily upgrade to D365 F&amp;O. The Dynamics 365 Finance and Operations is evolved from <a target='_blank' href='/products/microsoft-dynamics-ax/'>Dynamics AX</a> (the old version) with added functionalities to cope with the ways of modern businesses. You can contact any <a target='_blank' href='/'>Microsoft-certified gold partner</a>, like Dynamics Square, to upgrade your Dynamics AX.</p>"
    },
    {
      id: "faq9",
      title:
        "9. How do I get the trial version of D365 for F&O?",
      content: "<p>If you are new to D365 for F&O, you can easily sign-up for a 30-day trial. However, access will be restricted as compared to a full-user license. If you are an existing customer, you can sign-up for a customer trial and create LCS (Lifecycle Service Projects) to create a development environment within it.</p>"
    },
    {
      id: "faq10",
      title: "10. Does D365 for F&O support integrations? ",
      content: "<p>Yes, D365 for Finance and Operations allows native as well as third-party integration using APIs. Depending on the type of integration, they can help businesses with error handling, creating and updating product information, recommending a suitable solution, checking the status of customer orders, and more.</p>"
    },
    {
      id: "faq11",
      title: "11. What is D365 Finance and Operations used for? ",
      content: "<p>D365 Finance and Operations is a cloud-based ERP solution built for medium and large-sized organisations to track all processes of inventory and finance. Currently, the license is available with two different apps, which are <a href='/products/microsoft-dynamics-365-finance/'>Dynamics 365 Finance</a> and <a target='_blank' href='/products/dynamics-365-supply-chain-management/'>Dynamics 365 Supply Chain Management</a>.</p>"
    },
    {
      id: "faq12",
      title: "12. Does D365 for Finance and Operations fit for my organization? ",
      content: "<p>This is the best application available to streamline all financial processes if you belong to a small or medium-sized organization. Also, it helps the users monitor day-to-day operations tasks to make informed decisions whenever required.</p>"
    },
    {
      id: "faq13",
      title: "13. Does D365 for F&O enable businesses to adapt to modern compliance?",
      content: "<p>To cope with the ways of modern business, Microsoft regularly updates the features and functionality of D365 for F&O. Generally, Microsoft releases updates two times a year and updates the cloud servers automatically without any obstruction in the current process.</p>"
    },
    {
      id: "faq14",
      title: "14. Can I implement D365 F&O?",
      content: "<p>It would not be possible unless you had intense knowledge of coding and implementing the technologies on cloud servers. However, a Microsoft support partner like Dynamics Square can easily help you implement this application. To find out more, you can <a target='_blank' href='/contact-us/'>book a demo</a> with us.</p>"
    },
    {
      id: "faq15",
      title: "15. How long does it take to implement Dynamics 365 Finance & Operations?",
      content: "<p>When it comes to implementing Microsoft Dynamics 365 Finance and Operations, the average time it takes is between 6-8 months (It can go up to 1 year depending upon the complexity of the business.). This can be broken down into three phases:</p><p><b>Planning and Design:</b> During the Planning and Design phase, you'll need to gather your requirements and create a project plan. This is where you'll also decide on your implementation methodology.</p><p><b>Implementation and Training:</b> During the Implementation and Training phase, you'll configure the system and train your users.</p><p><b>Go Live and Support:</b> Finally, during the GO Live and Support phase, you'll go live with the system and provide ongoing support.</p>"
    },
    {
      id: "faq16",
      title:
        "16. Which should I implement, Microsoft Dynamics 365 F and O or Dynamics Business Central?",
      content: "<p>There isn't any determined answer to this, and it depends on the business requirement. If you need a fully-fledged <a target='_blank' href='/products/microsoft-dynamics-erp/'>ERP solution</a> with fewer features like CRM, go for <a target='_blank' href='/products/dynamics-365-business-central/'>Dynamics BC</a>, and if you need an application to manage finance and accounting only and already have another ERP, go for Dynamics 365 F &amp; O.</p>"
    },
    {
      id: "faq17",
      title: "17. How do I get post-installation or implementation support?",
      content: "<p>With growing businesses, errors come, whether simple or complex. But, whatever the situation, your installation partner or implementation partner will provide the needed support to get your business back on track.</p>"
    },
    {
      id: "faq18",
      title:
        "18. How do I find the right Dynamics Finance and Operations consultant?",
      content: "<p>This process requires much research because the partner will help you from implementation to providing timely support. Before choosing the right consultant, you must match different parameters, like experience, availability of support, cost, service charges, previous work, industry type, and more.</p>"
    },
    {
      id: "faq19",
      title: "19. What type of deployment does MS Dynamics Finance and Operations provide?",
      content: "<p>Three deployment options are available: <a target='_blank' href='/microsoft-dynamics-365-cloud-vs-on-premise/'>on-premises</a>, cloud, and hybrid. The installation and service cost of on-premises deployment is much higher compared to cloud and hybrid deployment, and cloud deployment is the cheapest option.</p>"
    },
    {
      id: "faq20",
      title: "20. Do I need to pay extra besides the subscription fee for the cloud deployment option?",
      content: "<p>Firstly, you must pay the application implementation cost, which totally depends on the business requirements. Besides this, you have to pay only a monthly subscription fee already decided by Microsoft and available on the website too.</p>"
    },
    {
      id: "faq21",
      title: "21. Can Dynamics 365 Finance and Operations handle multi-currencies?",
      content: "<p>This application can manage multi-currency using Electronic Messaging and Electronic reporting features. Also, it enables the business to share the data with regulatory authorities as required by the government in some countries. </p>"
    }
  ];

  const handleLoadMore = () => {
    setShowItems(showItems + 4);
  };


  return (
    <>
      <Head>
        <title>
          Microsoft Dynamics 365 Finance and Operations | ERP Solutions UK
        </title>
        <meta
          name="description"
          content="Consider Dynamics Square as your D365 Finance and operations implementation partner to streamline and enhance your business performance and visibility."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance-operations/" />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365 <br />
                Finance & Operations
              </h1>
              <p>Implementing D365 Finance and Operations is the perfect option for large or diversified businesses that need to control and streamline their finances, inventory, and supply chain operations through digital means. </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Talk to F&O Expert</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Dynamics-365-Finance-Banner.png"
                alt="Dynamics-365-Finance & operations-Banner"
                width={868}
                height={487}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom001">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>
                  What is D365 Finance and Operations?
                </h2>
              </div>
              <div className="custom002">
                <p>
                  Microsoft Dynamics 365 for Finance and Operations, Enterprise
                  edition, is Microsoft's business application for enterprises
                  that enables people to make smarter decisions quickly through
                  an intuitive user interface that provides access to real-time
                  insights and intelligence. D365 Finance and Operations enables
                  business to transform by delivering proven business logic and
                  enabling them to redesign their business processes faster so
                  they can innovate, get quick time to value to stay ahead of
                  the competition.It gives businesses the flexibility to grow at
                  their own pace and do business nearly anywhere, anytime.
                </p>
                
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
              <ul>
                  <li>
                    <strong>MAKE SMARTER DECISIONS</strong>
                    <p>
                      Unifying financial and business operations enables
                      businesses to deliver real-time visibility across their
                      organization for better and faster decisions.
                    </p>
                  </li>
                  <li>
                    <strong>TRANSFORM BUSINESS FASTER</strong>
                    <p>
                      Transforming businesses by easily redesigning processes
                      without disrupting operations is crucial for organizations
                      to stay competitive.
                    </p>
                  </li>
                  <li>
                    <strong>GROW AT YOUR PACE</strong>
                    <p>
                      Helping businesses grow at their own pace is about giving
                      them the choice and flexibility to modernize their
                      organizations at the pace that works for them with the
                      ability to do business anywhere, anytime.
                    </p>
                  </li>
                </ul>
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
                      src="/img/proffesional service side.png"
                      className="fix-im"
                      alt="proffesional service side"
                      width={553} height={541}
                    />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>
                Get started with Dynamics 365 for Finance and Operations free Demo!
                </h2>
              </div>
              <div className="custom-p-001">
                <p>All decision-makers and business professionals want the best for their businesses, right? So, before choosing a solution, getting an insightful demo is always a good option. It will let you analyse the benefits of all the tools and capabilities that can help your business grow.</p>
                <p>So why not try it out and see how Dynamics 365 Finance and Operations can help your business grow?</p>
              <div className="text-lg-start">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Microsoft Dynamics 365
              <br />
              Finance and Operations Features
            </h2>
            <p>
              Let's Take A Closer Look At How Finance And Operations Can Help
              You To Take Smarter Decisions, Transform Business Faster, And Grow
              At Your Pace.
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img src="/img/Budget.svg" alt="icons" width="40" height="40" />
                        </div>
                        <span>Finance Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Provide a fast and efficient way to register financial
                          transactions, manage relationships between
                          subsidiaries and the parent organization, manage
                          internal cost accounting, currency translation, and
                          reports in any supported currency.
                        </p>
                        <ul>
                          <li>
                            <p><strong>General Ledger</strong></p>
                            <br />
                            Financial accounting with flexible configuration
                            options for setup and maintenance of general ledger.
                            Share data such as chart of accounts or currency
                            exchange rates across multiple legal entities, and
                            create flexible journal entries for all account
                            types. Use Financial period close workspace to track
                            your financial closing processes across companies,
                            areas, and people.
                          </li>
                        </ul>
                        <ul>
                          <li>
                           <p> <strong>Budget Planning</strong></p>
                            <br />
                            Manage your organization's budget, including
                            flexible configuration options, instant calculation
                            of available budget funds, pooling of budgets, and
                            budget workflows for review and approval, with
                            configurable budget planning supporting a flexible
                            chart of accounts and dimensions, custom-defined
                            process configurations, workflows, and the use of
                            Microsoft Excel to create a budget planning
                            worksheets.
                          </li>
                          <li>
                            <p><strong>
                            Financial Reporting
                              <br />
                            </strong></p>
                            Financial statements enable a custom reporting
                            structure and mapping of ledger accounts or
                            dimensions to the reporting structures, and to
                            comply with legal requirements and international
                            accounting standards. They include balance sheet,
                            income statement, and cash flow statement.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img src="/img/Supply-chain.png" alt="icons" width="40" height="40" />
                        </div>
                        <span>Supply Chain Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Connect sales and purchasing processes with logistics,
                          production, and warehouse management to provide
                          visibility and management throughout the supply chain.
                          Manage distributed organizations with inter-company
                          and multi-site capabilities.
                        </p>
                        <ul>
                          <li>
                            <p><strong>Vendor Collaboration</strong></p>
                            <p>
                              Streamline vendor collaboration to respond to
                              business needs and customer demands. Dynamics 365
                              for Finance and Operations enables vendors to work
                              with purchase order, invoice, and consignment
                              inventory information. Vendors can review, accept
                              and reject purchase orders, review the status of
                              invoices and online payment. Users can create
                              purchase order invoices and upload invoice
                              documents to a portal.
                            </p>
                          </li>
                          <li>
                            <p><strong>Inventory Management</strong></p>
                            <p>
                              Track items by inventory dimensions, including
                              site, warehouse, pallet, location, batch, and
                              serial number. Take advantage of multiple
                              inventory control systems and inventory valuation
                              methods including first in/ first out, last in/
                              first out, standard cost, moving, and weighted
                              average.
                            </p>
                          </li>
                          <li>
                            <p><strong>Multi-site Warehouse Management</strong></p>
                            <p>
                              Manage storage locations and material handling
                              within warehouses. Apply advanced inbound
                              algorithms using multiple warehouse zones and
                              replenishment strategies. Optimize picking with a
                              choice of picking methods. Track inventory on hand
                              per warehouse.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img src="/img/Stock-Management.png" alt="icons" width="40" height="40" />
                        </div>
                        <span>Stock Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Get a transparent view of your entire inventory and goods to make your business profitable and efficient. It enables the business to maintain an organised supply chain while maintaining optimal stock levels. Also, you can eliminate all chances of stock mismanagement. </p>
                        <ul>
                          <li>
                           <p><strong>Cost Cutting</strong></p>
                            <p>It lets you order out-of-stock goods in the right quantity and at the right time to continue business without any financial loss. </p>
                          </li>
                          <li>
                           <p><strong>Maximised Labour</strong></p>
                            <p>Eliminate the causes of missing and finding items during peak business hours to enhance productivity and business efficiency.</p>
                          </li>
                          <li>
                            <p><strong>Organise Warehouse Space</strong></p>
                            <p>D365 Finance and Operations will let you save and organise the area in the warehouse to make warehousing more efficient.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img src="/img/project-management.png" alt="icons" width="40" height="40" />
                        </div>
                        <span>Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Manage a project, streamline its different activities, allocate resources, generate financial results, and achieve planned results with the project management module of Dynamics 365 Finance and Operations. Regardless of the complexity, this feature can be used in different industries to track the progress of all projects. In general, there are three phases of project management:</p>
                        <ul>
                          <li>
                           <p><strong>Initiate a Project </strong></p>
                            <p>Start a project by giving a quotation of materials, labour, work estimates, billing terms, a project agreement, and other expenses. </p>
                          </li>
                          <li>
                           <p><strong>Execute a Project </strong></p>
                            <p>Record the work on timesheets and build expense reports to perform a detailed analysis of the entire project. Also, you can track the budget, procure materials, and bill customers as per the invoice. </p>
                          </li>
                          <li>
                            <p><strong>Analyse a Project </strong></p>
                            <p>Evaluate the project based on different parameters that include expense reports, inventory transactions, allocated budgets, utilisation rate, and success rate. </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnews">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img src="/img/Project.svg" alt="icons" width="40" height="40" />
                        </div>
                        <span>Manufacturing</span>
                      </button>
                    </h2>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Designed for ease of implementation and adoption,
                          Microsoft Dynamics 365 for Finance and Operations
                          delivers insights at all levels of the organization to
                          support innovation, speeds response to changing
                          constraints, and improves quality and customer
                          satisfaction. Microsoft Dynamics supports integration
                          with existing systems, lowering your total cost of
                          ownership and future-proofing your investment through
                          continuous delivery of new innovation.
                        </p>
                        <ul>
                          <li>
                            <p><strong>Material And Capacity Planning</strong></p>
                            <p>
                              Optimize production and materials planning,
                              forecasting, and scheduling. Simultaneously
                              schedule materials and capacity. Calculate
                              available-to-promise (ATP) and capable-to-promise
                              (CTP) deliveries.
                            </p>
                          </li>
                          <li>
                            <p><strong>Production Scheduling</strong></p>
                            <p>
                              Use finite or infinite scheduling, forward and
                              backward from various dates. Quickly (re)schedule
                              jobs and simulate alternatives by dragging Gantt
                              chart items. Resolve scheduling overloads by
                              reassigning operations to alternate work centers.
                              Optimize scheduling across the organization with a
                              unified resource model and scheduling engine.
                            </p>
                          </li>
                          <li>
                            <p><strong>Demand Forecasting</strong></p>
                            <p>
                              Demand Forecasting is a lightweight, yet powerful
                              tool that enables organizations to forecast based
                              on historical data, leverage the power of Azure
                              Machine Learning, adjust the forecasts using
                              Microsoft Excel, and import the values into
                              Microsoft Dynamics 365 for Finance and Operations
                              forecast models.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingsix">
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
                            src="/img/services.png"
                            alt="icons" width="40" height="40"
                          />
                        </div>
                        <span>Services</span>
                      </button>
                    </h2>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <p><strong>Cloud Service</strong></p>
                            <p>
                              Microsoft Dynamics 365 helps IT professionals
                              manage business growth, mitigate risk, improve
                              organizational productivity, and deliver amazing
                              customer experiences through tools that improve
                              the speed of doing business.
                            </p>
                          </li>
                          <li>
                            <p><strong>Mobility</strong></p>
                            <p>
                              The Dynamics 365 for Finance and Operations mobile
                              app empowers your organization to mobilize your
                              business processes. Enable employees to perform
                              work anytime, anywhere to keep your customers
                              happy, increase productivity, and drive business
                              profitability.
                            </p>
                          </li>
                          <li>
                            <p><strong>Workspace</strong></p>
                            <p>
                              D365 for Finance and Operations provides powerful
                              user and role-based work-spaces
                              <br />
                              that connects your people with data and processes
                              to make better decisions.
                            </p>
                          </li>
                        </ul>
                        <p>
                          <strong>
                          Integrated, Flexible And Scalable Solutions
                          </strong>
                        </p>
                        <p>Start with D365&nbsp; Finance and Operations, then add
                          more Dynamics 365 modules as you grow.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingsix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/Asset-Management.png"
                            alt="icons" width="40" height="40"
                          />
                        </div>
                        <span>Asset Management</span>
                      </button>
                    </h2>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>Manage all assets and jobs while establishing a stable connection with finance and operations departments. It will enable you to maintain different assets of the organisation, which include machines, equipment, and resources. </p>
                        <ul>
                          <li>
                            <p><strong>Fault Management </strong></p>
                            <p>Track all machines and their faults until they become functional again while maintaining the work order. </p>
                          </li>
                          <li>
                            <p><strong>Work Order Management </strong></p>
                            <p>Maintain all work order jobs and workflow using the advanced capabilities of Dynamics 365 Finance and Operations. Also, this lets the users automate work order management while maintaining an efficient lifecycle state. </p>
                          </li>
                          <li>
                            <p><strong>Scheduling </strong></p>
                            <p>Schedule the work order jobs, maintenance processes, and asset management by building a scheduling calendar. </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingsix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/warehouse-management.png"
                            alt="icons" width="40" height="40"
                          />
                        </div>
                        <span>Warehouse Management</span>
                      </button>
                    </h2>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>From manufacturing to distribution, manage the entire warehouse operations of a business without any hassle. With advanced features, you can streamline all core business processes, which include quality control, manufacturing, purchase, and sales.</p>
                        <ul>
                          <li>
                            <p><strong>Receive Goods</strong></p>
                            <p>Receive the goods based on the requested quantity. Report any faults and quality issues within the application to ensure customer satisfaction. </p>
                          </li>
                          <li>
                            <p><strong>Move Items </strong></p>
                            <p>Move items from one location to the correct location for ease of findability. </p>
                          </li>
                          <li>
                            <p><strong>Storage in the Warehouse </strong></p>
                            <p>Store the items safely while marking the exact location for fast picking whenever required. </p>
                          </li>
                          <li>
                            <p><strong>Picking the Right Product </strong></p>
                            <p>Pick the item to fulfil the order from the respected location to enhance the warehouse's effectiveness. </p>
                          </li>
                          <li>
                            <p><strong>Packing for Delivery </strong></p>
                            <p>Perform the safe packing of items before the shipment to ensure secure delivery. </p>
                          </li>
                          <li>
                            <p><strong>Shipping </strong></p>
                            <p>Send the shipping details to the transportation company as well as the customer so that they can receive them on time. </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="call-to-action-center hero-4" style={{padding:'40px 0px'}}> 
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="call-to-action-content">
                <h3>Get 100% process visibility and make informed decisions with Dynamics 365 Finance and Operations</h3>
              
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Sign Up for Request a demo! </span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
            <header className="section-header">
            <h2>Microsoft Dynamics 365 for Finance and Operations: What's New? </h2>
            <p>D365 F&O has come a long way from a simple accounting software known as IBM Axapta to a powerful ERP solution as Dynamics 365 Finance and Operations. But the modern ways of doing business require more capabilities to deal with changing requirements and increasing global complexity.</p>
            <p>Microsoft recognises the fact and has split D365 F&O into two separate applications, <Link href="/products/microsoft-dynamics-365-finance/"><a target="_blank">Dynamics 365 Finance</a></Link> and <Link href="/products/dynamics-365-supply-chain-management/"><a target="_blank">Dynamics 365 Supply Chain Management</a></Link>. Nonetheless, most customers, business owners, and consultants are familiar with it as a whole; Finance and Operations (D365 F&O). </p>
          </header>
            </div>
          </div>
          <div className="row g-5" style={{paddingTop:'60px'}}>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/finance-icns-1.svg" alt="finance-icns-1" width={94} height={94} />
                </div>
                <div className="style-grid-content">
                  <h3>Dynamics 365 Finance </h3>
                  <p>It is an ERP solution focused on streamlining finance operations while offering sufficient tools to manage other business operations as well. It can increase your decision-making capabilities, predict future outcomes, automate core operations, reduce operational costs, and help you scale the business on a global platform. Some of its features are:</p>
                  <ul>
                    <li>Cash Management </li>
                    <li>Tax Management </li>
                    <li>Business Accounting </li>
                    <li>Financial Planning </li>
                    <li>Optimise Cash Flow </li>
                  </ul>
                  <p style={{color:'var(--color-blue)'}}><strong>Pricing </strong></p>
                  <p style={{color:"#bb2b36"}}><strong>£147.90 user/month. </strong></p>
                  <p><Link href="/products/microsoft-dynamics-365-finance/"><a target="_blank">See More</a></Link></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/supply-chain-icons.svg"
                    alt="supply-chain-icons"
                    width={94} height={94}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Dynamics 365 Supply Chain Management</h3>
                  <p>D365 Supply Chain Management is also an ERP solution built for complex businesses that includes the flow of goods or services from one place to another. It supports the business from purchasing the raw materials to delivering the final product to the customer. Some of its core features are: </p>
                  <ul>
                    <li>Procurement and Sourcing Management </li>
                    <li>Supply Chain Planning </li>
                    <li>Shop Floor Management </li>
                    <li>Order Management </li>
                    <li>Order Fulfilment </li>
                    <li>Assets Management </li>
                  </ul>
                  <p style={{color:'var(--color-blue)'}}><strong>Pricing</strong></p>
                  <p style={{color:"#bb2b36"}}><strong>£147.90 user/month. </strong></p>
                  <p><Link href="/products/dynamics-365-supply-chain-management/"><a target="_blank">See More</a></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9 col-sm-9">
            <header className="section-header">
            <h2>
            Dynamics 365 Finance and Operations Licensing & Pricing
            </h2>
            <p>Currently, there is no pricing or licencing available for Dynamics 365 Finance and Operations as a whole. Because Microsoft has already separated this single solution into two powerful ERPs. So, Dynamics 365 Finance and Dynamics 365 Supply Chain licencing are a bit different and available in different terms. However, you will be required to purchase at least 20 user licences to avail yourself of any of the solutions. </p>
            <p>Dynamics 365 Finance is a powerful ERP solution specifically designed to monitor and supercharge complex financial processes in real-time. Based on your requirements, you can access this ERP using four licencing options: Team Members, Operations Activity, Finance, and Finance Premium.</p>
            <p>Dynamics 365 Supply Chain comes with asset management and intelligent order management capacity and is available in three licencing options: Team Members, Operations Activity, and SCM. </p>
          </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                  width={625} height={651}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>How Dynamics Square can be your partner of growth? </h2>
              </div>
              <div className="custom-p-001">
                <p>In the world of complex business scenarios, managing the financial and operational activities of a business isn't easy at all. You will need an advanced solution to deal with all issues without complicating the operations. In such a scenario, Dynamics Square is available by your side to help you analyse your business requirements and offer you a highly personalised solution that can facilitate your business growth.</p>
                <p>With <strong>350+</strong> global clients and <strong>150+</strong> <Link href="/our-services/dynamics-365-consultant/"><a target="_blank">Dynamics 365 technical consultants</a></Link>, we offer you our consistent and reliable support to keep you going regardless of the complexity. With a track record of successful implementation, Dynamics Square has gained the trust of business owners while transforming their businesses towards steady growth and business scalability.  </p>
              <div className="text-lg-start">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Talk to our expert</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="call-to-action-content">
                <h3>Standardize adapting to changing market fluctuations with Dynamics 365 F&O.</h3>
                <p>Accept market and customer requirements while offering optimum satisfaction. On-board Dynamics 365 for Finance and Operations experts to give your business a must needed digital transformation.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Request a Call Back</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
            <header className="section-header">
            <h2>Have you got questions about Dynamics 365 Finance & Operations?</h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
            <div className="accordion accordion-flush" id="faqs">
                {data.slice(0, showItems).map((item, index) => (
                  <div key={index} className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                      >
                        {item.title}
                      </button>
                    </h3>
                    <div className="accordion-content"></div>
                    <div
                      id={item.id}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqs"
                    >
                      <div className="accordion-body">
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}

                {showItems < data.length && (
                  <div className="text-center">
                    <a style={{cursor:'pointer'}}
                      className={`load-more-btn btn-get-started scrollto ${
                        showItems >= data.length - 4 ? "hide" : ""
                      }`}
                      onClick={handleLoadMore}
                    >
                      Load More
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
            <header className="section-header">
            <h2>Have you got questions about Dynamics 365 Finance & Operations?</h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
              
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                     What is included in Dynamics 365 Finance and Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Finance and Operations is an ideal application for growing businesses to manage all their financing needs. It has various features, including accounting, finance, budgeting, project management, and more.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-16"
                    >
                    Do we need a minimum number of Dynamics 365 Finance & Operations licenses?
                    </button>
                  </h3>
                  <div
                    id="faq-content-16"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist16"
                  >
                    <div className="accordion-body">
                      <p>There is a minimum of 20 full users for the Finance and Operations apps. Keep in mind that it must be 20 licenses for one app, and not 10 of each or any other combination.</p>
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
                    What kind of system software is Dynamics 365 for F and O?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft Dynamics 365 for Finance and Operations is one of the most powerful applications to streamline all financial and operational processes. With cloud computing, it becomes more powerful, letting users connect with the operations from anywhere and anytime to gather actionable insights.</p>
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
                    How much is Dynamics 365 F&O?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Generally, the full user license cost is £180/user/month. This isn't fixed for all users. The accurate cost depends on a few factors, like license type, number of users, app type, team member license, and more. However, the team at Dynamics Square can help you get an accurate amount of cost.</p>
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
                      Which are the major functions managed by Dynamics 365 Finance and Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>There are various functions that aid the financing and operations of an organisation. Some functions are inventory management, cost management, product information management, transportation management, and more.</p>
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
                     Is there any training available by Microsoft to learn D365 Finance and Operation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft doesn't provide one-to-one training to its end users. However, there is lots of documentation and learning content available on Microsoft's official website. Also, the implementation partner or Dynamics 365 Finance and Operations support partner can help you understand this application.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      What are the key features of D365 for Finance and Operation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>When it comes to features, it is far superior to its competitors. Some of the major key features are accounts receivable, fixed assets, general ledger functionality, tax, invoices, billing, and so on.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                    Can I upgrade my Dynamics AX to D365 F&O?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, you can easily upgrade to D365 F&O. The Dynamics 365 Finance and Operations is evolved from <Link href="/products/microsoft-dynamics-ax/"><a target="_blank">Dynamics AX</a></Link> (the old version) with added functionalities to cope with the ways of modern businesses. You can contact any <Link href="/"><a target="_blank">Microsoft-certified gold partner</a></Link>, like Dynamics Square, to upgrade your Dynamics AX.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                     How do I get the trial version of D365 for F&O?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>If you are new to D365 for F&O, you can easily sign-up for a 30-day trial. However, access will be restricted as compared to a full-user license. If you are an existing customer, you can sign-up for a customer trial and create LCS (Lifecycle Service Projects) to create a development environment within it.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >
                    Does D365 for F&O support integrations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, D365 for Finance and Operations allows native as well as third-party integration using APIs. Depending on the type of integration, they can help businesses with error handling, creating and updating product information, recommending a suitable solution, checking the status of customer orders, and more.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-10"
                    >
                   What is D365 Finance and Operations used for?
                    </button>
                  </h3>
                  <div
                    id="faq-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>D365 Finance and Operations is a cloud-based ERP solution built for medium and large-sized organisations to track all processes of inventory and finance. Currently, the license is available with two different apps, which are <Link href="/products/microsoft-dynamics-365-finance/">Dynamics 365 Finance</Link> and <Link href="/products/dynamics-365-supply-chain-management/"><a target="_blank">Dynamics 365 Supply Chain Management</a></Link>.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-11"
                    >
                  Does D365 for Finance and Operations fit for my organization? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-11"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>This is the best application available to streamline all financial processes if you belong to a small or medium-sized organization. Also, it helps the users monitor day-to-day operations tasks to make informed decisions whenever required.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-12"
                    >
                   Does D365 for F&O enable businesses to adapt to modern compliance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-12"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>To cope with the ways of modern business, Microsoft regularly updates the features and functionality of D365 for F&O. Generally, Microsoft releases updates two times a year and updates the cloud servers automatically without any obstruction in the current process.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-13"
                    >
                  Can I implement D365 F&O?
                    </button>
                  </h3>
                  <div
                    id="faq-content-13"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>It would not be possible unless you had intense knowledge of coding and implementing the technologies on cloud servers. However, a Microsoft support partner like Dynamics Square can easily help you implement this application. To find out more, you can <Link href="/contact-us/"><a target="_blank">book a demo</a></Link> with us.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-14"
                    >
                   How long does it take to implement Dynamics 365 Finance & Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-14"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>When it comes to implementing Microsoft Dynamics 365 Finance and Operations, the average time it takes is between 6-8 months (It can go up to 1 year depending upon the complexity of the business.). This can be broken down into three phases:</p>
                      <p><b>Planning and Design:</b> During the Planning and Design phase, you'll need to gather your requirements and create a project plan. This is where you'll also decide on your implementation methodology.</p>
                      <p><b>Implementation and Training:</b> During the Implementation and Training phase, you'll configure the system and train your users.</p>
                      <p><b>Go Live and Support:</b> Finally, during the GO Live and Support phase, you'll go live with the system and provide ongoing support.
</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-15"
                    >
                   Which should I implement, Microsoft Dynamics 365 F and O or Dynamics Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-15"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>There isn't any determined answer to this, and it depends on the business requirement. If you need a fully-fledged <Link href="/products/microsoft-dynamics-erp/"><a target="_blank">ERP solution</a></Link> with fewer features like CRM, go for <Link href="/products/dynamics-365-business-central/"><a target="_blank">Dynamics BC</a></Link>, and if you need an application to manage finance and accounting only and already have another ERP, go for Dynamics 365 F & O.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-16"
                    >
                   How do I get post-installation or implementation support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-16"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>With growing businesses, errors come, whether simple or complex. But, whatever the situation, your installation partner or implementation partner will provide the needed support to get your business back on track.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-17"
                    >
                   How do I find the right Dynamics Finance and Operations consultant?
                    </button>
                  </h3>
                  <div
                    id="faq-content-17"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>This process requires much research because the partner will help you from implementation to providing timely support. Before choosing the right consultant, you must match different parameters, like experience, availability of support, cost, service charges, previous work, industry type, and more.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-18"
                    >
                  What type of deployment does MS Dynamics Finance and Operations provide?
                    </button>
                  </h3>
                  <div
                    id="faq-content-18"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Three deployment options are available: <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/"><a target="_blank">on-premises</a></Link>, cloud, and hybrid. The installation and service cost of on-premises deployment is much higher compared to cloud and hybrid deployment, and cloud deployment is the cheapest option.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-19"
                    >
                   Do I need to pay extra besides the subscription fee for the cloud deployment option?
                    </button>
                  </h3>
                  <div
                    id="faq-content-19"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Firstly, you must pay the application implementation cost, which totally depends on the business requirements. Besides this, you have to pay only a monthly subscription fee already decided by Microsoft and available on the website too.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-20"
                    >
                   Can Dynamics 365 Finance and Operations handle multi-currencies?
                    </button>
                  </h3>
                  <div
                    id="faq-content-20"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>This application can manage multi-currency using Electronic Messaging and Electronic reporting features. Also, it enables the business to share the data with regulatory authorities as required by the government in some countries. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="blogs-extra">
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-7">
          <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p >Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header>
          </div>
         </div>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
            <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      
                      href="/dynamics-365-business-central-vs-finance-operations/"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Business Central vs Finance & Operations</a>
                  </li>
                  <li>
                    <a
                      
                      href="/dynamics-365-finance-operations-vs-sap-erp/"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Dynamics 365 Finance & Operations vs SAP ERP</a>
                  </li>
                  <li>
                    <a
                      
                      href="/blog/d365-finance-and-operations-overview/"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>D365 Finance And Operations: Overview, Capabilities, Benefits, FAQ</a>
                  </li>
                  <li>
                    <a
                      
                      href="/blog/d365-finance-and-operations-overview/"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>What is Microsoft Dynamics 365 Finance?</a>
                  </li>
                  <li>
                    <a
                      
                      href="/blog/d365-supply-chain-management-overview/"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Dynamics 365 Supply Chain Management: Overview, Benefits, Features</a>
                  </li>
                  <li>
                    <a
                      
                      href="/blog/what-is-dynamics-365-supply-chain-management/"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>What Is Dynamics 365 Supply Chain?</a>
                  </li>
                  <li>
                    <a
                      
                      href="/blog/dynamics-365-pricing-and-licensing/"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Dynamics 365 Pricing And Licensing</a>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h4>Documents</h4>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Nucleus-Research.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Microsoft
                      Dynamics365 Finance Operations
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <TimerModal />
    </>
  );
};

export default FinanceOperations;
