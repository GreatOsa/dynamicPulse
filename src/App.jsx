import React from "react";
import "./App.css";
import Button from "./Button";
import { FaGlobe, FaPlay } from "react-icons/fa6";
import Button2 from "./Button2";
import { Navbar } from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="propertyList">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div>
        <p>Who We Are</p>
        <p>
          Covered by <span>Insurance ?</span>{" "}
        </p>
      </div>
    </>
  );
}

function Main() {
  return (
    // <div className="GetStarted">
    <div className="opacity">
      {/* </div> */}
      <div className="infoContainer">
        <h1>A trusted partner for blockchain and digital asset investments</h1>
        <p>
          Whales Market Holdings is a thesis-driven global asset management firm
          dedicated to the active management of blockchain and digital asset
          based portfolios. We create and implement actively managed and
          algorithmically enabled portfolios for private investors, family
          offices and institutions.{" "}
        </p>
        <div className="button-container">
          <Button className="" name={"Get started"} />

          <Button2 />
        </div>
      </div>
    </div>
  );
}

function PropertyCard() {
  return (
    <div className="infoCard">
      <span className="icon">
        <FaGlobe />
      </span>
      <h2>Instition Grade</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae hic
        temporibus quidem sequi incidunt saepe dicta magni necessitatibus odio
        rerum eligendi quasi, blanditiis corrupti enim nihil accusamus cumque
        iste consectetur.
      </p>
    </div>
  );
}
