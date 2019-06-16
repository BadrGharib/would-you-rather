import React from 'react'
import {connect} from 'react-redux'
import QuestionUnAnswered from './QuestionUnAnswered'
import QuestionAnswered from './QuestionAnswered'
import {formatQuestion} from '../utils/helpers'

const UNANSWERED_QUESTION='unanswered_question'
const ANSWERED_QUESTION='answered_question'
class QuestionPage extends React.Component{
    render(){
        debugger;
        const{question}=this.props
        if( question===null)
        return (<p>this question dosn't exist</p>)
       else
       {
            const {
                    name,id,avatar,optionSelected,optionOneText,optionTwoText,optionOneVotesCount,optionTwoVotesCount,
                  } = question
            const questionType=optionOneVotesCount===0 && optionTwoVotesCount===0
                    ?
                    UNANSWERED_QUESTION
                    :
                    ANSWERED_QUESTION

            return (

                <div className='details-question-container'>
                    <div className='question-header'>{name}</div>
                    <div className='quetion'>   
                   
                        <div >
                            <img src={avatar}
                            alt={`Avatar of ${name}`}
                            className='question-avatar'/>
                        </div>
                        <div className='separator'>
                            {
                                questionType == UNANSWERED_QUESTION
                                ?
                                <QuestionUnAnswered question={question}/>
                                :
                                <QuestionAnswered question={question}/>
                            }
                         </div>


                    </div>

                </div>
            

            )
      }
      
    }
}

function mapStateToProps({authedUser,questions,users},props){
    debugger;
    const {id}=props.match.params
    const question=questions[id]
  return {
      question: question?formatQuestion(question,users[question.author],users[authedUser]):null
     
  } 
}
export default connect(mapStateToProps)(QuestionPage)