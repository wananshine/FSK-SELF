import React from 'react';
import { AnswerObject } from "../App";
import { type } from 'os';

type Props = {
    question: string;
    answers:string[];
    callback: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

type Dest = {
    callback: (e: React.MouseEventHandler)=>void;
    AnimationEventHandler: (e: React.AnimationEventHandler<Element>) => void;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
    return (
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers && answers.map((answer) => (
                    <div key={answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default QuestionCard;