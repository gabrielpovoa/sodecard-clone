import { createSlice } from '@reduxjs/toolkit'



export const slice = createSlice({
    name: 'user',
    initialState: {
        name: 'Gabriel',
        password: '123456'
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setKey: (state, action) => {
            state.password = action.payload
        }
    }
})


export const {setName, setKey} = slice.actions;
export default slice.reducer;