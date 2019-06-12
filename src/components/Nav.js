import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../actions/authedUser'

class Nav extends React.Component{
    handelSignOut=(e)=>{
        const {dispatch}=this.props
        dispatch(signOut())
    }
    render(){
        debugger;
        const{user}=this.props
        return (
           <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/question' activeClassName='active'>New Question</NavLink>
                </li>
            </ul>
           
            
            {(user!==null)&&
                <div className='autheduserInfo'>
                   <span>{`Hello, ${user.name}`}</span>
                    <img src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'/>
                    <NavLink to='/' activeClassName='active' onClick={this.handelSignOut}>Sign Out</NavLink>
                </div>
            }
            
             
           
           </nav>
        )
    }
}
function mapStateToProps({authedUser,users}){
   // debugger;
 return {
     user:authedUser===null?null:users[authedUser]
 }
}
export default connect(mapStateToProps)(Nav)