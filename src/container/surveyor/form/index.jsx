import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import {bindActionCreators} from 'redux';

import './css/style.css';
import { Tabs, Tab, Container, Row, Col, Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { QuestionBuilder } from '../../../components/form/questionBuilder'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import * as surveyActions from '../../../store/actions/surveyFormAction'
import * as questionActions from '../../../store/actions/questionsAction'
import { getDenormalizedSurvey } from '../../../store/selectors/denormalizesurvey'


const FormSurveyor = (props) => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(surveyActions.INIT_QUESTION)
  }, [dispatch])

  let listQuestions = props.survey
  
  const addQuestion = () => {
    dispatch(questionActions.addNewQuestion(listQuestions._id))
  }

  return(
    <>
      <Navbar/>

      <div id="form-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>FORM</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Surveyor</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Form</h4>
                </li>
              </ul>
          </Col>
        </Row>
        

        <Row>
          <Col>
            <Tabs defaultActiveKey="Project" id="noanim-tab-example">
              <Tab eventKey="Project" title="project" className="m-t-15">
                <Row>
                  <Col>
                  <div className="part-one">
                    <Form.Group>
                      <Form.Label>Judul Survey</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jumlah Soal</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Lama Menjawab (menit)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jumlah Responden</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Reward Perorang (Rp)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Tanggal Mulai</Form.Label>
                      <Row>
                        <Col><DatePicker selected={startDate}/></Col>
                      </Row>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Tanggal Akhir</Form.Label>
                      <Row>
                        <Col><DatePicker selected={startDate}/></Col>
                      </Row>
                    </Form.Group>
                  </div>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="Question" title="question" className="m-t-15">

                <Button variant="primary" size="sm" onClick={ addQuestion }>
                            Tambah Opsi
                </Button>

                {
                  listQuestions && listQuestions.questions &&
                  <QuestionBuilder
                    surveyId={ listQuestions._id}
                    questions = { listQuestions.questions }
                  />
                }
              </Tab>
            </Tabs>
          </Col>
          


          
        </Row>
      </Container>
      </div>

      <Footer/>
    </>
  )
}

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state),
  // initialValues: getInitialFormBuilderValues(state),
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch),
  questionActions: bindActionCreators(questionActions, dispatch)
});

const ConnectedFormSurveyor = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSurveyor);

export default ConnectedFormSurveyor