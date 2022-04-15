import React from "react"

import { NetlifyForm, Honeypot } from "react-netlify-forms"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const ContactForm = () => {
  return (
    <NetlifyForm
      name="Contact"
      action="/thanks"
      honeypotName="bot-field"
      onSuccess={(response, context) => {
        console.log("Successfully sent form data to Netlify Server")
        context.formRef.current.reset()
      }}
    >
      {({ handleChange, success, error }) => (
        <>
          <Honeypot />
          {success && <p>Thanks for contacting us!</p>}
          {error && (
            <p>
              Sorry, we could not reach servers. Because it only works on
              Netlify, our GitHub demo does not provide a response.
            </p>
          )}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              sx={{ variant: "forms.input" }}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              type="text"
              name="message"
              id="message"
              rows="4"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </>
      )}
    </NetlifyForm>
    //   <form
    //   name="contact"
    //   method="post"
    //   data-netlify="true"
    //   data-netlify-honeypot="bot-field"
    // >
    //   <Form.Group className="mb-3" controlId="email">
    //     <Form.Label>email</Form.Label>
    //     <Form.Control
    //       name="email"
    //       type="email"
    //       placeholder="your email"
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="message">
    //     <Form.Label>message</Form.Label>
    //     <Form.Control
    //       name="message"
    //       as="textarea"
    //       rows={3}
    //       placeholder="your message"
    //     />
    //   </Form.Group>
    //   <Button name="submit" variant="primary" type="submit">
    //     send
    //   </Button>
    // </form>
  )
}

export default ContactForm
