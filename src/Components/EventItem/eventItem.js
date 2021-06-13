import React from "react";

import { Link } from "react-router-dom";

const EventItem = (props) => {
  const { image, title, id, date_and_time } = props;

  return (
    <Link id='item-link' to={`/project/${id}`}>
      <div className="project-wrapper">
        <span id="project-title">События</span>
        <img id="project-pic" src={image} />
        <div className="description-wrapper">
          <div>Название: {title}</div>
          <div>Дата {date_and_time}</div>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
