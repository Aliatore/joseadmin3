import React from 'react';
import ReactDOM from 'react-dom';
import Prelogin from './Prelogin';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Prelogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
