import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ProtfolioMenu } from "../SVGs/PortfolioMenu.svg";
import { ReactComponent as Sign } from "../SVGs/sign.svg";
import { ReactComponent as Workarrow } from "../SVGs/work-arrow.svg";
import { ReactComponent as Aboutarrow } from "../SVGs/about-arrow.svg";

function Menu() {
  const check = React.useRef();
  console.log(check);
  return (
    <main className="menu">
      <ProtfolioMenu className="background" />
      <Sign className="sign" />
      <ul className="nav-bar">
        <li className="nav-item">Home</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">About Me</li>
        <li className="nav-item">Contact</li>
      </ul>
      <h1 className="num-home">
        01 <p>HOME</p>{" "}
      </h1>
      <section className="title">
        <h1 className="title-intro">Iam a</h1>
        <h1 className="job-title" ref={check}>
          Frontend Engineer
        </h1>
        <p>With Passion For UI/UX &#38; Web Designing. </p>
        <div className="title-btn">
          <Link to="/Projects" className="title-btn-work">
            Projects
          </Link>
          <Link to="/About" className="title-btn-about">
            About Me
          </Link>
        </div>
        <Workarrow className="work-arrow" />
        <Aboutarrow className="about-arrow" />
      </section>
    </main>
  );
}

export default Menu;
