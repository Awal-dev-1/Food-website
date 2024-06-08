import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import UseTheContextProvider from './Components/Context/UseTheContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseTheContextProvider>
        <App />
      </UseTheContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
