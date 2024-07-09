import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <div className={styles.title}>Realworld Blog</div>
      <div className={styles.headerAuth}>
        <button className={styles.btnSignIn}>Sign In</button>
        <button className={styles.btnSignUp}>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
