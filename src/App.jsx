import { Button } from "react-bootstrap"
import './App.css'
import ProductCard from "./components/ProductCard"
import { useEffect, useState } from "react"
import getProducts from "./services/getProducts"
import LoadingSpinner from "./components/LoadingSpinner"
import AddProduct from "./components/AddProduct"
import EditProduct from "./components/EditProduct"
import Header from "./components/Header"
import CartModal from "./components/CartModal"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showEditProduct, setShowEditProduct] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [data, setData] = useState(null)


  const fetchProducts = async () => {
    setLoading(true)
    const data = await getProducts();
    setProducts(data)
    setLoading(false)
  }

  const handleClose = () => {
    setShowAddProduct(false)
    setShowEditProduct(false)
  }

  const onCreate = () => {
    fetchProducts()
    handleClose()
  }

  const onUpdate = () => {
    fetchProducts()
    handleClose()
  }

  const handleSetData = (data) => {
    setData(data)
    setShowEditProduct(true)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
      <Header setShowCart={setShowCart} />
      <div className="container">
        <div className="d-flex justify-content-between mt-5">
          <h1 className="title-product">My Products</h1>
          <Button variant="primary"
            onClick={() => setShowAddProduct(true)}
          >
            Tambah Product
          </Button>
        </div>
        <div className="product-list mt-5">
          {loading && <LoadingSpinner />}
          {!loading && products.map(product => {
            return <ProductCard product={product} key={product.id} fetchProducts={fetchProducts} handleSetData={() => handleSetData(product)} />
          })}
        </div>
        <AddProduct show={showAddProduct} handleClose={handleClose} onCreate={onCreate} />
        <EditProduct show={showEditProduct} handleClose={handleClose} onUpdate={onUpdate} data={data} />
        <CartModal show={showCart} handleClose={() => setShowCart(false)} />
      </div>
    </>
  )
}

export default App
