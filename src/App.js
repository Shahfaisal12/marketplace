
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesPage from './pages/routesPage/RoutesPage.jsx'
// import Layout from './components/elements/Layout'

function App() {
  return (
    <div className="App">
      {/* <Layout /> */}
      <RoutesPage />
      <drawer />
    </div>
  );
}

export default App;
