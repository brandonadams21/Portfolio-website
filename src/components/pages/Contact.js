import React, { useState } from "react";
import './Contact.css'
import styled from 'styled-components'

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Form = styled('form')({
    display: 'grid',
    textAlign: 'center',
    marginBottom: '1em',
    width:' 100%',
    height: '50%',
    padding: '20px',
})

const Input = styled('input')({
width: '50%',
height: '80px',
fontSize: '35px'
})

const TextArea = styled('textarea')({
    width: '50%',
    height: '80px',
    fontSize: '35px' 
})

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <Form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
        <h1>Let's get in touch!</h1>
      <div className="name">
          <p style={{paddingTop: '7%'}}>
        <Input
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
        </p>
      </div>
      <div className="email">
          <p style={{marginTop: '85px'}}>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        </p>
      </div>
      <div className="message">
      <p style={{marginTop: '85px'}}>
        <TextArea
          placeholder="Your message"
          name="message"
          required
        />
        </p>
      </div>
      <div className="submit">
        <button
          type="submit"
        >
          Send a message
        </button>
      </div>
    </Form>
  );
};

export default Contact;