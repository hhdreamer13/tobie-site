"use client";

import { useEffect, useState, useRef } from "react";

import one from "@/public/jeu/01.webp";
import two from "@/public/jeu/02.webp";
import three from "@/public/jeu/03.webp";
import four from "@/public/jeu/04.webp";
import five from "@/public/jeu/05.webp";
import six from "@/public/jeu/06.webp";
import seven from "@/public/jeu/07.webp";
import eight from "@/public/jeu/08.webp";
import nine from "@/public/jeu/09.webp";
import ten from "@/public/jeu/10.webp";

import Card from "./CardGame";

const uniqueCardsArray = [
  {
    type: "one",
    image: one.src,
  },
  {
    type: "two",
    image: two.src,
  },
  {
    type: "three",
    image: three.src,
  },
  {
    type: "four",
    image: four.src,
  },
  {
    type: "five",
    image: five.src,
  },
  {
    type: "six",
    image: six.src,
  },
  {
    type: "seven",
    image: seven.src,
  },
  {
    type: "eight",
    image: eight.src,
  },
  {
    type: "nine",
    image: nine.src,
  },
  {
    type: "ten",
    image: ten.src,
  },
];

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

const MemoryGame = () => {
  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)),
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY,
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };

  return (
    <div className="w-full h-full">
      <div className="border rounded-lg grid grid-cols-4 grid-row-5 sm:grid-cols-5 sm:grid-rows-4 justify-items-center gap-4 w-11/12 sm:max-w-2xl h-[500px] mx-auto p-6">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <footer className="relative mt-4 px-1 py-2">
        <div className="flex justify-center items-center">
          <div className="p-2">
            <span className="font-bold">Coups :</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="">
              <span className="font-bold">Meilleur Score :</span> {bestScore}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleRestart}
            className="mt-6 px-4 py-2 bg-sky-500 font-caveat text-white rounded hover:bg-sky-700 shadow-[inset_0_0_20px_rgba(255,255,255,0)] outline-[rgba(255,255,255,0.5)] outline-offset-0 transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] border-transparent hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.2)] hover:border-solid;"
          >
            Recommencer
          </button>
        </div>
      </footer>
      {/* {showModal && (
        <div className="modal">
          <h3>Hurray!!! You completed the challenge</h3>
          <p>
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </p>
          <div>
            <button
              onClick={handleRestart}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Restart
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MemoryGame;
