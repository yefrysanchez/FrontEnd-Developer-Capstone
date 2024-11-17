import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi"; // For email
import { BsFillTelephoneFill } from "react-icons/bs"; // For phone
import { Link } from "react-router-dom";

const Footer = () => {
  // Example data for navigation links, contacts, and socials
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  const contacts = [
    { icon: <FiMail />, info: "info@littlelemon.com" },
    { icon: <BsFillTelephoneFill />, info: "+1 555-555-5555" },
  ];

  const socials = [
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "linkedin", icon: <FaLinkedin /> },
  ];

  return (
    <footer className="site-footer">
     
    </footer>
  );
};

export default Footer;
