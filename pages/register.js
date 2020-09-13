import Head from 'next/head'
import Link from 'next/link'
import {Image, Row, Col, Button, Form} from 'react-bootstrap'
import React, { useState } from 'react';

const pageTitle = "Sine In"
const Register = () => {
  const [individual, setIndividual] = useState(true)

  const changeIndividual = (b) => {
    setIndividual(b)
  }
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
  <>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <div className="logo"><Image src="/assets/images/logo.png"/></div>
    <div className="p-5 register-page">
      <Row>
        <Col></Col>
        <Col>
          <div className="user-registration pt-5">
            <div>
                <div className="title-name">
                  <h2>Create Account</h2>
                </div>
                <ul className="custom-tab">
                  <li><a href="#javascript" onClick={e=>changeIndividual(true)} className={individual ? "active":""}>Individual account</a></li>
                  <li><a href="#javascript" onClick={e=>changeIndividual(false)} className={!individual ? "active":""}>Organizational account</a></li>
                </ul>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <h4 className="w-50">WHY CREATE AN ACCOUNT?</h4>
	        <p className="w-50">Creating an account allows you to save searches, view past search results and more. Triton offers multiple tiers of access to fit your needs. You can select your level of access on the next page or at any time on your account info page.</p>
          {
            !individual ? 
            (<>
              <h4 className="pt-5 w-50">WHAT IS AN ORGANIZATIONAL ACCOUNT?</h4>
              <p className="w-50">Organizational accounts are designed to allow multiple individuals at the same organization to have distinct access to Triton.
              Searches are saved to individual accounts and administrators are able to view search details of all individual accounts in the organization.
              Triton offers multiple tiers of access to fit your organization's needs.
              You can select your organization's level of access on the next page or at any time on your account info page.
              Once you select your level of access you can add individuals to your organization or at any time on your organizations account info page.</p>
            </>):(<></>)
          }
        </Col>
        <Col>
          <div className="user-registration">
            <div>
              <Form className="form-common" validated={validated} onSubmit={handleSubmit}>
                <div>
                  <div className="form-group">
                    <Form.Label>First Name <span>*</span></Form.Label>
                    <Form.Control required type="text" className="form-control" placeholder="First Name" size="lg"/>
                    <Form.Control.Feedback type="invalid">Please provide valid name</Form.Control.Feedback>
                  </div>
                  <div className="form-group">
                    <Form.Label>Last Name <span>*</span></Form.Label>
                    <Form.Control required type="text" className="form-control" placeholder="Last Name" size="lg"/>
                    <Form.Control.Feedback type="invalid">Please provide valid name</Form.Control.Feedback>
                  </div>
                  <div className="form-group">
                    <Form.Label>Email <span>*</span></Form.Label>
                    <Form.Control required type="email" className="form-control" placeholder="Email Address" size="lg"/>
                    <Form.Control.Feedback type="invalid">Please provide a valid email</Form.Control.Feedback>
                  </div>
                  <div className="form-group">
                    <Form.Label>Password <span>*</span></Form.Label>
                    <Form.Control required type="password" className="form-control" placeholder="Password" autoComplete="on" size="lg"/>
                    <Form.Control.Feedback type="invalid">Please provide valid password</Form.Control.Feedback>
                  </div>
                  <div className="form-group">
                    <Form.Label>Confirm Password <span>*</span></Form.Label>
                    <Form.Control type="password" className="form-control" placeholder="Confirm Password" autoComplete="on" size="lg"/>
                    <Form.Control.Feedback type="invalid">Please provide valid password</Form.Control.Feedback>
                  </div>
                </div>
                <div className="create-btn">
                  <Button variant="secondary" type="submit" block size="lg">Create Account</Button>
                  <span>Already have an account? Sign in 
                  <Link href="/login" ><a className="ml-2">here</a></Link>
                  </span>
                </div>
                
              </Form>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  </>
  )
}

export default Register
