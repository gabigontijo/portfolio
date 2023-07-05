import './App.css';
import CardDev from './pages/CardDev';
import CardExhibition from './pages/CardExhibition';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route exact path="/dev" element={<CardDev />}/>
      <Route exact path="/" element={<CardExhibition />}/>
    </Routes>
  );
}

export default App;
