import React, { FC } from "react";
import NavLink from "./NavLink";

const navLinks = ["Services", "About"];

interface INavBar {
  useDark: boolean;
  toggleTheme: () => void;
}

const NavBar: FC<INavBar> = ({ toggleTheme, useDark }) => {
  return (
    <div
      className={`navbar flex flex-row system h-16 shadow-md items-center justify-between px-4`}
    >
      <div className={"flex"}>
        <NavLink link={"/"} text={"Mike's Service Station"} classes={"-ml-6"} />
        <div onClick={toggleTheme} className={"cursor-pointer select-none"}>🌞 / 🌝</div>
      </div>
      <div className={"flex"}>
        {navLinks.map((link, index) => (
          <NavLink link={link} key={index} />
        ))}
        <div className={"button mx-4"}>
          <a
            href="mailto:mikesservicestation@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
        <div className={"m-2 hover:text-red-600 text-xs cursor-pointer"}>
          <a
            href="https://goo.gl/maps/jNAPLSvsezTstQyh9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>101 West Main Street</p>
            <p>Sheffield, PA 16347</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
5