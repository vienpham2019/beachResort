import axios from 'axios'
const update_member_resortrooms = (member_token , new_room) => {
    axios.post('/api/users/update_resort_rooms', {member_token, new_room})
}

const update_member_info = (member_token , user_name, profile_img) => {
    axios.post('/api/users/update_info', {member_token, user_name, profile_img})
}

const update_resort_room_comment = (room_id , new_comment) => {
    axios.post('/api/resorts/update_comment', {room_id, new_comment})
}

const delete_resort_room_comment = (room_id , comment) => {
    axios.post('/api/resorts/delete_comment', {room_id, comment})
}

export {update_member_resortrooms,update_member_info,update_resort_room_comment, delete_resort_room_comment}