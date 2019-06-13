import React from 'react'
import {connect} from 'react-redux'

class Dashboard extends React.Component{
    state={
        tabIndex:0
    }
    handelUnanswerdSelect=(e)=>{
        e.preventDefault()
        this.setState(()=>({
            tabIndex:0
        }))
    }
    handelAnswerdSelect=(e)=>{
        e.preventDefault()
        this.setState(()=>({
            tabIndex:1
        }))
    }
    render()
    {
        debugger;
        const unansweredClassName=this.state.tabIndex===0?'dashboard-tab-selected':'dashboard-tab'
        const answeredClassName=this.state.tabIndex===1?'dashboard-tab-selected':'dashboard-tab'
        return (
            <div className='dashboard-container'>
              <div className='dashboard-header-btns'>
                  <button className={unansweredClassName} onClick={this.handelUnanswerdSelect}>Unanswered Questions</button>
                  <button className={answeredClassName} onClick={this.handelAnswerdSelect}>Answered Questions</button>
              </div>
            </div>
        )
    }
}

export default connect()(Dashboard)