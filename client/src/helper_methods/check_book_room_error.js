const CheckBookRoom = (start_date , end_date , amount ) => {
    let errors = []
    let today = new Date()
    let today_month = 
        Math.floor(today.getMonth()) + 1 >= 10 
        ? Math.floor(today.getMonth()) + 1 
        : `0${Math.floor(today.getMonth()) + 1}`

    let today_date = 
        Math.floor(today.getDate()) >= 10 
        ? today.getDate()
        : `0${today.getDate()}`
    
    let date = `${today.getFullYear()}${today_month}${today_date}`

    if(!amount) errors.push({amount_error: "Amount can't be blank."})
    if(!start_date) errors.push({date_error: "Start date can't be blank."})
    if(!end_date) errors.push({date_error: "End date can't be blank."})

    if(start_date && Math.floor(start_date) < Math.floor(date)) errors.push({date_error: "Start date can't be in the past."})
    if(end_date && Math.floor(end_date) < Math.floor(date)) errors.push({date_error: "End date can't be in the past."})
    if(start_date  && end_date && Math.floor(start_date) > Math.floor(end_date)) errors.push({date_error: "Invalid end date."})

    return errors

}

export default CheckBookRoom