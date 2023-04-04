import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  const playScroll = () => {
    const scrollElements = document.querySelectorAll(".js-scroll");

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      });
    };
    handleScrollAnimation();
  };
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY >= 50) {
      nav.classList.add("activeNav");
    } else {
      nav.classList.remove("activeNav");
    }
  });

  window.addEventListener("scroll", () => {
    playScroll();
  });

  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
