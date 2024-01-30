import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

const CategoryList = () => {
  return (
    <>
      <Head>
      <title>Microsoft Dynamics 365 Case Studies | Dynamics Square</title>
        <meta
          name="description"
          content="Discover our client's case studies and see how we care about them from start to finish. We have worked with them to provide long lasting Dynamics 365 Support."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Case Studies</h1>
              <p>
                Check out some of our case studies to see how Dynamics 365 has
                made a difference for our clients.
              </p>
              {/* <div>
                <div className="text-center text-lg-start">
                  <Link href="#" className="btn-get-started scrollto">
                    <span>Borwse List</span>
                  </Link>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/case-icons-list.png"
                alt="case-icons-list"
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
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiless"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
                  All
                </button>
                <button
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-homes"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="false"
                >
                  Upgrade
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiles"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Implementation
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messagess"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Support
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-profiless"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-1.jpg"
                            alt="crm-trading"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            UK's top personal care brand boosted operational efficiency up to 4X by upgrading from Dynamics NAV 2009 to Dynamics NAV 2018. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav09-nav18-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-2.jpg"
                            alt="case-studies-2.jpg"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            UK's top sexual wellness brand improved productivity by up to 68% by upgrading to Business Central On-premise from Dynamics NAV. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav09-to-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-3.jpg"
                            alt="timesco-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            A medical instrument supplier and manufacturer doubled revenue and improved production capacity by upgrading to Business Central Online from Dynamics NAV.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav13R2-to-business-central/ "
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-4.jpg"
                            alt="cqc-logo-1-300x103-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            A UK's leading defence apparel manufacturer increased efficiency and accuracy by up to 50% by implementing Microsoft Dynamics 365 Business Central online. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav2009R2-to-business-central/ "
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-5.jpg"
                            alt="cropped-arteak-logo-2"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Learn how an HSSE consulting firm improved overall accounting and financial processes by implementing Dynamics 365 Business Central. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/migrate-nav9-to-business-central/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-6.jpg"
                            alt="wipersupplywide-1-300x54-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            A UK-based paper and forest product manufacturer doubled its sales volume and customers with dedicated support from Dynamics Square. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav-2016-support-services/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/case-studies-7.jpg" alt="tea" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Learn how a UK-based tea manufacturing brand received stress-free Dynamics NAV support from Dynamics Square through customization and dedicated services. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav16-support/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/Leda-Ortho.jpg" alt="Leda-Ortho" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>UK’s leading manufacturer of orthopedic implants has gained 80% more visibility with a Business Central implementation.  </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/upgrading-to-dynamics-365-business-central/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/BSix.jpg" alt="BSix" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>A leading college in London has improved the department collaboration by 80% with the Business Central upgrade. </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/upgrade-from-nav09-to-business-central/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/Greenstar.jpg" alt="Greenstar" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>An established importer of citrus fruits has achieved enhanced operational efficiency by 80% with the Business Central implementation.  </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/quickbooks-to-business-central-migration/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/GTT-Wireless.jpg" alt="GTT-Wireless" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>A leading supplier of carrier-grade antenna has enabled faster order processing and customer service by 60% with Business Central implementation.  </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/odoo-erp-to-business-central-migration/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/Meirion-Davies.jpg" alt="Meirion-Davies" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>A leading supplier of fertilizer and agrochemicals has increased customer satisfaction by 70% with Business Central upgrade. </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dynamics-nav09-to-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/Omicron-Engineering.jpg" alt="Omicron-Engineering" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>A leading car restoration and customization company has enhanced their ROI by 30% with Business Central implementation. </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/access-dimension-erp-to-business-central-migration/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/Comxo.jpg" alt="Comxo" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>A business leader in transformational switchboards has increased the data accuracy rate by 8% with our Power BI Support services.  </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/power-bi-support-solutions/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/ALMI-Group.jpg" alt="ALMI-Group" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>A leading builder’s merchant support company has achieved an business transparency by 60% with Business Central implementation. </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/sage-erp-to-business-central/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/Dalebrook-Supplies.jpg" alt="Dalebrook-Supplies" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>A UK’s leading melamine food display manufacturing and supply company has achieved enhanced productivity by 50% with Business Central cloud re-implementation. </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/migrate-on-premises-to-business-central-cloud/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/WH-Scout.jpg" alt="WH-Scout" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>A leading business in the design and manufacturing of lifting and handling solution has achieved 40% more transparency in sales and stock with Power BI implementation. </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/microsoft-power-bi-implementation/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-homes"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-1.jpg"
                            alt="crm-trading"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            UK's top personal care brand boosted operational efficiency up to 4X by upgrading from Dynamics NAV 2009 to Dynamics NAV 2018. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav09-nav18-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-2.jpg"
                            alt="case-studies-2.jpg"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            UK's top sexual wellness brand improved productivity by up to 68% by upgrading to Business Central On-premise from Dynamics NAV. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav09-to-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-3.jpg"
                            alt="timesco-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            A medical instrument supplier and manufacturer doubled revenue and improved production capacity by upgrading to Business Central Online from Dynamics NAV.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav13R2-to-business-central/ "
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/Leda-Ortho.jpg" alt="Leda-Ortho" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>UK’s leading manufacturer of orthopedic implants has gained 80% more visibility with a Business Central implementation.  </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/upgrading-to-dynamics-365-business-central/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profiles"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-4.jpg"
                            alt="cqc-logo-1-300x103-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            A UK’s leading defence apparel manufacturer increased efficiency and accuracy by up to 50% by implementing Microsoft Dynamics 365 Business Central online. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav2009R2-to-business-central/ "
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-5.jpg"
                            alt="cropped-arteak-logo-2"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Learn how an HSSE consulting firm improved overall accounting and financial processes by implementing Dynamics 365 Business Central. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/migrate-nav9-to-business-central/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messagess"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-6.jpg"
                            alt="wipersupplywide-1-300x54-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            A UK-based paper and forest product manufacturer doubled its sales volume and customers with dedicated support from Dynamics Square. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav-2016-support-services/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/case-studies-7.jpg" alt="tea" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Learn how a UK-based tea manufacturing brand received stress-free Dynamics NAV support from Dynamics Square through customization and dedicated services. 
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav16-support/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  4
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settingss"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
