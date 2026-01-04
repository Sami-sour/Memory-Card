import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import GameScore from "./components/GameScore";
import Header from "./components/Header";
import { LooseMessage } from "./components/LooseMessage";

function App() {
  const [cardinfo, setCardInfo] = useState([]);
  const [updateScore, setUpdateScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showCards, setShowCards] = useState(true);

  const handleCardClick = (name) => {
    shuffleCards();

    if (clickedCards.includes(name)) {
      setShowMessage(true);
      setShowCards(false);
      setClickedCards([]);
      setUpdateScore(0);

      setTimeout(() => {
        setShowMessage(false), setShowCards(true);
      }, 2000);
      return;
    }

    const updatedClicked = [...clickedCards, name];
    setClickedCards(updatedClicked);
    setUpdateScore((prev) => {
      const newScore = prev + 1;
      setBestScore((prevBest) => Math.max(prevBest, newScore));
      return newScore;
    });
  };

  useEffect(() => {
    const storedBest = localStorage.getItem("bestScore");
    if (storedBest) setBestScore(Number(storedBest));
  }, []);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  const shuffleCards = () => {
    setCardInfo((prevCards) => {
      const shuffled = [...prevCards].sort(() => Math.random() - 0.5);
      return shuffled;
    });
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonIds = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ];

      const data = await Promise.all(
        pokemonIds.map(async (id) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const poke = await res.json();
          return {
            name: poke.name,
            img: poke.sprites.other["official-artwork"].front_default,
          };
        })
      );

      setCardInfo(data);
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <Header showMessage={showMessage} />
      <GameScore currentScore={updateScore} bestOfScore={bestScore} />
      {showCards && (
        <Card
          memoryStore={cardinfo}
          shuffleCards={shuffleCards}
          handleCardClick={handleCardClick}
          showMessage={showMessage}
        />
      )}
      <LooseMessage showMessage={showMessage} />
    </>
  );
}

export default App;
