import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Button } from 'primereact/button'
import { showHidenSidebar } from '../../Actions/ContactListActions'

// componets
import Sidebar from './Sidebar/Sidebar'

const Admin = (props) => {
  const { showHidenSidebar } = props
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Admin page</h1>
          <h1 className="text-center">
            <Button onClick={(e) => showHidenSidebar(!props.visible)}>Sidebar</Button>
          </h1>
          <Sidebar visible={props.visible} showHidenSidebar={showHidenSidebar} />
        </Col>
      </Row>
    </Container>
  )
}
const mapStateToProps = ({ adminReducer }) => {
  const { visible } = adminReducer
  console.log(visible)
  return {
    visible,
  }
}

const mapDispatchToProps = {
  showHidenSidebar,
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
