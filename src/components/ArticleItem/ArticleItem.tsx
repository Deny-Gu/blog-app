import React from 'react';
import styles from './ArticleItem.module.scss';
import heart from '../../assets/icon/heart.svg';
import { Article } from '../../types/Article';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const ArticleItem: React.FC<Article> = ({
  slug,
  title,
  description,
  tagList,
  favoritesCount,
  author,
  updatedAt,
}) => {
  const shortenText = (str: string, maxLen: number, separator = ' ') => {
    if (str.length <= maxLen) {
      return str;
    }
    return str.substr(0, str.lastIndexOf(separator, maxLen)) + ' ...';
  };

  return (
    <div className={styles.article}>
      <div className={styles.articleLeftBlock}>
        <div className={styles.articleLeftBlockHeader}>
          <span className={styles.articleTitle}>
            <Link to={`/articles/${slug}`}>{shortenText(title, 60)}</Link>
          </span>
          <span className={styles.articleLikes}>
            <img className={styles.articleLikesImg} src={heart} alt="avatar" />
            {favoritesCount}
          </span>
        </div>
        <div className={styles.articleTags}>
          {tagList.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className={styles.articleDescription}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.articleRightBlock}>
        <div className={styles.articleUserInformation}>
          <div className={styles.articleUsername}>
            <p>{author.username}</p>
            <span>{format(updatedAt, 'PP')}</span>
          </div>
          <div className={styles.articleUserAvatar}>
            <img className={styles.articleLikesImg} src={author.image} alt="like" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
