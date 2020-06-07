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
import MemberProfile from './components/MemberProfile'
import Login from './components/Login'
import Register from './components/Register'

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
        <div style={{minHeight: '75vh'}}>
          <Switch>
              <Route exact path="/" render={(routerProps) => <Home {...routerProps} />}/>
              <Route exact path="/login" render={(routerProps) => <Login {...routerProps} />}/>
              <Route exact path="/register" render={(routerProps) => <Register {...routerProps} />}/>
              <Route exact path="/rooms" render={(routerProps) => <Rooms {...routerProps} />}/>
              <Route exact path="/room_single" render={(routerProps) => <RoomSingle {...routerProps} />}/>
              {this.props.member ? 
                <Route exact path="/member_profile" render={(routerProps) => <MemberProfile {...routerProps} />}/>
              : null }
              <Route component = {Err} />
          </Switch>
        </div>
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

const mapStateToProps = state => {
  return{
    member: state.member
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)