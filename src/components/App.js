import React ,{Fragment} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import {handelInitialDate} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Question from './QuestionDashboard'
import SignInPage from './SignInPage'
import QuestionPage from './QuestionPage'
import { signIn } from '../actions/authedUser';
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard';

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
       <div className='nav-container'>
         <Nav/>
       </div>
          {
            this.props.loggedIn === false
            ? <SignInPage/>
            :<div>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/question/:id' component={QuestionPage}/>
              <Route path='/new'  component={NewQuestion}/>
              <Route path='/leader'  component={LeaderBoard}/>
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