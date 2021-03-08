import React from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

export function LandingPage() {
    return (
        <main>
            <IntroText />
            <LandingData />
            <LandingDescription />
            <LandingGalary />
        </main>
    );
}

function IntroText() {
    return (
        <section className="intro-text">
            <header>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <h1>Welcome to The World Happiness Analysis</h1>
                            </Row>
                            <Row>
                                <h2>
                                    The World Happiness Report is the first report to rank countries by how people feel about their life.
                                </h2>
                            </Row>
                            <div className="description"> 
                                <Row>
                                    <p>World Happiness Report is a platform for people to acknowledge various data of different
                                        countries.
                                        We
                                        provide information and data visualization for people to have a deeper understanding of each
                                        country.
                                    </p>
                                </Row>
                            
                                <Row>
                                    <p>People will gain a better insight
                                        on the correlation between happiness indices
                                        and different factors of the country, so
                                        that
                                        they can publish their studies or take actions accordingly.
                                    </p>
                                </Row>
                            </div>
                            <Row>
                                <NavLink exact to="/cards">
                                    <button aria-label="Button for moving to data analysis page">
                                        <span>Explore more</span>
                                    </button>
                                </NavLink>
                            </Row>
                        </Col>

                        <Col className="intro-img">
                            <img className="intro-img" src="img/happy-child.jpg" alt="a happy child" />
                        </Col>
                    </Row>
                </Container>
            </header>
        </section>
    );
}

function LandingData() {
    return (
        <section>
            <div className="data">
                <Container>
                    <Row>
                        <Col>
                            <p>155</p>
                            <p>Countries with Happiness Index</p>
                        </Col>
                        <Col>
                            <p>7 Billion +</p>
                            <p>Individuals from the World</p>
                        </Col>
                        <Col>
                            <p>7 +</p>
                            <p>Factors of Happiness</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

function LandingDescription() {
    return (
        <section>
            <Container className="center">
                <Row>
                    <Col>
                        <h2>Happiness can change, and does change, according to the quality of the society in which
                            people live.
                        </h2>
                    </Col>
                </Row>
            </Container>
            <div className="parts">
                <Container>
                    <Row>
                        <Col>
                            <h3>Physical</h3>
                            <p>Laugh is the most beautiful and natural excercise. According to
                                modern scientific report, laughter is an activity beneficial to the human
                                body. A
                                laugh can make the diaphragm, chest, abdomen, heart, lungs, and even the liver
                                in
                                the human body receive exercise, and laugh can relax the
                                muscles of the whole body. </p>
    
                        </Col>
                        <Col>
                            <h3>Mental</h3>
                            <p>
                                Happiness will produce a substance called dopamine. The latest research by
                                scientists shows that this substance is also very important for human
                                intelligence.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

function LandingGalary() {
    return (
        <section className="galary center">
            <Container>
                <h2>Happiness Galary</h2>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <img src="img/happy-couple.jpg" alt="a happy family"/>
                    </Col>
                    <Col>
                        <img src="img/happy-kid.jpg" alt="a happy kid with his dog"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="img/happy-man.jpg" alt="a happy man in red shirt"/>
                    </Col>
                    <Col>
                        <img src="img/happy-people.jpg" alt="two happy friends"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


