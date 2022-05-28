import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { fetchSingleTicket } from '../ticket-list/ticketsAction';
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';
import { useParams } from 'react-router-dom';

// const ticket = tickets[0];
export const Ticket = () => {
  const {tId} = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedTicket} = useSelector(state => state.tickets);

  const [message, setMessage] = useState('');
  const [ticket, setTicket] = useState('');

  useEffect(() => {
    dispatch(fetchSingleTicket(tId))
}, [message, tId, dispatch]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert('Form submission!')
  }
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner variant='primary' animation="border" />}
          {error && <Alert variant='danger'>{error}</Alert>}
        </Col>
      </Row>

      <Row>
        <Col className="font-weight-bolder text-secondary">
        {/* {tId} */}
          <div className="subject">Subject : {selectedTicket.subject}</div>
          <div className="date">Ticket Opened : {selectedTicket.openAt}</div>
          <div className="status">Status : {selectedTicket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info" style={{borderRadius: '.4rem'}}>
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{selectedTicket.conversations && <MessageHistory msg={selectedTicket.conversations} />}
        </Col>
      </Row>
      <hr />

      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  )
}
