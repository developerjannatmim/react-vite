import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../assets/css/style.css'

const Register = () => {
  const navigate = useNavigate();
  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setRegisterInput({...registerInput, [e.target.name]: e.target.value });
  }

  const submitRegister = (e) => {
    e.preventDefault();
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    }
    fetch(
      "http://127.0.0.1:8000/api/register",
      {
        body: JSON.stringify({
          ...data,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      },
      data
    )
      .then((response) => response.json())
      .then((response) => {
        if(response?.status === 200){
          localStorage.setItem('auth_token', response?.token);
          localStorage.setItem('auth_name', response?.username);
          console.info(response);
          Swal.fire('Success', response?.message, 'success');
          navigate("/dashboard/home");
        }else{
          Swal.fire('Warning', response?.message, "warning");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='col-md-6 register'>
          <div className='card'>
            <div className='card-header'>
              <h4>Register</h4>
            </div>
            <div className='card-body'>
              <form onSubmit={submitRegister}>
                <div className='form-group mb-3'>
                  <label>Full Name</label>
                  <input type='text' onChange={handleChange} value={registerInput.name}  name='name' className='form-control' />
                </div>
                <div className='form-group mb-3'>
                  <label>Email Address</label>
                  <input type='text' name='email' onChange={handleChange} value={registerInput.email} className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                  <label>Password</label>
                  <input type='text' name='password' onChange={handleChange} value={registerInput.password} className='form-control'/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
