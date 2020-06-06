import React , { Component } from 'react'

import HomeHeader from '../home_content/Home_header'
import HomeServices from '../home_content/Home_services'

class Home extends Component {
    render(){
        return(
            <div>
                <HomeHeader />
                <HomeServices />
            </div>
        )
    }
}

export default Home