import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Faq from './Component/Faq';
// import Signup from './Component/Signup';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Faq /> */}
    {/* <Signup /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
