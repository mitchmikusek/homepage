import React from 'react';
import ReactDOM from 'react-dom';
import APPM from './APPM';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><APPM /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
