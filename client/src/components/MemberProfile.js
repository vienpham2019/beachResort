import React , { Component } from 'react'
import {connect} from 'react-redux'
import swal from '@sweetalert/with-react'


class MemberProfile extends Component{

    componentDidMount(){
        if(!this.props.member){
            let history = this.props.history
            history.push('/')
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
    }
    render(){
        let history = this.props.history
        let member = this.props.member
        return(
            <div>
            {member ?  
            <div> 
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">{member.user_name}</h1>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 text-right">
                                <img src={member.profile_img} className="align-self-start mr-3" alt="img" 
                                style={{width: '5em' , height: '5em'}}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div 
                    className="container shadow p-3 mb-5 bg-white rounded"
                    style={{minHeight: "10em"}}
                >
                    <h4 className="text-center">Your Rooms</h4>
                    <div className="container">
                        {member.resort_rooms.map(r => 
                            <div className="card mb-3" style={{maxWidth: '800px', margin: '0 auto'}}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={r.room.main_image_url} className="card-img" alt="roomImg"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-uppercase">{r.room.title}</h5>
                                            <ul>
                                                <li>
                                                    <strong>Start date</strong>: {`${r.start_date}`}
                                                </li>
                                                <li>
                                                    <strong>End date</strong>: {`${r.end_date}`}
                                                </li>
                                                <li>
                                                    <strong>Amount (rooms)</strong>: {r.amount}
                                                </li>
                                                {r.notes === '' 
                                                    ? null  
                                                    :<li>
                                                        <strong>Notes</strong>: {r.notes}
                                                    </li>
                                                }
                                            </ul>
                                            <div className="d-flex">
                                                <div className="p-2 flex-grow-1">
                                                    <button 
                                                        className="btn btn-info"
                                                        onClick={() => {
                                                            this.props.setVisitedRoom(r.room)
                                                            history.push('/room_single')
                                                        }}
                                                    >View room details</button>
                                                </div>
                                                <div className="p-3">
                                                    <button 
                                                        className="btn btn-danger"
                                                        onClick = {() => {
                                                            this.props.delete_book_room(r)
                                                        }}
                                                    >
                                                        <i class="fas fa-trash"></i> Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            : null }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setVisitedRoom: visited_room => dispatch({type: 'SET_VISITED_ROOMS' , visited_room}),
        delete_book_room: room => dispatch({type: 'DELETE_BOOK_ROOM' , room })
    }
}

const mapStateToProps = state => {
    return {
        member: state.member
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MemberProfile)