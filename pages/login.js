import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import {Form, Button, Image} from 'react-bootstrap'
import Layout from '../src/components/Layout/layout'

const pageTitle = "Sign In"
const Login = () => {
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
    <Layout login>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className="page-wrapper user-registration">
        <Form validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Link href="/"><a><Image src="/assets/images/sigin google-pnggg.png" className="w-100 google-login-button"/></a></Link>
          </Form.Group>

          <Form.Group className="py-2">
            <Form.Text className="w-100 notice-text">
            &mdash;&mdash;&mdash;&nbsp;&nbsp;Or sign in with email instead&nbsp;&nbsp;&mdash;&mdash;&mdash;
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email<span>*</span></Form.Label>
            <Form.Control required type="email" placeholder="Enter email" size="lg"/>
            <Form.Control.Feedback type="invalid">Please provide valid email</Form.Control.Feedback>
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="w-100">
              Password<span>*</span>
              <Link href="/forgotPassword"><a className="forgot-text">Forgot password?</a></Link>
            </Form.Label>
            <Form.Control required type="password" placeholder="Password" size="lg"/>
            <Form.Control.Feedback type="invalid">Please provide valid password</Form.Control.Feedback>
          </Form.Group>
          
          <Button variant="secondary" type="submit" size="lg" block>
            Sign in
          </Button>
          <Form.Group className="pt-2">
            <Form.Text className="w-100 notice-text">
              Don't have an account yet? Register <Link href="/register"><a>here</a></Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </Layout>
  )
}

export default Login
