import React , { Component } from 'react'

class Footer extends Component {
    render(){
        return(
            <footer>
                <div class="widget-a">
                    <div class="w-header-a">
                        <h3 class="w-title-a text-brand">Vintage Village</h3>
                    </div>
                    <div class="w-body-a">
                        <p class="w-text-a color-text-a">
                            Where the little things matter!
                        </p>
                    </div>
                </div>
                <div class="copyright-footer">
                    <p class="copyright color-text-a">
                    &copy; Copyright
                    <span class="color-a"> Vintage Village</span>.
                    </p>
                </div>
            </footer> 
        )
    }
}

export default Footer 