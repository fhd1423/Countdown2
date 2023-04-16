import React, { useState, useEffect } from 'react';
import './index.css'

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => setQuestions(data.results.map(q => {
        // Shuffle the answers
        const answers = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
        return {
          ...q,
          answers,
          userAnswer: null
        }
      })))
      .catch(error => console.error(error))
  }, []);

  const handleAnswer = (questionIndex, answerIndex) => {
    const currentQuestion = questions[questionIndex];
    const currentAnswer = currentQuestion.answers[answerIndex];
    const correctAnswer = currentQuestion.correct_answer;

    if (currentAnswer === correctAnswer) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }

    setQuestions(prevState => {
      const updatedQuestions = [...prevState];
      updatedQuestions[questionIndex].userAnswer = answerIndex;
      return updatedQuestions;
    })
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="bg-white p-4 rounded-md shadow-md mb-4">
          <h2 className="text-xl font-medium mb-2">{question.question}</h2>
          <div className="flex flex-col">
            {question.answers.map((answer, answerIndex) => (
              <button
                key={answerIndex}
                className={`p-2 mb-2 rounded-md border-2 border-blue-500 cursor-pointer hover:bg-blue-500`}
                onClick={() => handleAnswer(questionIndex, answerIndex)}
                disabled={question.userAnswer !== null}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
