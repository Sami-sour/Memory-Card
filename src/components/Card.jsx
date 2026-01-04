import React from "react";
import MemoryCards from "./MemoryCards";

const Card = ({ memoryStore, handleCardClick }) => {
  return (
    <>
      <div className="main-card-div">
        {memoryStore.map((card, index) => (
          <MemoryCards
            card={card}
            key={index}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </>
  );
};

export default Card;
