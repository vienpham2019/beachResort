import React , {Component} from 'react'
import check_book_room_error from '../helper_methods/check_book_room_error'

class BookRoomModal extends Component {

    handleSubmit = e => {
        e.preventDefault()
        let start_date = e.target[0].value.split('-').join('') // year month date 
        let end_date = e.target[1].value.split('-').join('')
        let amount = e.target[2].value
        let notes = e.target[3].value
        let errors = check_book_room_error(start_date, end_date , amount)
        console.log(errors)
    }
    render(){
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
                            <form onSubmit = {(e) => this.handleSubmit(e)}>
                                <div className="form-group">
                                    <label className="col-form-label">
                                        Start Date <span style={{color: 'red'}}>*</span>
                                    </label>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">
                                        End Date <span style={{color: 'red'}}>*</span>
                                    </label>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">
                                        Amount (rooms) <span style={{color: 'red'}}>*</span>
                                    </label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">Notes</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-info" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookRoomModal