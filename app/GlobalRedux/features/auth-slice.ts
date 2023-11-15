import { createSlice } from '@reduxjs/toolkit';



export type AuthStateType = {
    user: boolean;
}

const initialState: AuthStateType = {
    user: false,
}

export const themeSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        themeState: (state, action) => { state.user = action.payload },
    }
})

export const { themeState } = themeSlice.actions;
export default themeSlice.reducer;