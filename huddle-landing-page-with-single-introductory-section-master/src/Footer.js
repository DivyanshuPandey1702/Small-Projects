import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div class="footer">
      <div class="circle">
        <FaFacebookF />
      </div>
      <div class="circle">
        <FaTwitter />
      </div>
      <div class="circle">
        <FaInstagram />
      </div>
    </div>
  );
}

export default Footer;
