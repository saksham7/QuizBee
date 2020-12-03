import React from 'react';
import questionBank from '../questionBank';
import AnswerOptions from './AnswerOptions';
class QuizBee extends React.Component {
    state = {
        questionBank: []
    }

    getQuestions() {
        questionBank().then(x=> {
            this.setState({
                questionBank: x
            })
            console.log(this.state.questionBank)
        });
    }

    componentDidMount() {
        this.getQuestions();
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
                                    this.state.questionBank.length > 0 && this.state.questionBank.map(x => {
                                     return (
                                        <div className="p-3" key={x.questionId}>
                                        <h5>{x.question}</h5>
                                        <AnswerOptions answers={x.answers} correctAnswer={x.correct} />
                                        </div>
                                        )
                                    })
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