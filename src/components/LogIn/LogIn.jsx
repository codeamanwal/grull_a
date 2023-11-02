/* eslint-disable */
import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import config from "react-global-configuration";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";

const LoginForm = () => {
  const fieldClassNames = "py-2 px-4 border text-xs w-72 h-10 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-2";
  const errorClassNames = "text-red-500 text-sm text-center";
  const [isIncorrectCredential, setIsIncorrectCredential] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isFreelancerParam = params.get("isFreelancer");
  const isFreelancer = isFreelancerParam === "true";
  const navigate = useNavigate();

  console.log("isFreelancer finally:", isFreelancer);
  const urlEndpoint = "https://api.dev.grull.tech/api/v0/auth/login";
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", checkbox: false }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          if (!values.checkbox) {
            errors.checkbox = "You must agree to Grull User Policy.";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const email = values.email;
          const password = values.password;

          const urlencodedData = new URLSearchParams();
          urlencodedData.append("username", email);
          urlencodedData.append("password", password);
          const result = await fetch(urlEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: urlencodedData,
          });
          setSubmitting(false);
          if (!result.ok && result.status == 400) {
            setIsIncorrectCredential(true);
            return false;
          }

          if (!result.ok) {
            const text = await result.text();
            console.error(`Error(${result.status}): ${text}.`);
            return false;
          }
          const responseData = await result.json();
          const accessToken = responseData["access_token"]
          const tokenType = responseData["token_type"]
          AuthService.setToken(accessToken, tokenType);
          const meApiUrl = `${config.get("BACKEND_URL")}/api/v0/users/me`;
          return fetch(
            meApiUrl, 
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
              },
            },
          )
          .then(response => response.json())
          .then(json => {
            AuthService.setUserMode(json.list_as_freelancer? AuthService.FREELANCER_MODE: AuthService.EMPLOYER_MODE);
            const isFreelancer = AuthService.isFreelancer();
            navigate("/LoggedInPage", { state: { isFreelancer, category: isFreelancer ? "FREELANCER" : "JOBS" } });
            return true;
          })
          .catch(error => console.error(error));
          
        }}>
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col items-center">
              <ErrorMessage name="email" component="div" className={errorClassNames} />
              <Field placeholder="Email Address" type="email" name="email" className={fieldClassNames} />
              <ErrorMessage name="password" component="div" className={errorClassNames} />
              <Field placeholder="Password" type="password" name="password" className={fieldClassNames} />
              <div className="flex items-center space-x-2">
                <Field name="checkbox" type="checkbox" className="form-checkbox h-6 w-6 text-indigo-600"></Field>
                <span className="text-black font-semibold text-sm m-2">I agree to the Grull User Policy Agreement</span>
              </div>
              <ErrorMessage name="checkbox" component="span" className={errorClassNames} />
              {isIncorrectCredential ? <span className={errorClassNames}>Incorrect credentials.</span> : null}
              <button
                type="submit"
                className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-2 text-white font-medium text-2xl leading-10 font-GeneralSans"
                disabled={isSubmitting}>
                Log In
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const LogIn = () => {
  return (
    <div className="w-96 bg-white rounded-2xl border border-black py-6 mx-auto">
      <div className="flex flex-col items-center">
        <p className="font-medium text-5xl font-spaceGrotesk text-purple-600">Log In</p>

        {/* <div className="flex flex-col gap-y-4 mt-4">
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
        </div> */}
        <div className="border-b-2 border-gray-300 w-80 m-2 font-GeneralSans" />
      </div>
      <LoginForm />
      <div className="flex flex-col items-center">
        <p className="text-lg">
          Don&apos;t have an account?
          <a href="/signUpOption">
            <span className="text-purple-700"> Sign Up</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
