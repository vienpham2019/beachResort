import React , { Component } from 'react'
import {connect} from 'react-redux'

import RoomSingleHeader from './room_single_header'
import RoomSingleBody from './room_single_body'
import RoomSingleInfo from './room_single_info'
import RoomSingleComment from './room_single_comment'

class RoomSingle extends  Component {

    componentDidMount(){
        window.scrollTo(0,0)
        if(!this.props.visited_room){
            this.props.history.push('/rooms')
        }
    }

    render(){
        let room = this.props.visited_room
        return(
            <div>
                {room ?
                    <div>
                        <RoomSingleHeader /> 
                        <RoomSingleBody />
                        <RoomSingleInfo /> 
                        <RoomSingleComment />
                    </div>  
                : null }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        visited_room: state.visited_room
    }
}

export default connect(mapStateToProps)(RoomSingle)