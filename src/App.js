import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/chart" element={<ChartPage />} />
        <Route path="/tips" element={<TipsPage />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
