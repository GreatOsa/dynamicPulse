import { useState } from "react";
import "./navbar.css";
import logo from "../Assets/dynamic.png";
import Button from "../Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className=" nav-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="dynamic pulse trades" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <div className="NavLinkAndCta">
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
            {/* <li className="cta-mobile">
            <a href="#" className="btn">
              Open Account
            </a>
          </li> */}
          </ul>
          <Button name={"Open Account"} />
        </div>

        {/* CTA Button (Desktop Only) */}
        {/* <a href="#" className="btn cta-desktop">
          Open Account
        </a> */}
      </div>
    </nav>
  );
}
