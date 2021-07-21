
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ModalButton = ({dato}) => {
  
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)}>Details</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Body: {dato.body}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Title: {dato.title}</Modal.Body>
        <Modal.Body>userId: {dato.userId}</Modal.Body>
      </Modal>
      
    </>
  );
  }
