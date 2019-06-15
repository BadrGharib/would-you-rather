import React from 'react'
import {connect} from 'react-redux'

class QuestionPage extends React.Component{
    render(){
        return (
            <div>
            Question Page!
            </div>

        )
      
        // const {id,replies}=this.props
        // console.log(this.props)
        // return (
        //     <div>
        //        <Tweet id={id}/>
        //        <NewTweet id={id}/>
        //        {replies.length !==0 &&<h3 className='center'>Replies</h3>}
        //        <ul>
        //         {
        //             replies.map((id)=>(
        //                 <li key={id}>
        //                 <Tweet id={id}/>
        //                 </li>
        //             ))
        //         }
        //        </ul>
               
        //     </div>
        // )
    }
}

// function mapStateToProps({authedUser,tweets,users},props){
//     const {id}=props.match.params
//   return {
//       id,
//       replies:!tweets[id]
//       ?[]
//       :tweets[id].replies.sort((a,b)=>tweets[b].timestamp-tweets[a].timestamp)
//   }
// }
export default connect()(QuestionPage)