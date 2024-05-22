import setAbout from "./pages/about";
import setHome from "./pages/home";
import setMenu from "./pages/menu";

const navButtons = document.querySelectorAll('nav > button');
navButtons.forEach(button => {
  button.addEventListener('click', updatePage);
})

function updatePage(e){
  const page = e.target.textContent;
  if (page === 'Home'){
    setHome();
  } else if (page === 'Menu'){
    setMenu();
  } else {
    setAbout();
  }
}

window.onload = () => setHome();