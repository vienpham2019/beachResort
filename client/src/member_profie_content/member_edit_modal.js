import React , {Component} from 'react'
import {connect} from 'react-redux'

class MemberEditModal extends Component {

    state = {
        user_name: "",
        profile_img: ""
    }

    componentDidMount(){
        let {user_name , profile_img} = this.props.member

        this.setState({user_name , profile_img})
    }

    handelSubmit = e => {
        e.preventDefault()
        let {user_name , profile_img} = this.state
        this.props.update_member({user_name, profile_img})
    }
    render(){
        let {user_name , profile_img} = this.state
        return(
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit = {(e) => this.handelSubmit(e)}>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">User Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={user_name} 
                                        onChange={(e) => this.setState({user_name: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">Frofile Image</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={profile_img} 
                                        onChange={(e) => this.setState({profile_img: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <button 
                                        className="btn btn-outline-info" 
                                        type="submit" 
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        update_member: member => dispatch({type: "UPDATE MEMBER" , member})
    }
}

const mapStateToProps = state => {
    return{
        member: state.member
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberEditModal)