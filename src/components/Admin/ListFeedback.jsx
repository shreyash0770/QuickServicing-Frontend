import React, { Component } from 'react'
import FeedbackService from '../Services/FeedbackService';
import background from '../images/c.jpg'



export default class ListFeedback extends Component {

constructor(props) {
    super(props);
    
    this.state ={
        feedback:[]
    }
}



componentDidMount(){
    FeedbackService.getFeedback().then((res) =>{
        this.setState({feedback :res.data})
    });
}



  render() {
    return (
      <div className='container'>
          <h2>Feedback</h2>
          <div className='row'>
          <table className="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.feedback.map(
                            feedback=>
                            <tr key={feedback.f_id}>
                                <td>{feedback.f_name}</td>
                                <td>{feedback.f_email}</td>
                                <td>{feedback.f_mobile}</td>
                                <td>{feedback.f_message}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>


          </div>






      </div>
    )
  }
}
