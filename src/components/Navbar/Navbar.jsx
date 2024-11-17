import { useState } from "react";

const Navbar = () => {
  const links = ["home", "about", "menu", "reservations"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex">
      <div className="maxWidth flex items-center justify-between px-2 py-4">
        {/* Hamburger menu button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <img src="/hamburgermenu.svg" alt="Open menu" />
        </button>
        {/* Navigation */}
        <nav
          className={`fixed inset-0 ${isOpen ? "left-0" : "-left-[100%]"} transition-all duration-200 bg-white flex flex-col gap-[3rem] md:flex-row w-full md:static`}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute pt-2 md:hidden"
            aria-label="Close menu"
          >
            <img className="h-16" src="/closeMenu.svg" alt="Close menu" />
          </button>

          {/* Logo */}
          <div className="mx-auto md:mx-0 mt-12 md:mt-0">
            <img src="/Logo.svg" alt="Logo" />
          </div>

          {/* Links */}
          <ul className="flex flex-col md:flex-row items-center gap-12 md:gap-8 mx-auto text-xl">
            {links.map((link) => (
              <li
                onClick={() => setIsOpen(false)}
                key={link}
                className="capitalize hover:text-olive transition-colors"
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
            <li
              onClick={() => setIsOpen(false)}
              className="bg-yellow hover:opacity-90 cursor-pointer py-2 px-4 rounded-corners"
            >
              Order Online
            </li>
          </ul>
        </nav>

        {/* Basket button */}
        <button className="text-olive">
          <img src="/Basket.svg" alt="Basket icon" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
