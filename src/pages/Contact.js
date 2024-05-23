import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-purple-500 hover:text-purple-900"
        smooth
        to="/#about"
      >
        About
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-purple-500 hover:text-purple-900"
        to="/contact#contact"
      >
        Contact Us
      </HashLink>
    </>
  );
};

export default NavLinks;
