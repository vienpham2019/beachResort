import React , { Component } from 'react'
import {connect} from 'react-redux'

import RoomSingleHeader from './room_single_header'
import RoomSingleBody from './room_single_body'
import RoomSingleInfo from './room_single_info'
import RoomSingleComment from './room_single_comment'
import BookRoomModal from './book_room_modal'

import axios from 'axios'
import swal from '@sweetalert/with-react'


class RoomSingle extends  Component {

    componentDidMount(){
        window.scrollTo(0,0)
        if(!this.props.visited_room){
            this.props.history.push('/rooms')
        }
        axios('/api/users/')
        .then(all_users => this.props.setAllUsers(all_users.data))
        .catch(error => console.log(error))
    }

    loginAlear = () => {
        let history = this.props.history
        swal({
            title: "Please Login or Register !",
            icon: "warning",
            button: false,
            content: (
                <div className="container">
                    <button 
                        className="btn btn-outline-info m-3"
                        onClick = {() => {
                            history.push('/login')
                            swal.close()
                        }}
                    >
                        Login
                    </button>
                    <button 
                        className="btn btn-outline-info m-3"
                        onClick = {() => {
                            history.push('/register')
                            swal.close()
                        }}
                    >
                        Sign up 
                    </button>
                </div>
            )
        })
    }

    render(){
        let room = this.props.visited_room
        return(
            <div>
                {room ?
                    <div>
                        <RoomSingleHeader /> 
                        <RoomSingleBody />
                        <RoomSingleInfo loginAlear = {this.loginAlear}/> 
                        <RoomSingleComment loginAlear = {this.loginAlear}/>
                        <BookRoomModal /> 
                    </div>  
                : null }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAllUsers: all_users => dispatch({type: "SET_ALL_USERS", all_users})
    }
}

const mapStateToProps = state => {
    return{
        visited_room: state.visited_room
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomSingle)