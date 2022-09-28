
import Navbar from "./Navbar";
import Home from "./Home";
// routes is the version 6
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  // adding our values at the top

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        {/* routes is the version 6 */}
        <Routes>
        
        <Route index element={<Home />} />

       
        </Routes>
    
      </div>
   
    </div>
    </Router>
  );
}

export default App;
