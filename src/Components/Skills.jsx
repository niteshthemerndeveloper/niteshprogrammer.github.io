import React from "react";
import { SkillSection, SubHeading } from "../Elements/elements";
import { skillArray } from "../data";

export const Skills = ({ currTheme }) => {
  return (
    <SkillSection id="skills" currTheme={currTheme}>
      <SubHeading>Skills</SubHeading>
      <div>
        <Technologies />
      </div>
      <SubHeading>Proficiencies</SubHeading>
      <div>
        <Proficiencies />
      </div>
    </SkillSection>
  );
};

const Technologies = () => {
  return (
    <ul className="skill-card-container">
      {skillArray.technologies.map((item) => (
        <li className="reveal" key={item.title}>
          <img src={item.image} alt={item.title} />
          <h3 className="skill-title">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

const Proficiencies = () => {
  return (
    <ul className="reveal skill-card-container">
      {skillArray.proficiencies.map((item) => (
        <li className="reveal" key={item.title}>
          <img src={item.image} alt={item.title} />
          <h3 className="skill-title">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};
