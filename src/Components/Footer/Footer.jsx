import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { connect } from 'react-redux'
import { setInputValue } from '../../Actions/ContactListActions'
import { Container, Row, Col, Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'

class Header extends React.Component {
  searchContact = (event) => {
    this.props.setInputValue(event.target.value)
  }
  render() {
    return (
      <Container className="pt-4a">
        <Row>
          <Col >
            <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
              <Navbar.Brand as={Link} to="/">
                Footer
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/admin">
                  Admin page
                </Nav.Link>
              </Nav>
              {/* <Form inline>
                <FormControl
                  className="mr-sm-2"
                  type="text"
                  placeholder="Search"
                  value={this.props.currentSearchValue}
                  onChange={this.searchContact}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault()
                    }
                  }}
                />
              </Form> */}
            </Navbar>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ SearchReducer }) => {
  const { currentSearchValue } = SearchReducer
  return {
    currentSearchValue,
  }
}

const mapDispatchToProps = {
  setInputValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
