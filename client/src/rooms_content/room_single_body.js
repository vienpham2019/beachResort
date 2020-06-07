import React , { Component } from 'react'
import {connect} from 'react-redux'

class RoomSingleBody extends Component {
    render(){
        let room = this.props.visited_room
        return(
            <section class="section-about">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="about-img-box">
                                <img src={room.main_image_url} alt="rooms" class="img-fluid" style={{height: "50vh" , width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return{
        visited_room: state.visited_room
    }
}

export default connect(mapStateToProps)(RoomSingleBody)