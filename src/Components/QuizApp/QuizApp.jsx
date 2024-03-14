import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import QuizResult from '../QuizResult/QuizResult'; 


const QuizApp = ({ triviaUrl }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(triviaUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz data');
        }
        const responseData = await response.json();
        console.log(responseData);
        const formattedData = formatQuizData(responseData.results);
        setQuizData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setLoading(false);
      }
    };


    fetchData();
  }, [triviaUrl]);


  const formatQuizData = (data) => {
    return data.map((questionData, index) => ({
      id: index + 1,
      question: `Question ${index + 1}: ${questionData.question}`,
      options: [questionData.correct_answer, ...questionData.incorrect_answers].sort(() => Math.random() - 0.5),
      correctAnswer: questionData.correct_answer,
    }));
  };


  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
    setUserAnswers([...userAnswers, { questionId: currentQuestion, selectedAnswer, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }
  };


  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };


  if (loading) {
    return <div>Loading...</div>;
  }


  if (currentQuestion < quizData.length) {
    return (
      <Question
        questionData={quizData[currentQuestion]}
        onAnswer={handleAnswer}
        onNext={nextQuestion}
      />
    );
  } else {
    return <QuizResult score={score} />;
  }
};

export default QuizApp;
