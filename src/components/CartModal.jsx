import { useContext } from "react";
import { Button, Modal } from 'react-bootstrap';
import CartContext from "../context/cart-context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';




const CartModal = ({ show, handleClose }) => {
   const cartCtx = useContext(CartContext);

   const cartItems = cartCtx.items.map((item) => (
      <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
         <div>
            <h5>{item.name}</h5>
            <p className="text-muted">{`Rp${item.price.toLocaleString('id-ID')}`}</p>
         </div>
         <div className="d-flex align-items-center">
            <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => cartCtx.removeItem(item.id)}>
               <FontAwesomeIcon icon={faMinus} />
            </Button>
            <span>{item.amount}</span>
            <Button variant="outline-secondary" size="sm" className="ms-2" onClick={() => cartCtx.addItem({ ...item, amount: 1 })}>
               <FontAwesomeIcon icon={faPlus} />
            </Button>
         </div>
      </div>
   ));

   const cartTotal = `Rp${cartCtx.totalAmount}`;

   return (
      <div>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Tambah Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {cartItems}
               <hr />
               <div className="d-flex align-items-center justify-content-between">
                  <h5>Total:</h5>
                  <h5>{cartTotal}</h5>
               </div>

            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose} >
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </div >
   );
};

export default CartModal;