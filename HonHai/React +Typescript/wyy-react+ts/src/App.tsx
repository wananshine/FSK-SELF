import React, {useState} from 'react';
import { fetchQuizQuestions } from "./api/build";
// import logo from './logo.svg';
import { TextField } from './views/TextField';
import { ReducerExample } from './views/ReducerExample';
import Hello from './views/Hello';
import LikeButton from './views/LikeButton';
import MouseTracker from './views/MouseTracker';
import QuestionCard from './views/QuestionCard';
import { NotFound } from './views/pages/404';
import './App.css';

import  { QuestionState, Difficulty } from "./api/build";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUETIONS = 10;

const Test:React.FC = ()=>{
    return (
        <div>
            <TextField text='hello' person={{ firstName: "", lastName: "" }} handleChange={e=>{}} />
            <ReducerExample />
            <Hello />
            <LikeButton />
            <MouseTracker />
        </div>
    )
}

const App: React.FC = ()=>{

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUETIONS, Difficulty.EASY));

    const starTrivia = async ()=>{
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUETIONS,
            Difficulty.EASY
        );

        setQuestions(newQuestions);

        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>)=>{
        if(!gameOver){
            const answer = e.currentTarget.value;

            const correct = questions[number].correct_answer === answer;

            if(correct) setScore(prev=>prev + 1);

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswers((prev)=> [...prev, answerObject])
        }
    };

    const nextQuestion = ()=>{

        const nextQuestion = number + 1;

        if(nextQuestion === TOTAL_QUETIONS){
            setGameOver(true);
        }else{
            setNumber(nextQuestion)
        }
    };

    return (
        <div>
          <header>header</header>
          <main>
              <h1>REACT QUIZ</h1>
                {
                  gameOver || userAnswers.length === TOTAL_QUETIONS ? (
                      <button className="start" onClick={starTrivia}>
                          Start
                      </button>
                  ) : null
                }
                { !gameOver ? <p className="score">Score: {score}</p> : null }
                { loading && <p>Loading Questions...</p> }
                { !loading && !gameOver &&
                    <QuestionCard
                        questionNr={number+1}
                        totalQuestions={TOTAL_QUETIONS}
                        question={questions[number].question}
                        answers={questions[number].incorrect_answers}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                        callback={checkAnswer}
                    />
                }
              { !gameOver &&
                !loading &&
                userAnswers.length === number  + 1 &&
                number !== TOTAL_QUETIONS - 1 ?
                (
                  <button className='next' onClick={nextQuestion}>
                      Next Question
                  </button>
                ) : null }
          </main>
          <footer>footer</footer>
        </div>
    )
};

export default App;
