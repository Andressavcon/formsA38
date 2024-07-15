import { useState } from 'react';

function SignUp() {
  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!signUp.name) newErrors.name = 'Name is required.';
    if (!signUp.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\S+.\S+/.test(signUp.email)) {
      newErrors.email = 'Email invalid.';
    }
    if (!signUp.password) {
      newErrors.password = 'Password is required.';
    } else if (signUp.password.length < 8) {
      newErrors.password = 'The password must have at least 8 characters.';
    }
    if (!signUp.confirmPassword) {
      newErrors.confirmPassword = 'Password is required.';
    } else if (signUp.confirmPassword !== signUp.password) {
      newErrors.confirmPassword = 'The passwords must match.';
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUp((prevSignUp) => ({
      ...prevSignUp,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="container">
      {submitted ? (
        <h1 className="success">Usuario cadastrado com sucesso!!!</h1>
      ) : (
        <div>
          <h1 className="title">Sign Up</h1>
          <form onSubmit={handleSubmit} className="form">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={signUp.name}
              placeholder="Enter your name here"
              onChange={handleChange}
            />
            {errors.name && <p className="errors">{errors.name}</p>}
            <br />
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="input"
              type="text"
              id="email"
              name="email"
              value={signUp.email}
              placeholder="Enter your email here"
              onChange={handleChange}
            />
            {errors.email && <p className="errors">{errors.email}</p>}
            <br />
            <div className="passwords">
              <div className="pass-1">
                <label className="label" htmlFor="password">
                  Password:
                </label>
                <input
                  className="input"
                  type="text"
                  id="password"
                  name="password"
                  value={signUp.password}
                  placeholder="Enter your password here"
                  onChange={handleChange}
                />
                {errors.password && <p className="errors">{errors.password}</p>}
              </div>
              <br />
              <div className="pass-2">
                <label className="label" htmlFor="confirmPassword">
                  Confirm Password:
                </label>
                <input
                  className="input"
                  type="text"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={signUp.confirmPassword}
                  placeholder="Confirm your password here"
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="errors">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
            <br />
            <button className="btnSignUp" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp;
