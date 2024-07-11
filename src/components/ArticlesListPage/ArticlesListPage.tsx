import React from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';
import { Pagination } from 'antd';
import styles from './ArticlesListPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useState, useEffect } from 'react';
import { fetchArticles } from '../../store/asyncActions/articles';
import Loader from '../Loader/Loader';
import ErrorBlock from '../ErrorBlock/ErrorBlock';

const ArticleList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [pagination, setPagination] = useState(1);
  const { articles, articlesCount, isLoading, error } = useAppSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles(pagination * 5 - 5));
  }, [dispatch, pagination]);

  const articleItems = articles.map((item) => <ArticleItem key={item.slug} {...item} />);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorBlock />;
  }

  return (
    <>
      <div className={styles.articleList}>{articleItems}</div>
      <div className={styles.articlePagination}>
        <Pagination
          current={pagination}
          defaultPageSize={5}
          total={articlesCount}
          showSizeChanger={false}
          onChange={(page) => setPagination(page)}
        />
      </div>
    </>
  );
};

export default ArticleList;
