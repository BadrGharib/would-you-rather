import React from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends React.Component{
    render(){
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
           </nav>
        )
    }
}
export default Nav