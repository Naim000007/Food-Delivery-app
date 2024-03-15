
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StateProvider } from '../src/Context/StateProvider.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import reducer from './Context/Reducer.jsx';

// Define your initial state here
const initialState = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);
