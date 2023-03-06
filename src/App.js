import React from 'react';
import MyComponent from './Hoc Example/MyComponent';
import PureComp from './Pure Component/PureComp';
import './App.css';



function App() {
  return (
    <>
    <div className="App">
      <div className="hoc">
      <h1>HOC Example</h1>
      <MyComponent />
      </div>
      <div className="pure">
        <h1>Pure Component Example</h1>
        <PureComp/>
      </div>
    </div>
    </>
  );
}

export default App;
