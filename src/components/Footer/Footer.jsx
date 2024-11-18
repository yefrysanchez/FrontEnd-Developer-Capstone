import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi"; // For email
import { BsFillTelephoneFill } from "react-icons/bs"; // For phone


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
    { icon: <BsFillTelephoneFill />, info: "+1 234-567-8910" },
  ];

  const socials = [
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "linkedin", icon: <FaLinkedin /> },
  ];

  return (
    <footer className="bg-olive text-white py-12">
      <div className="maxWidth grid grid-cols-2 md:grid-cols-6 place-items-center place-content-start gap-y-12">
        <div className="h-40 w-fit">
          <img
            className="h-full w-full object-contain"
            src="logo-white.png"
            alt="logo"
          />
        </div>
        <div>
          <h4 className="font-bold tracking-widest mb-4">SITEMAP</h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a href="#" key={link.name} className="hover:text-yellow w-fit cursor-pointer" >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-bold tracking-widest mb-4">CONTACT UP</h4>
          <div className="flex flex-col gap-2">
            {contacts.map((c, i) => (
              <div className="flex items-center gap-2 " key={i}>
                <span>{c.icon}</span>
                <span>{c.info}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-bold tracking-widest mb-4 uppercase">Connect with us</h4>
          <div className="flex gap-4 text-xl">
            {socials.map((s, i) => (
              <a className="hover:text-yellow w-fit" key={i} href="#">{s.icon}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
