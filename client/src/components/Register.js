import React , { Component } from 'react'
import {NavLink} from 'react-router-dom'

import axios from 'axios'

class Register extends Component {

    constructor(){
        super()
        this.state = {
            error_value: [],
            error_key: [],
            successful: false,
            send_request: false
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        let user_name , email , password , confirm_password 
        user_name = e.target[0].value
        email = e.target[1].value
        password = e.target[2].value
        confirm_password = e.target[3].value

        axios.post('/api/users/register' , {user_name, email , password , confirm_password})
        .then(res => {
            if(res.data.msg){
                this.setState({successful: true , send_request: true , error_value: [] , error_key: {}})
            }
            if(res.data.error){
                let errors = res.data.error
                let error_value = []
                let error_key = {}
                errors.forEach(element => {
                    error_value.push(...Object.values(element))
                    error_key[Object.keys(element)[0]] = true
                })

                this.setState({error_key, error_value, send_request: true})
            }
        })
        .catch(error => console.log(error))
    }

    render(){
        let {error_value , error_key , send_request , successful} = this.state
        let {user_name_error , email_error , password_error} = error_key
        return(
            <div className="intro-single mt-5">
                <div className="container">
                    <h3 className="text-center"> SIGN UP </h3>
                    {send_request ? 
                        !successful ? 
                            <div class="alert alert-danger" role="alert">
                                <h5 class="alert-heading text-center">Error</h5>
                                <ul className="ml-2">
                                    {error_value.map(value => 
                                        <li>{value}</li>
                                    )}
                                </ul>
                            </div>
                        : 
                        <div class="alert alert-success" role="alert">
                            <h5 class="alert-heading text-center">Sign up successful</h5>
                        </div>
                    : null }
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">User Name</label>
                            <input 
                                type="string" 
                                className= {
                                    send_request ? 
                                        user_name_error ? "form-control is-invalid" : "form-control is-valid"
                                    : "form-control"
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input 
                                type="email" 
                                className= {
                                    send_request ? 
                                        email_error ? "form-control is-invalid" : "form-control is-valid"
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
                                        password_error ? "form-control is-invalid" : "form-control is-valid"
                                    : "form-control"
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Comfirm Password</label>
                            <input 
                                type="password" 
                                className= {
                                    send_request ? 
                                        password_error ? "form-control is-invalid" : "form-control is-valid"
                                    : "form-control"
                                }
                            />
                        </div>
                        <div className="d-flex">
                            <div className="p-2 flex-grow-1">
                                <button type="submit" class="btn btn-outline-primary" style={{width: '10em'}}>Submit</button>
                            </div>
                            <div className="p-2">
                                <p>Already Have Account? <NavLink to="/login">Login</NavLink></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register