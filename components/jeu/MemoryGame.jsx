"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useGameLogic } from "./useGameLogic";

import { personnagesArray, feuillesArray } from "@/utils/gameAssets";

import Card from "./CardGame";
import ModalGameCard from "./ModalGameCard";
import Confetti from "./Confetti";
import RestartIcon from "../common/RestartIcon";
import InfoIcon from "../common/InfoIcon";

const MemoryGame = () => {
  const [uniqueCardsArray, setUniqueCardsArray] = useState(personnagesArray);
  const [isModalActive, setIsModalActive] = useState(true);

  const handleShowContent = () => {
    setIsModalActive((prevIsModalActive) => !prevIsModalActive);
  };

  const {
    cards,
    openCards,
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
    <div className="relative w-full h-full" key={uniqueCardsArray[0].type}>
      <div className="flex justify-center items-center mb-2">
        <label htmlFor="gameType" className="mr-2">
          Choisissez une catégorie :
        </label>
        <select
          className="px-2 py-1 rounded-md"
          id="gameType"
          onChange={(e) => {
            setUniqueCardsArray(
              e.target.value === "personnages"
                ? personnagesArray
                : feuillesArray,
            );
          }}
        >
          <option value="personnages">Personnages</option>
          <option value="feuilles">Feuilles</option>
        </select>
      </div>
      <div className="relative border rounded-lg grid grid-cols-4 grid-row-5 sm:grid-cols-5 sm:grid-rows-4 justify-items-center gap-4 w-11/12 sm:max-w-2xl h-[500px] mx-auto p-6">
        {isGameFinished && (
          <>
            <div className="absolute inset-0">
              <Confetti />
            </div>
            <div className="absolute flex justify-center items-center inset-0">
              <button onClick={handleRestart}>
                <div className="rounded-lg bg-slate-100/40 dark:bg-slate-950/30 flex justify-center items-center">
                  <RestartIcon className="w-16 h-16 transition-all duration-200 hover:scale-105 text-cyan-600 dark:text-cyan-600" />
                </div>
              </button>
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
              <button onClick={handleRestart}>
                <div className=" w-5 h-5 rounded-lg bg-slate-100/40 dark:bg-slate-950/30 flex justify-center items-center">
                  <RestartIcon className="w-16 h-16 transition-all duration-200 hover:scale-105 text-cyan-600 dark:text-cyan-600" />
                </div>
              </button>
            </div>
            <div className="absolute top-1 right-1 w-5 h-5">
              <button onClick={handleShowContent}>
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
        {/* <div className="flex justify-center items-center">
          <button
            onClick={handleRestart}
            className="mt-6 px-4 py-2 dark:bg-cyan-700 bg-cyan-600 font-caveat text-lg text-white rounded hover:bg-cyan-700 shadow-[inset_0_0_20px_rgba(255,255,255,0)] outline-[rgba(255,255,255,0.5)] outline-offset-0 transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] border-transparent hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.2)] hover:border-solid;"
          >
            Recommencer
          </button>
        </div> */}
      </footer>
      <AnimatePresence>
        {isModalActive && showModal && (
          <ModalGameCard
            item={uniqueCardsArray.find((item) => item.id === modalCardId)}
            setShowModal={setShowModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoryGame;
