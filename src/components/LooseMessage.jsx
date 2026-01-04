import React from "react";

export const LooseMessage = ({ showMessage }) => {
  return (
    <>
      {showMessage && (
        <div className="game-loose-msg">
          <div className="message">
            OOhhh no You clikced Twice on same card!!!
          </div>
        </div>
      )}
    </>
  );
};
