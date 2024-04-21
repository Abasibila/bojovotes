import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    awards: []
}

const database = createSlice({
    name: "award",
    initialState,
    reducers: {
        setAwards: (state, action) =>{
            state.awards = action.payload;
        }
    }
})


export const { setAwards } = database.actions;

export const selectAwards = (state) => state.award.awards;

export default database.reducer;