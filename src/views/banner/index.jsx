import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import {profile} from 'config/profile';
import {images} from 'config/image';
import styles from './styles.module.scss';

const Banner = () => {
    return (
        <Container fluid className={styles.wrapper}>
            <Row align='center'>
                <Col md={6} offset={{md: 1}}>
                    <h1 className={styles.titleWrapper}><label className={styles.title}>Hello World!</label></h1>
                    <h2 className={styles.subTitle}>{profile[0].profile.header}</h2>
                    <p className={styles.caption}>{profile[0].profile.subheader}</p>
                    <p>{profile[0].profile.caption}</p>
                </Col>
                <Col md={5}>
                    <img
                        src={images[0].profile} 
                        alt='Rina'
                        height='400px'
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;