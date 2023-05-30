import React from 'react';
import Question from './Question';

function Questions({ questions }) {
    return (
        <div>
            {questions.map((questionData, index) => (
                <Question 
                    key={index}
                    question={questionData.question}
                    answer={questionData.answer}
                    difficulty={questionData.difficulty}
                />
            ))}
        </div>
    );
}

export default Questions;
