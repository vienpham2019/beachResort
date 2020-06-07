import React , { Component } from 'react'

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="widget-a">
                    <div className="w-header-a">
                        <h3 className="w-title-a text-brand">Vintage Village</h3>
                    </div>
                    <div className="w-body-a">
                        <p className="w-text-a color-text-a">
                            Where the little things matter!
                        </p>
                    </div>
                </div>
                <div className="copyright-footer">
                    <p className="copyright color-text-a">
                    &copy; Copyright
                    <span className="color-a"> Vintage Village</span>.
                    </p>
                </div>
            </footer> 
        )
    }
}

export default Footer 