import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filter from './filter';
function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path='/' Component={Main}></Route>
        <Route path='/filter' Component={Filter}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
