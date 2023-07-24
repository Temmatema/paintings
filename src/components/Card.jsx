import React, {useContext, useState} from "react";
import {Context} from "../context";
import Loader from "./Loader";

const Card = ({ imageUrl, name, authorId, created, locationId }) => {
  const {authors, locations} = useContext(Context);
  const [imageLoaded, setImageLoaded] = useState(false);


  const authorName = authors.find((obj) => obj.id === authorId).name;
  const location = locations.find((obj) => obj.id === locationId).location;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="cards__item">
      {!imageLoaded && <Loader/>}
      <img src={`https://test-front.framework.team${imageUrl}`}
           alt="Картина."
           style={{ display: imageLoaded ? 'block' : 'none' }}
           onLoad={handleImageLoad} />
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
