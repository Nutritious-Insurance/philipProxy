import React from 'react';
import ReactDOM from 'react-dom';
import ColourPreview from '../philipService/client/productPage/components/ColourPreview';
import {} from '../johnService/client/src/index';
import '../johnService/client/public/style.css';
import {} from '../javService/client/src/index';

const [,, productId] = window.location.pathname.split('/');

ReactDOM.render(<ColourPreview productId={productId} />, document.getElementById('philipApp'));
// No ReactDOM.render() call required for John's component
// No ReactDOM.render() call required for Jav's component
