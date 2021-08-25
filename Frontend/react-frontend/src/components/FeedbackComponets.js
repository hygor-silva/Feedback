import React from 'react';
import FeedbackServices from '../services/FeedbackServices'

class FeedbackComponents extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            feedback: []
        }
    }

    componentDidMount() {
        FeedbackServices.getFeedback().then((response) => {
            this.setState({ feedback: response.data })
        });
    }

    render() {

        return (
            <div>
                <h1 className="text-center">Feedback</h1>
                <table className="table-striped">
                    <thead>
                        <tr>

                            <td>Setor</td>
                            <td>Feedback</td>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.feedback.map(
                                feedback =>
                                    <tr key={feedback.id}>

                                        <td>
                                            {feedback.setor}
                                        </td>

                                        <td>
                                            {feedback.feedback}
                                        </td>


                                    </tr>
                            )
                        }
                    </tbody>

                </table>

            </div>
        )
    }

}

export default FeedbackComponents