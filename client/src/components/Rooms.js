import React , { Component } from 'react'

import RoomsGrid from '../rooms_content/rooms_grid'

class Rooms extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            <div>
                <section className="intro-single">
                    <div className="container">
                        <div className="title-single-box">
                            <h1 className="title-single">Our Rooms</h1>
                        </div>
                    </div>
                </section>
                <RoomsGrid history = {this.props.history}/> 
            </div>
        )
    }
}

export default Rooms 