import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams(); //obj that contains every dynamic path segment defined in route definition

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
