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
          {/* <img
            className="BgGraphics"
            src="\assets\2D-BG-Elements.png"
          ></img> */}

          {/* <div className="columns">
            <div className="column logoIcon">
              <img src='/Logo.png'></img>
            </div>
          </div> */}

          <div className="columns">
            {/* <div className="column is-two-third">
              <img
                className="sidebysideCubes"
                src="/public/sidebysidecubes.png"
              ></img>
            </div> */}


            <Container className="categoryBtns">
              <div className="columns">
                <div className="column is-one-third">
                  <AnimalCard
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                  <GenKnowCards
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                </div>

                <div className="column is-one-third">
                  <ScienceNatureCard
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                      <MusicCard
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                </div>

                <div className="column is-one-third">            
                  <SportsCard
                    className="tile categorybtn"
                    onSelectCategory={handleSelectCategory}
                  />
                  <ComingSoonCard className="tile categorybtn"></ComingSoonCard>
                </div>
              </div>
        
            </Container>

            {/* <div className="column is-one-third">
              <img
                className="sidebysideCubes"
                src="\public\sidebysideCubes.png"
              ></img>
            </div> */}
            </div>
        </>
      )}

      {selectedCategory && !selectedDifficulty && (
        <div>
          <h2>Select Trivia Difficulty:</h2>

          {/* <Container className="categoryBtns">
              <div className="columns">
                <div className="column is-one-third">
                <EasyCard SelectedDifficulty={setSelectedDifficulty} />
                </div>
                </div>

                <div className="columns">
                <div className="column is-one-third">
                <MediumCard SelectedDifficulty={setSelectedDifficulty} />
                </div>
                </div>

                <div className="columns">
                <div className="column is-one-third">
                <HardCard SelectedDifficulty={setSelectedDifficulty} />
               </div>
               </div>

                </Container> */}
       

                <div className="difficultyContainer">
                <div className="easyCard">
                <div className="column is-one-third">
                <EasyCard SelectedDifficulty={setSelectedDifficulty} />
                </div>
                </div>
  
              <div className="mediumCard">
                <div className="column is-one-third">
                <MediumCard SelectedDifficulty={setSelectedDifficulty} />
                </div>
                </div>

                <div className="hardCard">
                <div className="column is-one-third">
                <HardCard SelectedDifficulty={setSelectedDifficulty} />
               </div>
               </div>

              </div>




          {/* <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">Select Difficulty</option>
            {["Easy", "Medium", "Hard"].map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select> */}
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
