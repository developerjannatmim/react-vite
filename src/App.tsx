import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const itemObj = {
  name: "Mim",
  age: 30,
  city: "kazipara, jessore",
}

const btnClick = () => {
  alert('hello world');
}

const App = () => {
  return (
    <div>
      <Header title="Learn reat" des="in details with mim" />
      <Hero item={itemObj} btn={btnClick}/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;
