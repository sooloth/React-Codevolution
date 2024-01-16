import './App.css';
import React,{Component} from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Hello/> */}
      {/* <Hello/> */}
      {/* <Hello/> */}
      <Greet className="Ac"/>
      <Greet className="Bc"/>
      <Greet className="Cc"/>
      <Welcome/>
    </div>
    );
  }
}

export default App;
