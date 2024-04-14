import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Provider  } from 'react-redux';
import { store } from './store/store';
<link rel="icon" type="logo.png" href="https://icones8.fr/icon/uhJt7xCFhwU6/icons8"></link> 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

);


reportWebVitals();
