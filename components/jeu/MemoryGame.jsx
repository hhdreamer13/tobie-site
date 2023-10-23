"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useGameLogic } from "./useGameLogic";

import Card from "./CardGame";
import ModalGameCard from "./ModalGameCard";
import Confetti from "./Confetti";
import RestartIcon from "../common/icons/RestartIcon";
import InfoIcon from "../common/icons/InfoIcon";

const MemoryGame = ({ gameAssets, text }) => {
  const gameSetNames = gameAssets.map((gameSet) => gameSet.gameSetName);

  const [uniqueCardsArray, setUniqueCardsArray] = useState(gameAssets[0].cards);
  const [isModalActive, setIsModalActive] = useState(true);

  const handleShowContent = () => {
    setIsModalActive((prevIsModalActive) => !prevIsModalActive);
  };

  const {
    cards,
    clearedCards,
    shouldDisableAllCards,
    moves,
    bestScore,
    handleCardClick,
    checkIsFlipped,
    checkIsInactive,
    handleRestart,
    showModal,
    setShowModal,
    modalCardId,
  } = useGameLogic(uniqueCardsArray);

  const isGameFinished =
    Object.keys(clearedCards).length === uniqueCardsArray.length;

  useEffect(() => {
    handleRestart();
  }, [uniqueCardsArray]);

  return (
    <div className="relative w-full h-full" key={uniqueCardsArray[0]._id}>
      <div className="flex justify-center items-center mb-2">
        <label htmlFor="gameType" className="mr-2">
          {text}
        </label>
        <select
          className="px-2 py-1 rounded-md"
          id="gameType"
          onChange={(e) => {
            const selectedGameSet = gameAssets.find(
              (gameSet) => gameSet.gameSetName === e.target.value,
            );
            setUniqueCardsArray(selectedGameSet.cards);
          }}
        >
          {gameSetNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="relative border rounded-lg grid grid-cols-4 grid-row-5 sm:grid-cols-5 sm:grid-rows-4 justify-items-center gap-4 w-11/12 sm:max-w-2xl h-[500px] mx-auto p-6">
        {isGameFinished && (!isModalActive || !showModal) && (
          <>
            <div className="absolute flex justify-center items-center inset-0">
              <button onClick={handleRestart} className="z-10">
                <div className="flex justify-center items-center">
                  <RestartIcon className="w-16 h-16 transition-all duration-200 hover:scale-105 text-cyan-600 dark:text-cyan-600" />
                </div>
              </button>
            </div>
            <div className="absolute inset-0">
              <Confetti />
            </div>
          </>
        )}
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
        {!isGameFinished && (
          <>
            <div className="absolute top-1 left-1 w-5 h-5">
              <button onClick={handleRestart} title="Redémarrer le jeu">
                <div className=" w-5 h-5 rounded-lg bg-slate-100/40 dark:bg-slate-950/30 flex justify-center items-center">
                  <RestartIcon className="w-16 h-16 transition-all duration-200 hover:scale-105 text-cyan-600 dark:text-cyan-600" />
                </div>
              </button>
            </div>
            <div className="absolute top-1 right-1 w-5 h-5">
              <button
                onClick={handleShowContent}
                title="Afficher/masquer la popup d'information"
              >
                <div
                  className={`w-5 h-5 rounded-lg bg-slate-100/40 dark:bg-slate-950/30 flex justify-center items-center ${
                    isModalActive
                      ? "text-cyan-600 dark:text-cyan-600"
                      : "text-gray-400"
                  }`}
                >
                  <InfoIcon className="w-16 h-16 transition-all duration-200 hover:scale-105" />
                </div>
              </button>
            </div>
          </>
        )}
      </div>
      <footer className="mt-1 px-1 py-2">
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
      </footer>
      <AnimatePresence>
        {isModalActive && showModal && (
          <ModalGameCard
            item={uniqueCardsArray.find((item) => item.type === modalCardId)}
            setShowModal={setShowModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoryGame;
