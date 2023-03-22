import { useState } from "react";
import LoginFormComponent from "../components/LoginFormComponent";
import SignUpFormComponent from "../components/SignUpFormComponent";

const Home = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <>
      {toggleForm ? (
        <LoginFormComponent toggleSignUp={handleToggle} />
      ) : (
        <SignUpFormComponent toggleLogin={handleToggle} />
      )}
    </>
  );
};

export default Home;
