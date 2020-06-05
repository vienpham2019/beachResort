import React , { Component } from 'react'

class Navbar extends Component{
    render(){
        let history = this.props.history
        return(
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                    aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                        <p className="navbar-brand text-brand">
                            Vintage<span class="color-b"> Village</span>
                        </p>
                    <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse"
                    data-target="#navbarTogglerDemo01" aria-expanded="false">
                        <span className="fa fa-search" aria-hidden="true"></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <button 
                            className="btn btn-outline-info ml-2 mr-2"
                            onClick = {() => history.push('/')}
                        >
                            Home
                        </button>
                        <button 
                            className="btn btn-outline-info ml-2 mr-2"
                            onClick = {() => history.push('/rooms')}
                        >
                            Rooms
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar