import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mockFetch from './api/mockFetch';

window.fetch = mockFetch;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
