import { Link, useNavigate } from 'react-router-dom';

// Name folder pages to show that the components inside of it will be loaded with the help of routing
function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* ahref loses context, or application-wide state as it sends a new request to the server */}
        {/* listens for clicks & prevents browser default of sending http request, based on the route definitions loads the proper content/components */}
        Go to <Link to="/products">the list of products</Link>
        <p>
          <button onClick={navigateHandler}>Navigate</button>
        </p>
      </p>
    </>
  );
}

export default HomePage;
