import React from 'react'
import {connect} from 'react-redux'
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
        const {dispatch,question}=this.props
        dispatch(handelVoteQuestion(question.id,selectedOtion))
    }
    render()
    {
      const {question}=this.props
      const {
            optionOneText,optionTwoText
        } = question
        return (
            <div className='question-info'>
                <div className='question-title'>Would you rather...</div>
                <form onSubmit={this.handelSubmitOption} className='question-options'>
                    <div> 
                        <input type="radio" onChange={this.handelSelectedOption} value='optionOne' name="group1"/>{optionOneText}
                    </div>
                    <div> 
                        <input type="radio" onChange={this.handelSelectedOption} value='optionTwo' name="group1"/>{optionTwoText}
                    </div>
                    <button className='btn' type='submit'>Submit</button>
                </form>
           
             </div>
        )
    }
}

function mapStateToProps({authedUser},{question}){
    return {
        question
    }

}

export default connect(mapStateToProps)(QuestionUnAnswered)