import React from 'react'
import {connect} from 'react-redux'
import Leader from './Leader';

class LeaderBoard extends React.Component{
    render()
    {
        debugger;
        const {usersIds}=  this.props
        return (
            <div className='leader-board-container'>
              <ul>
                  {
                    usersIds.map((id)=>{
                            return (
                               <Leader key={id} id={id}/>
                            )
                        })
                  }
              </ul>
            </div>
        )
    }
}
function mapStateToProps({users}){
       debugger;
        //sort users based on total questions and answers
        const usersIds=Object.keys(users).sort((a,b)=>{
                const bUser= Object.keys(users[b].answers).length +users[b].questions.length
                const aUser= Object.keys(users[a].answers).length +users[a].questions.length
                return bUser -aUser
        })

        return {
            usersIds
        }

    }
export default connect(mapStateToProps)(LeaderBoard)