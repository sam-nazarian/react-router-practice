import { useParams, Link } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams(); //obj that contains every dynamic path segment defined in route definition

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        {/* Default is relative to 'route' => relative to the route definitions, going previous goes to parent route (NOT sibling) */}
        {/* On path => router will look at currently active path & it will remove 1 segment from the path */}

        {/* the relative prop is only used for relative paths, it is innefected by absolute paths */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
