import React from 'react';
import './css/style.css';
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CardCategory = (props) => {
  let dataUser = props.dataUser.flatMap( x => x === null ? [] : [x])
  
  return(
    <>
      <Col md={3} lg={3} className="m-t-30">
        <div className="part-one">
          <div className="table-100">
            <div className="table-row">
              <div className="table-cell-one">
                <Link to={`/responden/category/${props.categories._id}`}>
                  <center>
                    <img src="https://via.placeholder.com/140" alt=""/>
                    <h2>{props.answerUser}</h2>
                    <h4 className="title-two m-t-15" style={{textTransform:'Capitalize'}}><strong>{props.categories.name}</strong></h4>
                    <h4 className="title-two"><strong>{dataUser.length}/{props.categories.listQuestions.length}</strong></h4>
                  </center>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  )
}