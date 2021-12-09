import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { productname } = router.query

  return <p>Product: {productname}</p>
}

export default Product