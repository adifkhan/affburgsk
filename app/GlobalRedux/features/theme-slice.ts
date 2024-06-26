import { createSlice } from '@reduxjs/toolkit';



export type ThemeState = {
    theme: string | null;
}

const initialState: ThemeState = {
    theme: 'false',
}

export const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        themeState: (state, action) => { state.theme = action.payload },
    }
})

export const { themeState } = themeSlice.actions;
export default themeSlice.reducer;