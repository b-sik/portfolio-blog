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
        context.formRef.current.reset()
      }}
    >
      {({ handleChange, success, error }) => (
        <>
          <Honeypot />
          {success && <p className="text-success">🎉 sent!</p>}
          {error && <p className="text-danger">😕 something went wrong</p>}
          <Form.Group className="mb-3" controlId="email">
            <Form.Label htmlFor="name">email</Form.Label>
            <Form.Control
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="your email..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <label htmlFor="message">message</label>
            <Form.Control
              as="textarea"
              name="message"
              id="message"
              rows="4"
              onChange={handleChange}
              placeholder="your message..."
            />
          </Form.Group>
          <div>
            <Button type="submit" variant="primary">
              submit
            </Button>
          </div>
        </>
      )}
    </NetlifyForm>
  )
}

export default ContactForm
