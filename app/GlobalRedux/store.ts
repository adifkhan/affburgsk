import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counte-slice';
import themeReducer from './features/theme-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        counterReducer,
        themeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;