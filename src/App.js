import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MainPage from './components/mainPage';
import ContactUs from './components/contactUs';
import Team from './components/ourTeam';
import doodle from './assets/doodles.jpg';
import Footer from './components/footer';



function App() {
  return (
   <div >
    <div id='home-page-top-portion' className="h-screen bg-green-500" style={{scrollSnapStop:'always'}}>
      <Navbar />
      <MainPage />
    </div>
    <div id='home-page-top-portion' className="h-screen bg-yellow-200 "style={{scrollSnapStop:'always'}}>
      <Team />
    </div>
    <div className="h-screen bg-purple-500" style={{scrollSnapStop:'always'}}>
      <ContactUs />
    </div>
    <Footer />
   </div>
  );
}

export default App;
