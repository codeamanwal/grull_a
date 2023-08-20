import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apple, facebook, google } from "../Assets";
import Box from "../SignUp/Box";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isFreelancer, setIsFreelancer] = useState(false);
  const [checkbox, setCheckboxChecked] = useState(false);
  const [isLogInSuccessful, setIsLogInSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState(""); // New state for password

  const handleLogIn = async () => {
    try {
      if (!email || !password || !checkbox) {
        setErrorMessage("Please fill in all the required fields.");
        return false;
      }

      const response = await fetch("https://35.154.4.80/api/v0/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setErrorMessage("");
      setIsLogInSuccessful(true);

      const responseData = await response.json();
      console.log("User signed up successfully!");
      console.log("User details:", responseData);

      return true;
    } catch (error) {
      console.error("Error occurred:", error);
      setIsLogInSuccessful(false);
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

  };

  
  
  

  return (
    <div className="w-96 bg-white rounded-2xl border border-black py-6 mx-auto">
		<form onSubmit={handleLogIn}>
      <div className="flex flex-col items-center">
        <p className="font-medium text-5xl font-spaceGrotesk text-purple-600">
          Log In
        </p>

        <div className="flex flex-col gap-y-4 mt-4">
          <Box
            logo={facebook}
            name="Continue with Facebook"
            color="#4285F4"
            textColor="blue-600"
            logoWidth="2rem"
            logoHeight="2rem"
          />

          <Box
            logo={google}
            name="Continue with Google"
            color="white"
            textColor="#63646B"
            logoWidth="2rem"
            logoHeight="2rem"
          />

          <Box
            logo={apple}
            name="Continue with Apple"
            color="white"
            textColor="#63646B"
            logoWidth="2rem"
            logoHeight="2rem"
          />
        </div>

        <div className="border-b-2 border-gray-300 w-80 m-2 font-GeneralSans"></div>

        <input
          type="email"
          placeholder="Email"
          className="py-2 px-4 border text-xs w-72 h-10 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

<input
          type="password" // New input type for password
          placeholder="Password"
          className="py-2 px-4 border text-xs w-72 h-10 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 text-indigo-600"
            checked={checkbox}
            onChange={() => setCheckboxChecked(!checkbox)}
          />
          <span className="text-black font-semibold text-sm m-2">
            I agree to the Grull User Policy Agreement
          </span>
        </div>

		<p className="text-red-500 font-medium text-center">{errorMessage}</p>
		{isLogInSuccessful ? (
        <p className="text-green-500 font-medium text-center mt-3">Sign up successful! You can now log in.</p>
      ) : null}

{isLogInSuccessful ? (
          <Link to={isFreelancer ? "/logIn?isFreelancer=true" : "/logIn?isFreelancer=false"}>
            <button
              className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-2 text-white font-medium text-2xl leading-10 font-GeneralSans"
            >
              Login
            </button>
          </Link>
        ) : (
            
          <button
            type="button" // Prevent default form submission behavior
            className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-2 text-white font-medium text-2xl leading-10 font-GeneralSans"
            onClick={handleLogIn}
          >
            LogIn
          </button>
        )}

        <p className="text-lg">
          Don't have an account?

          <a
									href="/signUpOption"
									className="text-purple-700"
								>
									 <span> Sign Up</span>
								</a>
          {/* <Link to="/SignUpOptionPage">
            <span className="text-purple-700"> Sign Up</span>
          </Link> */}
        </p>
      </div>
	  </form>
    </div>
  );
};

export default LogIn;
