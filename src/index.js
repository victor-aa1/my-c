import React from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom';

import App from './App'
import {UserProvider} from './context/User-Context'
import {ProductsProvider} from './context/Products'
import './index.scss'

// Use hashrouter to route links


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);
// {/* <React.StrictMode> */}
// {/* <BrowserRouter>
//   <UserProvider>
//     <ProductsProvider>
//       <App />
//     </ProductsProvider>
//   </UserProvider>
// </BrowserRouter>
// </React.StrictMode> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

