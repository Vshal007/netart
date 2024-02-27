import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='bg-gradient-to-t from-yellow-200 to-slate-50'>
      <Navbar />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
