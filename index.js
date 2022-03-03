import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './ThemeProvider';


ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider>
         <App />        
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// Wrapping the component tree inside the provider.
// here the children is App component.