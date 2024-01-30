import React, { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
const FormFooterSubscriber = () => {
  const [display, setDisplay] = useState("const2");
  // const history = useHistory();
  // function sendEmail(e) {
  //   setDisplay("spinner-border");
  //   e.preventDefault();
  const form = useRef();
  const router = useRouter();
  const sendEmail = (e) => {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs.sendForm('service_4voumj7', 'template_32hvoqv', form.current, 'mJ38M6WTmU7KRrtuZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
      setTimeout(function() {
        e.target.reset();
        router.push("/thank-you/email-subscriber/");
      }, 500);
      
  };

  return (
    <>
      <div className="main-form-wrper">
      <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="* Full Name"
              name="name"
              required
            />
            <input type="hidden" value={router.asPath} name="url" />
          </div>
          <div className="mb-3">
          <input
                      type="email"
                      className="form-control"
                      placeholder="*Work Email"
                      name="email"
                      pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                      required
                    />
          </div>
          <button type="submit" className="btn btn-primary fomr-submit">
            Subscribe Now
          </button>
          <div className="" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormFooterSubscriber;
