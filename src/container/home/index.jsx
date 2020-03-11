import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, Connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Modal, Tabs, Tab} from 'react-bootstrap'

const LandingPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
      <ul className="list-inline pull-right m-b-0">
                      <Link to ='/login'>
                      <li className="button-custom">
                        <h4 className="m-t-0 m-b-0 text-center title-two">TESTz</h4>
                      </li>
                      </Link>
                    </ul>
      <Button variant="primary" onClick={handleShow}>
        Launch demsss
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    assss
  </Tab>
  <Tab eventKey="profile" title="Profile">
    assss2
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    assss3444
  </Tab>
</Tabs>
    </>
  )
}

export default withRouter(LandingPage)