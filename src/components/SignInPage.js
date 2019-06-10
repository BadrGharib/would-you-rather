import React from 'react'
import {connect} from 'react-redux'
import logo from '../images/logo.svg';
import {signIn} from '../actions/authedUser'


class SignInPage extends React.Component{
    state={
        userId:''
    }
    handelChange=(e)=>{
        const userId=e.target.value
        this.setState(()=>({
            userId
        }))
    }
    handelSubmit=(e)=>{
        e.preventDefault()
        const {userId}=this.state
        const {dispatch}=this.props
        dispatch(signIn(userId))
        // this.setState(()=>({
        //     text:'',
        //     toHome:id?false:true
        // }))
    }
   
    render()
    {
       // debugger;
        const {users}=this.props
        return (
            <div className='signIn-container'>
              <div>
                  <div className='column-center'>
                   <span>Welcome To The Would You Rather App!</span>
                   <span>Please Sign In To Continue</span>
                  </div>
             
              </div>
              <img src={logo} className="App-logo" alt="logo" />
              <span className='center signIn-label'>Sign in</span>
              <form onSubmit={this.handelSubmit} className='column-center'>
                <select value={this.state.value} handelChange={this.handelChange} className='signIn-select'>
                    {
                    users.map((user)=>(<option key={user.id}>{user.name}</option>))
                    }
                </select>

                <button className='sigIn-btn' type='submit' >Sign In</button>
              </form>
              
              
            </div>
        )
    }
}

function mapStateToProps({users}){
    debugger;
  return {
      users:Object.values(users)
  }
}
export default connect(mapStateToProps)(SignInPage)