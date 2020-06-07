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
                <section class="intro-single">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-8">
                                <div class="title-single-box">
                                    <h1 class="title-single">{member.user_name}</h1>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-4">
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
                        {member.resort_rooms.map(room => 
                            <div class="card mb-3" style="max-width: 540px;">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={room.main_image_url} class="card-img" alt="roomImg"/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{room.title}</h5>
                                            <h6 className="card-title"> Description </h6>
                                            <p class="card-text">
                                                {room.description}
                                            </p>
                                            <button 
                                                className="btn btn-info"
                                                onClick={() => {
                                                    this.props.setVisitedRoom(room)
                                                    history.push('/room_single')
                                                }}
                                            >View room details</button>
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
        setVisitedRoom: visited_room => dispatch({type: 'SET_VISITED_ROOMS' , visited_room})
    }
}

const mapStateToProps = state => {
    return {
        member: state.member
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MemberProfile)