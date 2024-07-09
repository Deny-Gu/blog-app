import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../slices/articlesSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;
