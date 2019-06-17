import React from 'react'
import {connect} from 'react-redux'

class Leader extends React.Component{

    render()
    {
        debugger;
       const {users,id}=  this.props
       const {name,avatarURL,answers,questions}=users[id]
       const answersCount=Object.keys(answers).length
       const questionsCount=questions.length
        return (
            <div className='leader-container'>
                <div className='leader'>   
                    <div >
                        <img src={avatarURL}
                        alt={`Avatar of ${name}`}
                        className='question-avatar'/>
                    </div>
                    
                    <div className='separator leader-middle'>
                        <div className='leader-header'>{name}</div>
                        <div className='leader-info'>
                            <div>Answered Questions</div>
                            <div>{answersCount}</div>
                        </div>
                        <div className='leader-info'>
                            <div>Created Questions</div>
                            <div>{questionsCount}</div>
                        </div>
                    </div>

                    <div className='leader-score'>
                        <div className='leader-score-header'>Score</div>
                        <div className='leader-score-number'>{answersCount+questionsCount}</div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({users},{id}){
    return {
            users,
            id
    }
}
export default connect(mapStateToProps)(Leader)