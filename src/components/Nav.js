import React from 'react'
import {NavLink,Link} from 'react-router-dom'
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
                    <NavLink to='/' exact activeClassName='active' style={{'textDecoration': 'none'}}>Home</NavLink>
                </li>   
                <li>
                    <NavLink to='/new' activeClassName='active' style={{'textDecoration': 'none'}}>New Question</NavLink>
                </li>
                <li>
                    <NavLink to='/leader' activeClassName='active' style={{'textDecoration': 'none'}}>Leader Board</NavLink>
                </li>
            </ul>
           
            {
                (user!==null)&&
                    <div className='authed-user-Info'>
                        <span>{`Hello, ${user.name}`}</span>

                        <img src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'/>

                        <Link to='/'  
                            style={{'textDecoration': 'none',}} 
                            onClick={this.handelSignOut}>Sign Out</Link>
                    </div>
            }
           </nav>
        )
    }
}

function mapStateToProps({authedUser,users}){
    debugger;
 return {
     user:authedUser===null?null:users[authedUser]
 }
}

export default connect(mapStateToProps)(Nav)