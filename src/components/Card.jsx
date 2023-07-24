import React, {useContext} from "react";
import {Context} from "../context";

const Card = ({ imageUrl, name, authorId, created, locationId }) => {
  const {authors, locations} = useContext(Context);

  const authorName = authors.find((obj) => obj.id === authorId).name;
  const location = locations.find((obj) => obj.id === locationId).location;

  const getUrl = (url) => `https://test-front.framework.team${url}`

  return (
    <div className="cards__item">
      <img src={getUrl(imageUrl)} alt="Картина." />
      <div className="cards__inner-wrap">
        <h2>{name}</h2>
        <p>
          Author: <span>{authorName}</span>
        </p>
        <p>
          Created: <span>{created}</span>
        </p>
        <p>
          Location: <span>{location}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
