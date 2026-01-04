import React from "react";

const MemoryCards = ({
  card,

  handleCardClick,
}) => {
  const handleClick = () => {
    handleCardClick(card.name);
  };

  return (
    <div className="cards-main-container" onClick={handleClick}>
      <div className="card-container">
        <div className="image">
          <img src={card.img} alt="card" />
        </div>
        <div className="card-name">{card.name}</div>
      </div>
    </div>
  );
};

export default MemoryCards;
