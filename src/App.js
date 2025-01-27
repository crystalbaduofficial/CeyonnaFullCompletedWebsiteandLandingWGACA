import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import ServicesPg from './pages/ServicesPg';
import Loading from './pages/Loading';
import LoadingScreen from './containers/loadingScreen/loadingScreen';
import WhoIsCeyonna from './components/WhoIsCeyonna/WhoIsCeyonna';
import LoadingFun from './pages/LoadingFun';
import TestimonialsPage from './pages/TestimonialsPage';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/*"
        element={<LoadingScreen />}
      />
      <Route path="/about" element={<WhoIsCeyonna />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/loadingfun" element={<LoadingFun />} />

    </Routes>
  </Router>
  );
}

export default App;