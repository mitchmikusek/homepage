import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Projects /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
