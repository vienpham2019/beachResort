import update_member_resortrooms from './reducer_helper_method.js/update_member_resortroom'
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

        case "ADD_BOOK_ROOM": 
            let add_book_rooms = [action.resort_room,...state.member.resort_rooms]
            update_member_resortrooms(state.member.token, add_book_rooms)
            return{ 
                ...state, member: {
                    ...state.member, resort_rooms: add_book_rooms
                }
            }

        case "DELETE_BOOK_ROOM": 
            let delete_book_rooms = state.member.resort_rooms.filter(room => room !== action.room)
            update_member_resortrooms(state.member.token, delete_book_rooms)
            return{
                ...state, member: {
                    ...state.member, resort_rooms: delete_book_rooms
                }
            }
    
        default:
            return state
    }
}

export default rooms_reducer