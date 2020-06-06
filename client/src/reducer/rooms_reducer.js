let init_state = {
    rooms: []
}

const rooms_reducer = (state = init_state , action) => {
    switch (action.type) {
        case "SET_ROOMS":
            return {...state, rooms: action.rooms}
    
        default:
            return state
    }
}

export default rooms_reducer