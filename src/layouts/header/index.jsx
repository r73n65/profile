import React from 'react';
import classNames from 'classnames';
import {Container, Row, Col} from 'react-grid-system';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container fluid>
        <Row align='center'>
          <Col md={6} align='left'>
            <a href='/profile' className={classNames(styles.link, styles.name)}>Rina Chua</a>
          </Col>
          <Col md={6} align='right'>
            <a href='/profile/#areasofinterest' className={classNames(styles.link, styles.tab)}>Areas of Interest</a>
            <a href='/profile/#projects' className={classNames(styles.link, styles.tab)}>Projects</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
