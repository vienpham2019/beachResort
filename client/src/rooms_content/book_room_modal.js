import React , {Component} from 'react'
import check_book_room_error from '../helper_methods/check_book_room_error'

import {connect} from 'react-redux'

class BookRoomModal extends Component {
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
        let start_date = e.target[0].value // year month date 
        let end_date = e.target[1].value
        let amount = e.target[2].value
        let notes = e.target[3].value
        let room = this.props.visited_room
        let errors = check_book_room_error(start_date.split('-').join(''), end_date.split('-').join('') , amount)

        if(errors.length > 0){
            let error_value = []
            let error_key = {}
            errors.forEach(element => {
                error_value.push(...Object.values(element))
                error_key[Object.keys(element)[0]] = true
            })

            this.setState({error_key, error_value, send_request: true})
        }else{
            this.setState({successful: true , send_request: true , error_value: [] , error_key: {}})
            this.props.add_book_room({start_date, end_date , amount , notes , room})
            console.log({start_date, end_date , amount , notes , room})
        }
    }
    render(){
        let {error_value , error_key , send_request , successful} = this.state
        let {date_error , amount_error} = error_key
        return(
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Book Room Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {send_request && !successful ? 
                                <ul>
                                    {error_value.map(v => <li style={{color: 'red'}}>{v}</li>)}
                                </ul>
                            : successful ? 
                                <label style={{color: "green"}}>Complete add this room to you profile.</label>
                            : null }
                            <form onSubmit = {(e) => this.handleSubmit(e)}>
                                <div className="form-group">
                                    <label className="col-form-label">
                                        Start Date <span style={{color: 'red'}}>*</span>
                                    </label>
                                    <input 
                                        type="date" 
                                        className= {
                                            send_request ? 
                                                date_error ? "form-control is-invalid" : "form-control is-valid"
                                            : "form-control"
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">
                                        End Date <span style={{color: 'red'}}>*</span>
                                    </label>
                                    <input 
                                        type="date" 
                                        className= {
                                            send_request ? 
                                                date_error ? "form-control is-invalid" : "form-control is-valid"
                                            : "form-control"
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">
                                        Amount (rooms) <span style={{color: 'red'}}>*</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        className= {
                                            send_request ? 
                                                amount_error ? "form-control is-invalid" : "form-control is-valid"
                                            : "form-control"
                                        }
                                        min="1" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">Notes</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                                <div className="form-group">
                                    <button 
                                        className="btn btn-info" 
                                        type="submit" 
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        add_book_room: resort_room => dispatch({type: 'ADD_BOOK_ROOM' , resort_room})
    }
}

const mapStateToProps = state => {
    return{
        visited_room: state.visited_room,
        member: state.member 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookRoomModal)