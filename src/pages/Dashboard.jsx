import { useNavigate } from "react-router-dom";
import userLogout from "../auth/userLogout";
import { projectAuth } from "../firebase/config";

const Dashboard = () => {
  const navigate = useNavigate();
  const { error, logout } = userLogout();

  const user = projectAuth.currentUser.displayName;

  const handleLogout = async () => {
    if (!error) {
      await logout();
      navigate("/");
    }
  };
  return (
    <>
      <h1>Welcome back, {user}</h1>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default Dashboard;
