import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const LoginForm = {
      email: loginInput.email,
      password: loginInput.password,
    };

    fetch(
      'http://127.0.0.1:8000/api/login',
      {
        body: JSON.stringify({
          ...LoginForm,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
      LoginForm
    )
      .then((response) => response.json())
      .then((response) => {
        if (response?.status === 200) {
          localStorage.setItem('auth_token', response?.token);
          localStorage.setItem('auth_name', response?.username);
          localStorage.setItem('role', response?.role_id);
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
          navigate('/dashboard/home');
        } else if(response?.status === 401) {
          Swal.fire('Warning', response?.message, 'warning');
          navigate('/login');
        }
      });
  };

  return (
    <div className="login">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Login
                      </h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={submitLogin}>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            onChange={handleChange}
                            value={loginInput.email}
                            name="email"
                            placeholder="name@example.com"
                          />
                          <label>Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            onChange={handleChange}
                            value={loginInput.password}
                            name="password"
                            placeholder="Password"
                          />
                          <label>Password</label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="/register">Need an account? Sign up!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
