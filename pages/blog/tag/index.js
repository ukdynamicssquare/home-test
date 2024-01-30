import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import BlogSubscriberForm from "../../../components/BlogSubscriberForm";

export async function getServerSideProps(context) {
  let slug = context.query.slug;
  const res = await fetch(
    process.env.BACKEND_URL+"/api/all/blogs/tag");
  const blogs = await res.json();


  return { props: { blogs} };
}

function tagsblogs({ blogs}) {
  return (
    <div>
      <Head>
        <title>Blog Tags</title>
        <meta
          name="description"
          content="All Modern Stylish Product Men|Female"
        />
      </Head>

      <div className="blogs-extra-new">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="blogs-breadcromb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/blog/">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Tags</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blogs-ex-side-cate blogs-ex-side-cate-home">
                <h3>Explore by Tags</h3>
                
                <ul>
                {blogs && blogs.map((item2,i) => (

                           <>
                            {item2.meta_tags?.split(',').map((item3,i) => {
                            
                               return  <li key={i}>
                                
                                <Link href={`/blog/tag/${item3.split(" ").join("-")}`} key={i}><a><span className="blog-tagged">{item3.charAt(0).toUpperCase() + item3.slice(1)}</span></a></Link>
                                </li>
                  
                          
                           })}
                           </>

                          ))}
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default tagsblogs;

