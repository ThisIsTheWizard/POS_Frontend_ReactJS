import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { REGISTER_MUTATION } from '../../api/auth/auth.helper'

// Components
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap'
import { toast } from 'react-toastify'

// Images
import logoDark from '../../assets/images/logo-dark.png'

const Register = (props) => {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: '',
    confirmation_password: ''
  })

  const [register, { loading }] = useMutation(REGISTER_MUTATION, {
    variables: { inputData }
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Handling form validation and error messages
    const { name, email, password, confirmation_password } = inputData
    if (!name) {
      toast.error('Name is required!')
      return false
    }
    if (!email) {
      toast.error('Email is required!')
      return false
    }
    if (!password) {
      toast.error('Password is required!')
      return false
    }
    if (!confirmation_password) {
      toast.error('Confirmation password is required!')
      return false
    }
    if (password !== confirmation_password) {
      toast.error('Password does not match!')
      return false
    }

    await register()
      .then((res) => {
        toast.success(
          `${res.data.createAnUser.name}, you are successfully registered as an user!`
        )

        setInputData({
          name: '',
          email: '',
          password: '',
          confirmation_password: ''
        })

        navigate('/login')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <Link to="/">
          <i className="mdi mdi-home-variant h2 text-white"></i>
        </Link>
      </div>
      <div>
        <Container fluid className="p-0">
          <Row className="no-gutters">
            <Col lg={4}>
              <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                <div className="w-100">
                  <Row className="justify-content-center">
                    <Col lg={9}>
                      <div>
                        <div className="text-center">
                          <div>
                            <Link to="#" className="logo">
                              <img src={logoDark} height="20" alt="logo" />
                            </Link>
                          </div>

                          <h4 className="font-size-18 mt-4">
                            Register account
                          </h4>
                          <p className="text-muted">
                            Get your free Nazox account now.
                          </p>
                        </div>

                        <div className="p-2 mt-5">
                          <Form
                            onSubmit={handleSubmit}
                            className="form-horizontal"
                          >
                            <FormGroup className="auth-form-group-custom mb-4">
                              <i className="ri-user-2-line auti-custom-input-icon"></i>
                              <Label>Name</Label>
                              <Input
                                name="name"
                                value={inputData.name}
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                onChange={(event) =>
                                  setInputData((obj) => ({
                                    ...obj,
                                    name: event.target.value
                                  }))
                                }
                              />
                            </FormGroup>

                            <FormGroup className="auth-form-group-custom mb-4">
                              <i className="ri-mail-line auti-custom-input-icon"></i>
                              <Label>Email</Label>
                              <Input
                                name="email"
                                value={inputData.email}
                                validate={{ email: true, required: true }}
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={(event) =>
                                  setInputData((obj) => ({
                                    ...obj,
                                    email: event.target.value
                                  }))
                                }
                              />
                            </FormGroup>

                            <FormGroup className="auth-form-group-custom mb-4">
                              <i className="ri-lock-2-line auti-custom-input-icon"></i>
                              <Label>Password</Label>
                              <Input
                                name="password"
                                value={inputData.password}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(event) =>
                                  setInputData((obj) => ({
                                    ...obj,
                                    password: event.target.value
                                  }))
                                }
                              />
                            </FormGroup>

                            <FormGroup className="auth-form-group-custom mb-4">
                              <i className="ri-lock-2-line auti-custom-input-icon"></i>
                              <Label>Confirm Password</Label>
                              <Input
                                name="password"
                                value={inputData.confirmation_password}
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                onChange={(event) =>
                                  setInputData((obj) => ({
                                    ...obj,
                                    confirmation_password: event.target.value
                                  }))
                                }
                              />
                            </FormGroup>

                            <div className="text-center">
                              <Button
                                color="primary"
                                className="w-md waves-effect waves-light"
                                type="submit"
                              >
                                {loading ? 'Loading ...' : 'Register'}
                              </Button>
                            </div>

                            <div className="mt-4 text-center">
                              <p className="mb-0">
                                By registering you agree to the Nazox{' '}
                                <Link to="#" className="text-primary">
                                  Terms of Use
                                </Link>
                              </p>
                            </div>
                          </Form>
                        </div>

                        <div className="mt-5 text-center">
                          <p>
                            <span className="mr-1">
                              Already have an account?
                            </span>
                            <Link
                              to="/login"
                              className="font-weight-medium text-primary"
                            >
                              Login
                            </Link>
                          </p>
                          <p>
                            © 2020 Nazox. Crafted with
                            <i className="mdi mdi-heart text-danger"></i> by
                            Themesdesign
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="authentication-bg">
                <div className="bg-overlay"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Register
