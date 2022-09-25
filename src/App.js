
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  // adding our values at the top
  const title = "Welcome to the new blog";
  const likes = 50;
  return (
    <div className="App">
      <Navbar></Navbar>
    <Home></Home>
    </div>
  );
}

export default App;
