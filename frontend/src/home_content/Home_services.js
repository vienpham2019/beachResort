import React , {Component} from 'react'

class HomeServices extends Component{
    render(){
        return(
            <section className="section-services section-t8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Our Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-box-c foo">
                            <div className="card-header-c d-flex">
                                <div className="card-box-ico">
                                    <i className="fas fa-utensils"></i>
                                </div>
                                <div className="card-title-c align-self-center">
                                    <h2 className="title-c">Dining</h2>
                                </div>
                            </div>
                            <div className="card-body-c">
                                <p className="content-c">
                                    Smell the spices, taste the freshness, feel the sea breeze, discover the creativity. At Vintage Village Hua Hin, you’ll find the very best Thai and International without even having to leave.
                                    Breakfast is the most important meal of the day, or so we’ve been told. Not here. For us, all your meals are just as important. That’s how we’ve designed your experience and that’s how we want you to feel.
                                    Eat in. Chill out. Have a rest.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-box-c foo">
                            <div className="card-header-c d-flex">
                                <div className="card-box-ico">
                                    <i className="fas fa-spa"></i>
                                </div>
                                <div className="card-title-c align-self-center">
                                    <h2 className="title-c">Spa</h2>
                                </div>
                            </div>
                            <div className="card-body-c">
                                <p className="content-c">
                                    Discover a journey within a journey, where blissful treatments and a tranquil setting lets you surrender to your senses and a homely sanctuary lets you get away from it all. We believe that happiness is the pillar to wellness, and that’s what Restfully Yours Spa is all about.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-box-c foo">
                            <div className="card-header-c d-flex">
                                <div className="card-box-ico">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <div className="card-title-c align-self-center">
                                    <h2 className="title-c">Meeting</h2>
                                </div>
                            </div>
                            <div className="card-body-c">
                                <p className="content-c">
                                    It’s Time to Get Down to Business
                                    Looking for space for a memorable event in Hua Hin? Need the right room to hold a meeting? At Vintage Village, we’ve got some excellent spaces that let you talk business.
                                    Whatever is on the agenda, you just need to let us know. You’ve also got our professional team on hand and ready to assist. Just give us a brief, and we’ll take care of the rest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default HomeServices 