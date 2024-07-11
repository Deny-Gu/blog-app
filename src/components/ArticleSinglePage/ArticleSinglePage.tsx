import React from 'react';
import styles from './ArticleSinglePage.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArticle } from '../../store/asyncActions/articles';
import heart from '../../assets/icon/heart.svg';
import { format } from 'date-fns';
import Loader from '../Loader/Loader';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

const ArticleSinglePage: React.FC = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const { article } = useAppSelector((state) => state.articles);

  useEffect(() => {
    if (slug) {
      dispatch(fetchArticle(slug));
    }
  }, [dispatch, slug]);

  if (!article) {
    return <Loader />;
  }

  return (
    <div className={styles.articleSinglePageWrapper}>
      <div className={styles.article}>
        <div className={styles.articleLeftBlock}>
          <div className={styles.articleLeftBlockHeader}>
            <span className={styles.articleTitle}>{article.title}</span>
            <span className={styles.articleLikes}>
              <img className={styles.articleLikesImg} src={heart} alt="avatar" />
              {article.favoritesCount}
            </span>
          </div>
          <div className={styles.articleTags}>
            {article.tagList.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
          <div className={styles.articleDescription}>
            <p>{article.description}</p>
          </div>
        </div>
        <div className={styles.articleRightBlock}>
          <div className={styles.articleUserInformation}>
            <div className={styles.articleUsername}>
              <p>{article.author.username}</p>
              <span>{format(article.updatedAt, 'PP')}</span>
            </div>
            <div className={styles.articleUserAvatar}>
              <img className={styles.articleLikesImg} src={article.author.image} alt="like" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.articleBody}>
        <Markdown remarkPlugins={[remarkBreaks]}>{article.body.replace(/\\n/gi, '\n')}</Markdown>
      </div>
    </div>
  );
};

export default ArticleSinglePage;
