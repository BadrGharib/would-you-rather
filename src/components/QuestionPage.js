import React from 'react'
import {connect} from 'react-redux'
import QuestionUnAnswered from './QuestionUnAnswered'
import QuestionAnswered from './QuestionAnswered'

const UNANSWERED_QUESTION='unanswered_question'
const ANSWERED_QUESTION='answered_question'
class QuestionPage extends React.Component{
    render(){
        debugger;
        const{id,questionType}=this.props
        return (
            <div>
            {
                questionType == UNANSWERED_QUESTION
                ?
                <QuestionUnAnswered id={id}/>
                :
                <QuestionAnswered id={id}/>
            }
            </div>

        )
      
        // const {id,replies}=this.props
        // console.log(this.props)
        // return (
        //     <div>
        //        <Tweet id={id}/>
        //        <NewTweet id={id}/>
        //        {replies.length !==0 &&<h3 className='center'>Replies</h3>}
        //        <ul>
        //         {
        //             replies.map((id)=>(
        //                 <li key={id}>
        //                 <Tweet id={id}/>
        //                 </li>
        //             ))
        //         }
        //        </ul>
               
        //     </div>
        // )
    }
}

function mapStateToProps({authedUser,questions,users},props){
    debugger;
    const {id}=props.match.params
    const question=questions[id]
  return {
      id,
      questionType:question.optionOne.votes.length===0 && question.optionTwo.votes.length===0
                   ?
                    ANSWERED_QUESTION
                   :
                   UNANSWERED_QUESTION
  }
}
export default connect(mapStateToProps)(QuestionPage)