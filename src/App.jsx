import "./App.css";
import Layout from "./layout/Layout";

import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
