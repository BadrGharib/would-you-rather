import React from 'react'
import {connect} from 'react-redux'
import {handelAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'

class NewQuestion extends React.Component{
    state={
        optionOneText:'',
        optionTwoText:'',
        toHome:false
    }
    handelOptionOneChange=(e)=>{

        const optionOneText=e.target.value
        this.setState(()=>({
            optionOneText
        }))
    }
    handelOptionTwoChange=(e)=>{
        const optionTwoText=e.target.value
        this.setState(()=>({
            optionTwoText
        }))
    }
    handelSubmit=(e)=>{
        debugger
        e.preventDefault()
        const {optionOneText,optionTwoText}=this.state
        const {dispatch,authedUser}=this.props
        dispatch(handelAddQuestion(optionOneText,optionTwoText,authedUser))
        this.setState(()=>({
            optionOneText:'',
            optionTwoText:'',
            toHome:true
        }))
    }
    render(){
        const {toHome}=this.state
        if(toHome===true){
             return <Redirect to='/'/>
        }
        return (
            <div>
                 <div className='details-question-container'>
                    <div className='question-header'>Create New Question</div>
                    <form className='new-question' onSubmit={this.handelSubmit}>
                       <div className='new-dimed'>Complete the quesion</div>
                       <div className='new-bold'>Would you rather...</div>
                       <input 
                       type='text'
                       className='new-option'
                       value={this.state.optionOneText} 
                       placeholder='Enter option one text here'
                       onChange={this.handelOptionOneChange}></input>

                       <div className='new-or'>Or</div>

                       <input type='text'
                       className='new-option'
                       value={this.state.optionTwoText}
                       placeholder='Enter option Two text here'
                       onChange={this.handelOptionTwoChange}></input>
                        <button
                        className='btn'
                        type='submit'
                        >
                            Submit
                        </button>
                    </form>

                </div>
                
            </div>
        )
    }
}
function mapStateToProps({authedUser}){
  return {
    authedUser
     
  } 
}
export default connect(mapStateToProps)(NewQuestion)