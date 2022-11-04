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
import Login from './pages/login.page';
import Know from './pages/knowmore.page';
import Services from './pages/services.pages';
import Bday from './pages/bday.page';
import Anniversary from './pages/anniversary.pages';


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
          <Route path ="/login" exact element={<Login/>}/>
          <Route path ="/know" exact element={<Know/>}/>
          <Route path ="/services" exact element={<Services/>}/>
          <Route path ="/bday" exact element={<Bday/>}/>
          <Route path ="/anniversary" exact element={<Anniversary/>}/>
        </Routes>
      </Router>
      <Footer/>

    </div>
   
    </>
  );
}

export default App;
