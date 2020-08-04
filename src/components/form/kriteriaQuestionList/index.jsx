import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Form, Button} from 'react-bootstrap'
// import { getDataQuestions } from '../../../store/actions/questionsAction'


export const KriteriaQuestionList = (props) => {
  const dispatch = useDispatch()
  // const history = useHistory()
  // const location = useLocation()

  // const [dataQuestions, setDataQuestions ] = useState([])

  
  //   const processSelectCategory = (id) => {
  //     // let idCategory = category.find( el => el.name === pilihCategory )
  //     dispatch(getDataQuestions(id))
  //       .then( data => {
  //         setDataQuestions(data)
  //       })
  //   }
  

  const getData = (questionId, answer) => {
    let obj = {questionId, answer}
    props.onchange(obj)
  }

  // useEffect(() => {
  //   processSelectCategory(props.idCategory) 
  // }, [])

  return(
    <>
      <Col md={12} lg={12}>
        <Form.Group>
          {/* <Form.Label>Question Responden</Form.Label> */}
          <Form.Label> { props.kriteria} </Form.Label>
          {/* <Form.Control as="select" onChange={ (e) => {processSelectCategory(e.target.value); }}>
            <option>Pilih...</option>
            {
              category.map((data, i) => {
                
                return(
                  <option key={i}>{data.name}</option>
                )
              })
            }
          </Form.Control> */}
        </Form.Group>
      </Col>

        <Col md={12} lg={12}>
        <hr className="m-b-0"></hr>
        </Col>
      
      { /* load question */}

        <Col md={12} lg={12}>
          {
            props.dataQuestions.map((data, i) => {
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
                      <Form.Control as="select" onChange={(e) => { getData(data._id, e.target.value)}} >
                        <option value= "remove">Semua</option>
                        { data.listAnswers.map((answer, i) => {
                            return(
                              <option key={i} value={answer}>{ answer }</option>
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
        </Col>
        
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
        </Col> */}
    </>
  )
}
