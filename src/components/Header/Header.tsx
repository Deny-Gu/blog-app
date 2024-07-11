import React from 'react';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.title}>
          <Link to="/">Realworld Blog</Link>
        </div>
        <div className={styles.headerAuth}>
          <button className={styles.btnSignIn} onClick={() => navigate('/sign-in')}>
            Sign In
          </button>
          <button className={styles.btnSignUp} onClick={() => navigate('/sign-up')}>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
