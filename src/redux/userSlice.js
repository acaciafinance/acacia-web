import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        info: null,
        pending: false,
        error: false
    },

    reducers: {
        updateStart: (state)=> {
            state.pending = true
        },
        updateSuccess: (state, action)=> {
            state.info = action.payload
            state.pending = false
        },
        updateError: (state)=> {
            state.error = true
            state.pending = false
        },
        logoutUser: (state)=> {
            state.info = null
            state.pending = false
            state.error = false
        }
    }
})

export const { updateStart, updateSuccess, updateError, logoutUser } = userSlice.actions
export default userSlice.reducer