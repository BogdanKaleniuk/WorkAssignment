import React from "react";
import "./Modal.css"; // додай стилі

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>{image.alt_description || "No description"}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
