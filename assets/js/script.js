/*Variáveis Navbar*/

   const navOpenBtn = document.querySelector('[data-navbar-open]');
   const navCloseBtn = document.querySelector('[data-navbar-close]')
   const navBar = document.querySelector('[data-navbar]');
   const overlay = document.querySelector('[data-overlay]');

   const nav = [navOpenBtn, navCloseBtn, overlay]

  for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('click', function(){
      navBar.classList.toggle('active')
    })
  }



















  /* navOpenBtn.addEventListener('click', function() {
    navBar.className = "navbar active"
   })
   
   navCloseBtn.addEventListener('click', function() {
       navBar.className = "navbar"
      })*/