// 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import alamat from './alamat.module.css';

function Alamat() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // If the form is valid, you can proceed with form submission here.
      // For demonstration purposes, we'll just log a success message.
      console.log('Form submitted successfully!');
    }

    setValidated(true);
  };

  return (
    <div className={alamat.container}>
      <h4>Alamat Baru</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="5.5" controlId="validationCustom01">
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Alamat"
              
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Alamat.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="5.5" controlId="validationCustom03">
            <Form.Label>Kota</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Kota"
              
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Kota.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="5.5" controlId="validationCustom04">
            <Form.Label>Provinsi</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Provinsi"
              
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Provinsi.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="5.5" controlId="validationCustom02">
            <Form.Label>Alamat Lengkap</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Alamat Lengkap"
              
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Alamat Lengkap.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit Form
        </Button>
      </Form>
    </div>
  );
}

export default Alamat;
