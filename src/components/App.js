import React ,{Fragment} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {handelInitialDate} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from './Dashboard'
import SignInPage from './SignInPage'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';

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
                          <Switch>
                            <Route path='/' exact component={Dashboard}/>
                            <Route path='/questions/:id' component={QuestionPage}/>
                            <Route path='/add'  component={NewQuestion}/>
                            <Route path='/leaderboard'  component={LeaderBoard}/>
                            <Route path="" component={NotFound}/>
                          </Switch>
                        </div>
                      } 
                  </div>
              </Fragment>
           </BrowserRouter>
         
      )

    }
}
function mapStateToProps({authedUser}){
  debugger;
   return { 
       loggedIn:authedUser !==null,//check if user not logged in to show sign in page
       loading:authedUser ===null  //check if loading finished to hide loading bar
    }

}
export default connect(mapStateToProps)(App)