import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  articlesCount: 0,
  isLoading: false,
  error: '',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    articlesFetch(state) {
      state.isLoading = true;
    },
    articlesFetchSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
    },
    articlesFetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { articlesFetch, articlesFetchSuccess, articlesFetchError } = articlesSlice.actions;

export default articlesSlice.reducer;
