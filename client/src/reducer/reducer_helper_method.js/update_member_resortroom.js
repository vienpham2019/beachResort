import axios from 'axios'
const update_member_resortrooms = (member_token , new_room) => {
    axios.post('/api/users/update_resort_rooms', {member_token, new_room})
}

export default update_member_resortrooms