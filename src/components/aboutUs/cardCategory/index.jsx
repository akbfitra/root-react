import React from 'react';
import './css/style.css';
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CardCategory = (props) => {
  
  return(
    <>
      <Col md={3} lg={3} className="m-t-30">
        <div className="part-one">
          <div className="table-100">
            <div className="table-row">
              <div className="table-cell-one">
                <Link to={`/responden/category/${props.idCategory}`}>
                  <center>
                    <img src="https://via.placeholder.com/140" alt=""/>
                    <h4 className="title-three m-t-15"><strong>{props.categories.name}</strong></h4>
                    <h4 className="title-two"><strong>0/00</strong></h4>
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