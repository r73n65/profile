import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Card = ({children, className}) => (
  <div className={classNames(styles.card, className)}>
    {children}
  </div>
);

export default Card;
