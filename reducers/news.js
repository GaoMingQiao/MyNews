import React from "react"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  newsList: [],
  favorites: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {

    listNews: (state, action) => {
      state.newsList = action.payload
    },
    favorite: (state, action) => {
      const article = action.payload;
      const index = state.favorites.findIndex((fav) => fav.title === article.title);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(article);
      }
    },
  }
})


export const { listNews, favorite } = newsSlice.actions
export default newsSlice.reducer

