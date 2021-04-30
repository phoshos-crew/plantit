export const PLANTIT_API_URL = 'http://localhost:4000/api';

const profile = () => {
    return fetch(`${PLANTIT_API_URL}/profile`,{
        method: "POST",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => {
            if (response.status === 403) {
                return null
            } else {
                return response.json()
            }
        })
}

const findGroupById = (groupId) => {
    return fetch(`${PLANTIT_API_URL}/groups/${groupId}`)
    .then(response => response.json())
}


const api = {
    profile,
    findGroupById,
}

export default api
