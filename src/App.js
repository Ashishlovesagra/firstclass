import React from 'react';
import MyComponent from './Hoc Example/MyComponent';
import PureComp from './Pure Component/PureComp';



function App() {
  return (
    <div className="App">
      <h1>Pure Component Example</h1>
      <PureComp/>
      <h1>HOC Component Example</h1>
      <MyComponent />
    </div>
  );
}

export default App;
