// import LoginButton from "./Components/LoginButton"
// import { LogoutButton } from "./Components/LoginButton";
import React from 'react';
// import Greating from "./Components/Greeting"
import './App.css';
import { LoginControl } from "./Components/LoginControl";
// import { LogoutButton } from "./Components/LogoutButton";
class App extends React.Component{
  render() {
return  (
<div className='App'>

<LoginControl />
</div>
) 
  }
}


export default App;