import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Form, Button} from 'react-bootstrap'
// import { getDataQuestions } from '../../../store/actions/questionsAction'


export const KriteriaQuestionListEdit = (props) => {
  const dispatch = useDispatch()

  let dataAnswers = [] 
  console.log(props.listAnswerPilih)
  
  const getData = (questionId, answer) => {
    let pilih = props.listAnswerPilih.find((el) => el.questionId === questionId)

    if(!pilih){
      dataAnswers = []
    } else {
      dataAnswers = pilih.answer
    }

    let index = dataAnswers.indexOf(answer);
    if (index > -1) {
      dataAnswers.splice(index, 1);
    }else {
      dataAnswers.push(answer)
    }
    
    let obj = {questionId, answer: dataAnswers, categoryId: props.idCategory}
    props.onchange(obj)
  }


  // useEffect(() => {
  //   processSelectCategory(props.idCategory) 
  // }, [])

  return(
    <>
      
      
      { /* load question */}

      <Row className="m-t-15">
        <Col md={12} lg={12}>
          <div className="part-one">
            <Row>
              <Col md={12} lg={12}>
                <div style={{width:'100%',backgroundColor:'#1f59bb',padding:'15px',borderRadius:'8px'}}>
                  <h4 style={{color:'white'}}>{ props.kriteria}</h4>
                </div>
              </Col>

              <Col md={12} lg={12}>
                {
                  props.dataQuestions.map((data, i) => {
                    let cekDataAnswerEdit = props.listAnswerPilih.find((el) => el.questionId === data._id)
                    let dataAnswersEdit = []
                    if(cekDataAnswerEdit){
                      dataAnswersEdit = cekDataAnswerEdit.answer
                    }
                    // let getDataAnswerEdit = cekDataAnswerEdit.answer
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
                            {/* <Form.Control as="select" onChange={(e) => { getData(data._id, e.target.value)}} > */}
                              {/* <option value= "remove">Semua</option> */}
                              { data.listAnswers.map((answer, i) => {

                                
                                  return(
                                    <Col md={3} lg={3} key={i}>
                                      <Form.Check
                                      key={i}
                                      type="checkbox"
                                      checked={dataAnswersEdit.some((nama) => nama === answer)}
                                      label={`${answer}`}
                                      value={`${answer}`}
                                      onChange={(e) => { getData(data._id, e.target.value)}}
                                      // onChange={ (e) => {handlePilihKriteria(e.target.value)}}
                                      />
                                    </Col>
                                    // <option key={i} value={answer}>{ answer }</option>
                                  )
                                })
                              }
                            {/* </Form.Control> */}
                          </Form.Group>
                          </div>
                        </Col>
                      </Row>
                    )
                  })
                }
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      
    </>
  )
}
