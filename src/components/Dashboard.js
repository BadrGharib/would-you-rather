import React from 'react'
import {connect} from 'react-redux'

class Dashboard extends React.Component{
    render()
    {
        return (
            <div>
                Dashbard
            </div>
        )
    }
}

export default connect()(Dashboard)