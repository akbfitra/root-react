import React from 'react';

import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Spinner} from 'react-bootstrap'

// import { Navbar } from '../../../components/navbar'
// import { Footer } from '../../../components/footer'

const loading = (props) => {
  return(
    <>
    <div className="loading-screen">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
    </>
  )
}

export default withRouter(loading)