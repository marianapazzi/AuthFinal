import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CharacterPage from './pages/CharacterPage';
import SubmitPassport from './pages/SubmitPassport';

export default function App(){
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/characterPage" element={<CharacterPage/>}/>
        <Route path="/submitPassport" element={<SubmitPassport/>}/>
      </Routes>
      </Router>
    </div>
  )
}