import React from "react";
import "./SingleSkills.css";

const SkillsLine = () => {
  return <div className="skills-line my-2 bg-light-blue"></div>;
};

const SingleSkills = ({ technology, percentage, className }) => {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{technology}</h5>
        <h5>{percentage}%</h5>
      </div>
      <div className={" my-2 bg-light-blue skills-line-" + className}></div>
    </div>
  );
};

export default SingleSkills;
