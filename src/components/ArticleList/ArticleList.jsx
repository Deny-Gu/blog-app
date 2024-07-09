import ArticleItem from '../ArticleItem/ArticleItem';
import { Pagination } from 'antd';
import styles from './ArticleList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../redux/actionCreators/articles';

function ArticleList() {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1)
  const { articles, articlesCount, isLoading } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles(pagination * 5));
  }, [pagination]);

  const articleItems = articles.map(item => <ArticleItem article={item} key={item.slug} />)

  if (isLoading) {
    return (
      <p>Загрузка...</p>
    )
  }

  return (
    <>
      <div className={styles.articleList}>
        {articleItems}
      </div>
      <div className={styles.articlePagination}>
        <Pagination 
          current={pagination} 
          total={articlesCount}
          showSizeChanger={false}
          onChange={(page) => setPagination(page)}
         />
      </div>
    </>
  );
}

export default ArticleList;
