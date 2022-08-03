import React, { useState } from "react";
import './Contact.css'
import styled from 'styled-components'


// const FORM_ENDPOINT = "/contact"; // TODO - fill on the later step

const ContactContainer = styled('div')({
    backgroundColor: '#1d1d1d',
})

const Form = styled('form')({
    maxWidth: '500px',
	padding: '10px 20px',
	background: '#1d1d1d',
	margin:' 10px auto',
	padding: '20px',
	borderRadius: '8px',
	fontFamily:' Georgia, "Times New Roman", Times, serif',
})

const Input = styled('input')({
    position: 'relative',
	display: 'block',
	padding: '19px 39px 18px 39px',
	color: '#8d8d8d',
	margin:' 0 auto',
	background: '#2b2b2b',
	fontSize: '18px',
	textAlign: 'center',
	fontstyle: 'normal',
	width: '100%',
	border: '1px solid #16a085',
	borderWidth: '1px 1px 3px',
	marginBottom: '10px',
})

const TextArea = styled('textarea')({
    position: 'relative',
	display: 'block',
	padding: '19px 39px 18px 39px',
	color: '#8d8d8d',
	margin:' 0 auto',
	background: '#2b2b2b',
	fontSize: '18px',
	textAlign: 'center',
	fontstyle: 'normal',
	width: '100%',
	border: '1px solid #16a085',
	borderWidth: '1px 1px 3px',
	marginBottom: '10px',
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
        <div className="thanksmsg" style={{color: 'white'}}>Thank you!</div>
        <div className="beInTouch" style={{color: 'white'}}>I'll be in touch soon.</div>
      </>
    );
  }

  return (
      <ContactContainer>
    <Form
    //   action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
    //   method="POST"
    //   target="_blank"
    >
        <h1 style={{color: 'white'}}>Let's get in touch!</h1>
      <div className="name">
        <Input
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
      </div>
      <div className="email" >
        <Input
          type="email"
          placeholder="Email"
          name="email"
          required
          
        />
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
        //   style={{
        //   height: '50px', 
        //   width: '100%', 
        //   color: 'transparent',
        //   position: 'relative',
        //   alignItems: 'center',
        //   textDecoration: 'none',
        //   letterSpacing: '2px',
        //   webkitTextStroke: '1px rgba(255, 255, 255, .5)',
        //   fontSize: '2em',
        //   textTransform: 'uppercase',
        //   lineHeight: '1em',
        //   backgroundColor: 'transparent',
        // }}
        >
          Send a message
        </button>
      </div>
    </Form>
    </ContactContainer>
  );
};

export default Contact;