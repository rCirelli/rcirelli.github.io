import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <main className="bg-slate-900 text-slate-300 w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
