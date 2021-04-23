import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

import styles from 'styles/general.module.css'

const Loading = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row className={`justify-content-md-center ${styles.spinnerContainer}`}>
                    <Col xs={{ span: true, offset: 5 }}>
                        <Spinner animation="border" role="status" size="xl">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Loading