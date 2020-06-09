import React , { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import {connect} from 'react-redux'

class RoomSingleComment extends Component {
    state = {}
    handleSubmit = e => {
        e.preventDefault()
        let content = e.target[0].value
        let room = this.props.visited_room
        let member = this.props.member 
        if(member){
            let new_member_comment = {
                id: uuidv4(),
                author: member.email, 
                content
            }

            this.props.addRoomComment(room , new_member_comment)
            this.setState({})
        }else{
            this.props.loginAlear()
        }
        e.target.reset()
    }

    handelDeleteComment = (comment) => {
        let {visited_room, deleteRoomComment} = this.props
        deleteRoomComment(visited_room,comment)
        this.setState({})
    }

    render(){
        let room = this.props.visited_room
        let comment_length = room.comments.length
        let all_users = this.props.all_users
        let member = this.props.member
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
                    {comment_length > 0 ? 
                        room.comments.map(comment => 
                            <div className="media m-3">
                                <img src={all_users[comment.author].profile_img} className="align-self-start mr-3" alt="img" 
                                    style={{width: '3em' , height: '3em'}}
                                />
                                <div className="media-body">
                                    <div class="d-flex bd-highlight">
                                        <div className="p-2 w-100">
                                            <h5 className="mt-0">{all_users[comment.author].user_name}</h5>
                                            <p>{comment.content}</p>
                                        </div>
                                        <div className="p-2">
                                            {member ? 
                                                member.user_name === all_users[comment.author].user_name ? 
                                                    <button 
                                                        className="btn btn-danger" 
                                                        onClick={() => this.handelDeleteComment(comment)}
                                                    >
                                                        <i class="fas fa-trash"></i> Delete
                                                    </button>
                                                : null 
                                            : null }
                                        </div>
                                    </div> 
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

const mapDispatchToProps = dispatch => {
    return{
        addRoomComment: (room , new_member_comment) => dispatch({type: "ADD_ROOM_COMMENT" , room , new_member_comment}), 
        deleteRoomComment: (room,comment) => dispatch({type: "DELETE_ROOM_COMMENT" , room , comment})
    }
}

const mapStateToProps = state => {
    return{
        visited_room: state.visited_room,
        member: state.member,
        all_users: state.all_users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomSingleComment)