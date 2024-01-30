// components/DropdownComponent.js
import React, { useState, useEffect } from 'react';

const DropdownComponent = () => {
  const [selectedOption, setSelectedOption] = useState('a');
  const [loading, setLoading] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setLoading(true);

    // Simulate async operation, replace with your actual data fetching logic
    setTimeout(() => {
      setSelectedOption(selected);
      setLoading(false);
    }, 500);
  };

  const handleButtonClick = () => {
    setShowSelect(true);
  };

  const handleCloseClick = () => {
    setShowSelect(false);
  };

  useEffect(() => {
    // You can perform additional side effects here if needed
  }, [selectedOption]);

  return (
    <div>
      {/* {!showSelect && <a className="btn-get-started scrollto" onClick={handleButtonClick}>Check your status </a>
      
      } */}
      <a className="btn-get-started scrollto cuer" onClick={handleButtonClick}>Check your NAV Version Status </a>
      {showSelect && (
        <>
          {/* <div className="header">
            <button className="close" onClick={handleCloseClick}>
              X
            </button>
          </div> */}
          <div className='nav-v-h'>
            <h2>Please select Nav version.</h2>
            <hr />

            <select className='form-select' id="select_box" onChange={handleSelectChange} value={selectedOption} disabled={loading}>
              <option value="a">Select NAV Version</option>
              <option value="b">Dynamics NAV 4.0 </option>
              <option value="c">Dynamics NAV 5.0 </option>
              <option value="d">Dynamics NAV 2009</option>
              <option value="e">Dynamics NAV 2009 R2</option>
              <option value="f">Dynamics NAV 2013</option>
              <option value="g">Dynamics NAV 2013 R2</option>
              <option value="h">Dynamics NAV 2015</option>
              <option value="i">Dynamics NAV 2016</option>
              <option value="j">Dynamics NAV 2017</option>
              <option value="k">Dynamics NAV 2018</option>
            </select>
          </div>
          {loading && <div className='center-loading'>Loading...</div>}
          {!loading && (
            <>

              <div className='mob-them'>
                <div id="a" className={selectedOption === 'a' ? '' : 'hide'}>
                  {/* <h2>Select Nav Version</h2> */}
                </div>
                <div id="b" className={selectedOption === 'b' ? '' : 'hide'}>
                  <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 4.0 </h3>
                    <div className='star-date stds'>Start Date : <span>12/12/2004 </span></div>
                    <div className='end-date stds'>Mainstream Date : <span>1/12/2010 </span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                      <p>Mainstream Support of your NAV has been ended, but we got your back with an efficient Support or Business Central Upgrade.</p>
                    </div>
                  </div>
                </div>
                <div id="c" className={selectedOption === 'c' ? '' : 'hide'}>
                  <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 5.0 </h3>
                    <div className='star-date stds'>Start Date : <span>4/1/2007 </span></div>
                    <div className='end-date stds'>Mainstream Date : <span>4/10/2012 </span></div>
                    <div className='ext-date stds'>Extended End Date : <span>4/11/2017 </span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                      <p>Mainstream and Extended Support of your NAV has been ended, but we got your back with an efficient Support or Business Central Upgrade. </p>
                    </div>
                  </div>
                </div>
                <div id="d" className={selectedOption === 'd' ? '' : 'hide'}>
                  <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 2009 </h3>
                    <div className='star-date stds'>Start Date : <span>2/12/2009 </span></div>
                    <div className='end-date stds'>Mainstream Date : <span>1/13/2015 </span></div>
                    <div className='ext-date stds'>Extended End Date : <span>1/14/2020 </span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                      <p>Mainstream and Extended Support of your NAV has been ended, but we got your back with an efficient Support or Business Central Upgrade. </p>
                    </div>
                  </div>
                </div>
                <div id="e" className={selectedOption === 'e' ? '' : 'hide'}>
                  <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 2009 R2</h3>
                    <div className='star-date stds'>Start Date : <span>03/15/2011 </span></div>
                    <div className='end-date stds'>Mainstream Date : <span>1/13/2015 </span></div>
                    <div className='ext-date stds'>Extended End Date : <span>1/14/2020 </span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                      <p>Mainstream and Extended Support of your NAV has been ended, but we got your back with an efficient Support or Business Central Upgrade. </p>
                    </div>
                  </div>
                </div>
                <div id="f" className={selectedOption === 'f' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 2013</h3>
                    <div className='star-date stds'>Start Date : <span>01/10/2012</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>1/9/2018 </span></div>
                    <div className='ext-date stds'>Extended End Date : <span>1/10/2023 </span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                      <p>Mainstream and Extended Support of your NAV has been ended, but we got your back with an efficient Support or Business Central Upgrade. </p>
                    </div>
                  </div>
                </div>
                <div id="g" className={selectedOption === 'g' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 2013 R2</h3>
                    <div className='star-date stds'>Start Date : <span>31/10/2013 </span></div>
                    <div className='end-date stds'>Mainstream Date : <span>1/9/2018 </span></div>
                    <div className='ext-date stds'>Extended End Date : <span>1/10/2023 </span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                      <p>Mainstream and Extended Support of your NAV has been ended, but we got your back with an efficient Support or Business Central Upgrade. </p>
                    </div>
                  </div>
                </div>
                <div id="h" className={selectedOption === 'h' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 2015</h3>
                    <div className='star-date stds'>Start Date : <span>17/12/2014 </span></div>
                    <div className='end-date stds'>Mainstream Date : <span>14/01/2020 </span></div>
                    <div className='ext-date stds'>Extended End Date : <span>14/01/2025 </span></div>
                    <div className='result'>
                      {/* <p className='red blue'>Your Dynamics NAV version</p> */}
                      <p>Mainstream Support has ended, but Microsoft still offers you its limited support. However, we are here to support your NAV regardless of complexity, or you can go for a Business Central upgrade.  </p>
                    </div>
                  </div>
                </div>
                <div id="i" className={selectedOption === 'i' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 2016</h3>
                    <div className='star-date stds'>Start Date : <span>03/01/2016 </span></div>
                    <div className='end-date stds'>Mainstream Date : <span>13/04/2021 </span></div>
                    <div className='ext-date stds'>Extended End Date : <span>14/04/2026 </span></div>
                    <div className='result'>
                      {/* <p className='red blue'>Your Dynamics NAV version</p> */}
                      <p>Mainstream Support has ended, but Microsoft still offers you its limited support. However, we are here to support your NAV regardless of complexity, or you can go for a Business Central upgrade.  </p>
                    </div>
                  </div>
                </div>
                <div id="j" className={selectedOption === 'j' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 2017</h3>
                    <div className='star-date stds'>Start Date : <span>27/10/2016</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>11/01/2022</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>11/01/2027</span></div>
                    <div className='result'>
                      {/* <p className='red blue'>Your Dynamics NAV version</p> */}
                      <p>Mainstream Support has ended, but Microsoft still offers you its limited support. However, we are here to support your NAV regardless of complexity, or you can go for a Business Central upgrade.  </p>
                    </div>
                  </div>
                </div>
                <div id="k" className={selectedOption === 'k' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dynamics NAV 2018</h3>
                    <div className='star-date stds'>Start Date : <span>01/12/2017</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>10/12/2023</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>11/01/2028</span></div>
                    <div className='result'>
                      {/* <p className='red blue'>Your Dynamics NAV version</p> */}
                      <p>Mainstream Support has ended, but Microsoft still offers you its limited support. However, we are here to support your NAV regardless of complexity, or you can go for a Business Central upgrade.  </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
      <style jsx>{`
      .prod{}
      .prod h3{
        font-size: 16px;
        margin-bottom: 20px;
        color: #2b4c76;
      }
      .prod .hh{
        margin-right: 10px;
   
    color: #353535;
      }
      .stds{
        font-size: 16px;
        margin-bottom: 15px;
        color: #353535;
        font-weight: 500;
      }
      .stds span{
        margin-right: 10px;
        color: #2b4c76;
        font-weight: 600;
      }
.red{
  color: white;
  background: #ae2c3e;
  margin-top: 25px;
  padding: 9px 20px;
}
.red.blue{
  background: #267eed;
}

      .mob-them{
        padding:30px 0px 0px 0px
      }
      .center-loading{
        padding:20px;
        color:red
      }
      .nav-v-h .form-select{
        width: 50%;
      }
      .nav-v-h h2{
        font-size: 24px;
        color: #1d3557;
        padding-top: 35px;
      }
        .hide {
          display: none;
        }

        .header-neww {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2em;
        }
        .cuer{
          cursor:pointer
        }
        @media (max-width:991px){
          .nav-v-h .form-select{
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default DropdownComponent;
