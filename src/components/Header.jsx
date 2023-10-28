import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import { useContext } from "react";
import CartContext from "../context/cart-context";

function Header({ setShowCart }) {
   const cartCtx = useContext(CartContext);

   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="/">
               My Store
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav me-auto">
               </ul>
               <div className="d-flex">
                  <a href="#" className="me-3"
                     onClick={() => setShowCart(true)}
                  >
                     <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                     <Badge bg="secondary" className="ms-1">
                        {cartCtx.items.length}
                     </Badge>
                  </a>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Header