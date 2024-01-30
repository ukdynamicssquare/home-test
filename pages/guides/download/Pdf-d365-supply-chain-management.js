import Head from 'next/head';
import FooterHide from '../../../components/FooterHide';

const PdfCRMDownload = () => {
  return (
    <>
      <Head>
      <title>Dynamic Supply Chain Management Guide Download | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/guides/download/Pdf-d365-supply-chain-management/"
        />
      </Head>
     
      <section className="Solution-banner hero-1 custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>A Complete Guide to Dynamics Supply Chain Management Pdf</h1>
              <div className="text-center">
                <div className="">
                  <a
                    href="/pdf/Dynamics-365-Supply-Chain-UK-En.pdf"
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

export default PdfCRMDownload;
