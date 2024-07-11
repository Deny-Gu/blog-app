import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArticlesSucces } from '../../types/Articles';
import { Article } from '../../types/Article';

export const fetchArticles = createAsyncThunk<ArticlesSucces, number, { rejectValue: string }>(
  'articles/fetchArticles',
  async function (pagination: number, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://api.realworld.io/api/articles?limit=5&offset=${pagination}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.name);
      }
    }
  }
);

export const fetchArticle = createAsyncThunk<Article, string, { rejectValue: string }>(
  'articles/fetchArticle',
  async function (slug: string, { rejectWithValue }) {
    try {
      const response = await fetch(`https://api.realworld.io/api/articles/${slug}`);
      const data = await response.json();
      return data.article;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.name);
      }
    }
  }
);
