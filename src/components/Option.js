import React from 'react'
import {connect} from 'react-redux'

class Option extends React.Component{

    render(){
        const {
            optionText,votes,totalVotes,isSelected
          } = this.props
          const selectedClassName=isSelected===true?'option-select':'option-unselect'
          const votePercent=Math.round(votes*100/totalVotes) +'%';
          debugger
        return (
            <div className={`option ${selectedClassName}`}>
                {
                    isSelected===true &&
                    <div className='your-vote'>
                       <div className='your-vote-content'>Your Vote</div> 
                    </div> 
                }
               
                <div> 
                   {`Would you rather to be ${optionText} ?`}
                </div>
                
                  {/* {`${votes*100/totalVotes} %`} */}
                  <div className="progressBar">
                    <div  style={{
                        color:'#000',
                        'backgroundColor':'#09bbb5',
                        height:'24px',
                        width:votePercent}}>{votePercent}</div>
                  </div>
                
                <div> 
                {`${votes} out of ${totalVotes} votes`}
                </div>
               
          </div>
        )
    }
}

function mapStateToProps(state,{ optionText,votes,totalVotes,isSelected}){
    // debugger;
   return {
      optionText,
      votes,
      totalVotes,
      isSelected
   }
 }
 export default connect(mapStateToProps)(Option)