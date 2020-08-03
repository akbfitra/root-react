import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { required } from 'redux-form-validators'
import InputRange from 'react-input-range';


import './css/style.css';
import 'react-input-range/lib/css/index.css';
import { Tabs, Tab, Container, Row, Col, Form, Button} from 'react-bootstrap'

import "react-datepicker/dist/react-datepicker.css";

import { QuestionBuilder } from '../../../components/form/questionBuilder'
import { KriteriaQuestionList } from '../../../components/form/kriteriaQuestionList'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'
import { FormInput } from '../../../components/inputForm'

import * as surveyActions from '../../../store/actions/surveyFormAction'
import * as questionActions from '../../../store/actions/questionsAction'
import { getDenormalizedSurvey } from '../../../store/selectors/denormalizesurvey'
import { SAVE_STUDY } from '../../../store/actions/surveyFormAction'
import { getDataQuestions } from '../../../store/actions/questionsAction'
import { dataCategory } from '../../../store/actions/aboutUsAction'
import { renderDatePicker } from '../../../components/inputForm'


const FormSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [category, setCategory ] = useState([])
  const [dataQuestions, setDataQuestions ] = useState([])
  const [ pilihCategories, setPilihCategories ] = useState([])

  const [value, setValue] = useState({min: 0, max: 0})

  const handlePilihKriteria = (kriteria) => {
    let cek = pilihCategories.includes(kriteria)
    if(!cek){
      setPilihCategories(arr => [...pilihCategories, kriteria])
    }else if(pilihCategories.indexOf(kriteria > -1)){
      setPilihCategories(pilihCategories.filter(item => item !== kriteria))
    }
  }

  useEffect(() => {
    dispatch(surveyActions.INIT_QUESTION)
  }, [dispatch])

  let listQuestions = props.survey

  const addQuestion = () => {
    dispatch(questionActions.addNewQuestion(listQuestions._id))
  }

  const handleSaveSurvey = () => {
    
    dispatch(SAVE_STUDY(props.formValues, pilihCategories, history))
  };

  const getCategory = () =>{
    dispatch(dataCategory())
      .then( data => {
        setCategory(data)
        // break;
      })
  }

  useEffect(() => {
    if(!category.length){
      getCategory()
    }
  })

  const processSelectCategory = (pilihCategory) => {
    let idCategory = category.find( el => el.name === pilihCategory )
    dispatch(getDataQuestions(idCategory._id))
      .then( data => {
        setDataQuestions(data)
      })
  }
   console.log(value)

  return(
    <>
      <Navbar/>

      <div id="form-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Tambah Studi</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Surveyor</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <Link to='/surveyor/liststudy' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Data Studi</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Tambah Studi</h4>
                </li>
              </ul>
          </Col>
        </Row>
        
        <Row className="m-t-30">
          <Col>
            <Tabs defaultActiveKey="Project" id="noanim-tab-example">
              <Tab eventKey="Project" title="Studi" className="m-t-15">
                <Row>
                  <Col>
                  <div className="part-one">
                    <Form.Group>
                      <Form.Label>Judul Studi</Form.Label>
                      <Field
                          // className="input survey-builder__title"
                          type="text"
                          component={FormInput}
                          name='judul' 
                          placeholder="judul"
                          validate={[required()]}
                        />
                      {/* <Form.Control type="text" placeholder="" onChange={ (e) => {setJudul( e.target.value )}} /> */}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jumlah Soal</Form.Label>
                      <Field
                          // className="input survey-builder__title"
                          type="number"
                          component={FormInput}
                          name='jumlahSoal'
                          placeholder="jumlah soal"
                          validate={[required()]}
                        />
                      {/* <Form.Control type="text" placeholder="" onChange={ (e) => {setJumlahSoal( e.target.value )}}/> */}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Waktu Menjawab (menit)</Form.Label>
                      <Field
                          // className="input survey-builder__title"
                          type="number"
                          component={FormInput}
                          name='waktuJawab'
                          placeholder="waktu menjawab"
                          validate={[required()]}
                        />
                      {/* <Form.Control type="number" placeholder="" onChange={ (e) => {setWaktuJawab( e.target.value )}}/> */}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jumlah Responden Yang Dibutuhkan</Form.Label>
                      <Field
                          // className="input survey-builder__title"
                          type="text"
                          component={FormInput}
                          name='jumlahResponden'
                          placeholder="jumlah responden"
                          validate={[required()]}
                        />
                      {/* <Form.Control type="number" placeholder="" onChange={ (e) => {setJumlahResponden( e.target.value )}}/> */}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Reward Per Responden (Rp)</Form.Label>
                      <Field
                          // className="input survey-builder__title"
                          type="text"
                          component={FormInput}
                          name='rewardResponden'
                          placeholder="reward Responden"
                          validate={[required()]}
                        />
                      {/* <Form.Control type="number" placeholder="" onChange={ (e) => {setRewardResponden( e.target.value )}}/> */}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Tanggal Mulai</Form.Label>
                      <Row>
                        <Col>
                          <Field
                            // placeholder={tanggalMulai}
                            name="tanggalMulai"
                            component={renderDatePicker}
                          />
                          {/* <DatePicker selected={tanggalMulai}  onChange={date => setTanggalMulai(date)}/> */}
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Tanggal Akhir</Form.Label>
                      <Row>
                        <Col>
                        <Field
                            // placeholder={tanggalMulai}
                            name="tanggalAkhir"
                            component={renderDatePicker}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </div>
                  </Col>
                </Row>
                
              </Tab>

              <Tab eventKey="Kriteria Responden" title="Kriteria Responden" className="m-t-15">
                <Row>
                  <Col md={6} lg={6} className="m-t-30">
                    <div className="part-one">
                    <Form.Group>
                      <Form.Label style={{marginBottom:'30px'}}>Usia</Form.Label>
                      <InputRange
                        maxValue={20}
                        minValue={0}
                        value={value}
                        onChange={value => setValue( value )}
                      />
                    </Form.Group>
                    </div>
                  </Col>

                  <Col md={6} lg={6} className="m-t-30">
                    <div className="part-one">
                    <Form.Group>
                      <Form.Label>Jenis Kelamin</Form.Label>
                      <Form.Control as="select">
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </Form.Control>
                    </Form.Group>
                    </div>
                  </Col>

                  <Col md={6} lg={6} className="m-t-30">
                    <div className="part-one">
                    <Form.Group>
                      <Form.Label>Provinsi</Form.Label>
                      <Form.Control as="select">
                      </Form.Control>
                    </Form.Group>
                    </div>
                  </Col>

                  <Col md={6} lg={6} className="m-t-30">
                    <div className="part-one">
                    <Form.Group>
                      <Form.Label>Kabupaten</Form.Label>
                      <Form.Control as="select">
                      </Form.Control>
                    </Form.Group>
                    </div>
                  </Col>
                </Row>
                <Row className="m-t-30">
                  <Col md={12} lg={12}>
                    <div className="part-one">
                      <Row>

                        {/* pilih kriteria */}
                        <Form.Group>
                          <Form.Label>Kriteria Responden</Form.Label>
                          <Row>
                            {
                              category.map((data, i) => {
                                return(
                                  <Col md={3} lg={3} key={i}>
                                    <Form.Check
                                    type="checkbox"
                                    label={`${data.name}`}
                                    value={`${data.name}`}
                                    onChange={ (e) => {handlePilihKriteria(e.target.value)}}
                                    />
                                  </Col>
                                )
                              })
                            }
                            
                          </Row>
                        </Form.Group>
                        
                        {
                          pilihCategories.map((data, i) => {
                            let idCategory = category.find( el => el.name === data )

                            return (
                              <KriteriaQuestionList
                                kriteria = { data }
                                idCategory = { idCategory._id }
                              />

                            )
                          })
                        }
                        {/* <Col md={12} lg={12}>
                          <Form.Group>
                            <Form.Label>Question Responden</Form.Label>
                            <Form.Control as="select" onChange={ (e) => {processSelectCategory(e.target.value); }}>
                              <option>Pilih...</option>
                              {
                                category.map((data, i) => {
                                  
                                  return(
                                    <option key={i}>{data.name}</option>
                                  )
                                })
                              }
                            </Form.Control>
                          </Form.Group>
                        </Col>

                          <Col md={12} lg={12}>
                          <hr className="m-b-0"></hr>
                          </Col> */}

                          {/* <Col md={12} lg={12}>
                            {
                              dataQuestions.map((data, i) => {
                                return(
                                  <Row className="m-t-30" key={i}>
                                    <Col md={12} lg={12}>
                                      <div className="box-pertanyaan">
                                        <div className="left"><h5>{i+1}. </h5></div>
                                        <div className="right"><h5>{data.name}</h5></div>
                                      </div>
                                    </Col>
                                    <Col md={12} lg={12}>
                                      <div className="box-answer">
                                      <Form.Group style={{width:'100%'}}>
                                        <Form.Control as="select" >
                                          <option>Pilih..</option>
                                          { data.listAnswers.map((answer, i) => {
                                              return(
                                                <option key={i}>{ answer }</option>
                                              )
                                            })
                                          }
                                        </Form.Control>
                                      </Form.Group>
                                      </div>
                                    </Col>
                                  </Row>
                                )
                              })
                            }
                          </Col> */}
                          
                          {/* <Col md={12} lg={12}>
                            <hr/>
                            <ul className="list-inline text-right m-b-0">
                              <li className="list-inline-item">
                                <Button variant="primary">Tambah Kriteria</Button>{' '}
                              </li>
                              <li className="list-inline-item">|</li>
                              <li className="list-inline-item">
                                <Button variant="danger">Hapus Kriteria</Button>{' '}
                              </li>
                            </ul>
                          </Col>  */}
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div md={6} lg={6}>
                          <div style={{width:'100%',padding:'15px',backgroundColor:'#cce5ff',borderRadius:'10px'}}> 
                            <h4>Jumlah Responden Yang Tersedia : 00</h4>
                          </div>
                  </div>
                </Row>
              </Tab>
              
              <Tab eventKey="Question" title="Pertanyaan Studi" className="m-t-15">
                {
                  listQuestions && listQuestions.questions &&
                  <QuestionBuilder
                    surveyId={ listQuestions._id}
                    questions = { listQuestions.questions }
                  />
                }
                  <Button variant="primary" onClick={ addQuestion }>
                              Tambah Pertanyaan
                  </Button>
              </Tab>
              
              <Tab eventKey="Simpan" title="Simpan Data" className="m-t-15">
                <h5>Apakah anda yakin ingin menyimpan data ini ?</h5>
                <Button onClick= {handleSaveSurvey} className="m-t-15">Simpan</Button>
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


export const FormSurveyorForm = reduxForm({
  form: 'surveyForm',
  shouldValidate: () => true // Due to bug https://github.com/erikras/redux-form/issues/3276
})(FormSurveyor);

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state),
  formValues: getFormValues('surveyForm')(state)
});
const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch),
  questionActions: bindActionCreators(questionActions, dispatch)
});


const ConnectedFormSurveyor = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSurveyorForm);

export default ConnectedFormSurveyor