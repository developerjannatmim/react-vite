import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../assets/css/style.css'

const Register = () => {
  // const [roles, setRoles] = useState();
  // const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    // role_id: '',
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
      // role_id: registerInput.role_id,
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
      }
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
        setErrors({});
      })
      .catch((error) => {
        console.error(error);
        setErrors(response?.errors);
      });

  // useEffect(() => {
  //   console.log({ roles });
  //   fetch(`http://127.0.0.1:8000/api/roles`, {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //     method: 'GET',
  //   })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.info(response);
  //     setRoles(response.data?.roles);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     setRoles(null);
  //   });
  // }, []);
  }

  return (
    <div className="image">
      <div className='container py-5'>
        <div className='col-md-6 register' style={{marginTop: '50px'}}>
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
                {/* <div className="col-md-6 form-group mb-3">
                  <label>User Role</label>
                  <select
                    name="role_id"
                    className="form-control"
                    onChange={handleChange}
                    value={registerInput.role_id}
                  >
                    <option>select role</option>
                    {roles?.map((roleItem) => {
                      return (
                        <option
                          key={roleItem.id}
                          value={roleItem.id}
                        >
                          {roleItem.name}
                        </option>
                      );
                    })}
                  </select>
                  <small className="text-danger">{errors.role_id}</small>
                </div> */}

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
            <div className="card-footer text-center py-3">
              <div className="small">
                <Link to="/login">Already have an account? Sign in!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
