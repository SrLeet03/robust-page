import logo from './logo.svg';
import './App.css';
import Header from './components/header' 
import HighRes from './components/high-res'
import Footer from './components/footer'
import EmailUs from './components/email-us'

function App() {
  return (
    <div className="App">
        <Header/>
        <HighRes/>
        <EmailUs/>
        <Footer/>
    </div>
  );
}

export default App;
