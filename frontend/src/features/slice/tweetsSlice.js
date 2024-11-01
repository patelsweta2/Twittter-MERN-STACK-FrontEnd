import { createSlice } from "@reduxjs/toolkit";

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    savedTweets: [],
    showTweetModal: false,
    isTweetUpdating: false,
    tweetToUpdate: null,
  },
  reducers: {
    setSavedTweets: (state, action) => {
      state.savedTweets = action.payload;
    },
    removeTweet: (state, action) => {
      state.savedTweets = state.savedTweets.filter(
        (tweetId) => tweetId !== action.payload
      );
    },
    toggleShowModal: (state, action) => {
      state.showTweetModal = !state.showTweetModal;
    },
    toggleIsTweetUpdating: (state, action) => {
      state.isTweetUpdating = action.payload;
    },
    setTweetToUpdate: (state, action) => {
      state.tweetToUpdate = action.payload;
    },
  },
});

export const getSavedTweets = (state) => state.tweets.savedTweets;
export const getShowTweetModal = (state) => state.tweets.showTweetModal;
export const getIsTweetUpdating = (state) => state.tweets.isTweetUpdating;
export const getTweetToUpdate = (state) => state.tweets.tweetToUpdate;

export const {
  setSavedTweets,
  removeTweet,
  toggleShowModal,
  toggleIsTweetUpdating,
  setTweetToUpdate,
} = tweetsSlice.actions;

export default tweetsSlice.reducer;
