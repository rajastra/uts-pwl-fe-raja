import { useContext } from "react";
import deleteProduct from "../services/deleteProduct"
import './ProductCard.css'
import CartContext from "../context/cart-context";

function ProductCard({ product, fetchProducts, handleSetData }) {
   const cartCtx = useContext(CartContext);
   const formattedPrice = `Rp${product.price.toLocaleString('id-ID')}`;


   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: product.id,
         name: product.name,
         price: product.price,
         amount: amount
      });
   };

   async function handleDelete() {
      await deleteProduct(product.id)
      fetchProducts()
   }

   return (
      <div className="product-card">
         <img src={product.img} alt={product.name} />
         <p>{product.name}</p>
         <p>{formattedPrice}</p>
         <p>Stock : {product.stock}</p>
         <div className="d-flex gap-3">
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <button className="btn btn-primary" onClick={handleSetData}>Edit</button>
            <button className="btn btn-success" onClick={() => addToCartHandler(1)}>Add to Cart</button>
         </div>
      </div>
   )
}

export default ProductCard