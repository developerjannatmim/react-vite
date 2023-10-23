import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import routes from './routes/routes';
import MasterLayout from './pages/Admin/MasterLayout';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/admin' name="Admin" render={(props) => <MasterLayout {...props}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;