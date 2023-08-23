import React from 'react';
import {apple, facebook, google} from '../Assets';
import Box from '../SignUp/Box';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const LoginForm = () => {
  const fieldClassNames = 'py-2 px-4 border text-xs w-72 h-10 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-2';
  const errorClassNames = 'text-red-500 text-sm text-center';
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
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({isSubmitting}) => (
        <Form>
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
            <button
              type="submit"
              className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-2 text-white font-medium text-2xl leading-10 font-GeneralSans"
              disabled={isSubmitting}
            >
             Log In
            </button>
            <p className="text-lg">
          Don&apos;t have an account?
              <a
                href="/signUpOption"
                className="text-purple-700"
              >
                <span> Sign Up</span>
              </a>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  </div>;
};

const LogIn = () => {
  return (
    <div className="w-96 bg-white rounded-2xl border border-black py-6 mx-auto">
      <LoginForm />
    </div>
  );
};

export default LogIn;
