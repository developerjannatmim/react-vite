import React from 'react';
import { Route } from 'react-router-dom';
import '../../assets/scss/styles.scss';
import '../../assets/js/scripts.js';
import Header from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import Footer from '../Admin/Footer';
import Dashboard from '../Admin/Dashboard';
import routes from '../../routes/routes';

const MasterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Header />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
              {routes.map((route, i) => {
                return (
                  route.component && (
                    <Route
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => {
                        <route.component {...props} />;
                      }}
                    />
                  )
                );
              })}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
