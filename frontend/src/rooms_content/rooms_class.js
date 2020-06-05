import React , { Component } from 'react'
import {connect} from 'react-redux'

class RoomsClass extends Component {
    render(){
        let rooms = this.props.rooms
        return(
            <section class="d-flex flex-wrap justify-content-center">
                {rooms.map(r => 
                    <div class="col-md-5 mb-4">
                        <div class="card-box-a card-shadow">
                            <div class="img-box-a card" style={{height: '22rem'}}>
                                <img src={r.main_image_url} alt={r.title + "rooms"}  class="card-img-top align-self-center" style={{height: '22rem'}}/>
                            </div> 
                            <div class="card-overlay">
                                <div class="card-overlay-a-content">
                                    <div class="card-header-a text-uppercase">
                                        <h2 class="card-title-a">
                                            {r.title}
                                        </h2>
                                    </div>
                                    <div class="card-body-a">
                                        <div class="price-box d-flex">
                                            <span class="price-a">$ {r.price} | Night</span>
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

const mapStateToProps = state => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(RoomsClass)