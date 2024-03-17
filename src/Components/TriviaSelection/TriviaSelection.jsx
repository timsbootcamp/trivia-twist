import React, { useState } from "react";
import SelectionCards from "../SelectionCards/SelectionCards";
// import GenKnowCards from '../GeneralKnowledgeCard/Genkno';
import SportsCard from '../SportsCard/SportsCard';
// import MusicCard from '../EntertainmentCard/MusicCard';
import ScienceNatureCard from '../ScienceCard/ScienceNatureCard';
// import ComingSoonCard from '../SelectionCards/ComingSoonCard';

import 'bulma/css/bulma.min.css';

const generateTriviaUrl = (category, difficulty) => {
  return `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
};

const TriviaSelection = ({ onSelectDifficulty }) => {
  const triviaCategories = {
    Animals: 27,
    "Entertainment: Music": 12,
    "General Knowledge": 9,
    "Science & Nature": 17,
    Sports: 21,
  };

  const difficulties = ["Easy", "Medium", "Hard"];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleSelectCategory = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };

  const handleSelectDifficulty = (event) => {
    const selectedValue = event.target.value;
    setSelectedDifficulty(selectedValue);
  };

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      onSelectDifficulty(
        generateTriviaUrl(
          triviaCategories[selectedCategory],
          selectedDifficulty.toLowerCase()
        )
      );
      setQuizStarted(true);
    } else {
      console.error("Please select both category and difficulty.");
    }
  };

  const titleText =
    selectedCategory && selectedDifficulty
      ? `${selectedCategory} (${selectedDifficulty}) Quiz`
      : "Trivia Quiz";

  return (
    <div>
      <h1>{titleText}</h1>

      {!selectedCategory && (
        <div>
           
          <h2>Select Trivia Category:</h2>
          <SelectionCards></SelectionCards>
          <SportsCard></SportsCard>
          <ScienceNatureCard></ScienceNatureCard>
          <select
            className="select"
            value={selectedCategory}
            onChange={handleSelectCategory}
          >
            <option value="">Select Category</option>
            {Object.keys(triviaCategories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedCategory && !selectedDifficulty && (
        <div>
          <h2>Select Trivia Difficulty:</h2>
          <select
            className="select"
            value={selectedDifficulty}
            onChange={handleSelectDifficulty}
          >
            <option value="">Select Difficulty</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedCategory && selectedDifficulty && !quizStarted && (
        <div>
          <button onClick={handleStartQuiz}>
            Start {selectedCategory} ( {selectedDifficulty} ) Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default TriviaSelection;
