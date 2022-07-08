import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/dist/query/react'
import { useResolvedPath } from 'react-router-dom'
import { IDocument } from '../models/IDocument'
import { INews } from '../models/INews'
import { IRegister } from '../models/IRegister'
import { IUser } from '../models/IUsers'
export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    tagTypes: ['Users','Registres','News','Documents'],
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
        fetchAllRegisters: build.query<IRegister[],number>({
            query:(limit:number)=>({
                url: '/registers',
                params: {
                    _limit: limit,
                }
            }),
            providesTags: result =>['Registres']
        }),
        fetchAllNews: build.query<INews[],number>({
            query:(limit:number)=>({
                url: '/news',
                params: {
                    _limit: limit,
                }
            }),
            providesTags: result =>['News']
        }),
        fetchAllDocuments: build.query<IDocument[],number>({
            query:(limit:number)=>({
                url: '/documents',
                params: {
                    _limit: limit,
                }
            }),
            providesTags: result =>['Documents']
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