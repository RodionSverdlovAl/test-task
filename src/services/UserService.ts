import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/dist/query/react'
export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints:(build)=>({
        fetchAllUsers: build.query({
            query:()=>({
                url: '/users',
                
            })
        })
    })
})