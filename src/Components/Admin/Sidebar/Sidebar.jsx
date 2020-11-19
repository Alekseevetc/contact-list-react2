import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const style = {
  Link: {
    display: 'block',
    width: '100%',
    fontSize: '20px',
  },
}

class SidebarAdmin extends React.Component {
  render() {
    return (
      <Sidebar
        visible={this.props.visible}
        onHide={() => this.props.showHidenSidebar(!this.props.visible)}
      >
        <Link style={style.Link} to="/add-new-contact" className="text-center">
          Add new contact
        </Link>
      </Sidebar>
    )
  }
}
export default SidebarAdmin
