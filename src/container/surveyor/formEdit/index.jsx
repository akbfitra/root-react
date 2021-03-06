import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import {bindActionCreators} from 'redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { required } from 'redux-form-validators'
import InputRange from 'react-input-range';


import './css/style.css';
import 'react-input-range/lib/css/index.css';
import { Tabs, Tab, Container, Row, Col, Form, Button, Alert, Table } from 'react-bootstrap'

import "react-datepicker/dist/react-datepicker.css";
import NumberFormat from 'react-number-format'

import { QuestionBuilder } from '../../../components/form/questionBuilder'
import { KriteriaQuestionListEdit } from '../../../components/form/kriteriaQuestionListEdit'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'
import { FormInput } from '../../../components/inputForm'
import { ComponentProvinsiDanKotaEdit } from '../../../components/form/daerahEdit'

import * as surveyActions from '../../../store/actions/surveyFormAction'
import * as questionActions from '../../../store/actions/questionsAction'
import { getDenormalizedSurvey } from '../../../store/selectors/denormalizesurvey'
import { getInitialFormBuilderValues } from '../../../store/selectors/initialFormValues'
import { SAVE_STUDY, COUNTER_RESPONDEN,GET_DATA_TANGGUNGAN_SURVEYOR_EDIT } from '../../../store/actions/surveyFormAction'
import { getDataQuestions } from '../../../store/actions/questionsAction'
import { dataCategory } from '../../../store/actions/aboutUsAction'
import { renderDatePicker } from '../../../components/inputForm'
import { dataProvinsi, dataKota } from '../../../store/actions/kotaAction'
import { GET_SALDO} from '../../../store/actions/userAction/index'


const FormSurveyorEdit = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const params = useParams()

  let { studyId } = params

  // let surveyEdit = useSelector( state => state.surveys[`${studyId}`])
  // // console.log(surveyEdit.umurMin)
  // let umur
  // if(surveyEdit){
  //   umur = { min: surveyEdit['umurMin'], max: surveyEdit['umurMax']}
  //   console.log(umur)
  // }


  const [ category, setCategory ] = useState([])
  const [ dataQuestions, setDataQuestions ] = useState([])
  const [ pilihCategories, setPilihCategories ] = useState([])
  const [ listProvinsi, SetListProvinsi ] = useState([])
  const [ kota, setKota] = useState('')
  const [ provinsi, setProvinsi] = useState('')
  const [ jenisKelamin, setJenisKelamin ] = useState('')
  const [ value, setValue] = useState({min:10, max: 20})
  const [ getFilterQuestion, setFilterQuestion ] = useState([])
  const [ counterUser, setCounterUser ] = useState(0)
  const [ flagsFilterQuestions, setFlagsFilterQuestions ] = useState(false)
  const [ pilihProvinsi, setPilihProvinsi ] = useState([])
  const [jenis, setJenis ] =useState('')
  
  const [ pilihDaerah, setPilihDaerah ] = useState([])
  
  const [ saldoUser, setSaldoUser ] = useState([])
  const [ show, setShow ] = useState(false);
  const [ totalHargaResponden, setTotalHargaResponden ] = useState(0)
  const [ totalRewardStudy, setTotalRewardStudy ] = useState(0)
  const [ totalRewardFee, setTotalRewardFee ] = useState(0)
  const [ totalKekurangan, setTotalKekurangan ] = useState(0)
  const [ dataTanggunganSurveyor, setDataTanggunganSurveyor ] = useState([])
  const [pilihSemuaCat, setPilihSemuaCat] = useState(false)


  


  // let listKota = useSelector( state => state.tempat.tempat.kota)

  // let stateId = useSelector(state => state.surveys)
  // const keyStudy = Object.keys(stateId)[0] 
  // let stateStudy = useSelector(state => state.surveys[keyStudy])
  
  // console.log(test)
  
  
  //  console.log(surveyEdit)

  //  if(surveyEdit){
  //    setValue({ min: surveyEdit.umurMin, max: surveyEdit.umurMax})
  //  }
  // if(studyId && stateStudy){
  //   console.log(stateStudy)
  //   setJenisKelamin(stateStudy.jenisKelamin)
  //   // setValue({ min: stateStudy.min, max:stateStudy.max })
  // }


  const dapetinSaldo = () => {
    dispatch(GET_SALDO())
      .then(data => {
        setSaldoUser(data)
      })
  }

  useEffect(() => {
    dapetinSaldo()
  }, [])

  const handlePilihDaerah = (data) => {
    let cek =  pilihDaerah.findIndex(item => item.index === data.index)
    let test = pilihDaerah.find(item => item.provinsi === '')
    
    let elementPos =  pilihDaerah.findIndex(x => x.provinsi === data.provinsi);
    
    if(test && !data.delete){
      let newArr = [...pilihDaerah]
      
      newArr[cek] = data
      setPilihDaerah(newArr)
      // setPilihProvinsi(data)
      setFlagsFilterQuestions(true)
    }
    else{
      if(data.delete){
        console.log(data.provinsi)
        setPilihDaerah((prev) => {
          const prevDaerah = [...prev]
          return prevDaerah.filter(item => item.provinsi !== data.provinsi)
        })
        setFlagsFilterQuestions(true)
      }else{
        let elPos =  pilihDaerah.findIndex(x => x.index === data.index);
        console.log(elementPos)
        setPilihDaerah((prev) => {
          const backDaerah = [...prev]
          backDaerah[elPos] = {
            ...backDaerah[elPos],
            ...data
          }
          return backDaerah
        })
        setFlagsFilterQuestions(true)
      }
    }
  }


  const handlePilihKriteria = (kriteria) => {
    let cek = pilihCategories.includes(kriteria)
    console.log(kriteria)
    if(!cek){
      setPilihCategories(arr => [...pilihCategories, kriteria])
      setFlagsFilterQuestions(true)
    }else if(pilihCategories.indexOf(kriteria > -1)){
      let categorys = category.find(el => el.name === kriteria)
      // setFilterQuestion(getFilterQuestion.filter(item => item.questionId === kriteria))

      setFilterQuestion((prev) => {
        const prevQuestion = [...prev]
        return prevQuestion.filter(item => item.categoryId !== categorys._id)
      })
      setPilihCategories(pilihCategories.filter(item => item !== kriteria))
      setFlagsFilterQuestions(true)
    }
  }

  const handlePilihSemua = (all) => {
    if(!pilihSemuaCat && all){
      setPilihSemuaCat(true)
      setPilihCategories(category.map((item, i) => item.name))
      // setFlagsFilterQuestions(true)
    } else if(pilihSemuaCat && all) {
      setPilihSemuaCat(false)
      setPilihCategories([])
    }
    setFlagsFilterQuestions(true)
  }

  const tambahDaerahProvinsi = () => {
    let dataDaerah = 0
    if(!pilihDaerah.length ){
      dataDaerah = 0
    } else {
      dataDaerah = pilihDaerah[pilihDaerah.length -1].index +1
    }
    let data = { provinsi: '', kabKota: [], index: dataDaerah}

    setPilihDaerah(arr => arr.concat(data))
    setFlagsFilterQuestions(true)
  }

  function processSelectProvinsi(data){
    setProvinsi(data)
    getCounterResponden(getFilterQuestion, jenisKelamin, value.min, value.max, data, kota, pilihCategories, pilihDaerah)
    dispatch(dataKota(data))
  }

  // const processSelectKota = (data) => {
  //   setKota(data)
  //   getCounterResponden(getFilterQuestion, jenisKelamin, value.min, value.max, provinsi, data, pilihCategories)
  // }

  const processSelectUmur = (data) => {
    setValue(data)
    getCounterResponden(getFilterQuestion, jenisKelamin, data.min, data.max, provinsi, kota, pilihCategories, pilihDaerah)
  }

  function getDataProvinsi(){
    dispatch(dataProvinsi())
      .then( data => {
        SetListProvinsi(data)
      })
  }


  const onchange = async (data) => {
    let cek =  getFilterQuestion.some(item => item.questionId === data.questionId)
    
    let elementPos =  getFilterQuestion.findIndex(x => x.questionId === data.questionId);
    
    if(!cek){
      setFilterQuestion(arr => arr.concat(data))
      setFlagsFilterQuestions(true)
    }
    else{
      if(!data.answer.length){
        setFilterQuestion((prev) => {
          const prevQuestion = [...prev]
          return prevQuestion.filter(item => item.questionId !== data.questionId)
        })
        setFlagsFilterQuestions(true)
      }else{
        setFilterQuestion((prev) => {
          const backQuestion = [...prev]
          backQuestion[elementPos] = {
            ...backQuestion[elementPos],
            ...data
          }
          return backQuestion
        })
        setFlagsFilterQuestions(true)
      }
    }
  }

  useEffect(() => {
    getDataProvinsi()
  }, [])

  useEffect(() => {
    dispatch(surveyActions.GET_DATA_EDIT_FORM(studyId))
      .then( data => {
        setValue({ min: data.umurMin, max: data.umurMax})
        setJenisKelamin(data.jenisKelamin)
        setJenis(data)
        setPilihCategories(data.kriteria)
        setPilihDaerah(data.daerah)
        setFilterQuestion(data.answerKriteria)
      })

  }, [])

  let listQuestions = props.survey

  const addQuestion = () => {
    dispatch(questionActions.addNewQuestion(listQuestions._id))
  }


  const setDataTanggunganYangBelomDijalankan = () => {
    dispatch(GET_DATA_TANGGUNGAN_SURVEYOR_EDIT(studyId))
      .then( data => {
        setDataTanggunganSurveyor(data)
      })
  }

  useEffect(() => {
    setDataTanggunganYangBelomDijalankan()
  }, [])

  const handleSaveSurvey = () => {
    
    let totalRewardStudy = Number(props.formValues.jumlahResponden) * Number(props.formValues.rewardResponden)
    let totalFeeStudy = 0.2 * Number(props.formValues.jumlahResponden) * Number(props.formValues.rewardResponden)
    let totalSurvey = (Number(props.formValues.jumlahResponden) * Number(props.formValues.rewardResponden) + 0.2 * Number(props.formValues.jumlahResponden) * Number(props.formValues.rewardResponden) ) + dataTanggunganSurveyor.total
    let saldoUserSurveyor = saldoUser.saldo
    let kekurangan = totalSurvey - saldoUserSurveyor

    setTotalHargaResponden(totalSurvey)
    setTotalRewardStudy(totalRewardStudy)
    setTotalRewardFee(totalFeeStudy)
    setTotalKekurangan(kekurangan)
    
    if(totalSurvey > saldoUser.saldo){
      setShow(true)
    } else {
      dispatch(SAVE_STUDY(props.formValues, getFilterQuestion, jenisKelamin, value.min, value.max, provinsi, pilihCategories, kota, pilihDaerah, history))
      
    }
    
  };

  const getCategory = () =>{
    dispatch(dataCategory())
      .then( data => {
        setCategory(data)
        // break;
      })
  }

  const getCounterResponden = (dataQuestion, dataJenisKelamin, dataValueUmurMin, dataValueUmurMax, dataProvinsi, dataKota, kriteria, dataDaerah) => {
    console.log('aaaaaaaaaa')
    dispatch(COUNTER_RESPONDEN(dataQuestion, dataJenisKelamin, dataValueUmurMin,dataValueUmurMax, dataProvinsi, dataKota, kriteria, dataDaerah))
      .then(data => {
        console.log(data)
        setCounterUser(data)
        setFlagsFilterQuestions(false)
      })
  }

  const getJenisKelamin = (dataGender) => {
     setJenisKelamin(dataGender)
     getCounterResponden(getFilterQuestion, dataGender, value.min, value.max, provinsi, kota, pilihCategories, pilihDaerah)
  }

  useEffect(() => {
    if(counterUser === 0 || flagsFilterQuestions){
      getCounterResponden(getFilterQuestion, jenisKelamin, value.min, value.max, provinsi, kota, pilihCategories, pilihDaerah)
    }
  })

  useEffect(() => {
    if(!category.length){
      getCategory()
    }
  },[])

  const processSelectCategory = (pilihCategory) => {
    let idCategory = category.find( el => el.name === pilihCategory )
    dispatch(getDataQuestions(idCategory._id))
      .then( data => {
        setDataQuestions(data)
      })
  }




  return(
    <>
      <Navbar/>

      <div id="form-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Edit Studi</strong></h3>
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
                  <h4 className="title-three">Edit Studi</h4>
                </li>
              </ul>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} lg={12}>
          <Alert variant="danger">
            <Alert.Heading>Perhatian...</Alert.Heading>
            <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td style={{width:'10px'}}>1.</td>
                      <td>
                                                            Saldo Terikat (biaya studi sedang berjalan) { dataTanggunganSurveyor ? 
                                                              <NumberFormat 
                                                                value={dataTanggunganSurveyor.total} 
                                                                displayType={'text'} 
                                                                thousandSeparator={'.'} 
                                                                decimalSeparator={','} 
                                                                prefix={'Rp '}/>
                                                            :
                                                              0
                                                            }
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>
                      Saldo Aktif { 
                                    <NumberFormat 
                                      value={dataTanggunganSurveyor ? Number(saldoUser.saldo) -  Number(dataTanggunganSurveyor.total) : 0} 
                                      displayType={'text'} 
                                      thousandSeparator={'.'} 
                                      decimalSeparator={','} 
                                      prefix={'Rp '}/>
                                  }
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>
                      Saldo yang dibutuhkan untuk studi baru : <NumberFormat 
                                    value={ props.formValues ?  (Number(props.formValues.jumlahResponden) * Number(props.formValues.rewardResponden)) * 1.2  : 0} 
                                    displayType={'text'} 
                                    thousandSeparator={'.'} 
                                    decimalSeparator={','} 
                                    prefix={'Rp '}/>
                      </td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td style={{color:'red',fontWeight:'bold'}}>
                      Kekurangan Saldo : <NumberFormat 
                                    value={ props.formValues ?  ((Number(saldoUser.saldo) -  Number(dataTanggunganSurveyor.total))<Number((Number(props.formValues.jumlahResponden) * Number(props.formValues.rewardResponden)) * 1.2))? Math.abs((Number(saldoUser.saldo) -  Number(dataTanggunganSurveyor.total))-Number((Number(props.formValues.jumlahResponden) * Number(props.formValues.rewardResponden)) * 1.2)):0 : 0} 
                                    displayType={'text'} 
                                    thousandSeparator={'.'} 
                                    decimalSeparator={','} 
                                    prefix={'Rp '}/>
                      </td>
                    </tr>
                  </tbody>
            </Table>

            
          </Alert>
          </Col>
        </Row>


        <Row className="m-t-30">
          <Col md={12} lg={12}>
            <Tabs defaultActiveKey="Project" id="noanim-tab-example">
              <Tab eventKey="Project" title="Studi" className="m-t-15">
                <Row>
                  <Col md={12} lg={12}>
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

                    {/* <Form.Group>
                      <Form.Label>Jumlah Soal</Form.Label>
                      <Field
                          // className="input survey-builder__title"
                          type="number"
                          component={FormInput}
                          name='jumlahSoal'
                          placeholder="jumlah soal"
                          validate={[required()]}
                        />
                      <Form.Control type="text" placeholder="" onChange={ (e) => {setJumlahSoal( e.target.value )}}/>
                    </Form.Group> */}

                    <Form.Group>
                      <Form.Label>Perkiraan Waktu Menjawab (menit)</Form.Label>
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
                      <Form.Label>Jumlah Responden yang Dibutuhkan</Form.Label>
                      <Field
                          // className="input survey-builder__title"
                          type="number"
                          component={FormInput}
                          name='jumlahResponden'
                          placeholder="jumlah responden"
                          validate={[required()]}
                        />
                      {/* <Form.Control type="number" placeholder="" onChange={ (e) => {setJumlahResponden( e.target.value )}}/> */}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Imbalan Per Responden (Rp)</Form.Label>
                      <Field
                          // className="input survey-builder__title"
                          type="number"
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
                        <Col md={12} lg={12}>
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
                        <Col md={12} lg={12}>
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

              <Tab eventKey="Ketertarikan Responden" title="Kriteria Responden" className="m-t-15">
                <Row>
                  <Col md={6} lg={6}>
                    <div className="part-one">
                    <Form.Group>
                      <Form.Label style={{marginBottom:'30px'}}>Usia</Form.Label>
                      <InputRange
                        maxValue={100}
                        minValue={0}
                        value={value}
                        onChange={value => processSelectUmur( value )}
                      />
                    </Form.Group>
                    </div>
                  </Col>

                  <Col md={6} lg={6}>
                    <div className="part-one">
                    <Form.Group>
                      <Form.Label>Jenis Kelamin</Form.Label>
                      <Form.Control as="select" onChange={e => getJenisKelamin( e.target.value )} >
                      <option value= {`${jenis.jenisKelamin}`} > { jenis.jenisKelamin === '' ? 'Semua' : jenis.jenisKelamin } </option>
                        {
                          jenis.jenisKelamin === '' 
                          ? 
                          <>
                            <option value="Perempuan">Perempuan</option>
                            <option value="Laki-laki">Laki-laki</option>
                          </>
                          :
                          jenis.jenisKelamin === 'Laki-laki'
                          ?
                          <>
                            <option value="">Semua</option>
                            <option value="Perempuan">Perempuan</option>
                          </>
                          :
                          <>
                            <option value="">Semua</option>
                            <option value="Laki-laki">Laki-laki</option>
                          </>
                        }
                      </Form.Control>
                    </Form.Group>
                    </div>
                  </Col>

                  
                  {/* <Col md={6} lg={6} className="m-t-30">
                    <div className="part-one">
                    <Form.Group>
                      <Form.Label>Provinsi</Form.Label>
                        <Form.Control as="select" onChange={ (e) => {processSelectProvinsi(e.target.value); }} required>
                        <option value="">-- Semua --</option>
                        { 
                          !listProvinsi 
                          ? 
                            <option value="">-- Semua --</option>
                          :
                            listProvinsi.map( (data, i) => 
                            <option key={data._id} value={`${data.Provinsi}`}>{data.Provinsi}</option>
                            )
                        }
                      </Form.Control>
                    </Form.Group>
                    </div>
                  </Col>

                  <Col md={6} lg={6} className="m-t-30">
                    <div className="part-one">
                    <Form.Group>
                      <Form.Label>Kabupaten</Form.Label>
                      <Form.Control as="select" onChange={ (e) => {processSelectKota( e.target.value )}}required>
                      <option value="">-- Semua --</option>
                      { 
                        !listKota 
                        ? 
                          <option value="">-- Semua --</option>
                        :
                          listKota.map( (data, i) => 
                          <option key={data._id} value={`${data["Kabupaten/kota"]}`}>{data["Kabupaten/kota"]}</option>
                          )
                      }
                    </Form.Control>
                    </Form.Group>
                    </div>
                  </Col> */}

                  {/* {
                    pilihDaerah.map((data,i) => {
                      
                      return (
                        <ComponentProvinsiDanKota
                          key={data.index}
                          dataProvinsi = { listProvinsi }
                          dataIndex = { data.index }
                          selectProvinsi = {(e) => {processSelectProvinsi(e)}}
                          selectDataDaerah={(e) => {handlePilihDaerah(e)}}
                        />
                      )
                    })
                    
                  } */}
                    
                </Row>
                <Row>
                  <Col md={12} lg={12}>
                    <hr></hr>
                  </Col>
                </Row>
                {
                    pilihDaerah.map((data,i) => {
                      console.log(data)
                      return (
                        <ComponentProvinsiDanKotaEdit
                          key={data.index}
                          dataEdit={ data }
                          dataProvinsi = { listProvinsi }
                          dataIndex = { data.index }
                          selectProvinsi = {(e) => {processSelectProvinsi(e)}}
                          selectDataDaerah={(e) => {handlePilihDaerah(e)}}
                        />
                      )
                    })
                    
                  }
                
                {
                  pilihDaerah.length && pilihDaerah[pilihDaerah.length-1].provinsi
                  ?
                  <>
                    <Button variant="primary" onClick={tambahDaerahProvinsi}> Domisili Responden </Button>
                  </>
                  :
                  !pilihDaerah.length ?
                    <Button variant="primary" onClick={tambahDaerahProvinsi}> Domisili Responden </Button>
                  :
                  <>
                  </>
                }

                <Row>
                  <Col md={12} lg={12}>
                    <hr></hr>
                  </Col>
                </Row>
                  
                <Row>
                  <Col md={12} lg={12}>
                    <div className="part-one">
                        {/* pilih kriteria */}
                        <Form.Group>
                          
                          <Form.Label>Ketertarikan Responden</Form.Label>
                          <Row className="m-b-10">
                            <Col md={12} lg={12}>
                              <div style={{backgroundColor:'#cce5ff', display:'inline-block', padding:'0px 5px', borderRadius:'6px'}}>
                              <Form.Check
                              type="checkbox"
                              label="Pilih Semua"
                              value="allcategory"
                              onChange={(e) => { handlePilihSemua(e.target.value)}}
                              />
                              </div>
                            </Col>
                          </Row>
                            
                          <Row>
                            {
                              category.map((data, i) => {
                                return(
                                  <Col md={3} lg={3} key={i}>
                                    <Form.Check
                                    checked={pilihCategories.some((nama) => nama === data.name)}
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
                    </div>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={12} lg={12}>
                    <hr></hr>
                  </Col>
                </Row>

                <Row style={{position: 'sticky', top:'70px', zIndex: '1'}}>
                  <Col md={12} lg={12}>
                  <Alert variant="primary" style={{marginBottom:'0px'}}>
                    <Alert.Heading  style={{marginBottom:'0px', marginTop:'0px'}} className="text-center"><span>Jumlah Responden Yang Tersedia : {counterUser.jumlah}</span></Alert.Heading>
                    
                  </Alert>
                  </Col>
                </Row>



                

                        {
                          pilihCategories.map((data, i) => {
                            let idCategory = category.find( el => el.name === data )
                            console.log(pilihCategories, 'sssssssss')
                            return (
                              idCategory &&
                              <KriteriaQuestionListEdit 
                                key = {i}
                                kriteria = { data }
                                listAnswerPilih = { getFilterQuestion}
                                categoryName = {idCategory.name}
                                idCategory = { idCategory._id }
                                dataQuestions = { idCategory.listQuestions}
                                onchange={(e) => { onchange(e) }} 
                              />

                            )
                          })
                        }
                
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
                <Row>
                  <Col md={12} lg={12}>
                    <div className="part-one">
                      <p>Apakah anda yakin ingin menyimpan data ini ?</p>
                    </div>
                  </Col>
                </Row>
                <>
                  <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Error?!</Alert.Heading>
                    <p>
                      SALDO ANDA BELUM MENCUKUPI UNTUK MEMBAYAR RESPONDEN, HARAP TOP UP 
                      <Link to ="/surveyor/topup">
                          DISINI
                      </Link>
                    </p>
                    
                    <p>
                      Jumlah Tanggungan anda: <NumberFormat value={dataTanggunganSurveyor.totalTanggungan} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/>
                    </p>
                    <p>
                      Jumlah Tanggungan Fee anda: <NumberFormat value={dataTanggunganSurveyor.totalFee} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/>
                    </p>
                    <p>
                      Jumlah Total Tanggungan anda: <NumberFormat value={dataTanggunganSurveyor.total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/>
                    </p>
                    <hr/>
                    <p>
                      Jumlah Total Reward Study anda sekarang: <NumberFormat value={totalRewardStudy} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/>
                    </p>
                    <p>
                      Jumlah Total Fee Reward Study anda sekarang: <NumberFormat value={totalRewardFee} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/>
                    </p>
                    <p>
                      Jumlah Total yang harus ada di saldo anda sebesar: { 
                      totalHargaResponden ?  <NumberFormat value={totalHargaResponden} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/> : 0
                      }
                    </p>
                    <p>
                      saldo anda: <NumberFormat value={saldoUser.saldo} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/>
                    </p>
                    <hr/>
                    <p>
                      kekurangan saldo anda: <NumberFormat value={totalKekurangan} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}/>
                    </p>
                  </Alert>
                </>
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


export const FormSurveyorEditForm = reduxForm({
  form: 'surveyForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  shouldValidate: () => true // Due to bug https://github.com/erikras/redux-form/issues/3276
})(FormSurveyorEdit);

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state),
  formValues: getFormValues('surveyForm')(state),
  initialValues: getInitialFormBuilderValues(state),
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch),
  questionActions: bindActionCreators(questionActions, dispatch)
});


const ConnectedFormSurveyorEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSurveyorEditForm);

export default ConnectedFormSurveyorEdit