import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state,action){
            state.push(action.payload); // state.push can only be possible inside createSlice method. possible for immer.js - creats new state under the hood
        }
    }
});
export const selectPosts = (state) => state.posts;
export const {postAdded} = postsSlice.actions; // createSlice autometically generates this. 
export default postsSlice.reducer;
//anytime we create reducers like this we need to add this in the store.