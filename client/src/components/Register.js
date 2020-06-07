import React , { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Register extends Component {
    render(){
        return(
            <div className="intro-single mt-5">
                <div className="container">
                    <h3 className="text-center"> SIGN UP </h3>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Comfirm Password</label>
                            <input type="password" className="form-control"/>
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