import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Form, Button} from 'react-bootstrap'
import Select from 'react-select'

import { dataProvinsi, dataKota } from '../../../store/actions/kotaAction'
// import { getDataQuestions } from '../../../store/actions/questionsAction'


export const ComponentProvinsiDanKota = (props) => {
  const dispatch = useDispatch()
  // const history = useHistory()
  // const location = useLocation()
  

  const [ kota, setKota] = useState('')
  const [ provinsi, setProvinsi] = useState('')
  const [ listProvinsi, SetListProvinsi ] = useState([])
  const [ listKabKota, SetListKabKota ] = useState([])
  const [selectedValue, setSelectedValue] = useState([]);
  // const cek = useRef(null)

  // let listKota = useSelector( state => state.tempat.tempat.kota)

  // console.log(kota)
  // console.log(provinsi)

  // let pilihanKota
  // if(listKabKota.length){
  //   pilihanKota = listKabKota.map((kota, i) => {return { label: kota, value: kota}})
  // }

  let arr = []
  const onchange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    arr.push(Array.isArray(e) ? e.map(x => x.value) : [])
    props.selectDataDaerah({provinsi: provinsi, kabKota: arr[0], index: props.dataIndex})
  }

  const selectedDaerah = () => {
    console.log(selectedValue)
  }
  console.log(provinsi)
  console.log(selectedValue)


  function processSelectProvinsi(data){
    setProvinsi(data)
    setSelectedValue([])
    props.selectProvinsi(data)
    props.selectDataDaerah({provinsi: data, kabKota: [], index: props.dataIndex})
    // getCounterResponden(getFilterQuestion, jenisKelamin, value.min, value.max, data, kota, pilihCategories)
    dispatch(dataKota(data))
      .then( data => {
        // let dataKota = data.map((kota, i) => {return { label: kota, value: kota}})
        SetListKabKota(data)
      })
  }

  // const processSelectKota = (data) => {
  //   setKota(data)
  //   // getCounterResponden(getFilterQuestion, jenisKelamin, value.min, value.max, provinsi, data, pilihCategories)
  // }

  const deleteDaerah = () => {
    console.log(provinsi)
    props.selectDataDaerah({provinsi: provinsi, kabKota: arr[0],index: props.dataIndex, delete: true})
  }

  // function getDataProvinsi(){
  //   dispatch(dataProvinsi())
  //     .then( data => {
  //       SetListProvinsi(data)
  //     })
  // }

  // useEffect(() => {
  //   getDataProvinsi()
  // }, [])

  return(
    <>
    <Row>
      <Col md={12} lg={12}>
        <Button variant="danger" onClick={ (e) =>  deleteDaerah(props.dataIndex) } className="float-right">Hapus</Button>
      </Col>

      <Col md={12} lg={12}>
        <div className="part-one">
          <Row>
            <Col md={6} lg={6}>
              <Form.Group>
                <Form.Label>Provinsi</Form.Label>
                  <Form.Control as="select" onChange={ (e) => {processSelectProvinsi(e.target.value); }} required>
                  <option value="">-- Semua --</option>
                  { 
                    !props.dataProvinsi 
                    ? 
                      <option value="">-- Semua --</option>
                    :
                      props.dataProvinsi.map( (data, i) => 
                      <option key={i} value={`${data.Provinsi}`}>{data.Provinsi}</option>
                      )
                  }
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} lg={6}>
              <Form.Group>
                <Form.Label>Kabupaten</Form.Label>
                <Select
                  value={listKabKota.filter(obj => selectedValue.includes(obj.value))}
                  isMulti
                  name="kota"
                  options={listKabKota}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange = { (e) => {onchange(e) ; selectedDaerah(e)}  }
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    </>
  )
}
