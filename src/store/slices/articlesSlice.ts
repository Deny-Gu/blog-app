import { createSlice } from '@reduxjs/toolkit';
import { Article } from '../../types/Article';
import { fetchArticle, fetchArticles } from '../asyncActions/articles';

type State = {
  article: Article | null;
  articles: Article[];
  articlesCount: number;
  isLoading: boolean;
  error: string | undefined;
};

const initialState: State = {
  article: null,
  articles: [],
  articlesCount: 0,
  isLoading: false,
  error: '',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.article = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.article = null;
        state.articles = action.payload.articles;
        state.articlesCount = action.payload.articlesCount;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.article = null;
      })
      .addCase(fetchArticle.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.article = action.payload;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default articlesSlice.reducer;
