import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51944251149"
      target="_blank"
      className="whatsapp-btn"
    >
      <BsWhatsapp />
    </a>
  );
};

export default WhatsAppButton;