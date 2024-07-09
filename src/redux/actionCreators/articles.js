import { articlesFetch, articlesFetchSuccess, articlesFetchError } from '../slices/articlesSlice';

export const fetchArticles = (pagination) => {
  return async (dispatch) => {
    try {
      dispatch(articlesFetch());
      const response = await fetch(
        `https://api.realworld.io/api/articles?limit=5&offset=${pagination}`
      );
      const data = await response.json();
      dispatch(articlesFetchSuccess(data));
    } catch (e) {
      dispatch(articlesFetchError(e.message));
    }
  };
};
