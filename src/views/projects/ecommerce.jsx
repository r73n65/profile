import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {Carousel} from 'react-responsive-carousel';

import {profile} from 'config/profile';
import {images} from 'config/image';
import styles from './styles.module.scss';

const Ecommerce = () => {
    return (
        <Container fluid className={styles.projectWrapper}>
            <Row>
                <Col md={10} offset={{md: 1}}>
                    <h3 className={styles.title}>{profile[0].project[0].title}</h3>
                    <Carousel infiniteLoop showArrows={true} autoPlay={true} interval={3000}>
                        <div>
                            <img
                                className={styles.carouselImage}
                                src={images[0].ecommerce}
                                alt='User View'
                            />
                        </div>
                        <div>
                            <img
                                className={styles.carouselImage}
                                src={images[0].login}
                                alt='Login'
                            />
                        </div>
                        <div>
                            <img
                                className={styles.carouselImage}
                                src={images[0].cart}
                                alt='Cart'
                            />
                        </div>
                        <div>
                            <img
                                className={styles.carouselImage}
                                src={images[0].dashboard}
                                alt='Merchant View'
                            />
                        </div>
                        <div>
                            <img
                                className={styles.carouselImage}
                                src={images[0].uam}
                                alt='Admin View'
                            />
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col md={10} offset={{md: 1}}>
                    <div className={styles.wordWrapper}>
                        <li className={styles.list}>
                            <span className={styles.label}>Description:</span>
                            <span className={styles.value}>{profile[0].project[0].description}</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.label}>Functionalities:</span>
                            <span className={styles.value}>
                                {profile[0].project[0].functionalities.map((row) => (
                                    <li>{row}</li>
                                ))}
                            </span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.label}>Tech Stack:</span>
                            <span className={styles.value}>{profile[0].project[0].techstack}</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.label}>Notes:</span>
                            <span className={styles.value}>{profile[0].project[0].notes}</span>
                        </li>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ecommerce;