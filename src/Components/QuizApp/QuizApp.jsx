import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import QuizResult from '../QuizResult/QuizResult'; 
import useSound from 'use-sound';
import correctSfx from '../../Sounds/CorrectAnswerSound.wav';
import wrongSfx from '../../Sounds/WrongAnswerSound.wav';

// QuizApp Component
const QuizApp = ({ triviaUrl }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);

// useEffect hook to fetch quiz data from triviaUrl
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(triviaUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz data');
        }
        const responseData = await response.json();
        const formattedData = formatQuizData(responseData.results);
        setQuizData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setLoading(false);
      }
    };


    fetchData();
  }, [triviaUrl]); // Run effect when triviaUrl variable changes


  const formatQuizData = (data) => {
    return data.map((questionData, index) => ({
      id: index + 1,
      question: `Question ${index + 1}: ${questionData.question}`,
      options: [questionData.correct_answer, ...questionData.incorrect_answers].sort(() => Math.random() - 0.5),
      correctAnswer: questionData.correct_answer,
    }));
  };

 // Play sound when answer is correct or incorrect
  const [playCorrect] = useSound(correctSfx);
  const [playWrong] = useSound(wrongSfx);

  // Check whether answer is correct and if so increment score
  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
    setUserAnswers([...userAnswers, { questionId: currentQuestion, selectedAnswer, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
      playCorrect()
    } else(
      playWrong()
    )
  };

// Move to next question
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

// On screen message whilst data is being loaded
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display QuestionComponent with next question otherwise display QuizResult component with score
  if (currentQuestion < quizData.length) {
    return (
      <Question
        questionData={quizData[currentQuestion]}
        onAnswer={handleAnswer}
        onNext={nextQuestion}
      />
    );
  } else {
    return (

    <QuizResult score={score} />
    );
  }
};
// Export QuizApp component
export default QuizApp;
