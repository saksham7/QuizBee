import React from 'react';
import questionBank from '../questionBank';
import AnswerOptions from './AnswerOptions';
import Result from './Result';

class QuizBee extends React.Component {
    state = {
        questionBank: [],
        score: 0,
        response: 0
    }

    getQuestions() {
        questionBank().then(x=> {
            this.setState({
                questionBank: x
            })
        });
    }

    componentDidMount() {
        this.getQuestions();
    }

    selectionAnswer = (selectedAnswer, correctAnswer) => {
        if(selectedAnswer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            response: this.state.response + 1
        })
    }

    playAgain = (isPlayAgain) => {
        if(isPlayAgain) {
            this.getQuestions();
            this.setState({
                score: 0,
                response: 0
            });
        }
    }

    render (){
        return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto">
                        <div className="card">
                            <header className="bg-info p-3">
                                <h4 className="text-white text-center">QuizBee - Check your knowledge</h4>
                            </header>
                            <div>
                                {
                                    (this.state.questionBank.length > 0 && this.state.response < 5 &&
                                    this.state.questionBank.map(x => {
                                     return (
                                        <div className="p-3" key={x.questionId}>
                                        <h5>{x.question}</h5>
                                        <AnswerOptions answers={x.answers} correctAnswer={x.correct} selected={this.selectionAnswer} />
                                        </div>
                                        )
                                    })) || (
                                        this.state.response === 5 && <Result score={this.state.score} playAgain={this.playAgain}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    };
}

export default QuizBee;