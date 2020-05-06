import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './root-reducer'

const middlewares = []

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const persistConfig = {
    key:'root',
    storage: storage,
    whitelist: ["cart"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(...middlewares)
)

let persistor = persistStore(store)

export default () => {
    return {store, persistor}
}