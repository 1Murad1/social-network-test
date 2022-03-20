import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3e81beb3-b2bd-4ed3-bf1e-7590d7330d27'
    }
})

export const userApi = {
    getUsers: (currentPage, pageSize, friendsStatus) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friendsStatus}`)
            .then(response => response.data)
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unFollow: (userId) =>  {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authApi = {
    getAuthUserData: () => {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    loginUser: (email, password, rememberMe = false) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logoutUser: () => {
        return instance.delete(`auth/login`)
    }
}

export const profileApi = {
    getUserProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus: (userId) => {
        return instance.get('profile/status/' + userId)
    },
    updateUserStatus: (status) => {
        return instance.put('profile/status', {status: status})
    }

}