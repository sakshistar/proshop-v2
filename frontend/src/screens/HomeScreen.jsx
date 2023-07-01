import { Row , Col} from "react-bootstrap"
import product from "../products"
import ProductCard from "../components/ProductCard"


const HomeScreen = () => {
// card ko pass krna hai yaha

  return (
    <>
    <h1>Latest Products</h1>
    <Row>
    {product.map((product)=>(
        <Col key={product._id} sm ={12} md={6} lg={4} xl={3}>
            <ProductCard product={product}/>
        </Col>
    ))}
    </Row>
    </>
  )
}

export default HomeScreen