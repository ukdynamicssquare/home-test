import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Formpop from './Formpop';

const TimerModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookieExists = Cookies.get('popupModalShown');
    if (!cookieExists) {
      const timeoutId = setTimeout(() => {
        setShowModal(true);
      }, 20000); // Delay of 30 seconds
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const handleCloseModal = () => {
    Cookies.set('popupModalShown', true, { expires: 1 });
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className='backdrop-mod' id='popuphide'>
          <div className="popup-cust">
          <div className="modal-content">
            <h3>Take the First Step: Request Your Free Consultation Today!</h3>
            <button className='bbt' onClick={handleCloseModal}><span aria-hidden="true">×</span></button>
            <Formpop />
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default TimerModal;
