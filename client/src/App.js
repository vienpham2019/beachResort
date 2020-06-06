import React , { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Err from './components/Err'
import Footer from './components/Footer'
import RoomSingle from './rooms_content/room_single'

class App extends Component {
  componentDidMount(){
    axios('/api/resorts')
    .then(resorts => this.props.setRooms(resorts.data))
    .catch(error  => console.log(error))
  }
  render(){
    return(
      <Router>
        <Route render={(routerProps) => <Navbar {...routerProps} />}/> 
        <Switch>
          <Route exact path="/" render={(routerProps) => <Home {...routerProps} />}/>
          <Route exact path="/rooms" render={(routerProps) => <Rooms {...routerProps} />}/>
          <Route exact path="/room_single" render={(routerProps) => <RoomSingle {...routerProps} />}/>
          <Route component = {Err} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRooms: rooms => dispatch({type: "SET_ROOMS", rooms}) 
  }
}

export default connect(null, mapDispatchToProps)(App)