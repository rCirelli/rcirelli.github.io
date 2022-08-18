import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './index.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen">
      <Header />
      <main className="bg-slate-900 text-slate-300 w-full min-h-full font-montserrat">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
