import React from 'react';
import { useState } from 'react';
import RegisterApi from './Api.js';

export default function App() {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    name: { required: false },
    custom_error: null,
  };
  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(null);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
  });
  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  console.log('vbn', inputs);

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = initialStateErrors;
    let hasError = false;
    if (inputs.name == '') {
      errors.name.required = true;
      hasError = true;
    }
    if (inputs.email == '') {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.password == '') {
      errors.password.required = true;
      hasError = true;
    }
    if (!hasError) {
      setLoading(true);
      // RegisterApi(inputs).then((response) => {
      //   storeUserData(response.data.idToken);
      //   console.log(response);
      // });
      // .catch((err) => {
      //   if (err.response.data.error.message == 'EMAIL_EXISTS') {
      //     setErrors({
      //       ...errors,
      //       custom_error: 'Already this email has been registered!',
      //     });
      //   } else if (
      //     String(err.response.data.error.message).includes('WEAK_PASSWORD')
      //   ) {
      //     setErrors({
      //       ...errors,
      //       custom_error: 'Password should be at least 6 characters!',
      //     });
      //   }
      // })

      // .finally(() => {
      //   setLoading(false);
      // });
      // sendin api request
      console.log('cvbn', hasError);
    }

    setErrors(errors);
  };

  return (
    <div>
      <h1>register page </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" onChange={handleInput} /> <br />
          {errors.name.required ? (
            <div className="text-danger">Name is required.</div>
          ) : null}
          <div className="form-group">
            <input type="email" name="email" onChange={handleInput} />
            <br />
            {errors.email.required ? (
              <div className="text-danger">email is required.</div>
            ) : null}
          </div>
          <div className="form-group">
            <input type="password" name="password" onChange={handleInput} />
            <br />
            {errors.password.required ? (
              <div className="text-danger">password is required.</div>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <div className="text-danger">
            {errors.custom_error ? <p>{errors.custom_error}</p> : null}
          </div>
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary " role="status">
                <span className="loader"></span>
              </div>
            </div>
          ) : null}

          <input
            style={{ background: '#0069c0', color: '#fff' }}
            type="submit"
            className="btn btn-login float-right"
            disabled={loading}
            value="Register"
          />
        </div>
        <div className="clearfix"></div>
        <div className="form-group">
          Already have account ? Please
          {/* <Link to="/login">Login</Link> */}
        </div>
      </form>
    </div>
  );
}
