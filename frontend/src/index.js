import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/header.css';
import './css/home.css';
import './css/styles.css';
import './css/datepicker3.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
