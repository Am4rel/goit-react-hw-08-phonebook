import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contacts/contacts-reducers';
import { authReducer } from './auth/auth-reducers';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        },
    })
];

const authPersistConfig = {
    key: "token",
    storage,
    whitelist: ["token"],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactReducer
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);