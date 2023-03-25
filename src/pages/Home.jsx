import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Click to go to dashboard</h1>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
    </>
  );
};

export default Home;
