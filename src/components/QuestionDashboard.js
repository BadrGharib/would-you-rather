import React from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import {Link,withRouter} from 'react-router-dom'

class QuestionDashboard extends React.Component{
    render()
    {
      const {question}=this.props
      if( question===null)
       return (<p>this question dosn't exist</p>)
      else
      {
        const {
            name,id,avatar,optionSelected,optionOneText,optionTwoText
        } = question
        return (
                <Link to={`/questions/${id}`} style={{'textDecoration':'none'}}>
                    <div className='question-container'>
                        <div className='question-header'>{name}</div>
                        <div className='quetion'>   
                            <div className='separator'>
                                <img src={avatar}
                                alt={`Avatar of ${name}`}
                                className='question-avatar'/>
                            </div>

                            <div className='question-info'>
                                <div className='dashboard-question-title'>Would you rather</div>
                                <div className='dashboard-question-title-dimed'>
                                    {
                                        optionSelected === 'optionTwo'
                                        ?
                                        optionTwoText
                                        :
                                        optionOneText

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               </Link>
           )
     } 
  }   
}

function mapStateToProps({authedUser,users,questions},{id}){
    const question=questions[id]
    return {
        authedUser,
        question: question?formatQuestion(question,users[question.author],users[authedUser]):null
    }
}

export default withRouter(connect(mapStateToProps)(QuestionDashboard))