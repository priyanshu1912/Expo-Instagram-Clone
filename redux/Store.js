import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../redux/slices/AuthSlice'

export const Store = configureStore({
    reducer: {
        user: authReducer
    }
})