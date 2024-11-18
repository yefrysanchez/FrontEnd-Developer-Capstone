import "./App.css";
import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
