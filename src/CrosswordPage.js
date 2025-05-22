import React, { useState, useRef } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import "./CrosswordStyles.css";

const data = {
  across: {
    2: { clue: "Your favorite Disney princess", answer: "TIANA", row: 2, col: 8 },
    4: { clue: "Your favorite US city", answer: "NEWORLEANS", row: 4, col: 0 },
    6: { clue: "Which Disney character you look like?", answer: "DUMBO", row: 7, col: 0 },
  },
  down: {
    1: { clue: "Your favorite rom-com movie", answer: "CLUELESS", row: 1, col: 6 },
    2: { clue: "Your favorite flavor", answer: "TANGY", row: 2, col: 8 },
    3: { clue: "Your favorite sport", answer: "SWIMMING", row: 3, col: 2 },
    5: { clue: "What's your favorite movie genre?", answer: "ROMCOM", row: 6, col: 4 },
  },
};

export default function CrosswordPage() {
  const crosswordRef = useRef();
  const [completed, setCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCrosswordCorrect = () => {
    setCompleted(true);
    setShowModal(true);
  };

  const handleReset = () => {
    if (crosswordRef.current) {
      crosswordRef.current.reset();
      setCompleted(false);
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-rose-600">
        Just a Little Puzzle...
      </h1>

      <div className="crossword-container">
        <div className="crossword-wrapper">
          <Crossword
            ref={crosswordRef}
            data={data}
            onCrosswordCorrect={handleCrosswordCorrect}
          />
        </div>

        <div className="sidebar">
          {showModal && (
            <div className="modal">
              <h2 className="text-xl font-bold text-rose-600">You did it!</h2>
              <p className="mt-2 text-base mb-4">
                One last thing... will you be my girlfriend? ❤️
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded"
                >
                  Yes ❤️
                </button>
              </div>
            </div>
          )}

          <button
            onClick={handleReset}
            className="mt-6 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow"
          >
            Reset Puzzle
          </button>
        </div>
      </div>
    </div>
  );
}
