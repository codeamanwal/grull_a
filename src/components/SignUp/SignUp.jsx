/* eslint-disable */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link, useLocation} from 'react-router-dom';
import config from 'react-global-configuration';
import getQueryParams from '../utils';
import { openNotificationWithIcon } from '../../utils/openNotificationWithIcon';

const RegistrationState = ({isEmailAlreadyInUse, isSignUpSuccessful, errorClassNames}) => {
  if (isEmailAlreadyInUse) return <span className={errorClassNames}>This email is already in use.</span>;
};

RegistrationState.propTypes = {
  isEmailAlreadyInUse: PropTypes.bool,
  isSignUpSuccessful: PropTypes.bool,
  errorClassNames: PropTypes.string,
};

const SignUpForm = () => {
  const fieldClassNames = 'py-2 px-4 border text-xs w-72 h-10 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-2';
  const errorClassNames = 'text-red-500 text-sm text-center';
  const [isEmailAlreadyInUse, setIsEmailAlreadyInUse] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const urlEndpoint = `${config.get('BACKEND_URL')}/api/v0/auth/register`;
  const queryParams = getQueryParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isFreelancerParam = params.get('isFreelancer');
  const isFreelancer = isFreelancerParam === 'true';

  console.log('isFreelancer final:', isFreelancer);
  return <div>
    <Formik
      initialValues={{email: '', password: '', checkbox: false}}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        }
        if (!values.checkbox) {
          errors.checkbox = 'You must agree to Grull User Policy.';
        }
        return errors;
      }}
      onSubmit={async (values, {setSubmitting}) => {
        const email = values.email;
        const password = values.password;
        const requestData = {
          'email': email,
          'password': password,
          'list_as_freelancer': isFreelancer,
        };
        const result = await fetch(
            urlEndpoint,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestData),
            },
        );
        setSubmitting(false);
        if (!result.ok && result.status == 400) {
          setIsEmailAlreadyInUse(true);
          openNotificationWithIcon('error','Email is already in use')
          setIsSignUpSuccessful(false);
          return false;
        }

        if (!result.ok) {
          const text = await result.text();
          console.error(`Error(${result.status}): ${text}.`);
          openNotificationWithIcon('error',text)
          setIsSignUpSuccessful(false);
          return false;
        }
        setIsEmailAlreadyInUse(false);
        openNotificationWithIcon('success','User Signed up successfully!');
        setIsSignUpSuccessful(true);
        return true;
      }}
    >
      {({isSubmitting}) => (
        <Form>
          <div className="flex flex-col items-center">
            <ErrorMessage name="email" component="div" className={errorClassNames}/>
            <Field placeholder="Email Address" type="email" name="email" className={fieldClassNames}/>
            <ErrorMessage name="password" component="div" className={errorClassNames}/>
            <Field placeholder="Password" type="password" name="password" className={fieldClassNames}/>
            <div className="flex items-center space-x-2">
              <Field name="checkbox" type="checkbox" className="form-checkbox h-6 w-6 text-indigo-600"></Field>
              <span className="text-black font-semibold text-sm m-2">
            I agree to the Grull User Policy Agreement
              </span>
            </div>
            <ErrorMessage name="checkbox" component="span" className={errorClassNames}/>
            {isSignUpSuccessful && (
              <div className="text-green-500 text-lg text-center my-2">
                Sign up successful! You can now login.
              </div>
            )}
            <button
  type="submit"
  className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-2 text-white font-medium text-2xl leading-10 font-GeneralSans"
  disabled={isSubmitting}
>
  {isSignUpSuccessful ? (
    <Link to={`/login?isFreelancer=${isFreelancer}`} className="text-white no-underline">
      Login
    </Link>
  ) : (
    "Sign Up"
  )}
</button>
            <RegistrationState isEmailAlreadyInUse={isEmailAlreadyInUse} isSignUpSuccessful={isSignUpSuccessful} errorClassNames={errorClassNames}/>
          </div>
        </Form>
      )}
    </Formik>
  </div>;
};




const SignUp = () => {
  const [email, setEmail] = useState('');
  const [checkbox, setCheckboxChecked] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState(''); // New state for password
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isFreelancerParam = params.get('isFreelancer');
  const isFreelancer = isFreelancerParam;

  const handleSignUp = async () => {
    
    try {
      if (!email || !password || !checkbox) {
        setErrorMessage('Please fill in all the required fields.');
        return false;
      }

      const urlEndpoint = `${config.get('BACKEND_URL')}/api/v0/auth/register`;
      const response = await fetch(
          urlEndpoint,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setErrorMessage('');
      
      setIsSignUpSuccessful(true);

      const responseData = await response.json();
      openNotificationWithIcon('success','User signed up successfully!')
      return true;
    } catch (error) {
      console.error('Error occurred:', error);
      openNotificationWithIcon('error','Something went wrong')
      setIsSignUpSuccessful(false);
      return false;
    }
  };

  return (
    <div className="w-96 bg-white rounded-2xl border border-black py-6 mx-auto">
      <div className="flex flex-col items-center">
        <p className="font-medium text-5xl font-spaceGrotesk text-purple-600">
          Sign Up
        </p>

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
        <div className="border-b-2 border-gray-300 w-80 m-2 font-GeneralSans"/>
      </div>
      <SignUpForm />
      <div className="flex flex-col items-center">
        <p className="text-lg">
          Already have an account?
          <Link to={`/login?isFreelancer=${isFreelancer}`}
          >
            <span className="text-purple-700"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
