import React, {useContext, useState} from "react";
import {Context} from "../context";
import Loader from "./Loader";
import {motion} from "framer-motion";


const Card = ({ imageUrl, name, authorId, created, locationId }) => {
  const {authors, locations} = useContext(Context);
  const [imageLoaded, setImageLoaded] = useState(false);


  const authorName = authors.find((obj) => obj.id === authorId).name;
  const location = locations.find((obj) => obj.id === locationId).location;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div className="cards__item"
                initial={{ opacity: 0, y: 50 }} // начальные стили перед анимацией
                animate={{ opacity: 1, y: 0 }} // стили во время анимации
                transition={{ duration: 0.5, delay: 0.1 }}>
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
    </motion.div>
  );
};

export default Card;
