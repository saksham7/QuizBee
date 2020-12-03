import {React, useState} from 'react';

const AnswerOptions= ({answers, correctAnswer}) => {
    const [answersArray, setAnswer] = useState(answers);
    function answerSelected(e) {
        e.preventDefault();
        setAnswer([e.target.value]);
    }
    return (
        answersArray.map((x,i)=> {
        return <button key={i} onClick={answerSelected}
        className="btn mr-2 btn-info mt-2" 
        style={{'backgroundColor': '#e78d40',
            'border': '#e78d40'}}>{x}</button>
     })
    );
}


export default AnswerOptions;