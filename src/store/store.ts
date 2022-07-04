import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAPI } from "../services/UserService";
import { authReducer } from "./reducers/auth/authReducer";
import { userReducer } from "./reducers/user/userReducer";

const rootReducer = combineReducers({
    [userAPI.reducerPath]:userAPI.reducer,
    authReducer,
    userReducer,
})

export const setupStore =() =>{
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
