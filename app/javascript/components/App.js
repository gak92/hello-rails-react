 import React from "react";
 import { Routes, Route } from 'react-router-dom';
 import Greeting from './Greeting';

 const App = () => {
  return (
    <>
      <h1>Welcome to React and Rails!</h1>
      <Routes>
        <Route exact path='/' element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
