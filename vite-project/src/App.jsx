
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import CartPage from './components/CartPage';
import Footer from './components/footer';
import Hero from './components/Hero';


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        
        <Routes>
         <Route path="/" element={ <>
                <Hero />
                <ProductCard />
              </>
            }
          />
          
          <Route path="/ProductCard" element={<ProductCard />} />
          <Route path="/CartPage" element={<CartPage />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

