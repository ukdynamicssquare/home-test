import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";
import FooterHide from "../components/FooterHide";


const ScheduleDemoForm = () => {
  return (
    <>
      <Head>
      <title>Schedule A Demo | Dynamics Square</title>
      <meta name="description" content="Scale up your business productivity by implemeting Dynamics 365 Business Apps. Schedule a demo today."/>
      <link rel="canonical" href="https://www.dynamicssquare.co.uk/schedule-a-demo/" />
      </Head>
      <section className="Solution-banner hero-1 hero hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>
              Schedule A Demo Today!
              </h1>
              <div>

              </div>
            </div>
          </div>
        </div>
      </section>

         
      <section className="custom-sed-demp-wraper" style={{paddingBottom:"160px"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8  align-self-center">
           
              <div className="sedule-form">
              <h3>Dynamics Square assists brands in deploying Microsoft Business Applications. Schedule a demo today.</h3>
                <Form />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
    </>
  );
};

export default ScheduleDemoForm;
