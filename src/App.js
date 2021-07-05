// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <Main />
      <Footer />

    </div>
  );
}

export default App;
