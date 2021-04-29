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
    })
        .then(response => {
            if (response.status === 403) {
                return null
            } else {
                return response.json()
            }
        })
}

const logout = () => {
    return fetch(`${PLANTIT_API_URL}/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.text())
}

const register = (newUser) => {
    return fetch(`${PLANTIT_API_URL}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(newUser),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())
        .catch(error => {
            alert("Username already exists!")
        })
}

const profile = () => {
    return fetch(`${PLANTIT_API_URL}/profile`,{
        method: "POST",
        credentials: "include",
    }).then(response => response.json())
}

const findUserById = (userId) => {
    return fetch(`${PLANTIT_API_URL}/users/${userId}`)
    .then(response => response.json())
}

const api = {
    login,
    logout,
    profile,
    findUserById,
    register
}

export default api