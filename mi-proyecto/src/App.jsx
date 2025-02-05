import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardDetails from './pages/cardDetail';
import Sets from './pages/sets';
import Error404 from './components/error404';
import Home from './pages/home';

function App() {
  return (
    <Routes>
    <Route path="/card/:id" element={<CardDetails />} />
    <Route path="/sets" element={<Sets />} />
    <Route path="*" element={<Error404 />} />
    <Route path="/" element={<Home />} />
  </Routes>
  );
}

export default App;
