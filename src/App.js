import './App.css';
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router';
import About from './components/About'
import Products from './components/Products'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
