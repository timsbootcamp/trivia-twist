import React, { useState } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import GenKnowCards from '../GeneralKnowledgeCard/Genkno';
import SportsCard from '../SportsCard/SportsCard';
import MusicCard from '../EntertainmentCard/MusicCard';
import ScienceNatureCard from '../ScienceCard/ScienceNatureCard';
import ComingSoonCard from '../ComingSoonCard/ComingSoonCard';
import EasyCard from '../LevelEasyCard/EasyLevel';
import HardCard from '../LevelHardCard/HardLevel';
import MediumCard from '../LevelMediumCard/MediumLevel'
import 'bulma/css/bulma.min.css';

const generateTriviaUrl = (category, difficulty) => {
  return (`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
};

const TriviaSelection = ({ onSelectDifficulty }) => {
  const triviaCategories = {
    "Animals": 27,
    "Entertainment: Music": 12,
    "General Knowledge": 9,
    "Science & Nature": 17,
    "Sports": 21
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      onSelectDifficulty(generateTriviaUrl(triviaCategories[selectedCategory], selectedDifficulty.toLowerCase()));
      setQuizStarted(true);
    } else {
      console.error("Please select both category and difficulty.");
    }
  };

  const titleText = selectedCategory && selectedDifficulty ? `${selectedCategory} (${selectedDifficulty}) Quiz` : "Trivia Quiz";

  return (
    <div>

      <h1>{titleText}</h1>

      {!selectedCategory && (
        <div>
          <h2>Select Trivia Category:</h2>
         
          <div><AnimalCard onSelectCategory={handleSelectCategory} />
          <GenKnowCards onSelectCategory={handleSelectCategory} /></div>
          <div><ScienceNatureCard onSelectCategory={handleSelectCategory} />
          <SportsCard onSelectCategory={handleSelectCategory} /></div>
          <div><MusicCard onSelectCategory={handleSelectCategory} />
          <ComingSoonCard></ComingSoonCard></div>
        </div>
      )}

      {selectedCategory && !selectedDifficulty && (
        <div>
          <h2>Select Trivia Difficulty:</h2>
          <EasyCard SelectedDifficulty={setSelectedDifficulty} />
          <HardCard SelectedDifficulty={setSelectedDifficulty} />
          <MediumCard SelectedDifficulty={setSelectedDifficulty} />
          <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
            <option value="">Select Difficulty</option>
            {['Easy', 'Medium', 'Hard'].map((difficulty) => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
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
