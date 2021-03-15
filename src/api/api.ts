import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ead95c9c-3750-4876-9174-65908965d2c9"
    }
})

export const userAPI = {
    getUsers(currentPage:number = 1, pageSize:number = 10 ) {
        return instance.get(`users?page=${currentPage} & count = ${pageSize}`,
            )
            .then(response => response.data)
    },

    unfollow (id: string){
        return instance.delete(`follow/${id}`,
            )
    },

    follow(id: string){
      return instance.post(`follow/${id}`,{},
          )
    }
}


