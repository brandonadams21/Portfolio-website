import React, { useState } from "react";
import "./Contact.css";
import Airtable from "airtable";
import styled from "styled-components";

const ContactGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
});

const DivCol = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "20px",
});

export default function Contact() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      var base = new Airtable({ apiKey: "keyxSTqLDEz2AWFJI" }).base(
        "appi3ey74toVdwQ6Q"
      );
      base("Teams").create(
        [
          {
            fields: {
              name: formData.name,
              message: formData.message,
              email: formData.email,
            },
          },
        ],
        function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function(record) {});
        }
      );
      setMessage("Success");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error");
    }
  };

  if (message !== "") {
    return (
      <>
        <div
          className="thanksmsg"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            paddingTop: "200px",
          }}
        >
          Thank you!
        </div>
        <div
          className="beInTouch"
          style={{ color: "white", textAlign: "center", fontSize: "30px" }}
        >
          I'll be in touch soon.
        </div>
      </>
    );
  }

  return (
   

        <div className="App">
          <div className="contactHeader">Let's get in touch!</div>
          <div class="contain">
      <div class="wrapper">
        <div class="contacts">
          <ul>
            <li>I am interested in job opportunites, freelance, and networking.</li>
          </ul>
        </div>
          <form
            className="input-form"
            id="contact"
            name="contact"
            required
            onSubmit={sendData}
          >
            
            <p>
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={handleInput}
              />
            </p>
            <p>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleInput}
              />
            </p>
            <p class="full-width">
              <textarea
                name="message"
                placeholder="Message"
                onChange={handleInput}
                cols="30"
                rows="7"
              />
            </p>
            <p class="full-width">
              <button type="submit" className="msgBtn">
                Send a message
              </button>
              {message}
            </p>
          </form>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <div className="contactHeader">Let's get in touch!</div>
    //     <form
    //         className="input-form"
    //         id="contact"
    //         name="contact"
    //         required
    //         onSubmit={sendData}
    //     >
    //       <ContactGrid>
    //       <DivCol style={{gridColumn: '1', gridRow: '1'}}>
    //         <input
    //             name="name"
    //             type="text"
    //             placeholder="Name"
    //             required
    //             onChange={handleInput}
    //         />
    //         </DivCol>
    //         <DivCol style={{gridColumn: '2', gridRow: '1'}}>
    //         <input
    //             name="email"
    //             type="email"
    //             placeholder="Email"
    //             required
    //             onChange={handleInput}
    //         />
    //         </DivCol>
    //         </ContactGrid>
    //         <textarea
    //             name="message"
    //             placeholder="Message"
    //             onChange={handleInput}
    //         />
    //        <button
    //   type="submit"
    //   className="msgBtn"
    // >
    //   Send a message
    // </button>
    //         {message}
    //     </form>
    // </div>
  );
}
