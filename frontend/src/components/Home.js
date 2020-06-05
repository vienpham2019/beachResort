import React , { Component } from 'react'

class Home extends Component {
    render(){
        return(
            <div class="intro intro-carousel">
                <div id="carousel" class="owl-carousel owl-theme">
                    <div class="carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(https://cdn.trendir.com/wp-content/uploads/2016/06/Modern-house-in-Auckland-New-Zealand.jpg)'}}>
                    <div class="overlay overlay-a"></div>
                    <div class="intro-content display-table">
                        <div class="table-cell">
                        <div class="container">
                            <div class="row">
                            <div class="col-lg-8">
                                <div class="intro-body">
                                <p class="intro-title-top">
                                    Doral, Florida <br/>
                                    78345
                                </p>
                                <h1 class="intro-title mb-4">
                                    <span class="color-b">204 </span> Mount <br/>
                                    Olive Road Two
                                </h1>
                                <p class="intro-subtitle intro-price">
                                    <span class="price-a">rent | $ 12.000</span>
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

export default Home