import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'How many states of the United States of America have a Pacific coast?',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '5', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Java?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'James Gosling', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of California, USA?',
			answerOptions: [
				{ answerText: 'Sacramento', isCorrect: true },
				{ answerText: 'Washington', isCorrect: false },
				{ answerText: 'Denver', isCorrect: false },
				{ answerText: 'New York', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the Prime Minister of Canada?',
			answerOptions: [
				{ answerText: 'Scott Morrison', isCorrect: false },
				{ answerText: 'Imran Khan', isCorrect: false },
				{ answerText: 'Joe Biden', isCorrect: false },
				{ answerText: 'Justin Trudeau', isCorrect: true },
			],
		},
	];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true){
      setScore(score +1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    
  };

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						
            <div className='question-text'>{questions[currentQuestion].questionText}</div>

					</div>
					<div className='answer-section'>
	{questions[currentQuestion].answerOptions.map((answerOption, index) => (
		<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	))}
</div>
				</>
			)}
		</div>
	);
}