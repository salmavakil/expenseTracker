import React from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddCategory(props) {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
           Sample Modal Heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
           This is the sample text for our Modal
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
           Save changes
          </Button>
          <Button variant="secondary">
           Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  )
}

AddCategory.propTypes = {}

export default AddCategory
