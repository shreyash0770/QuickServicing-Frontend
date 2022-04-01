
import axios from "axios"
const Feedback_API__BASE_URL="http://localhost:8080/Feedback"


class FeedbackService {
 

    getFeedback(){
      return axios.get(Feedback_API__BASE_URL);  
    }

    createFeedback(feedback){
        return axios.post(Feedback_API__BASE_URL,feedback);
    }


}

export default new FeedbackService();