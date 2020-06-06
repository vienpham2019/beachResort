import React , {Component} from 'react'

class HomeHeader extends Component {
    render(){
        return(
            <div className="intro intro-carousel">
                <div id="carousel" class="owl-carousel owl-theme">
                    <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/94/84/94842_v5.jpeg)'}}>
                    <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">
                                                    Houston, Texas <br/>
                                                    77530
                                                </p>
                                                <h1 className="intro-title mb-4">
                                                    Vintage<span className="color-b"> Village</span> <br/>
                                                    Resort
                                                </h1>
                                                <p class="intro-subtitle intro-price">
                                                    LUXURY HOLTELS AND SPA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader