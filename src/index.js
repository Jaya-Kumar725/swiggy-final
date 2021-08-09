import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Promotion from './components/Promotion';
import 'font-awesome/css/font-awesome.min.css';
import Left from './components/Left';
import Right from './components/Right';
import Center from './components/Center';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer'
// import Body from './components/Body';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Promotion />
    {/* <Body/> */}
    <Left/> 
     <Right/>
     <Center/> 
    <PreFooter/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


