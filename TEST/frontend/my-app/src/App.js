import './App.css';
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { CardShow } from "CardShow";
function App() {
  return (
    <div>
      <Navbar />
      <CardShow/>
      <Footer/>
      </div>
  );
}

export default App;