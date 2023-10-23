import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import User from './components/User';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Classroom from './components/Classroom';

const App = () => {

  return (
    <div className='d-flex'>
      <div className='w-auto'>
        <Sidebar/>

      </div>
      <div className='col overflow-auto'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}></Route>
          <Route path='/users' element={<User/>}></Route>
          <Route path='/class' element={<Classroom/>}></Route>
          <Route path='/class' element={<Classroom/>}></Route>
        </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </div>
  );
};

export default App;