import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import FooterHide from '../../../components/FooterHide';
const BusinessPdfDownload = () => {
  return (
    <>
      <Head>
      <title>Business Central Guide Download | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/guides/download/pdf-business-central-guide/"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
     
      <section className="Solution-banner hero-1 custom-pd-4" style={{paddingBottom:"160px"}}>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>Business Central: The Definitive Guide For SMBs PDF</h1>
              <div className="text-center">
                <div className="">
                  <a
                    href="/pdf/Business-central-e-guide.pdf"
                    className="btn-get-started scrollto"
                    download
                  >
                    <span>
                      Download <i className="bi bi-file-earmark-pdf"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
    </>
  );
};

export default BusinessPdfDownload;
