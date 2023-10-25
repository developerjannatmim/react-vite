import React from 'react';
import { Link } from 'react-router-dom';

const AddAdmin = () => {
  return (
    <div className="container-fluid px-4">
      <form>
        <div className="card mt-4">
          <div className="card-header">
            <h4>
              Admin List
              <Link
                to="admin/view"
                className="btn btn-primary btn-sm float-end"
              >
                View Admin
              </Link>
            </h4>
          </div>
          <div className="card-body">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active card-body border"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="form-group mb-3">
                  <label>Name</label>
                  <input type="text" name="name" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input type="text" name="email" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input type="text" name="password" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Address</label>
                  <input type="text" name="address" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Phone</label>
                  <input type="text" name="phone" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Photo</label>
                  <input type="file" name="photo" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label>Gender</label>
                  <select name="gender" className="form-control" required>
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label>Blood Group</label>
                  <select name="blood_group" className="form-control" required>
                    <option selected>Select a blood group</option>
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
                  </select>
                </div>
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;
