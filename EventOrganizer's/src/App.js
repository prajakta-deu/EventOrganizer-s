import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.components';
import Section from './components/section.components';
import About from './pages/about.pages';
import Home from './pages/home.pages';
import Team from './pages/team.pages';
import Register from './pages/register.pages';
import Header from './components/header.components';
import Navbar from './components/navbar.components';


function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path ="/about" exact element={<About/>}/>
          <Route path ="/" exact element={<Home/>}/>
          <Route path ="/team" exact element={<Team/>}/>
          <Route path ="/register" exact element={<Register/>}/>
        </Routes>
      </Router>
      <Footer/>

    </div>
   
    </>
  );
}

export default App;
