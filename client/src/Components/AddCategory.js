import React from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddCategory(props) {
  return (
    <>
      <Modal show={props.showModal}>
        <Modal.Header closeButton>
          <Modal.Title>
           Add new category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
           Save changes
          </Button>
          <Button variant="secondary">
           Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

AddCategory.propTypes = {}

export default AddCategory
