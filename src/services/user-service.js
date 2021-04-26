export const PLANTIT_API_URL = 'http://localhost:4000/api';

const login = (credentials) => {
    return fetch(`${PLANTIT_API_URL}/login`,{
        method: "POST",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json())
}

const profile = () => {
    return fetch(`${PLANTIT_API_URL}/profile`,{
        method: "POST",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())
}

const logout = () => {
    return fetch(`${PLANTIT_API_URL}/logout`)
        .then(response => response.json())
}

const api = {
    login,
    logout,
    profile
}

export default api