import axios from 'axios'
const update_member_resortrooms = (member_token , new_room) => {
    axios.post('/api/users/update_resort_rooms', {member_token, new_room})
}

const update_member_info = (member_token , user_name, profile_img) => {
    axios.post('/api/users/update_info', {member_token, user_name, profile_img})
}

export {update_member_resortrooms,update_member_info}