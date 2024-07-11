import { Article } from './Article';

export type ArticlesSucces = {
  articles: Article[];
  articlesCount: number;
};

export type ArticlesError = {
  errors: {
    body: string[];
  };
};
