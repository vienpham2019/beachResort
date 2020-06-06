import React , { Component } from 'react'

import RoomsGrid from '../rooms_content/rooms_grid'

class Rooms extends Component {
    render(){
        return(
            <div>
                <section class="intro-single">
                    <div class="container">
                        <div class="title-single-box">
                            <h1 class="title-single">Our Rooms</h1>
                        </div>
                    </div>
                </section>
                <RoomsGrid history = {this.props.history}/> 
            </div>
        )
    }
}

export default Rooms 