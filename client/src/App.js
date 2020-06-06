import React , { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Err from './components/Err'
import Footer from './components/Footer'

class App extends Component {
  componentDidMount(){
    let API = process.env.NODE_ENV === "development" 
      ? 'http://localhost:5000/resorts' 
      : 'https://beackresortsdemo.herokuapp.com/resorts'
    fetch(API)
    .then(res => res.json())
    .then(resorts => {
      this.props.setRooms(resorts)
    })
    .catch(error => console.log(error))
    console.log(process.env.NODE_ENV)
  }
  render(){
    return(
      <Router>
        <Route render={(routerProps) => <Navbar {...routerProps} />}/> 
        <Switch>
          <Route exact path="/" render={(routerProps) => <Home {...routerProps} />}/>
          <Route exact path="/rooms" render={(routerProps) => <Rooms {...routerProps} />}/>
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