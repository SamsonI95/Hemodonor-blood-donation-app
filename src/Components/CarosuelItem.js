import React from "react";
import "./CarouselItem.css";

export const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <div className={item.cName}>
        <h3>{item.text}</h3>
        <p>{item.name}</p>
        <div className="carousel-item-quote">
          <img src={item.quote} alt="/" />
        </div>
      </div>
      <img src={item.image} alt="/" className={item.id} />
    </div>
  );
};
