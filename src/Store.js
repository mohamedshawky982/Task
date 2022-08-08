import { createStore,applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk"
import Details from "./Reducers"

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, Details)

const  store =  createStore(persistedReducer,applyMiddleware(thunk))

const persistor = persistStore(store)


export {store,persistor}
