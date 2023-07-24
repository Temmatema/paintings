import React, {useContext} from 'react';
import Card from "./Card";
import {Context} from "../context";
import Loader from "./Loader";

const CardList = ({paintings}) => {
  const {isLoading} = useContext(Context);

  return (
    <div className="cards">
      {
        isLoading ? <Loader/> :
        paintings.map(el => {
          return <Card
            locationId={el.locationId}
            created={el.created}
            key={el.id}
            name={el.name}
            authorId={el.authorId}
            imageUrl={el.imageUrl}/>
        })
      }
    </div>
  );
};

export default CardList;
