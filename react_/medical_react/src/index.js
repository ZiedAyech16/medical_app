import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import connexion from './user/store/reducers';
import medecinReducers from './medecins/store/reducers';
import changestatebetweenLogAndReg from './Accounts/store_reg_log/reducers';
import save_user_data_reducers from './Accounts/store_user_account/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const allReducers = combineReducers({
  auth:connexion,
  medecin:medecinReducers,
  etatlogin:changestatebetweenLogAndReg,
  user:save_user_data_reducers
})
const store = createStore(allReducers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
        
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
