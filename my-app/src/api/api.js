import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "a1ef7cd3-1bc4-4585-a638-33451964e4db"},
    json: true,
});

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10, term = '') {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status});
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    signIn({ email, password }) {
        return instance.get(`auth/login`)
        .then((response) => response.body)
    },
}
