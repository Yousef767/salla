import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import './Components/scroll'
function App() {
  window.addEventListener('scroll',()=>{
    let nav = document.querySelector('nav');
    if(window.scrollY >= 50){
      nav.classList.add('activeNav');
    }else{
      nav.classList.remove('activeNav');
    }
  })
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
