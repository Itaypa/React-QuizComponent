import React, { Component } from 'react'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super();
        this.state = {quiz_position: 0};
    }

    render() {
        const {quiz_position} = this.state;
        return (
            <div>
                <div className="QuizQuestion">
                    { quizData["quiz_questions"][quiz_position]["instruction_text"] }
                </div>
            </div>
        )
    }
}

export default Quiz;