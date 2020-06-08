import React , { Component } from 'react'

import {connect} from 'react-redux'

class RoomSingleInfo extends Component {
    render(){
        let room = this.props.visited_room
        return(
            <div className="container mt-4">
                <div className="row justify-content-between">
                    <div className="col-md-5 col-lg-4">
                        <div className="property-summary">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <button 
                                        className="btn btn-info" 
                                        data-toggle="modal" 
                                        data-target="#exampleModal" 
                                        data-whatever="@mdo"
                                    >
                                        BookRoom
                                    </button>
                                </div>
                                <div className="col-sm-12">
                                    <div className="title-box-d section-t4">
                                        <h3 className="title-d">Quick Summary</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="summary-list mr-2">
                                <strong>Space</strong>
                                <ul className="list">
                                    {room.space.map(s => 
                                        <li className="d-flex justify-content-between">- {s}</li>
                                    )}
                                </ul>
                            </div> 
                            <div className="summary-list mr-2">
                                <strong>Restroom</strong>
                                <ul class="list">
                                    {room.restroom.map(r => 
                                        <li className="d-flex justify-content-between">- {r}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-7 section-md-t3">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box-d">
                                    <h3 className="title-d">Room Description</h3>
                                </div>
                            </div>
                        </div>
                        <div className="property-description">
                            <p className="description color-text-a">
                                {room.description}
                            </p>
                        </div>
                        <div className="row section-t3">
                            <div className="col-sm-12">
                                <div className="title-box-d">
                                    <h3 className="title-d">Connections</h3>
                                </div>
                            </div>
                        </div>
                        <div className="summary-list">
                            <ul className="list">
                                {room.connections.map(c => <li className="d-flex">- {c}</li>)}
                            </ul>
                        </div>
                        <div className="row section-t3">
                            <div className="col-sm-12">
                                <div className="title-box-d">
                                    <h3 className="title-d">Services</h3>
                                </div>
                            </div>
                        </div>
                        <div className="summary-list">
                            <ul className="list">
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