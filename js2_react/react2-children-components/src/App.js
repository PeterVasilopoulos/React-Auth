import logo from './logo.svg';
import './App.css';
import Container from './views/Container';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Dashboard />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
