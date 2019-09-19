import React from 'react';
import './App.css';
import { Route,BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { Provider } from "react-redux";
import { store } from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' component={Layout}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
