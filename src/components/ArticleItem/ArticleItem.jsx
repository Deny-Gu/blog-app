import styles from './ArticleItem.module.scss';
import heart from '../../assets/icon/heart.svg';

function ArticleItem({ article }) {
  const { title, description, tagList, favoritesCount, author } = article;

  return (
    <div className={styles.article}>
      <div className={styles.articleLeftBlock}>
        <div className={styles.articleLeftBlockHeader}>
          <span className={styles.articleTitle}>{title}</span>
          <span className={styles.articleLikes}>
            <img className={styles.articleLikesImg} src={heart} alt="avatar" />
            {favoritesCount}
          </span>
        </div>
        <div className={styles.articleTags}>
          {tagList.map((tag, i) => <span key={i}>{tag}</span>)}
        </div>
        <div className={styles.articleDescription}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.articleRightBlock}>
        <div className={styles.articleUserInformation}>
          <div className={styles.articleUsername}>
            <p>{author.username}</p>
            <span>March 5, 2020 </span>
          </div>
          <div className={styles.articleUserAvatar}>
            <img className={styles.articleLikesImg} src={author.image} alt="like" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
