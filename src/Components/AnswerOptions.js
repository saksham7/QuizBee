import {React, useState} from 'react';

const AnswerOptions= ({answers, correctAnswer, selected}) => {
    const [answersArray, setAnswer] = useState(answers);
    function answerSelected(e) {
        e.preventDefault();
        setAnswer([e.target.value]);
        selected(e.target.value, correctAnswer);
    }
    return (
        answersArray.map((x,i)=> {
        return <button key={i} onClick={answerSelected}
        className="btn mr-2 btn-info mt-2" value={x}
        style={{'backgroundColor': '#e78d40',
            'border': '#e78d40'}}>{x}</button>
     })
    );
}


export default AnswerOptions;