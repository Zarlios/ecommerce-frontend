import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import "./cart.module.css"

const CartModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setShow(true)}>
        Cart
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="fullscreen-sm-end w-50 h-100 m-0 position-absolute end-0"
        aria-labelledby="cart-modal-title"
        contentClassName='rounded-0 border-0 h-100'
      >
        <Modal.Header closeButton>
          <Modal.Title id="cart-modal-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <Button variant="dark">Check Out</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartModal;