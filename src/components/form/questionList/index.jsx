import React from 'react'
import { Button,  Row, Col, Form } from 'react-bootstrap'

export const QuestionList = (props) => {
  return(
    <>
      <Row>
        <Col md={12} lg={12}>
        <div className="part-two">
          <Row className="question">
            <Col md={8} lg={8}>
              <div className="table-100">
                <div className="table-row">
                  <div className="table-cell-one">
                    <Form.Group>
                      <Form.Label>Soal</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="table-100">
                <div className="table-row">
                  <div className="table-cell-one">
                      <Form.Group>
                      <Form.Label>Jawaban</Form.Label>
                      <Form.Control as="select" >
                        <option>-- Pilih --</option>
                        <option>Pilihan Ganda</option>
                        <option>Text</option>
                        <option>Kotak Centang</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Col>
          </Row>


          <Row className="answer">
            <Col>
            {/* pilihan ganda */}
              <Row className="m-t-15">
                <Col md={8} lg={8}>
                  <div className="table-100">
                    <div className="table-row">
                      <div className="table-cell-one">
                        <h4 className="title-three">Opsi 1</h4>
                      </div>

                      <div className="table-cell-two">
                        <Form.Control type="text" placeholder="" placeholder="Opsi"/>
                      </div>

                      <div className="table-cell-three">
                        <center>
                        <Button variant="primary" size="sm">
                          Tambah Opsi
                        </Button>
                        </center>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            {/* end pilihan ganda */}
            {/* text */}
              <Row className="m-t-15">
                <Col md={8} lg={8}>
                <Form.Control as="textarea" rows="3" />
                </Col>
              </Row>
            {/* end text */}
            </Col>
            
          </Row>
        </div>
        </Col>
      </Row>
    </>
  )
}