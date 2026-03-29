import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

// Your asset imports
import cookieMonster from '../assets/memoryGameImages/cookie-monster-48.png'
import dipperPines from '../assets/memoryGameImages/dipper-pines-48.png'
import freddyFrazBear from '../assets/memoryGameImages/five-nights-at-freddys-48.png'
import glenn from '../assets/memoryGameImages/glenn-quagmire-48.png'
import homer from '../assets/memoryGameImages/homer-simpson-48.png'
import mablePines from '../assets/memoryGameImages/mabel-pines-48.png'
import meme from '../assets/memoryGameImages/meme-48.png'
import monkas from '../assets/memoryGameImages/monkas-48.png'

const cardsData = [
  { id: 1, name: "cookieMonster", image: cookieMonster },
  { id: 2, name: "cookieMonster", image: cookieMonster },
  { id: 3, name: "dipperPines", image: dipperPines },
  { id: 4, name: "dipperPines", image: dipperPines },
  { id: 5, name: "freddyFrazBear", image: freddyFrazBear },
  { id: 6, name: "freddyFrazBear", image: freddyFrazBear },
  { id: 7, name: "glenn", image: glenn },
  { id: 8, name: "glenn", image: glenn },
  { id: 9, name: "mablePines", image: mablePines },
  { id: 10, name: "mablePines", image: mablePines },
  { id: 11, name: "homer", image: homer },
  { id: 12, name: "homer", image: homer },
  { id: 13, name: "meme", image: meme },
  { id: 14, name: "meme", image: meme },
  { id: 15, name: "monkas", image: monkas },
  { id: 16, name: "monkas", image: monkas },
];

export default function MemoryGame() {
  const [board, setBoard] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedNames, setMatchedNames] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = [...cardsData].sort(() => Math.random() - 0.5);
    setBoard(shuffled);
  }, []);

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedNames.includes(board[index].name)
    ) return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const firstCard = board[newFlipped[0]];
      const secondCard = board[newFlipped[1]];

      if (firstCard.name === secondCard.name) {
        setMatchedNames((prev) => [...prev, firstCard.name]);
        setScore((prev) => prev + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 800);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-5 font-bodoni rounded-2xl">
      <h2 className="text-white text-2xl font-bold mb-10 tracking-widest uppercase">
        Score: {score}
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {board.map((card, index) => {
          const isVisible = flippedCards.includes(index) || matchedNames.includes(card.name);

          return (
            <div key={card.id} className="w-[90px] h-[90px] [perspective:1000px]">
              <motion.div
                onClick={() => handleCardClick(index)}
                className="relative w-full h-full [transform-style:preserve-3d] cursor-pointer"
                animate={{ rotateY: isVisible ? 180 : 0 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* BACK: Pure Black Tile */}
                <div className="absolute inset-0 bg-black border-2 border-white rounded-xl [backface-visibility:hidden]" />

                {/* FRONT: Pure White Tile */}
                <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img 
                    src={card.image} 
                    alt={card.name} 
                    className="w-[55px] h-[55px] object-contain" 
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {matchedNames.length === cardsData.length / 2 && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.location.reload()}
          className="mt-12 px-8 py-3 bg-white text-black font-bold uppercase tracking-tighter hover:bg-black hover:text-white border-2 border-white transition-all duration-300 rounded-none"
        >
          Reset Game
        </motion.button>
      )}
    </div>
  );
}