import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MasterLayout from './pages/Admin/MasterLayout';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/admin' render={(props) => <MasterLayout {...props}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;