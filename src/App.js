import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MainPage from './components/mainPage';
import ContactUs from './components/contactUs';



function App() {
  return (
   <div>
    <div id='home-page-top-portion' className="bg-center  bg-no-repeat bg-blend-multiply bg-slate-800 h-screen">
      <Navbar />
      <MainPage />
    </div>
    <ContactUs />
   </div>
  );
}

export default App;