import React from 'react'
import { Row, Col, Container } from 'reactstrap'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © POS.</Col>
            <Col sm={6}>
              <div className="text-sm-right d-none d-sm-block">
                Created <i className="mdi mdi-heart text-danger"></i> by The
                Wizard
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
