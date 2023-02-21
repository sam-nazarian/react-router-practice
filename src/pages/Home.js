import { Link } from 'react-router-dom';

// Name folder pages to show that the components inside of it will be loaded with the help of routing
function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* ahref loses context, or application-wide state as it sends a new request to the server */}
        {/* listens for clicks & prevents browser default of sending http request, based on the route definitions loads the proper content/components */}
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}

export default HomePage;
