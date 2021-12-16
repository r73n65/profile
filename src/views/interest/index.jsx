import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {MdDataExploration, MdAnalytics, MdLaptop} from 'react-icons/md';
import Card from 'components/card';

import {profile} from 'config/profile';
import styles from './styles.module.scss';

const Interest = () => {
    return (
        <Container fluid className={styles.wrapper}>
            <Row>
                <Col md={10} align='center' offset={{md: 1}}>
                    <h3 id='areasofinterest' className={styles.title}>Areas of Interest</h3>
                    <p className={styles.caption}>Take a look at the things that I am interested in working on.</p>
                </Col>
            </Row>
            <Row>
                <Col md={3.3} offset={{md: 1}}>
                    <Card className={styles.card}>
                        <span className={styles.iconWrapper}>
                            <MdDataExploration size={35}/>
                            <p>{profile[0].areasofinterest[0].title}</p>
                        </span>
                        <p>{profile[0].areasofinterest[0].description}</p>
                    </Card>
                </Col>
                <Col md={3.3}>
                    <Card className={styles.card}>
                        <span className={styles.iconWrapper}>
                            <MdAnalytics size={35}/>
                            <p>{profile[0].areasofinterest[1].title}</p>
                        </span>
                        <span>
                            <p>{profile[0].areasofinterest[1].description}</p>
                        </span>
                    </Card>
                </Col>
                <Col md={3.3}> 
                    <Card className={styles.card}>
                        <span className={styles.iconWrapper}>
                            <MdLaptop size={35}/>
                            <p>{profile[0].areasofinterest[2].title}</p>
                        </span>
                        <span>
                            <p>{profile[0].areasofinterest[2].description}</p>
                        </span>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Interest;
