import React from 'react'
import {connect} from 'react-redux'
import {handelVoteQuestion} from '../actions/questions'
import Option from './Option'

class QuestionAnswered extends React.Component{
   
    handelSelectedOption=(value)=>{
        debugger;
       const selectedOtion=value
       const {dispatch,question,author}=this.props
       const checkAnswerBefore=  Object.keys(author.answers).filter((id)=>id===question.id)
       if(checkAnswerBefore.length>0)
          return ;

       dispatch(handelVoteQuestion(question.id,selectedOtion))
    }
   
    render()
    {
      const {question}=this.props
      
      if( question===null)
       return (<p>this question dosn't exist</p>)
      else
      {
        const {
            optionSelected,optionOneText,optionTwoText,optionOneVotesCount,optionTwoVotesCount,
          } = question
          debugger;
          const totalVotes=optionOneVotesCount+optionTwoVotesCount
          
        return (
           
            <div className='question-info'>
                <div className='question-title'>Results:</div>
                <div className='question-options'>
                <div value='optionOne' onClick={()=>{
                    this.handelSelectedOption('optionOne')
                    }}>
                    <Option 
                        isSelected={optionSelected==='optionOne'?true:false}  
                        optionText={optionOneText} 
                        votes={optionOneVotesCount} 
                        totalVotes={totalVotes} />
                </div>
                  <div value='optionTwo' onClick={()=>{
                    this.handelSelectedOption('optionTwo')
                    }} >
                    <Option 
                        isSelected={optionSelected==='optionTwo'?true:false} 
                        optionText={optionTwoText}
                        votes={optionTwoVotesCount} 
                        totalVotes={totalVotes} />
                  </div>
                    
                </div>
           
             </div>
    
        )
      }
      
    }
    
}
function mapStateToProps({authedUser,questions,users},{question}){
    debugger;

    const author=users[authedUser]
    return {
        author,
        question,
    }

}
export default connect(mapStateToProps)(QuestionAnswered)