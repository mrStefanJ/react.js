import React from 'react';
import './App.scss';
import User from './component/user/User';
import ListReport from './component/repo/ListReport'
// import UserInput from './component/UserInput';

function App() {
  return (
    <div className="App">
      <div className="container">
          <User />
          <ListReport />
      </div>
    </div>
  );
}

export default App;
