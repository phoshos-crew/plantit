export const PLANTIT_API_URL = 'http://localhost:4000/api';


const findGroupById = (groupId) => {
    return fetch(`${PLANTIT_API_URL}/groups/${groupId}`)
    .then(response => response.json())
}


const api = {
    findGroupById,
}

export default api
