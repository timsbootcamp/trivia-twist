import React, { useState } from "react";
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

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
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
      {!selectedCategory && (
        <>
          <img
            className="BgGraphics"
            src="src\assets\Categories-Page-Elements\2D-BG-Elemnts.png"
          ></img>

          <div class="columns">
            <div class="column logoIcon">
              <img src="src\assets\Categories-Page-Elements\Logo.png"></img>
            </div>
          </div>

          <div class="columns">
            <div class="column is-two-quarters">
              <img
                className="cubes"
                src="src\assets\Categories-Page-Elements\left side cubes.svg"
              ></img>
            </div>


            <Container className="categoryBtns">
              <div class="columns">
                <div class="column is-one-half">
                  <AnimalCard
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                  <GenKnowCards
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                  <ScienceNatureCard
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                </div>

                <div class="column is-one-half">
                  <MusicCard
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                  <SportsCard
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                  <ComingSoonCard className="tile categorybtn"></ComingSoonCard>
                </div>
              </div>
            </Container>

            <div class="column is-one-quarters">
              <img
                className="cubes"
                src="src\assets\Categories-Page-Elements\right side cubes.svg"
              ></img>
            </div>
            </div>
        </>
      )}

      {selectedCategory && !selectedDifficulty && (
        <div>
          <h2>Select Trivia Difficulty:</h2>
          <EasyCard SelectedDifficulty={setSelectedDifficulty} />
          <MediumCard SelectedDifficulty={setSelectedDifficulty} />
          <HardCard SelectedDifficulty={setSelectedDifficulty} />
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">Select Difficulty</option>
            {["Easy", "Medium", "Hard"].map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedCategory && selectedDifficulty && !quizStarted && (
        <div>
          { handleStartQuiz() }
        </div>
      )}
    </div>
  );
};

export default TriviaSelection;
