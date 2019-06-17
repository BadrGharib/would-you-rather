import React from 'react'
import {connect} from 'react-redux'
import QuestionDashboard from './QuestionDashboard'

class Dashboard extends React.Component{
    state={
        tabIndex:0//to switch between answered quetions tab and un answered questions
    }
    handelUnanswerdSelect=(e)=>{
        e.preventDefault()
        this.setState(()=>({
            tabIndex:0
        }))
    }
    handelAnswerdSelect=(e)=>{
        e.preventDefault()
        this.setState(()=>({
            tabIndex:1
        }))
    }
    render()
    {
        debugger;
        const {unansweredQuestionsIds,answeredQuestionsIds}=  this.props
        const unansweredClassName=this.state.tabIndex===0?'dashboard-tab-selected':'dashboard-tab'
        const answeredClassName=this.state.tabIndex===1?'dashboard-tab-selected':'dashboard-tab'
        return (
            <div className='dashboard-container'>
              <div className='dashboard-header-btns'>
                <button className={unansweredClassName} onClick={this.handelUnanswerdSelect}>Unanswered Questions</button>
                <button className={answeredClassName} onClick={this.handelAnswerdSelect}>Answered Questions</button>
              </div>
              <ul>
                  {
                    this.state.tabIndex===0
                    ?
                    unansweredQuestionsIds.map((id)=>{
                        return (
                            <QuestionDashboard key={id} id={id}/>
                        )
                    })
                    :
                    answeredQuestionsIds.map((id)=>{
                    return (
                        <QuestionDashboard key={id} id={id}/>
                    )
                    })
                 } 
              </ul>
              
            </div>
        )
    }
}

function mapStateToProps({questions,authedUser}){
    debugger;
    //sort questions based on most recently created (top)
    const questionsIds=Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
    //extract unanswered questions Ids
   const unansweredQuestions= questionsIds.filter((q)=>(
                              !questions[q].optionOne.votes.includes(authedUser)
                              && !questions[q].optionTwo.votes.includes(authedUser)))
 //extract answered questions Ids
    const answeredQuestions= questionsIds.filter((q)=>(
                             questions[q].optionOne.votes.includes(authedUser)
                           || questions[q].optionTwo.votes.includes(authedUser)))

    return {
            unansweredQuestionsIds:unansweredQuestions,
            answeredQuestionsIds:answeredQuestions
        }

    }

export default connect(mapStateToProps)(Dashboard)