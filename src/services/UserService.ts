import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/dist/query/react'
import { useResolvedPath } from 'react-router-dom'
import { IUser } from '../models/IUsers'
export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    tagTypes: ['Users'],
    endpoints:(build)=>({
        fetchAllUsers: build.query<IUser[],number>({
            query:(limit:number =5)=>({
                url: '/users',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result =>['Users']
        }),
        updateUser: build.mutation<IUser, IUser>({
            query: (user)=>({
                url: `/users/${user.id}`,
                method: "PUT",
                body: user,
            }),
            invalidatesTags: ['Users']
        }),
    })
})