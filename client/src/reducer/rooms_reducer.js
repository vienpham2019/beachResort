import {
    update_member_resortrooms , 
    update_member_info , 
    update_resort_room_comment,
    delete_resort_room_comment
} from './reducer_helper_method.js/update_member_resortroom'
let init_state = {
    rooms: [],
    visited_room: null,
    member: null,
    all_users: []
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

        case "SET_ALL_USERS":
            return{
                ...state, all_users: action.all_users
            }

        case "UPDATE MEMBER": 
            let {user_name, profile_img} = action.member 
            update_member_info(state.member.token , user_name, profile_img)
            return{
                ...state, member: {
                    ...state.member, user_name , profile_img
                }
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

        case "ADD_ROOM_COMMENT": 
            let {room , new_member_comment } = action
            update_resort_room_comment(room._id , new_member_comment)
            let add_comment_room = state.rooms.find(r => r === room)
            add_comment_room.comments = [new_member_comment,...add_comment_room.comments]
            return {
                ...state, visited_room: add_comment_room
            }

        case "DELETE_ROOM_COMMENT": 
            delete_resort_room_comment(action.room._id, action.comment)
            let delete_room_comments = state.rooms.find(room => room === action.room)
            delete_room_comments.comments = delete_room_comments.comments.filter(c => c.id !== action.comment.id)
            return{
                ...state, visited_room: delete_room_comments
            }
    
        default:
            return state
    }
}

export default rooms_reducer