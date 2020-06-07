import React , { Component } from 'react'
import {connect} from 'react-redux'

class RoomsGrid extends Component {
    render(){
        let rooms = this.props.rooms
        let history = this.props.history
        return(
            <section class="d-flex flex-wrap justify-content-center">
                {rooms.map(r => 
                    <div 
                        className="col-md-5 mb-4" 
                        style={{cursor: "pointer"}}
                        onClick={() => {
                            this.props.setVisitedRoom(r)
                            history.push('/room_single')
                        }}
                    >
                        <div className="card-box-a card-shadow">
                            <div className="img-box-a card" style={{height: '22rem'}}>
                                <img src={r.main_image_url} alt={r.title + "rooms"}  className="card-img-top align-self-center" style={{height: '22rem'}}/>
                            </div> 
                            <div className="card-overlay">
                                <div className="card-overlay-a-content">
                                    <div className="card-header-a text-uppercase">
                                        <h2 className="card-title-a">
                                            {r.title}
                                        </h2>
                                    </div>
                                    <div className="card-body-a">
                                        <div className="price-box d-flex">
                                            <span className="price-a">$ {r.price} | Night</span>
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                )}
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisitedRoom: visited_room => dispatch({type: 'SET_VISITED_ROOMS' , visited_room})
    }
}

const mapStateToProps = state => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(RoomsGrid)