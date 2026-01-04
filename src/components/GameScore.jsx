const GameScore = ({ currentScore, bestOfScore }) => {
  return (
    <>
      <center>
        <p className="game-rule">Click on the same hero twice and you lose</p>

        <div className="score-card">
          <div className="best-score">
            Best Score: <span>{bestOfScore}</span>
          </div>
          <div className="current-score">
            Current Score: <span>{currentScore}</span>
          </div>
        </div>
      </center>
    </>
  );
};

export default GameScore;
