import React , { Component } from 'react'

import {connect} from 'react-redux'

class RoomSingleInfo extends Component {
    render(){
        let room = this.props.visited_room
        return(
            <div className="container mt-4">
                <div class="row justify-content-between">
                    <div class="col-md-5 col-lg-4">
                    <div class="property-summary">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="title-box-d section-t4">
                                    <h3 class="title-d">Quick Summary</h3>
                                </div>
                            </div>
                        </div>
                        <div class="summary-list mr-2">
                            <strong>Space</strong>
                            <ul class="list">
                                {room.space.map(s => 
                                    <li class="d-flex justify-content-between">- {s}</li>
                                )}
                            </ul>
                        </div> 
                        <div className="summary-list mr-2">
                            <strong>Restroom</strong>
                            <ul class="list">
                                {room.restroom.map(r => 
                                    <li class="d-flex justify-content-between">- {r}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-7 col-lg-7 section-md-t3">
                    <div class="row">
                        <div class="col-sm-12">
                        <div class="title-box-d">
                            <h3 class="title-d">Room Description</h3>
                        </div>
                        </div>
                    </div>
                    <div class="property-description">
                        <p class="description color-text-a">
                            {room.description}
                        </p>
                    </div>
                    <div class="row section-t3">
                        <div class="col-sm-12">
                            <div class="title-box-d">
                                <h3 class="title-d">Connections</h3>
                            </div>
                        </div>
                    </div>
                    <div class="summary-list">
                        <ul class="list">
                            {room.connections.map(c => <li className="d-flex">- {c}</li>)}
                        </ul>
                    </div>
                    <div class="row section-t3">
                        <div class="col-sm-12">
                            <div class="title-box-d">
                                <h3 class="title-d">Services</h3>
                            </div>
                        </div>
                    </div>
                    <div class="summary-list">
                        <ul class="list">
                            {room.service.map(s => <li className="d-flex">- {s}</li>)}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        visited_room: state.visited_room 
    }
}

export default connect(mapStateToProps)(RoomSingleInfo)