import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Alert
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { userLogin } from '../../api/userApi';
import { loginPending, loginFail, loginSuccess } from './loginSlice';
import { getUserProfile } from '../../pages/dashboard/userAction';

export const LoginForm = ({ formSwitcher }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  useEffect(() => {
    sessionStorage.getItem('accessJWT') && history.push('/dashboard');
  }, [history, isAuth]);


  const [email, setEmail] = useState('tommyt@kbldesigners.com');
  const [password, setPassword] = useState('password2');

  const handleOnChange =e => {
    const {name, value} = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

        case "password":
          setPassword(value);
          break;

        default:
          break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill out form completely!");
    }

    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });

      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }

      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push('/dashboard');
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button type="submit">Login</Button>
            {isLoading && <Spinner variant="primary" animation="border" />}
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher('reset')}>
            Forget Password?
          </a>
        </Col>
      </Row>

      <Row className="py-4">
        <Col>
          New Users: <a href="/registration">Register Now</a>
        </Col>
      </Row>
    </Container>
  );
};


LoginForm.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
}
