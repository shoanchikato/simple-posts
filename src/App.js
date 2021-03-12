import './App.css';
import HelloWorldOne from './components/HelloWorldOne.js'
import { HelloWorldTwo, HelloWorldThree } from './components/HelloWorld.js'
import Posts from './components/Posts.js'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <HelloWorldOne />
      <HelloWorldTwo></HelloWorldTwo>
      <HelloWorldThree />
      <Posts />
    </div>
  );
}

export default App;





