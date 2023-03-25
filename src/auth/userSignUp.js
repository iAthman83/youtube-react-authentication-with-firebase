import { projectAuth } from "../firebase/config";

let error = null;

const signUp = async (email, password, displayName) => {
  error = null;

  try {
    // sign up with email and password
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!res) {
      throw new Error("Something went wrong, try again!");
    }

    // include the display name in the user profile
    await res.user.updateProfile({ displayName: displayName });

    error = null;

    console.log(res.user);
  } catch (err) {
    error = err.message;
    console.log(error);
  }
};

const userSignUp = () => {
  return { signUp, error };
};

export default userSignUp;
