import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
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
      "http://127.0.0.1:8000/api/login",
      {
        body: JSON.stringify({
          ...LoginForm,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      },
      LoginForm
    )
      .then((response) => response.json())
      .then((response) => {
        if (response?.status === 200) {
          const ObjData = {
            auth_name: response?.username,
            role: response?.role_id,
            email: response?.userEmail,
            gender: response?.gender,
            address: response?.address,
            blood: response?.blood,
            birthday: response?.birthday,
            phone: response?.phone,
            photo: response?.photo,
          };
          localStorage.setItem("auth_token", response?.token);
          localStorage.setItem("role", response?.role_id);
          localStorage.setItem("auth_info", JSON.stringify(ObjData));
          console.info(response);
          const userRole = localStorage.getItem('role');
          console.log(userRole);
          // const userRole = JSON.parse(localStorage.getItem('auth_info'));
          // const io = userRole.role;
          
          Swal.fire("Success", response?.message, "success");
          if (userRole === '1') {
            navigate("/admin/home");
          } else if (userRole === '2') {
            navigate("/teacher/home");
          } else if (userRole === '3') {
            navigate("/student/home");
          } else if (userRole === '4') {
            navigate("/parent/home");
          }
        } else if (response?.status === 401) {
          Swal.fire("Warning", response?.message, "warning");
          navigate("/login");
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
