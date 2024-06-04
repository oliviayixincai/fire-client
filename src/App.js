import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SavingsTips from './SavingsTips/SavingsTips';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/chart" element={<ChartPage />} /> */}
        <Route path="/tips" element={<SavingsTips />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
