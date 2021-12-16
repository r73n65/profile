import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {Link} from 'react-router-dom';
import Card from 'components/card';

import {profile} from 'config/profile';
import {images} from 'config/image';
import styles from './styles.module.scss';

const Projects = () => {
    return (
        <Container fluid className={styles.wrapper}>
            <Row>
                <Col md={10} align='center' offset={{md: 1}}>
                    <h3 id='projects' className={styles.title}>Projects</h3>
                    <p className={styles.caption}>Take a look at my recent work. Click on respective project to view more.</p>
                </Col>
            </Row>
            <Row>
                <Col md={5} offset={{md: 1}}>
                    <Card className={styles.card}>
                        <Link to='/profile/ecommerce' className={styles.link}>
                            <img
                                className={styles.projectImage}
                                src={images[0].ecommerce}
                                alt='User View'
                            />
                            <p className={styles.projectTitle}>{profile[0].project[0].title}</p>
                            <p className={styles.projectCaption}>{profile[0].project[0].description}</p>
                        </Link>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card className={styles.stayTune}>
                        <p>Stay tuned...</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;
