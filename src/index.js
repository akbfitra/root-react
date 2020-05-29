import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
=======
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollTop from './components/scrollTop'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
                <Provider store = {store}>
                  <Router>
                    <ScrollTop/>
                    <App />
                  </Router>
                </Provider>,
                document.getElementById('root')
              );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
