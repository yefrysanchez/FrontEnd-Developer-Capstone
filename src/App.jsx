import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <ScrollToTop />
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
