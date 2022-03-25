import React, { useState } from "react";
import { ProjectSection, SubHeading } from "../Elements/elements";
import { projectArray } from "../data";

export const Projects = ({ currTheme }) => {
  return (
    <ProjectSection id="projects" currTheme={currTheme}>
      <SubHeading>Projects</SubHeading>
      <div>
        <div className="project-card-container">
          {projectArray.map((item) => (
            <ProjectCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </ProjectSection>
  );
};

const ProjectCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const [currInterest, setCurrInterest] = useState({});

  const handleRead = () => {
    setShow(!show);
    setCurrInterest({ ...item });
  };

  return (
    <>
      <div className="reveal project-card">
        <img src={item.image} alt={item.title} />
        <div>
          <h3 className="project-title">{item.title}</h3>
          <button onClick={handleRead}>Read More</button>
        </div>
        <p className="project-description">{item.description}</p>
        <div className="btns">
          <a
            className="demo"
            href={item.demoLink}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            className="code"
            href={item.codeLink}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
      {show && <ProjectDetail currInterest={currInterest} setShow={setShow} />}
    </>
  );
};

const ProjectDetail = ({ currInterest, setShow }) => {
  return (
    <div className="project-detail-section">
      <div>
        <div
          className="close-modal"
          onClick={(e) => {
            e.stopPropagation();
            setShow(false);
          }}
        >
          <span></span>
          <span></span>
        </div>
        <div>
          <div>
            <p className="curr-title">{currInterest.title}</p>
            <div className="curr-image">
              <img src={currInterest.image} alt={currInterest.title} />
            </div>
            <p className="curr-description">{currInterest.description}</p>
            <div className="btns">
              <a
                className="demo"
                href={currInterest.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
              <a
                className="code"
                href={currInterest.codeLink}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
          <div>
            <p className="type">{currInterest.type}</p>
            <p className="tech-stack">Tech Stack:</p>
            <ul>
              {currInterest.techStack.map((tech) => (
                <li key={tech.title}>
                  <img src={tech.image} alt={tech.title} />
                </li>
              ))}
            </ul>
            {currInterest.responsibilities ? (
              <>
                <p className="responsibilities">Responsibilities:</p>
                <ul>
                  {currInterest.responsibilities.map((res) => (
                    <li key={res.title}>{res}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p className="features">Features:</p>
                <ul>
                  {currInterest.features.map((feat) => (
                    <li key={feat.title}>{feat}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
