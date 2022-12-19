
import React from 'react';
import Navbar  from './Components/layout/Navbar';
import './App.css';
class App extends React.Component{
  render() {


return  (
<div className='App'>
<Navbar title = {5} />
</div>
)
//React.createElement(
// 'div', {className:"app" },
// React.createElement('h1', null, "Hello From React")\

// )
//       <div className="App">
//      <h1>Hello from React</h1>
//      <h2>Goodbye
//      </h2>
//       </div>
  
  }
}


export default App;