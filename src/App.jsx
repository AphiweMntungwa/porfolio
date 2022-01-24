import "./App.css";
import Footer from "./Footer";

const App = ({ children }) => (
  <div className="App">
    {children}
    <Footer />
  </div>
);

export default App;
