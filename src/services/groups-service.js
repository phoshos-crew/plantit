import {PLANTIT_API_URL} from "./node-service";

const findGroupById = (groupId) => {
    return fetch(`${PLANTIT_API_URL}/groups/${groupId}`)
    .then(response => response.json())
}


const api = {
    findGroupById,
}

export default api
