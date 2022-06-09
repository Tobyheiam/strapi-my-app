/*
 *
 * HomePage
 *
 */

import React from 'react';
import pluginId from '../../pluginId';
import styles from './home.module.scss'

const HomePage: React.VoidFunctionComponent = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p className={styles.p}>Happy coding</p>
    </div>
  );
};

export default HomePage;
