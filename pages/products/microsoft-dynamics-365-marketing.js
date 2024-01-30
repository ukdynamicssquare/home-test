import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const Marketing = () => {
  return (
    <>
      <Head>
      <title>
      Microsoft Dynamics 365 Marketing - Dynamics Square UK
        </title>
        <meta
          name="description"
          content="Microsoft Dynamics 365 for Marketing is an all-in-one solution that combine integrating automation, analytics, and customer insights to optimise marketing strategies and boost CE."
        />
           <meta name="robots" content="index,follow" />
           <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-marketing/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-marketing/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Marketing - Dynamics Square UK" />
        <meta property="og:description" content="Microsoft Dynamics 365 for Marketing is an all-in-one solution that combine integrating automation, analytics, and customer insights to optimise marketing strategies and boost CE." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/marketing-banners.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-marketing/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Marketing - Dynamics Square UK" />
        <meta property="twitter:description" content="Microsoft Dynamics 365 for Marketing is an all-in-one solution that combine integrating automation, analytics, and customer insights to optimise marketing strategies and boost CE." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/marketing-banners.png" />
        
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Marketing
              </h1>
              <p>Automate your marketing activities, create engaging content leveraging AI, and increase your conversion rates with Dynamics 365 Marketing.</p>
              <div>
                <div className="text-center text-lg-start align-self-center">
                  <Link  href="#exampleModal"><a
                    data-bs-toggle="modal"
                  
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/marketing-banners.png"
                alt="Dynamics 365 Marketing"
                width={808}
                height={508}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <header className="section-header">
            <p style={{paddingBottom:'40px'}}><b>Note: </b> From September 1, 2023, Dynamics 365 Marketing and Dynamics 365 Insights have been merged into one unified solution: <Link href="/blog/dynamics-365-customer-insights-journeys/"><a target="_blank">Dynamics 365 Insights - Journey</a></Link>. This combination will empower businesses to offer great customer experiences by utilising data insights.</p>
            <h2>
              What is dynamics 365
              <br />
              Marketing?
            </h2>
            <p>
              Dynamics 365 Marketing is a marketing automation application that
              allows you to transform leads into fruitful
              relationships in a more efficient and profitable way. With
              Dynamics 365 Marketing you will be able to tailor
              the customer journey to your needs and transform it into a unique
              experience until the sale is achieved, and even beyond.
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
                            src="/img/icons_centeralised-source.svg"
                            alt="icons_centeralised-source"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Centralized Source</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        The platform offers a centralized source for all types
                        of marketing information. This way, the members do not
                        have to stay dependent upon different individuals for
                        getting any data. They can simply log into the platform
                        and get the desired information. When everything is
                        available at one place and employees do not have to
                        spend time searching and collecting data from different
                        team members, it definitely saves a lot of time. When
                        time is saved and the information is available at one
                        single place, the operations of the organization
                        continues to happen much smoothly and efficiently.
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
                            src="/img/icons_Personalized-Communication-.svg"
                            alt="icons_Personalized-Communication"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Personalized Communication</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        The platform offers a customized form of communication
                        for the employees. Different customers need different
                        marketing strategies depending upon the requirements and
                        the product or service that is being marketed. Dynamic
                        365 allows the users to customize such communication or
                        marketing strategy well by carefully segmenting the
                        customers in different segments according to diverse
                        factors.
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
                            src="/img/icons_Journey-Mapping.svg"
                            alt="icons_Journey-Mapping"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Journey Mapping</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        It is not always possible to track the activities that
                        the customers are performing after a marketing campaign
                        has been conducted. The platform offers the feature of
                        noticing journey mapping of the customers through which
                        they can know the journey of a customer after a
                        marketing campaign has been conducted.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnewds">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi1"
                        aria-expanded="false"
                        aria-controls="fi1"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Email-Templates-.svg"
                            alt="icons_Email-Templates"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Email Templates</span>
                      </button>
                    </h3>
                    <div
                      id="fi1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                        There are several templates available for emails that
                        has to be sent to the customers and clients for the
                        purpose of marketing. The platform also allows the users
                        to customize these email templates so that they can be
                        personalized as per the customer segmentation and
                        according to the products and services for which the
                        marketing campaign is being conducted.
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
                        data-bs-target="#fi2"
                        aria-expanded="false"
                        aria-controls="fi2"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Customer-Feedback-.svg"
                            alt="icons_Customer-Feedback"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Customer Feedback</span>
                      </button>
                    </h3>
                    <div
                      id="fi2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                        As there are forms for surveys and marketing campaigns,
                        there are also forms that can be used for the purpose of
                        feedback from the customers. It is extremely essential
                        to collect feedback from the customers in order to
                        understand whether the product or service marketed is
                        gaining likes from the customers or not. Based on this
                        feedback survey, teh organizations can either continue
                        with the product or may think of making any changes in
                        it.
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
                        data-bs-target="#fi3"
                        aria-expanded="false"
                        aria-controls="fi3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Automated-Lead-Scoring.svg"
                            alt="icons_Automated-Lead-Scoring"
                            width="36"
                            height="36"
                          />
                        </div>
                        <span>Automated Lead Scoring</span>
                      </button>
                    </h3>
                    <div
                      id="fi3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                        Lead scoring is an essential method as it is the basic
                        way to converted leads into potential customers.{' '}
                         <Link href="/products/microsoft-dynamics-365/"><a target="_blank">Dynamics 365</a></Link> ensures to automate the process of lead
                        scoring through different marketing campaigns.
                        Ultimately, it leads to a smooth and efficient mode of
                        lead scoring that also leads to welcoming of more number
                        of potential customers on board.
                      </div>
                    </div>
                  </div>
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
              <div className="side-heading-custom-02">
                <h2>
                  What Comes in <br />
                  the Package?
                </h2>
              </div>
              <div className="custom-p-001">
                <p>
                  Dynamics 365 for Marketing comes as an overall marketing
                  package. Here are the elements that come included in the
                  package.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="finace-acc finace-acc-market">
                <div className="accordion" id="accnewss">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins1"
                        aria-expanded="false"
                        aria-controls="fins1"
                      >
                        <div className="wr-in">
                          <img src="/img/Group11.png" alt="Group11" width="90" height="90" />
                        </div>
                        <span>Core Marketing</span>
                      </button>
                    </h3>
                    <div
                      id="fins1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        This covers a wide number of elements to smoothen up
                        your marketing campaign such as a record of the customer
                        profiles, marketing forms, email management, lead
                        management, segmentation and journey of customers, and
                        marketing analytics.
                      </div>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins2"
                        aria-expanded="false"
                        aria-controls="fins2"
                      >
                        <div className="wr-in">
                          <img src="/img/Group12.png" alt="Group12" width="90" height="90" />
                        </div>
                        <span>Event Management</span>
                      </button>
                    </h3>
                    <div
                      id="fins2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        This is a unique function available in this tool that
                        helps the user in not just visualizing but also
                        maintaining different activities that are in connection
                        to some kind of events.
                      </div>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins3"
                        aria-expanded="false"
                        aria-controls="fins3"
                      >
                        <div className="wr-in">
                          <img src="/img/Group13.png" alt="Group13" width="90" height="90" />
                        </div>
                        <span>Forms Pro</span>
                      </button>
                    </h3>
                    <div
                      id="fins3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        This particular function is something that allows the
                        users to create online forms for the purpose of
                        marketing. Users can make use of thisparticular function
                        to create forms not just for direct marketing but also
                        for other functions such as surveys, and others.
                      </div>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins4"
                        aria-expanded="false"
                        aria-controls="fins4"
                      >
                        <div className="wr-in">
                          <img src="/img/Group14.png" alt="Group14" width="90" height="90" />
                        </div>
                        <span>Add-Ons</span>
                      </button>
                    </h3>
                    <div
                      id="fins4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        Apart from the above-mentioned functions or elements
                        that come in package, <Link href="/"><a target="_blank">Microsoft Dynamics</a></Link> also have some
                        add-ons to offer. The first one is the option of Dynamic
                        365 portals. This is basically a platform that allows
                        all the users such as customers, clients, or the team
                        members to interact and communicate on the platform.
                        Also, another tool is Dynamics 365 Connector that is
                        mainly for LinkedIn Lead Generation Forms. Through this
                        tool, users can import the leads that have been
                        generated through the lead tools on LinkedIn.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Marketing Pricing</h2>
            <p>With the transformation of D365 Marketing into Dynamics 365 Insights – Journey, the pricing of this standalone application has been recently announced by Microsoft. </p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Marketing  <br /> (Dynamics 365 Insights – Journey)
                </h3>
                <p><b>New Customer</b></p>
                <div className="price">
                  £1346<span>Per-Tenant/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">10,000 People Interacted and 100,00 People Unified</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Marketing Attach <br /> (Dynamics 365 Insights – Journey)
                </h3>
                <p><b>Existing Customer</b></p>
                <div className="price">
                  £792<span>Per-Tenant/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  10,000 People Interacted and 100,00 People Unified
                  </li>
                </ul>
              </div>
            </div>
            

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                 
                  className="btn-get-red"
                >
                  <span>Get Started Now</span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 m--t align-self-center">
            <div className="wy-sultion-left-head">
              <h2>
                How does Marketing help to Elevate Your marketing Capabilities?
              </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Personalised Customer <br />
                        Journey
                      </h3>
                      <div className="overlay">
                        <p>
                          Guide the journey of your potential customers based on
                          their past interactions to adapt the offer and
                          increase the probability of purchase
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        360 Customer <br />
                        Vision
                      </h3>
                      <div className="overlay">
                        <p>
                          Provides a new understanding of the customer for a
                          complete view of the consumer throughout the entire
                          marketing and sales cycle
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Generate More
                        <br />
                        Leads
                      </h3>
                      <div className="overlay">
                        <p>
                          Design omnichannel campaigns through email, social
                          media, landing pages, web, phone calls, personal
                          events, etc. to get more leads
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Improve the Profitability
                        <br />
                        of Your Investment
                      </h3>
                      <div className="overlay">
                        <p>
                          Reduces management expenses and optimizes the use of
                          resources thanks to a scalable platform that adapts to
                          the specific needs of the company and offers all the
                          functionalities in a single space
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

      

      <section className="busine_service_bottom custom07">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="Microosoft Partner"
                  width={625}
                  height={651}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h3>Why Dynamics Square?</h3>
              </div>
              <div className="custom-p-001">
                <p>
                  With more than 11 years of experience in the market, we
                  develop and deploy industry solutions based on Microsoft
                  technologies . Our experience, combined with our knowledge of
                  innovation and disruptive technologies, allows us to offer
                  services and solutions that respond to the demands of your
                  market, guaranteeing a sustainable competitive advantage for
                  your company. So, <Link href="/dynamics-365-marketing-implementation/"><a target="_blank">implement Dynamics 365 for Marketing</a></Link> . 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about D365 for Marketing?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
              <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-0"
                    >Are Microsoft Dynamics 365 Marketing and Microsoft Dynamics 365 Insights - Journey same?</button>
                  </h3>
                  <div
                    id="faq-content-0"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist0"
                  >
                    <div className="accordion-body">
                    No, Microsoft has merged Marketing and Insights solutions to offer a single powerful solution capable of fulfilling the core demands of business that consists of marketing and data insights. From September 1, 2023, Dynamics 365 Marketing isn’t available for purchase, as you can go for D365 Insights – Journey.
                    
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is Dynamics 365 for Marketing? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    Dynamics 365 for Marketing is a tool for automating entire marketing operations. It manages the journey of a customer from becoming a lead to a recurring client. Also, it seamlessly tracks all activities of the customer to offer them better products and services. 
                    
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
                      Which features are available in Dynamics 365 Marketing?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    Microsoft Dynamics 365 Marketing offers various features for all businesses, whether small or large. Some of the core features include a smooth customer journey, managing events, personalising marketing, understanding leads, and much more. 
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
                      Is Dynamics 365 Marketing ERP or CRM? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    Dynamics 365 Marketing is a CRM (customer relationship management) application. However, it carries a few options for ERP (enterprise resource planning) as well as standard operations. 
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
                      Which one is for me, Microsoft Dynamics 365 Marketing or Salesforce? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    If you are considering ease of accessibility and want a simple user interface with a cost-effective pricing strategy irrespective of the type of business, you should go with D365 Marketing. 
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
                      How much does D365 marketing cost? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    The cost of Dynamics 365 Marketing totally depends on the complexity of the business and its unique requirements. However, if you want to use it as a standalone application, you have to pay £1,232.90 per tenant/month, and if you are using one of the Dynamics 365 apps, you have to pay £616.50 per tenant/month as an additional amount. 
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
                      What are the server deployment options for Dynamics 365 marketing? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    You can deploy the servers on cloud servers as well as on-premises servers. If you want global connectivity, you can go with the cloud, as it works 24x7, and if you want to manage your data servers yourself, you can go with the on-premises deployment option. 
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
                      What is the difference between Dynamics 365 Marketing and Dynamics CRM? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    Dynamics CRM is capable of managing the entire relationship with customers, whereas Dynamics 365 Marketing is responsible for managing the marketing section of an organisation. Dynamics CRM includes four applications: <Link href="/products/microsoft-dynamics-365-field-service/"><a target="_blank">Dynamics 365 Field Service</a></Link> , <Link href="/products/microsoft-dynamics-365-customer-service/"><a target="_blank">D365 Customer Service</a></Link> , <Link href="/products/microsoft-dynamics-365-sales/"><a target="_blank">Dynamics 365 for Sales</a></Link> , and Dynamics 365 Marketing. 
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
                      Can I avail myself of a trial of Dynamics 365 Marketing? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    Yes, you can avail yourself of a demo or a free trial of this application by contacting Dynamics Square. Our team will help you understand your marketing needs and provide you with a sound overview of this application.  
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
                      How do I integrate Dynamics 365 Marketing with my existing Dynamics 365 solution? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    You can easily integrate with your existing system by contacting your <Link href="/"><a target="_blank">Microsoft certified partner</a></Link> , or you can contact Dynamics Square to know more about this process and the cost required to do so.  
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
                      Where is Dynamics Square based in the UK for D365 Marketing Partner? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    Dynamics Square is located in several locations in the UK to offer on-site support and services, like London, Manchester, Birmingham, <Link href="/location/microsoft-dynamics-partner-leeds/"><a target="_blank">Leeds</a></Link>, <Link href="/location/microsoft-dynamics-partner-glasgow/"><a target="_blank">Glasgow</a></Link>, Bristol, Liverpool, and more. 

                    See Also -  <Link href="/products/microsoft-dynamics-crm/"><a target="_blank">Microsoft Dynamics CRM</a></Link> | <Link href="/our-services/dynamics-365-implementation-services/"><a target="_blank">Dynamics 365 Implementation</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketing;
