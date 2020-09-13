
import Layout from '../src/components/Layout/layout'
import Head from 'next/head'
import Link from 'next/link'
import {Form, Image, Row, Col, Button, Alert} from 'react-bootstrap'
import React, { useState } from 'react';

const pageTitle = "Update password"
const UpdatePassword = () => {
  
  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
  <Layout updatePassword>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <div className="user-registration pt-5">
      <div>
        <div className="title-name">
          <h2>Please enter your new password.</h2>
          <p>Welcome back, please login to your account.</p>
        </div>
        <Alert variant="info"><i className="fa fa-info-circle mr-2"></i>
          Please make sure your password has at least 5 characters
        </Alert>
        <Form className="form-common" validated={validated} onSubmit={handleSubmit}>
          <div>
            <div className="form-group">
              <Form.Label>Create new password <span>*</span></Form.Label>
              <Form.Control required type="password" className="form-control" placeholder="Password" autoComplete="on" size="lg"/>
              <Form.Control.Feedback type="invalid">Please provide valid password</Form.Control.Feedback>
            </div>
            <div className="form-group">
              <Form.Label>Confirm new password <span>*</span></Form.Label>
              <Form.Control required type="password" className="form-control" placeholder="Confirm Password" autoComplete="on" size="lg"/>
              <Form.Control.Feedback type="invalid">Please provide valid password</Form.Control.Feedback>
            </div>
          </div>
          <div className="create-btn">
            <Button variant="secondary" type="submit" block size="lg">Set new password</Button>
            <Link href="/login" ><a>back to Log in</a></Link>
          </div>
        </Form>
      </div>
    </div>
  </Layout>
)
}

export default UpdatePassword
