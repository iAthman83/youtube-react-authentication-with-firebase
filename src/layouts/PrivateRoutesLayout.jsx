import { Outlet, useLocation, Navigate } from "react-router-dom";
import { projectAuth } from "../firebase/config";

const PrivateRoutesLayout = () => {
  const location = useLocation();

  return projectAuth.currentUser ? (
    <Outlet />
  ) : (
    // keep the previous navigation stack
    <Navigate to="/authentication" state={{ from: location }} replace />
  );
};

export default PrivateRoutesLayout;
