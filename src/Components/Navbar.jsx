// import React from "react";
// import "./navbar.css";
// import Button from "../Button";

// export function Navbar() {
//   return (
//     <nav className="Navbar">
//       <img
//         src={"https://www.whalesmarketholdings.com/logo.png"}
//         alt="Whales Market Holdings"
//       />
//       <div>
//         <ul></ul>
//         <Button name={"Open Account"} />
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import "./navbar.css";
import Button from "../Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img
            src={"https://www.whalesmarketholdings.com/logo.png"}
            alt="Whales Market Holdings"
          />
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
