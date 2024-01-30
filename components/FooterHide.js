import React, { useRef ,useState } from 'react';
import Form from "./Form";
import emailjs from '@emailjs/browser';
import Link from "next/link"; 
import { useRouter } from 'next/router';
import FormFooterSubscriber from './FormFooterSubscriber';
import Image from 'next/image';
const FooterHide = () =>{
  
//   const router = useRouter();
//   const [display, setDisplay] = useState("dspn");
//   const form = useRef();
//   const [closeModal, setCloseModal]  = useState(false);
//   function handleCloseModal(){            
//     document.getElementById("exampleModal").classList.remove("show", "d-block");
//     document.querySelectorAll(".modal-backdrop")
//             .forEach(el => el.classList.remove("modal-backdrop"));
// }


//   const sendEmail = (e) => {
//     setDisplay("spinner-border text-success");
//     e.preventDefault();

//     emailjs.sendForm('service_ioc4m3m', 'template_gaio8jq', form.current, 'Z1IXZpfjgq01m5vW7')

//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
     
//       setTimeout(function() {
//         setCloseModal(true);
//         e.target.reset();
//         router.push("/thank-you/");
//       }, 500);
      
//   };

    return(
    <>
     

     <div className="footer-contact-s">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  Kemp House, 124 City Road,London, EC1V 2NX, U.K.
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+442071932502">
                    +44 207 193 2502
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  International House 61 Mosley Street, Manchester, M2 3HZ,
                  United Kingdom
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+447479273380">
                    +44 747 927 3380
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                Izabella House, 24 - 26 Regents Place, City Centre, Birmingham
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                <a target="_self" rel="" href="tel:+441213182798">
                    +44 121 318 2798
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  Utrechtseweg 341, 3818 EL Amersfoort, Netherlands
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+3197010257044">
                    +31 970 102 57044
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div> */}
           
          </div>
        </div>
      </div>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
                <Link href="/" className="logo d-flex align-items-center">
                  <Image
                      src="/img/dynamics_square_tm_logo_footer.svg"
                      alt="Dynamics Square TM Logo"
                    style={{marginBottom:"20px"}}
                    width={230} height={81}
                  />
                </Link>
                <p>
                  Dynamics Square is UK's leading Microsoft Gold Certified
                  Partner that caters to the needs of orgnisations who can
                  source next-gen Microsoft Business Apps from our highly
                  skilled Microsoft consultants.
                </p>
                <Image
                  src="/img/microsoft-partner-footer.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width={230} height={200}
                /><br />
                <Image
                  src="/img/Tech-For-Socil-Impact.svg"
                  alt="Tech-For-Socil-Impact"
                  className="footer-img m-r"
                  width={230} height={120}
                /> <br />
                 <Image
                  src="/img/UK-badge.png"
                  alt="UK badge"
                  className="footer-img"
                  width={98} height={98}
                />
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>BUSINESS APPS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/dynamics-365-business-central/">
                      Business Central
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-365-finance/">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-365-sales/">
                      Sales
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-power-bi/">
                      Power BI
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-azure/">Azure IoT</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-crm/">
                      CRM
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>QUICK LINKS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/about-us/">About us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/why-us/">Why Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/our-services/">Our Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/partner/">Our Partners</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/contact-us/">Contact Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a
                      href="https://www.dynamicssquare.co.uk/blog/"
                      rel=""
                      target="_self"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/privacy-policy/">Privacy policy</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/modern-slavery-act/">Modern Slavery Act</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 text-md-start">
                <p>CONNECT WITH US</p>

                <div className="social-links mt-3">
                  <a
                    target="_blank"
                    rel=""
                    href="https://twitter.com/dsquare_uk"
                    className="twitter"
                    aria-label="Twitter" 
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.facebook.com/dynamicssquareuk/"
                    className="facebook"
                    aria-label="Facebook" 
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.instagram.com/dynamicssquareuk/"
                    className="instagram"
                    aria-label="Instagram" 
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.linkedin.com/showcase/dynamics-square-uk/"
                    className="linkedin"
                    aria-label="Linkedin" 
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                <div className="footer-bottm-subscriber">
                  <p>Subscribe Newsletter</p>
                  <span>
                    Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                    Offers And Much More!
                  </span>
                 <FormFooterSubscriber />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2023 Dynamics Square.</span>
            <div className="footer-extra-link">
              <Link href="/terms-of-use/">Terms of Use </Link>
              <Link href="/cookie-policy/">| Cookie </Link>
              {/* <Link href="/sitemap.xml">| Sitemap</Link> */}
            </div>
          </div>
        </div>
      </footer>
      <div className='call-bb-wr'>
      <button className="fixed-button wobble" type="button">
      <a href="tel:+442071932502" target="_self" aria-label="telephone"><i className="bi bi-telephone-fill"></i></a>
</button>

      </div>
    </>
    
    );
    }
    export default FooterHide