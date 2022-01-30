import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION, setLoginAccessToken } from '../../api/auth/auth.helper'
import { Link } from 'react-router-dom'

// AppContext From Context API
import AppContext from '../../context/Context'

// Components
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

const Login = () => {
  const { setIsLoggedIn } = useContext(AppContext)
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  })

  const [loginAnUser, { loading }] = useMutation(LOGIN_MUTATION, {
    variables: { inputData },
    onError: (error) => {
      toast.error(error?.message)
    },
    onCompleted: (data) => {
      if (data?.loginAnUser) {
        toast.success('You are successfully logged in!')
        setLoginAccessToken(data.loginAnUser)
        setIsLoggedIn(true)
      }
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    // Handling form validation and error messages
    const { email, password } = inputData
    if (!email) {
      toast.error('Email is required!')
      return false
    }
    if (!password) {
      toast.error('Password is required!')
      return false
    }

    return loginAnUser()
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
                            <Link to="/" className="logo">
                              <img src={logoDark} height="20" alt="logo" />
                            </Link>
                          </div>

                          <h4 className="font-size-18 mt-4">Welcome Back !</h4>
                          <p className="text-muted">
                            Sign in to continue to Nazox.
                          </p>
                        </div>

                        <div className="p-2 mt-5">
                          <Form
                            onSubmit={handleSubmit}
                            className="form-horizontal"
                          >
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

                            <div className="mt-4 text-center">
                              <Button
                                color="primary"
                                className="w-md waves-effect waves-light"
                                type="submit"
                              >
                                {loading ? 'Loading ...' : 'Login'}
                              </Button>
                            </div>

                            <div className="mt-4 text-center">
                              <Link
                                to="/forgot-password"
                                className="text-muted"
                              >
                                <i className="mdi mdi-lock mr-1"></i> Forgot
                                your password?
                              </Link>
                            </div>
                          </Form>
                        </div>

                        <div className="mt-5 text-center">
                          <p>
                            <span className="mr-1">
                              Don&apos;t have an account?
                            </span>
                            <Link
                              to="/register"
                              className="font-weight-medium text-primary"
                            >
                              Register
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

export default Login
