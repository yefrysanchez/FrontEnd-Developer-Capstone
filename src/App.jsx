import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="bg-white min-h-screen" >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
