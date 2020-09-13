import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import {Form, Button} from 'react-bootstrap'
import Layout from '../src/components/Layout/layout'

const pageTitle = "Forgot password"
const ForgotPassword = () => {
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
    <Layout forgotPassword>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className="page-wrapper user-registration pt-5">
        <Form validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="title-name">
            <h2 className="pb-3">Forgot Password</h2>
            <p>Enter your email we will send you a link  to recover your password.</p>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email<span>*</span></Form.Label>
            <Form.Control required type="email" placeholder="Enter email" size="lg"/>
            <Form.Control.Feedback type="invalid">Please provide valid email</Form.Control.Feedback>
          </Form.Group>
        
          <Button variant="secondary" type="submit" size="lg" block>
            Submit
          </Button>
          <Form.Group className="create-btn">
              <Link href="/login" ><a>back to Log in</a></Link>
          </Form.Group>
        </Form>
      </div>
    </Layout>
  )
}

export default ForgotPassword
