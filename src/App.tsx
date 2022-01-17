import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/Home';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="App">
        <HomePage />
        {/* <div style={{ backgroundColor: 'red', width: '100%', height: '250px' }}>sarasa</div> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
