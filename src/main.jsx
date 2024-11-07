// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MyContextProvider } from './context/ContextApi';


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <MyContextProvider>
        <App />
    </MyContextProvider>,
    </BrowserRouter>
);

