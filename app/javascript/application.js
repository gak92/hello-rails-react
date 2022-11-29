// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// function App() {
//   return (
//     <h1>Hello React and Rails!</h1>
//   );
// }

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);