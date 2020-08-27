import React from 'react';
import classnames from 'classnames'

import { Form } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

export const FormInput = ({meta, type, input, placeholder}) => {
  const inputSyle = classnames('input', {
    'input__has-error': meta.touched && meta.error
  });
  return (
    <div>
      <Form.Group>
        <Form.Control 
          className={inputSyle}
          type={type}
          placeholder={placeholder}
          {...input} />
      </Form.Group>

      {/* <input
        className={inputSyle}
        type={type}
        placeholder={placeholder}
        {...input}
      /> */}

      
      <div className="input__error-message">
        {
          meta.touched && meta.error &&
          <span>{`Error: ${meta.error}`}</span>
        }
      </div>
    </div>
  )
};

export const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => {
  return(
    <div>
      <DatePicker {...input} dateFormat="dd/MM/yyyy" minDate={new Date()} selected={input.value ? input.value : new Date()} />
      {touched && error && <span>{error}</span>}
    </div>
  )
};


