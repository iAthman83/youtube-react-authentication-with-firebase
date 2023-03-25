import { projectAuth } from "../firebase/config";

let error = null;

const logout = async () => {
  error = null;

  try {
    await projectAuth.signOut();
  } catch (err) {
    error = err.message;
  }
};

const userLogout = () => {
  return { logout, error };
};

export default userLogout;
