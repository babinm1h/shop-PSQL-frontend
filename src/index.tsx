import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { RootStore } from './store/RootStore';


interface IStoreContext {
  store: RootStore
}

export const StoreContext = React.createContext({} as IStoreContext)


ReactDOM.render(
  <StoreContext.Provider value={{ store: new RootStore() }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>
  ,
  document.getElementById('root')
);

