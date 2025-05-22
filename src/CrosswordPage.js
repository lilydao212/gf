import React, { useState, useRef } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import './CrosswordPage.css';

const data = {
  across: {
    2: { clue: 'Your favorite Disney princess', answer: 'TIANA', row: 2, col: 8 },
    4: { clue: 'Your favorite US city', answer: 'NEWORLEANS', row: 4, col: 0 },
    6: { clue: 'Which Disney character you look like?', answer: 'DUMBO', row: 7, col: 0 },
  },
  down: {
    1: { clue: 'Your favorite rom-com movie', answer: 'CLUELESS', row: 1, col: 6 },
    2: { clue: 'Your favorite flavor', answer: 'TANGY', row: 2, col: 8 },
    3: { clue: 'Your favorite sports', answer: 'SWIMMING', row: 3, col: 2 },
    5: { clue: "What's your favorite movie genre?", answer: 'ROMCOM', row: 6, col: 4 }
  },
};

export default function CrosswordPage() {
  const crosswordRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const handleCrosswordCorrect = () => {
    setShowModal(true);
  };

  const handleReset = () => {
    if (crosswordRef.current) {
      crosswordRef.current.reset();
      setShowModal(false);
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">Just a Little Puzzle...</h1>
      <div className="layout">
        <div className="puzzle-container">
          <Crossword
            data={data}
            ref={crosswordRef}
            onCrosswordCorrect={handleCrosswordCorrect}
            useStorage={false}
          />
        </div>

        <div className="side-panel">
          <button className="reset-button" onClick={handleReset}>
            Reset Puzzle
          </button>

          {showModal && (
            <div className="modal">
              <h2 className="text-xl font-bold text-rose-600">You did it!</h2>
              <p className="mt-2 text-base mb-4">
                One last question... be my girlfriend? ❤️
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
        </div>
      </div>
    </div>
  );
}
