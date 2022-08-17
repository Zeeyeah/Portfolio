import React from "react";
import Reactlogo from "../SVGs/react.svg";
import Illustrator from "../SVGs/adobe-illustrator.svg";
import Figma from "../SVGs/figma.svg";
import { motion } from "framer-motion";
import { ReactComponent as HyderbadProject } from "../SVGs/hyd-react.svg";
import { ReactComponent as MemoryProject } from "../SVGs/memory-react.svg";
import { ReactComponent as TenziesProject } from "../SVGs/tenzies-react.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const [reactProjects, setReactProjects] = React.useState(true);
  const [illustratorProjects, setIllustratorProjects] = React.useState(false);
  const [uiProjects, setUiProjects] = React.useState(false);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#394d7a",
          backgroundColor: "#394d7a",
          borderRadius: "50%",
          zIndex: "1000",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "#394d7a",
          borderRadius: "50%",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  function ProjectCards(props) {
    return (
      <motion.div
        id="project-card"
        initial={{ x: "110%", opacity: "0%" }}
        animate={{
          x: "0",
          opacity: "100%",
          transition: "linear",
          transitionDuration: props.trans,
        }}
      >
        <div id="project-about">
          <b>{props.title}</b>
          <p className="project-info">{props.info}</p>
          <p className="project-tech"> {props.tech}</p>

          <a
            href={props.live}
            target="_blank"
            className="live-btn"
            rel="noreferrer"
          >
            Live
          </a>
          <a
            href={props.code}
            target="_blank"
            className="code-btn"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
        {props.pic}
      </motion.div>
    );
  }

  function Reactprojects() {
    return (
      <div className="project-display">
        <div className="carousel-wrapper">
          <img className="react-bg" src={Reactlogo} alt="" />
        </div>
        <Slider className="carousel" {...settings}>
          <ProjectCards
            pic={
              <motion.div
                initial={{ x: "110%", opacity: "0%" }}
                animate={{
                  x: "0",
                  opacity: "100%",
                  transition: "linear",
                  transitionDuration: "1s",
                  transitionDelay: ".4s",
                }}
              >
                <HyderbadProject className="project-pic" />
              </motion.div>
            }
            title="Hyderabad Travel Guide"
            tech="React | react-router-dom | framer motion | parallax-scroll"
            info="A Collection of Tourists Spots in Hyderabad. "
            trans=".8s"
            code="https://github.com/Zeeyeah/ExploreHyderabad"
            live="https://zeeyeah.github.io/ExploreHyderabad/"
          />
          <ProjectCards
            pic={
              <motion.div
                initial={{ x: "110%", opacity: "0%" }}
                animate={{
                  x: "0",
                  opacity: "100%",
                  transition: "linear",
                  transitionDuration: "1s",
                  transitionDelay: ".7s",
                }}
              >
                <MemoryProject className="project-pic" />
              </motion.div>
            }
            title="Memory Game"
            tech="React"
            info="A Game About Memorizing Card Positions and Matching The Similar Ones"
            trans="1.4s"
            code="https://github.com/Zeeyeah/MemoryGame"
            live="https://zeeyeah.github.io/MemoryGame/"
          />
          <ProjectCards
            pic={
              <motion.div
                initial={{ x: "110%", opacity: "0%" }}
                animate={{
                  x: "0",
                  opacity: "100%",
                  transition: "linear",
                  transitionDuration: "1s",
                  transitionDelay: "1s",
                }}
              >
                <TenziesProject className="project-pic" />
              </motion.div>
            }
            title="Tenzies Game"
            tech="React"
            info="A Game About Memorizing Card Positions and Matching The Similar Ones"
            trans="2s"
            code="https://github.com/Zeeyeah/Tenzies"
            live="https://zeeyeah.github.io/Tenzies/"
          />
          <ProjectCards />
          <ProjectCards />
        </Slider>
      </div>
    );
  }

  function Illustratorprojects() {
    return (
      <div className="project-display">
        <div className="carousel">
          <img className="illustrator-bg" src={Illustrator} alt="" />
        </div>
      </div>
    );
  }
  function Uiprojects() {
    return (
      <div className="project-display">
        <div className="carousel">
          <img className="figma-bg" src={Figma} alt="" />
        </div>
      </div>
    );
  }

  function selectProject() {
    if (reactProjects) {
      return <Reactprojects />;
    }
    if (illustratorProjects) {
      return <Illustratorprojects />;
    } else {
      return <Uiprojects />;
    }
  }

  return (
    <main className="projects">
      <section className="projects-menu">
        <div className="projects-menu-wrapper">
          <h1 className="project-title">MY PROJECTS</h1>
          <ul className="project-list">
            <li
              className={
                reactProjects ? "react-projects-open" : "react-projects"
              }
              onClick={() => {
                setReactProjects(true);
                setIllustratorProjects(false);
                setUiProjects(false);
              }}
            >
              <img src={Reactlogo} alt="" className="react-projects-logo" />{" "}
              <p>React.js</p>{" "}
            </li>

            <li
              className={
                illustratorProjects
                  ? "illustrator-projects-open"
                  : "illustrator-projects"
              }
              onClick={() => {
                setIllustratorProjects(true);
                setReactProjects(false);
                setUiProjects(false);
              }}
            >
              <img
                src={Illustrator}
                alt=""
                className="illustrator-projects-logo"
              />
              <p>Illustrator</p>
            </li>

            <li
              className={uiProjects ? "ui-projects-open" : "ui-projects"}
              onClick={() => {
                setUiProjects(true);
                setIllustratorProjects(false);
                setReactProjects(false);
              }}
            >
              <img src={Figma} alt="" className="ui-projects-logo" />
              <p>Ui Prototypes</p>
            </li>
          </ul>

          <h1 className="num-projects">
            02 <p>PROJECTS</p>
          </h1>
        </div>
      </section>
      <section>{selectProject()}</section>
    </main>
  );
}

export default Projects;
