import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGpt:false,
        movieName:null,
        movieList:null,
    },
    reducers:{
        toggleGpt:(state)=>{
            state.showGpt= !state.showGpt
        },
        addgptMovies:(state,action)=>{
            const {movieName,movieList}=action.payload;
            state.movieName=movieName;
            state.movieList=movieList;
        }
    },
});


export const {toggleGpt,addgptMovies}=GptSlice.actions;
export default GptSlice.reducer;