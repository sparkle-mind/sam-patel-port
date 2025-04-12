import React from "react";
import "./modal.css";
const ModalNotification = ({ onClose }) => {
  return (
    <>
      <div className="modal-wrp">
        <div className="modal-boy">
          <img src="images/boy.webp" alt="" />
        </div>
        <div className="modal-inner">
          <div className="modal-content">
            <h4>
              Want to know more about my experience?
              Click the button below to download my resume and see how I can contribute  your organization  .
            </h4>
          </div>
          <div className="modal-btn">
          <a href="images/Samir-Vanapariya-Resume-2025.pdf" download="samir-resume" className="btn">Download CV <img src="/images/cv.svg" alt="" /></a>
          </div>
          <button className="close-icn" onClick={onClose}> X </button>
        </div>
      </div>
    </>
  );
};

export default ModalNotification;
