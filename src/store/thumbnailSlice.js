import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showThumbnail: false
}

const thumbnailSlice = createSlice({
    name: 'thumbnail',
    initialState,
    reducers: {
        toggleThumbnail: (state, action) => {
            state.showThumbnail = !state.showThumbnail
        }
    }
})

export const {toggleThumbnail} = thumbnailSlice.actions

export default thumbnailSlice.reducer