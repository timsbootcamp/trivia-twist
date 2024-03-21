import React, { useState } from "react";
import useSound from "use-sound";
import AnimalCard from "../AnimalCard/AnimalCard";
import GenKnowCards from "../GeneralKnowledgeCard/Genkno";
import SportsCard from "../SportsCard/SportsCard";
import MusicCard from "../EntertainmentCard/MusicCard";
import ScienceNatureCard from "../ScienceCard/ScienceNatureCard";
import ComingSoonCard from "../ComingSoonCard/ComingSoonCard";
import EasyCard from "../LevelEasyCard/EasyLevel";
import HardCard from "../LevelHardCard/HardLevel";
import MediumCard from "../LevelMediumCard/MediumLevel";
import "bulma/css/bulma.min.css";
import "./index.css";
import { Container } from "react-bulma-components";
import ClickSound from "../../Sounds/ButtonClickSound.wav";

const generateTriviaUrl = (category, difficulty) => {
  return `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
};

const TriviaSelection = ({ onSelectDifficulty }) => {
  const [clickSound] = useSound(ClickSound);
  const triviaCategories = {
    Animals: 27,
    "Entertainment: Music": 12,
    "General Knowledge": 9,
    "Science & Nature": 17,
    Sports: 21,
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    clickSound();
  };

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      onSelectDifficulty(
        generateTriviaUrl(
          triviaCategories[selectedCategory],
          selectedDifficulty.toLowerCase()
        )
      );
      clickSound();
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
      {!selectedCategory && (
        <>
          <div className="cardsContainer">
            <div className="cardContainer">
              <AnimalCard
                className="tile categorybtn"
                onSelectCategory={handleSelectCategory}
              />
              <GenKnowCards
                className="tile categorybtn"
                onSelectCategory={handleSelectCategory}
              />
            </div>

            <div className="cardContainer">
              <ScienceNatureCard
                className="tile categorybtn"
                onSelectCategory={handleSelectCategory}
              />
              <MusicCard
                className="tile categorybtn"
                onSelectCategory={handleSelectCategory}
              />
            </div>

            <div className="cardContainer">
              <SportsCard
                className="tile categorybtn"
                onSelectCategory={handleSelectCategory}
              />
              <ComingSoonCard className="tile categorybtn"></ComingSoonCard>
            </div>
          </div>
        </>
      )}

      {selectedCategory && !selectedDifficulty && (
        <div>
          <div className="cardsContainer">
            <div className="easyCard">
              <div className="cardContainer">
                <EasyCard SelectedDifficulty={setSelectedDifficulty} />
              </div>
            </div>

            <div className="mediumCard">
              <div className="cardContainer">
                <MediumCard SelectedDifficulty={setSelectedDifficulty} />
              </div>
            </div>

            <div className="hardCard">
              <div className="cardContainer">
                <HardCard SelectedDifficulty={setSelectedDifficulty} />
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCategory && selectedDifficulty && !quizStarted && (
        <div>{handleStartQuiz()}</div>
      )}
    </div>
  );
};

export default TriviaSelection;
