import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram />
        <FaTwitter />
        <FaFacebookF />
        <FaPinterestP />
      </div>
      <p>Radom 2022 - {new Date().getFullYear()}.</p>
    </div>
  );
}

export default Footer;
