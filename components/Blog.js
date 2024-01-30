import Image from "next/image";


const Blog = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="blogs-extra-title">
          <h3>Articles</h3>
        </div>

        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <a
              href="/blog/how-to-choose-the-right-erp-system/"
              target="_self"
            >
              <Image
                src="https://blognew.dynamicssquare.co.uk/upload/blog/1787055236078483.jpg"
                alt="img"
                width={256}
                height={134}
              />
            </a>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <a

                href="/blog/how-to-choose-the-right-erp-system/"
                target="_self"
              >How to Choose the Right ERP System in 2024?</a>
            </h4>
            <span>23 January 2024</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <a
              href="/blog/does-microsoft-still-support-dynamics-nav/"
              target="_self"
            >
              <Image
                src="https://blognew.dynamicssquare.co.uk/upload/blog/1785884023116333.png"
                alt="img"
                width={256}
                height={134}
              />
            </a>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <a

                href="/blog/does-microsoft-still-support-dynamics-nav/"
                target="_self"
              >Does Microsoft Still Support Dynamics NAV?</a>
            </h4>
            <span>23 December 2023</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <a
              href="/blog/crm-for-charities-and-non-profit/"
              target="_blank"
            >
              <Image
                src="https://blognew.dynamicssquare.co.uk/upload/blog/1784633101204245.avif"
                alt="img"
                width={256}
                height={134}
              />
            </a>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <a

                href="/blog/crm-for-charities-and-non-profit/"
                target="_blank"
              >CRM for Charities and Non-Profit: An Essential tool to Simplify Fund Management</a>
            </h4>
            <span>07 December 2023</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <a
              href="/blog/things-to-know-about-microsoft-dynamics-365-project-operations/"
              target="_blank"
            >
              <Image
                src="https://blognew.dynamicssquare.co.uk/upload/blog/1784089544651062.png"
                alt="img"
                width={256}
                height={134}
              />
            </a>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <a

                href="/blog/things-to-know-about-microsoft-dynamics-365-project-operations/"
                target="_blank"
              >11 Things to know about Microsoft Dynamics 365 Project Operations</a>
            </h4>
            <span>01 December 2023</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
