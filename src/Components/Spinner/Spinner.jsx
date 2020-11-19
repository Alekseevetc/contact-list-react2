import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loader = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Spinner animation="border" role="status" size="md">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  )
}
export default Loader
