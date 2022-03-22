import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';



export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label className="send font-weight-bold text-secondary">Reply</Form.Label>
      <Form.Text>Please enter a message to update the Ticket</Form.Text>
        <Form.Control
          as="textarea"
          rows="5"
          name="detail"
          value={msg}
          onChange={handleOnChange}
          style={{borderRadius: '.4rem'}}
        />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit" style={{borderRadius: '.4rem'}}>
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,

  msg: PropTypes.string.isRequired,
};
