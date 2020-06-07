let init_state = {
    rooms: [],
    visited_room: null,
    member: null 
}

const rooms_reducer = (state = init_state , action) => {
    switch (action.type) {
        case "SET_ROOMS":
            return {...state, rooms: action.rooms}

        case "SET_VISITED_ROOMS": 
            return {
                ...state, visited_room: action.visited_room
            }

        case "SET_MEMBER": 
            return{
                ...state, member: action.member
            }
    
        default:
            return state
    }
}

export default rooms_reducer