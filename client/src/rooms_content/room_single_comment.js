import React , { Component } from 'react'

import {connect} from 'react-redux'

class RoomSingleComment extends Component {

    handleSubmit = e => {
        e.preventDefault()
        let member = this.props.member 
        if(!member){
            this.props.loginAlear()
        }
    }

    render(){
        let room = this.props.visited_room
        let comment_length = room.comments.length
        return(
            <div className="container">
                <h4>{comment_length} Comment{comment_length > 1 ? "s" : ""}</h4>
                <form onSubmit = {(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add a public comment..."></textarea>
                    </div>
                    <div className="form-group">
                        <button 
                            className="btn btn-info" 
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div 
                    className="container shadow-sm p-3 mb-5 bg-white rounded" 
                    style={{maxHeight: '30em', overflow: 'auto'}}
                >
                    {room.comments.length > 0 ? 
                        room.comments.map(comment => 
                            <div className="media m-3">
                                <img src="https://www.agriuniverse.co.zw/media/com_easysocial/photos/232/582/man-avatar-icon-flat-vector-19152370_large.jpg" className="align-self-start mr-3" alt="img" 
                                    style={{width: '3em' , height: '3em'}}
                                />
                                <div className="media-body">
                                    <h5 className="mt-0">{comment.author}</h5>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        )
                        : 
                        <p className="text-center">
                            <strong>No Comments Yet</strong><br/>
                            Be the first to share what you think!
                        </p>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        visited_room: state.visited_room,
        member: state.member
    }
}

export default connect(mapStateToProps)(RoomSingleComment)