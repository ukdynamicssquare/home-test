import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; 
import FooterHide from "../components/FooterHide";
import FormSubsriber from "../components/FormSubsriber";

const SubscribeUpdates = () => {
  return (
    <>
      <Head>
      <title>Subscribe for Dynamics 365 Updates | Dynamics Square</title>
<meta name="description" content="Looking for Microsoft Dynamics 365 updates? Subscribe to Dynamics Square Newsletters, Offers, Trending News, Blogs and more."/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/subscribe-updates/" />
      </Head>
      <section className="Solution-banner hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>
              Subscribe Now For Latest Updates
              </h1>
              <div>

              </div>
            </div>
          </div>
        </div>
      </section>

         
      <section className="custom-sed-demp-wraper" style={{paddingBottom:'140px'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8  align-self-center">
           
              <div className="sedule-form">
              <h3>Stay Updated With upcoming insights, Offers and More</h3>
              <FormSubsriber />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
    </>
  );
};

export default SubscribeUpdates;
