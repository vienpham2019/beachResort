import React , { Component } from 'react'

import RoomsClass from '../rooms_content/rooms_class'

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
                <RoomsClass /> 
            </div>
        )
    }
}

export default Rooms 