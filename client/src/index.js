import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var movies = [
  {title: 'Mean Girls', id: 1},
  {title: 'Hackers', id: 2},
  {title: 'The Grey', id: 3},
  {title: 'Sunshine', id: 4},
  {title: 'Ex Machina', id: 5},
];

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));