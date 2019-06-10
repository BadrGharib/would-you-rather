import React ,{Fragment} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import {handelInitialDate} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import SignInPage from './SignInPage'
import { signIn } from '../actions/authedUser';

class App extends React.Component{
    componentDidMount()
    {
      const {dispatch}=  this.props
      dispatch(handelInitialDate())

    }
    render(){
      return (

        <BrowserRouter>
     
      <Fragment>
      <LoadingBar/>
        <div className='container'>
       
          <Nav/>
          {
            this.props.loggedIn === false
            ? <SignInPage/>
            :<div>
              <Route path='/' exact component={Dashboard}/>
              {/* <Route path='/question/:id' component={QuestionPage}/> */}
              <Route path='/question' component={QuestionPage}/>
            </div>
          } 
        
        </div>
      </Fragment>
      
      </BrowserRouter>
         
      )

    }
}
function mapStateToProps({authedUser}){
   return { 
       loggedIn:authedUser !==null,
       loading:authedUser ===null
    }

}
export default connect(mapStateToProps)(App)