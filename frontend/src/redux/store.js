
import {configureStore} from "@reduxjs/toolkit"
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"


const persistConfig = {
    key:'root',
    storage
}

const rootReducer = combineReducers({
    auth:authReducer,

})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)