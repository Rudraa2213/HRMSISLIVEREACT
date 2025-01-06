import React, { Fragment } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import './Applyfor.css'
import { Link } from 'react-router-dom';
import card from '../../assets/images/Swabhimaan-card2.png';
import kendra from '../../assets/images/Store.jpg'
import career from '../../assets/images/career.jpg'

function Applyfor() {
    return (
        <Fragment>
            <div className="background-container">
                <Container className="my-5">
                    <Row className="justify-content-center my-3">
                        <Col md={10} className="text-center mb-5">
                            <h1>Welcome to Swabhimaan Portal</h1>
                            <p>Empowering communities through various initiatives and support programs.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className='card-hover'>
                                <Card.Img variant="top" src={card} style={{ aspectRatio: "3/2" }} />
                                <Card.Body>
                                    <Card.Title>Apply for Swabhimaan Card</Card.Title>
                                    <Card.Text>
                                        Swabhimaan Card provides various benefits including financial assistance and discounts on essential services.
                                    </Card.Text>
                                    <Button variant="primary" className="btn-primary-custom">
                                        <Link className='text-light text-decoration-none' to="/crm/user/forcard">Apply Now <ArrowRightCircle className="ml-2" /></Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="card-hover">
                                <Card.Img variant="top" src={kendra} style={{ aspectRatio: "3/2" }} />
                                <Card.Body>

                                    <Card.Title>Apply For Swabhimaan Kendra</Card.Title>
                                    <Card.Text>
                                        Swabhimaan Kendra serves as a community center offering a wide range of services to support and uplift the community.
                                    </Card.Text>
                                    <Button variant="primary" className="btn-primary-custom">
                                        <Link className='text-light text-decoration-none' to={"/crm/user/forkendra"}>Apply Now <ArrowRightCircle className="ml-2" /></Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="card-hover">
                                <Card.Img variant="top" src={career} style={{ aspectRatio: "3/2" }} />
                                <Card.Body>
                                    <Card.Title>Apply For Career Objectives</Card.Title>
                                    <Card.Text>
                                        Career Objectives program aims to guide and support individuals in achieving their career goals through various initiatives.
                                    </Card.Text>
                                    <Button variant="primary" className="btn-primary-custom">
                                        <Link className='text-light text-decoration-none' to={"/career"}>Apply Now <ArrowRightCircle className="ml-2" /></Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default Applyfor
