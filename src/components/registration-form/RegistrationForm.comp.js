import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Alert
} from 'react-bootstrap';
import { newUserRegistration } from './userRegAction';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  address: "",
  password: "",
  confirmPass: "",
};

const passVerificationError = {
  isLengthy: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  hasSpcChr: false,
  confirmPass: false,
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const { isLoading, status, message } = useSelector(state => state.registration);

  useEffect(() => {}, [newUser]);

  const handleOnChange = e => {
    const {name, value} = e.target;

    setNewUser({ ...newUser, [name]: value });

    if (name === 'password') {
      const isLengthy = value.length >=8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpcChr = /[!,#,-,$,*,/,+,&,%]/.test(value);

      setPasswordError({
        ...passwordError,
        isLengthy,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpcChr,
      });
    }

    if(name === 'confirmPass') {
      setPasswordError({
        ...passwordError,
        confirmPass: newUser.password === value,
      });
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    // console.log(newUser);
    dispatch(newUserRegistration(newUser));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">User Registration</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status ===
              "success" ? "success" : "danger"}
            >
              {message}
            </Alert>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleOnChange}
                placeholder="Your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone #</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={newUser.phone}
                onChange={handleOnChange}
                placeholder="Your phone"
                required
              />
              <Form.Text className="text-muted">
                ** We'll never share your phone #.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleOnChange}
                placeholder="Your email"
                required
              />
              <Form.Text className="text-muted">
                ** We'll never share your email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={newUser.company}
                onChange={handleOnChange}
                placeholder="Company name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={newUser.address}
                onChange={handleOnChange}
                placeholder="Full address"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPass"
                value={newUser.confirmPass}
                onChange={handleOnChange}
                placeholder="Confirm password"
                required
              />
            </Form.Group>

            <Form.Text>
              {!passwordError.confirmPass && (
                <div className="text-danger mb-3">
                  Password doesn't match!
                </div>
              )}
            </Form.Text>

            <ul className="mb-4">
              <li className={passwordError.isLengthy ? "text-success" : "text-danger"}>
                Min. 8 characters.
              </li>
              <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>
                At least one uppercase.
              </li>
              <li className={passwordError.hasLower ? "text-success" : "text-danger"}>
                At least one lowercase.
              </li>
              <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>
                At least one number.
              </li>
              <li className={passwordError.hasSpcChr ? "text-success" : "text-danger"}>
                At least one special (# ! - $ * % + &).
              </li>
            </ul>

            <Button
              variant="primary"
              type="submit"
              disabled={Object.values(passwordError).includes(false)}
            >
              Submit
            </Button>
            {isLoading && <Spinner variant="info" animation="border" />}
          </Form>
        </Col>
      </Row>

      <Row className="py-3">
        <Col>
          Already registered? <a href="/">Login Now</a>
        </Col>
      </Row>

    </Container>
  );
};

export default RegistrationForm;


