import React , { Component } from 'react'
import {connect} from 'react-redux'

class RoomSingleHeader extends Component {
    render(){
        let room = this.props.visited_room
        return(
            <section class="intro-single">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-8">
                            <div class="title-single-box">
                                <h1 class="title-single text-uppercase">{room.title}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4">
                        <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <h5>Maximum Adults</h5>
                                </li>
                                <li class="breadcrumb-item">
                                    <h5>{room.maximum_adults}</h5>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        visited_room: state.visited_room
    }
}

export default connect(mapStateToProps)(RoomSingleHeader)