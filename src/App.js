
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Main from './Main';



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar/>
      <div className="flex-grow">
      <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
