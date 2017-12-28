import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainHeader from './component/main-header/index';
import MainFooter from './component/main-footer/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    [
    <MainHeader />, <MainFooter />
    ],
    document.getElementById('root'));
registerServiceWorker();
