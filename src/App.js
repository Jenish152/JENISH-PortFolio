import './App.scss';
import { Header,Introduction,Footer,Work,Testimonial,Skills } from './container';
import  Navbar  from './components/Navbar/Navbar';
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Introduction/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  );
}

export default App;
