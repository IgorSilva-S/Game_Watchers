/*Variáveis Navbar*/

   const navOpenBtn = document.querySelector('[data-navbar-open]');
   const navCloseBtn = document.querySelector('[data-navbar-close]')
   const navBar = document.querySelector('[data-navbar]');
   const overlay = document.querySelector('[data-overlay]');
   const siteName = document.querySelector('[data-name]')

   const nav = [navOpenBtn, navCloseBtn, overlay]

  for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('click', function(){
      navBar.classList.toggle('active')
    })
  }

  setInterval(() => {
    siteName.classList.add('anime-name')
    setTimeout(() => {
      siteName.classList.remove('anime-name')
    }, 400);
  }, 5000);