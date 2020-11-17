import React from "react";
import PropTypes from "prop-types";

import { Button, Form, Modal } from "react-bootstrap";

export default function AddAnimal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="modal-add-animal"
      backdrop="static"
      centered
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title id="modal-add-animal">Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
AddAnimal.propTypes = {
  onHide: PropTypes.object,
  onClose: PropTypes.object,
};
