import { Link, useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  };
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to<Link to="/products">The list of profucts</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default Home;
