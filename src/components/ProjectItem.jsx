import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProjectItem = (props) => {
  const navigate = useNavigate();

  const redirectToProject = () => {
    navigate(props.url);
  };

  return (
    <div className="w-56 flex flex-col text-center bg-[#9187d9]">
      <img src={props.image} className="w-full" />
      <h3 className="text-2xl">{props.title}</h3>
      <button className="cursor-pointer" onClick={redirectToProject}>
        View challenge
      </button>
    </div>
  );
};

export default ProjectItem;
