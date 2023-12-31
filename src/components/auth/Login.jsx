import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setLoginInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const LoginForm = {
      email: loginInput.email,
      password: loginInput.password,
    };

    fetch('http://127.0.0.1:8000/api/login', {
      body: JSON.stringify({
        ...LoginForm,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then((response) => {
        if (response?.status === 200) {
          const ObjData = {
            auth_name: response?.username,
            email: response?.userEmail,
            gender: response?.gender,
            address: response?.address,
            blood: response?.blood,
            birthday: response?.birthday,
            phone: response?.phone,
            photo: response?.photo,
          };
          localStorage.setItem('auth_token', response?.token);
          localStorage.setItem('role', response?.role_id);
          localStorage.setItem('auth_info', JSON.stringify(ObjData));

          const userRole = localStorage.getItem('role');
          console.log(userRole);
          if (userRole === '1') {
            navigate('/admin/dashboard');
          } else if (userRole === '2') {
            navigate('/teacher/dashboard');
          } else if (userRole === '3') {
            navigate('/student/dashboard');
          } else if (userRole === '4') {
            navigate('/parent/dashboard');
          }
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
        } else if (response?.status === 401) {
          Swal.fire('Warning', response?.message, 'warning');
          navigate('/login');
        }
      });
  };

  return (
    <>
    <div className="login">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container" style={{marginTop: '60px'}}>
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
                            type="password"
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
                        <Link to="/register">Need an account? Sign up!</Link>
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
    </>
  );
};

export default Login;
