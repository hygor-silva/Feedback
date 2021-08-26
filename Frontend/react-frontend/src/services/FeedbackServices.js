import axios from 'axios'

const FEEDBACK_REST_API_URL = 'http://localhost:8080/feedback';

class FeedbackServices {

    getFeedback(){
        return axios.get(FEEDBACK_REST_API_URL);
    }
}
export default new FeedbackServices();

