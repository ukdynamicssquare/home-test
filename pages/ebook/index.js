import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import FormGuide from "../../components/FormGuide";

const EbookList = () => {
  return (
    <>
      <Head>
        <title>Ebook | Dynamics Square</title>
        <meta
          name="description"
          content="Ebook Ultimate Guide to Choose the Right ERP For Your Business Learn More +"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/ebook/" />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Dynamics 365 eBooks</h1>
              <p>
                Get Your Business To New Heights With Our <br />
                Microsoft Dynamics 365 E-Books and Guides.
              </p>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Cover_Book_Moc.png"
                alt="Cover_Book_Moc"
                width={582}
                height={466}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills me-3 side-bar-common-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Latest Ebooks
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <Link href="/ebook/d365-supply-chain-management/">
                          <a className="over-ff text-center">
                            <img
                              className="card-img-top"
                              src="/img/dynamics-SCM-Ebook-featured-image.png"
                              alt="dynamics-SCM-Ebook-featured-ima"
                            />
                          </a>
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link href="/ebook/d365-supply-chain-management/">
                              A Complete Guide to Dynamics SCM
                            </Link>
                          </h5>
                          <div className="btn-003 btn-009">
                            <Link href="/ebook/d365-supply-chain-management/">
                              <a className="btn btn-sm btn-danger">View Now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <Link href="/ebook/dynamics-crm/">
                          <a className="over-ff text-center">
                            <img
                              className="card-img-top"
                              src="/img/dynamics-CRM-Ebook-featured-image.jpg"
                              alt="dynamics-CRM-Ebook-featured-images"
                            />
                          </a>
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link href="/ebook/dynamics-crm/">
                              A Complete Guide to Dynamics CRM
                            </Link>
                          </h5>
                          <div className="btn-003 btn-009">
                            <Link href="/ebook/dynamics-crm/">
                              <a className="btn btn-sm btn-danger">View Now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <Link href="/ebook/dynamics-365-finance/">
                          <a className="over-ff text-center">
                            <img
                              className="card-img-top"
                              src="/img/nav-guide-pic.png"
                              alt="ebook-img"
                            />
                          </a>
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link href="/ebook/dynamics-365-finance/">
                              The Extensive Guide to Dynamics 365 Finance
                            </Link>
                          </h5>
                          <div className="btn-003 btn-009">
                            <Link href="/ebook/dynamics-365-finance/">
                              <a className="btn btn-sm btn-danger">View Now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <Link href="/ebook/upgrade-nav-to-business-central/">
                          <a className="over-ff text-center">
                            <img
                              className="card-img-top"
                              src="/img/Ebook-Nav-to-BC.png"
                              alt="ebooh-img"
                            />{" "}
                          </a>
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link href="/ebook/upgrade-nav-to-business-central/">
                              Upgrade From Dynamics NAV to Business Central
                            </Link>
                          </h5>
                          <div className="btn-003 btn-009">
                            <Link href="/ebook/upgrade-nav-to-business-central/">
                              <a className="btn btn-sm btn-danger">View Now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <Link href="/ebook/how-to-choose-right-erp/">
                          <a className="over-ff">
                            <img
                              className="card-img-top"
                              src="/img/ebooh-img.png"
                              alt="ebooh-img"
                            />
                          </a>
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link href="/ebook/how-to-choose-right-erp/">
                              Ultimate Guide to Choose the Right ERP For Your
                              Business
                            </Link>
                          </h5>
                          <div className="btn-003 btn-009">
                            <Link href="/ebook/how-to-choose-right-erp/">
                              <a className="btn btn-sm btn-danger">View Now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <Link href="#powerBIModals">
                          <a
                            data-bs-toggle="modal"
                            className="over-ff text-center"
                          >
                            <img
                              className="card-img-top"
                              src="/img/powerbi-guid-pic.png"
                              alt="powerbi-guid-pic"
                            />
                          </a>
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link href="#powerBIModals">
                              <a data-bs-toggle="modal">
                                Power BI: The Definitive Guide For SMBs
                              </a>
                            </Link>
                          </h5>
                          <div className="btn-003 btn-009">
                            <Link href="#powerBIModals">
                              <a
                                className="btn btn-sm btn-danger"
                                data-bs-toggle="modal"
                              >
                                Download Now
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FormGuide />
    </>
  );
};

export default EbookList;
