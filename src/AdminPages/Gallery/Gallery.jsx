import React, { useState } from 'react';
import Menu from './Menu';

import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';

const Gallery = () => {
  const [item, setItem] = useState(Menu);
  const getItem = (cat) => {
    var upadatedValue = Menu.filter((items) => {
      return items.category === cat;
    });
    setItem(upadatedValue);
  };

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="col">
        <div className="w-auto">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '280px' }}>
            <div className="card" style={{ marginTop: '-580px' }}>
              <div className="card-body">
                <div className="App py-4">
                  <div>
                    <button
                      className="btn btn-secondary"
                      style={{ marginLeft: '200px' }}
                      onClick={() => getItem('stuff')}
                    >
                      Stuff
                    </button>
                    <button
                      className="btn btn-secondary ml-2"
                      onClick={() => getItem('parent')}
                    >
                      Parents
                    </button>
                    <button
                      className="btn btn-secondary ml-2"
                      onClick={() => getItem('teacher')}
                    >
                      Teachers
                    </button>
                    <button
                      className="btn btn-secondary ml-2"
                      onClick={() => getItem('student')}
                    >
                      Students
                    </button>
                    <button
                      className="btn btn-secondary ml-2"
                      onClick={() => setItem(Menu)}
                    >
                      All
                    </button>
                  </div>
                  <div className="row container">
                    <br />
                    {item.map((data, index) => {
                      const { name, classes, category, image } = data;
                      return (
                        <>
                          <div className="col-md-4 col-10 col-sm-10 col-sm-4 py-3">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={image}
                                alt=""
                                style={{
                                  height: '200px'
                                }}
                              />
                              <h6 className="text-info text-uppercase pt-2 ml-2">
                                {name}
                              </h6>
                              <h6 className="text-secondary text-capitalize pt-2 ml-2">
                                {category}
                              </h6>
                              <b className="text-warning text-uppercase pt-2 ml-2">
                                {classes}
                              </b>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
