import setAbout from "./pages/about";
import setHome from "./pages/home";
import setMenu from "./pages/menu";
import './style.css';

const navButtons = document.querySelectorAll('nav > button');
navButtons.forEach(button => {
  button.addEventListener('click', updatePage);
})

function updatePage(e){
  const page = e.target.textContent;
  const button = e.target;
  if (page === 'Home'){
    setHome();
  } else if (page === 'Menu'){
    setMenu();
  } else {
    setAbout();
  }

  navButtons.forEach(button => button.classList.remove('active'));
  button.classList.add('active');
}


window.onload = () => {
  setHome();
  document.querySelector('nav > button:first-child').classList.add('active');
}