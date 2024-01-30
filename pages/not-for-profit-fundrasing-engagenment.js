import Link from "next/link"; 
import Head from 'next/head';
import Image from 'next/image';
import FormCampaign from "../components/FormCampaign";
import FooterHide from "../components/FooterHide";

const DynamicsNavNotFor = () => {
    return (
      <>
        <Head>
        <title>Make Fundraisng and Engagement Simpler | Dynamics Square</title>
        <meta
          name="description"
          content="AI &amp; Machine Learning Capabilities"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/not-for-profit-fundrasing-engagenment/"
        />
        </Head>
        <section
        className="Solution-banner hero-1 hero"
        style={{ overflow: "hidden", paddingBottom: "160px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center nav-to">
              <h1>
                Create <span>scalable</span> and <span>transformative</span>{" "}
                mission impact
              </h1>
              <p>
                Introducing Fundraising and Engagement, a relationship
                management platform powered by Dynamics 365 Sales. <br /> It is
                a part of Microsoft Cloud for Nonprofit to help you upgrade the
                engagement with supporters or donors to maximize the impact on a
                mission.
              </p>
              <p>
                <b>Fundraising and Engagement enable you to:</b>
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Increase donors and supporters by approaching them with
                        personalized engagement.
                      </p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Automate the financial summaries & recurring gift
                        processing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Drive fundraising efficiency and reduce costs by
                        automating key business processes.
                      </p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Better end-to-end donations, revenue resources, and
                        transition management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3>Please fill the form to connect further</h3>
                <FormCampaign />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
      </>
    );
  };

  export default DynamicsNavNotFor;
  
