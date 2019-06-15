import React from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import {Link} from 'react-router-dom'
import {handelVoteQuestion} from '../actions/questions'

class QuestionUnAnswered extends React.Component{
    state={
        selectedOtion:''
    }
    handelSelectedOption=(e)=>{
        debugger;
       const selectedOtion=e.target.value
        this.setState(()=>({
            selectedOtion
        }))
    }
    handelSubmitOption=(e)=>{
        debugger;
        e.preventDefault();
        const {selectedOtion}=this.state
        const {dispatch,id}=this.props
        dispatch(handelVoteQuestion(id,selectedOtion))
    }
    render()
    {
        const {question}=this.props
      
      if( question===null)
       return (<p>this question dosn't exist</p>)
      else
      {
        const {
            name,id,avatar,optionSelected,optionOne,optionTwo,optionOneVotes,optionTwoVotes,
        } = question
        return (
            //  <Link to={`/question/${id}`} style={{'text-decoration':'none'}}>
            <div className='details-question-container'>
                <div className='question-header'>{name}</div>
                <div className='quetion'>   
                 <div className='question-searator'>
                    <img src={avatar}
                    alt={`Avatar of ${name}`}
                    className='question-avatar'/>
                 </div>

                    <div className='question-info'>
                        <div className='unAnswered-question-title'>Would you rather...</div>
                        <form onSubmit={this.handelSubmitOption} className='unAnswered-question-options'>
                            {/* <div id="group1" > */}
                               <div> 
                                  <input type="radio" onChange={this.handelSelectedOption} value='optionOne' name="group1"/>{optionOne}
                               </div>
                               <div> 
                                  <input type="radio" onChange={this.handelSelectedOption} value='optionTwo' name="group1"/>{optionTwo}
                               </div>
                            {/* </div> */}
                            <button  type='submit'>Submit</button>
                        </form>
                        {/* <div id='option'>
                            {
                                optionSelected === 'optionTwo'
                                ?
                                optionTwo
                                :
                                optionOne

                            }
                        </div> */}
                    </div>
                   

                </div>

            </div>
                
            //  </Link>
        )
      }
      
    }
    
}
function mapStateToProps({authedUser,users,questions},{id}){
    const question=questions[id]
   // const parentTweet=tweet? tweets[tweet.replyingTo]:null
   // debugger;
    return {
        authedUser,
        id,
        question: question?formatQuestion(question,users[question.author],users[authedUser]):null
    }

}
export default connect(mapStateToProps)(QuestionUnAnswered)