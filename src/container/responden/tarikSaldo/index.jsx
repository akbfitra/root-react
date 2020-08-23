import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import moment from 'moment'
import 'moment/locale/id'

import './css/style.css';
import {  Container, Row, Col, Form, Button, Table, Tab, Tabs, Alert, Modal, Badge} from 'react-bootstrap'
import { TARIK_SALDO_RESPONDEN, GET_DATA_TARIK_SALDO_RESPONDEN } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import NumberFormat from 'react-number-format'

const TarikSaldo = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  
  const initialState = {
    norekening: '',
    bank: "",
    jumlahTarikSaldo: ''
  };

  const [
    { norekening, bank, jumlahTarikSaldo },
    setState
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };
  // const [ norekening, setNorekening ] = useState(0)
  // const [ bank, setBank ] = useState('')
  // const [ jumlahTarikSaldo, setJumlahTarikSaldo ] = useState(0)


  const [ getDataTarikSaldo, setGetDataTarikSaldo ] = useState([])

  const [validated, setValidated] = useState(false);
  const [ errs, setErrs] = useState('') 
  const [ show, setShow ] = useState(false);
  const [ berhasil, setBerhasil ] = useState('')

  const [ showModal, setShowModal ] = useState(false);
  const [changeData, setChangeData ] = useState(false)

  const onchange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleProcessTarikSaldo = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else  if(form.checkValidity() === true){
      processTarikSaldo()
      
    }
    // setValidated(true);
  }



  const processTarikSaldo = () => {
    dispatch(TARIK_SALDO_RESPONDEN(norekening, bank, jumlahTarikSaldo))
      .then((data) => {
        setBerhasil(data.message)
        setShowModal(true)
        setChangeData(true)
        clearState()
        
      })
      .catch( err => {
        setErrs(err)
        setShow(true)
      })
  }

  const processGetDataSaldo = () => {
    dispatch(GET_DATA_TARIK_SALDO_RESPONDEN())
      .then(data => {
        setGetDataTarikSaldo(data)
        setChangeData(false)
      })
      .catch(err => {
        setErrs(err)
      })
  }


  useEffect(() => {
    if(!getDataTarikSaldo.length || changeData){
      processGetDataSaldo()
    }
  })

  console.log(getDataTarikSaldo)



  return(
    <>
    <Navbar/>
      <div id="tarik-saldo">
        <Container>
          <Row>
            <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
              <h3 className="title-one text-center color-blue"><strong>Tarik Saldo</strong></h3>
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <Link to='/responden' style={{textDecoration:"none"}}>
                    <h4 className="title-three color-blue">Beranda Responden</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                  <h4 className="title-three">Tarik Saldo</h4>
                  </li>
                </ul>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
              <Tabs defaultActiveKey="Tarik Saldo" id="noanim-tab-example">
                <Tab eventKey="Tarik Saldo" title="Tarik Saldo">
                <Form 
                  noValidate validated={validated} onSubmit={handleProcessTarikSaldo}
                >
                  <Row>
                    <Col md={12} lg={12}>
                        
                      <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Error!</Alert.Heading>
                        <p>
                          { errs }
                        </p>
                      </Alert>
                      
                      <div className="part-one">
                        <Form.Group>
                          <Form.Label>No. Rekening</Form.Label>
                          <Form.Control
                            
                            type="number" 
                            placeholder=""
                            value={norekening} name="norekening" onChange={onchange}/>
                          {/* <Form.Control.Feedback type="invalid">
                            No rekening harus di isi
                          </Form.Control.Feedback> */}
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Bank</Form.Label>
                          <Form.Control as="select"  value={bank} name="bank" onChange={onchange}>
                            <option value="">-- Pilih --</option> 
                            <option value="BCA">BCA</option> 
                            <option value="Mandiri">Mandiri</option> 
                            <option value="CIMB Niaga">CIMB Niaga</option> 
                          </Form.Control>
                          {/* <Form.Control.Feedback type="invalid">
                            Bank untuk No rekening Harus Di pilih
                          </Form.Control.Feedback> */}
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Saldo Yang diinginkan</Form.Label>
                          <Form.Control
                            
                            type="number" 
                            placeholder="Minimal Rp 50.000,-"
                            value={jumlahTarikSaldo} name="jumlahTarikSaldo" onChange={onchange}
                            />
                          {/* <Form.Control.Feedback type="invalid"> */}
                            {/* Saldo yang diinginkan harus di isi
                          </Form.Control.Feedback> */}
                        </Form.Group>

                        <Row>
                          <Col md={12} lg={12}>
                            <Button variant="primary" type="submit">Simpan </Button>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Form>

                </Tab>

                <Tab eventKey="History" title="History Tarik Saldo">
                  <Row>
                    <Col md={12} lg={12}>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>Tanggal Penarikan</th>
                            <th>No. Rekening</th>
                            <th>Bank</th>
                            <th>Jumlah Penarikan</th>
                            <th>Keterangan</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            !getDataTarikSaldo ?
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            : !getDataTarikSaldo.length ? 
                            <tr>
                              <td>-</td>
                              <td>no Data</td>
                              <td>no Data</td>
                              <td>no Data</td>
                              <td>no Data</td>
                              <td>no Data</td>
                            </tr>
                            :
                            getDataTarikSaldo.map((data, i) => {
                              return(
                              <tr key={i}>
                                <td> {i+1} </td>
                                <td> { moment(data.createdAt).locale('id').format('Do MMMM YYYY, h:mm:ss ')} </td>
                                <td> { data.norekening } </td>
                                <td> { data.bank } </td>
                                <td> <NumberFormat value={data.jumlah} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/> </td>
                                <td> <Badge variant="secondary"> {data.status} </Badge> </td>
                              </tr>
                              )
                            })
                          }
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    <Footer/>

    <Modal
        size="sm"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> {berhasil} </Modal.Body>
      </Modal>
    </>
  )
}

export default withRouter(TarikSaldo)