import React from "react";
import Modal from "react-modal";

const ResumeModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Resume Preview"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "80%",
          height: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          borderRadius: "10px",
        },
      }}
    >
      <iframe
        title="Resume Preview"
        src="https://docs.google.com/document/d/1HyOv5HnXv8gC__M2A16lv1cYW_0t-WvxWK58EI_Imaw/edit?usp=drive_link"
        style={{ width: "100%", height: "100%", zIndex: 6 }}
        frameborder="0"
      ></iframe>

      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ResumeModal;
