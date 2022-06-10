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
        <a
          href="//www.instagram.com/p/CCqV4hCFqYl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="//twitter.com/LibrusPL/status/1491354864802480128"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="//pl-pl.facebook.com/AspergerowyWorld"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="//pl.pinterest.com/grunia9269/zesp%C3%B3%C5%82-aspergera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterestP />
        </a>
      </div>
      <p>Radom 2022 - {new Date().getFullYear()}.</p>
    </div>
  );
}

export default Footer;
