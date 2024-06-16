import './style.css';
import React, { useState, useEffect } from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import quizData from '../../Data/quiz.json';

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setFeedback(answer.hlaska);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div>
        <Header />
        <div className="main-content">
          <div className="quiz-container">
            <h1 className="quiz-title">{quizData.nazev}</h1>
            <button className="start-button" onClick={startQuiz}>Začít kvíz</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const question = quizData.otazky[currentQuestion];

  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="quiz-container">
          {currentQuestion < quizData.otazky.length ? (
            <div>
              <h2 className="quiz-question">{question.otazka}</h2>
              {question.mozneOdpovedi.map((answer, index) => (
                <button
                  key={index}
                  className={`answer-button ${selectedAnswer === answer ? (answer.type ? 'correct' : 'incorrect') : ''}`}
                  onClick={() => handleAnswerClick(answer)}
                  disabled={selectedAnswer}
                >
                  {answer.answer}
                </button>
              ))}
              {feedback && (
                <div className="feedback">
                  <p>{feedback}</p>
                  <button className="next-button" onClick={handleNextQuestion}>
                    Další otázka
                  </button>
                </div>
              )}
            </div>
          ) : (
            <h2 className="quiz-completion">Gratulujeme, provětral si své znalosti! Jen tak dále, a budeš expertem!</h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
