import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Form, Jumbotron, Row } from 'react-bootstrap';

import "./add-ticket-form.style.css";


export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt, frmDataError}) => {
  console.log(frmDt);
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Subject
              </Form.Label>
              <Col sm={9}>
              <Form.Control
                name="subject"
                value={frmDt.subject}
                // minLength="3"
                maxLength="100"
                onChange={handleOnChange}
                placeholder="Subject"
                required
              />
              <Form.Text className="text-danger">
                {!frmDataError.subject && "Subject is required"}
              </Form.Text>
              </Col>

            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>Issue Found</Form.Label>
              <Col sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                value={frmDt.issusDate}
                onChange={handleOnChange}
                required
              />

              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>Details</Form.Label>
              {/* <Col sm={9}> */}
              <Form.Control
                as="textarea"
                name="detail"
                rows="5"
                value={frmDt.details}
                onChange={handleOnChange}
                required

              />
              {/* </Col> */}
            </Form.Group>

            <Button type="submit" variant="info" block>Open Ticket</Button>
          </Form>
    </Jumbotron>
  )
}

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired,
};
