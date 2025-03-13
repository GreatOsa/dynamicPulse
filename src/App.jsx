import React from "react";
import "./App.css";
import Button from "./Button";
// import BgImage from "./Assets/";
import {
  FaGlobe,
  FaMobileScreen,
  FaPlay,
  FaSackDollar,
  FaUserSecret,
} from "react-icons/fa6";
import Button2 from "./Button2";
import { Navbar } from "./Components/Navbar";
import ilus3 from "./Assets/ilus-3.png";
import { FaPhone, FaSearchDollar } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="container">
        <div className="propertyList">
          <PropertyCard
            icon={<FaGlobe />}
            title={"Institutional Grade"}
            text={
              "We serve private individuals as well as family offices and institutions. Having many years of dedicated experience and backgrounds in computer science, engineering and finance, we think we have the perfect mix to advance you further. ."
            }
          />
          <PropertyCard
            icon={<FaSearchDollar />}
            title={"Live Transparency "}
            text={
              "Our dashboard and app offers a live feed to your portfolio and the option for setting alerts, following the news and many more features. It is simply the most advanced overview we have seen on the web and we are proud to offer it to our clients."
            }
          />
          <PropertyCard
            icon={<FaMobileScreen />}
            title={"Assets Safety "}
            text={
              "Security and safety are paramount, which is why we ensure we have accounts on verified and established exchanges as well as our own infrastructure to always fully support our clients. If that's not enough, we have insurance coverage, going the extra mile."
            }
          />
          <PropertyCard
            icon={<FaUserSecret />}
            title={"Private Accounts "}
            text={
              "Having your own dedicated accounts means there is dedicated attention. Your portfolio will remain separate from all other portfolios ensuring there is no risk of mixing accounts. In other words, what is yours remains yours. Just how it should be."
            }
          />
        </div>
        <WhoWeAre />\
        <div className="writeUpVisaProcessingContainer ">
          <article className="writeUpVisaProcessing">
            <p className="title">
              <span> Let's handle your Visa Processing</span> and also get a
              crypto loan from us and mine with it.
            </p>
            <p className="text">
              We partner with reputable loans firms to give you loans of up to 5
              Million USD in one transaction all within 5 minutes! No
              collateral, no paperwork and no visit to any office. !
            </p>
            <p className="text">
              With Dynamic Pulse Trades, you can take care of urgent personal
              and business needs, Visa Processing anywhere, anytime.{" "}
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

function Main() {
  return (
    // <div className="GetStarted">
    <div className="opacity">
      <div className="infoContainer">
        <h1>A trusted partner for blockchain and digital asset investments</h1>
        <p>
          Dynamic Pulse Trades is a thesis-driven global asset management firm
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

function PropertyCard({ icon, title, text }) {
  return (
    <div className="infoCard">
      <span className="icon">{icon}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function WhoWeAre() {
  return (
    <div className="whoWeAreContainer">
      <div className="WhoWeAre">
        <p className="title">Who We Are</p>
        <p className="question">
          Covered by <span>Insurance</span>?
        </p>
        <p className="text">
          We got you covered, literally. Our services include offering
          insurance. And by getting advice from the best legal parties, we set
          up a custom, tailor-made, legal structure that is in full compliance
          with current regulation.
        </p>
        <p className="text">
          Insurance coverage: For mid- and long-term storage solutions, we have
          insurance covering extraordinary circumstances including cyberrisk.
        </p>
        <Button name={"Discover More"} />
      </div>
      <div className="WhoWeAreImage">
        <img src={ilus3} />
      </div>
    </div>
  );
}
