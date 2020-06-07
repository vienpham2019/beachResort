import React , { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import swal from '@sweetalert/with-react'

import axios from 'axios'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            error: null, 
            send_request: false
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        let email = e.target[0].value 
        let password = e.target[1].value 
        axios.post('/api/users/login' , {email , password})
        .then(res => {
            if(res.data.error){
                this.setState({error: res.data.error, send_request: true})
            }else{
                this.props.setMember(res.data.user)
                this.setState({error: null, send_request: true})
                this.props.history.push('/')
                swal({
                    title: "Login Successful !",
                    icon: "success",
                });
            }
        })
    }
    render(){
        let {error, send_request} = this.state
        return(
            <div className="intro-single mt-5">
                <div className="container">
                    <h3 className="text-center"> LOGIN </h3>
                        {send_request ? 
                            error ? 
                                <div class="alert alert-danger" role="alert">
                                    <h5 class="alert-heading text-center">{error}</h5>
                                </div>
                            : 
                                <div class="alert alert-success" role="alert">
                                    <h5 class="alert-heading text-center">Login Successfull</h5>
                                </div>
                        : null }
                    <form onSubmit = {(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input 
                                type="email" 
                                className= {
                                    send_request ? 
                                        error ? "form-control is-invalid" : "form-control is-valid"
                                    : "form-control"
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input 
                                type="password" 
                                className= {
                                    send_request ? 
                                        error ? "form-control is-invalid" : "form-control is-valid"
                                    : "form-control"
                                }
                            />
                        </div>
                        <div className="d-flex">
                            <div className="p-2 flex-grow-1">
                                <button type="submit" class="btn btn-outline-primary" style={{width: '10em'}}>Submit</button>
                            </div>
                            <div className="p-2">
                                <p>Don't have an account ? <NavLink to="/register">Sign up</NavLink></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setMember: member => dispatch({type: "SET_MEMBER", member})
    }
}

export default connect(null,mapDispatchToProps)(Login)