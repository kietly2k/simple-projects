import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    <div className="w-56 flex flex-col text-center bg-[#9187d9]">
      <img src={props.image} className="w-full"/>
      <h3 className="text-2xl">{props.title}</h3>
      <Link to={props.url}>
        <button className="cursor-pointer">View challenge</button>
      </Link>
    </div>
  );
};

export default ProjectItem;
