
import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  return (
    <div className="App">
      {/* making our component with our content */}
          <div className="content">
                <h1>{title}</h1>
                <p className="likes">Liked {likes} times</p>

          </div>
    </div>
  );
}

export default App;
