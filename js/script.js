// Script Jquery
/* --- barra de busca ---*/
$(document).on('click', '.search', function () {
  $('.search-bar').addClass('search-bar-active')
})

$(document).on('click', '.search-cancel', function () {
  $('.search-bar').removeClass('search-bar-active')
})

/*-- login / cadastro --*/
$(document).on('click', '.user, .already-acount', function () {
  $('.form').addClass('login-active').removeClass('sign-up-active')
})

$(document).on('click', '.sign-up-btn', function () {
  $('.form').addClass('sign-up-active').removeClass('login-active')
})

$(document).on('click', '.form-cancel', function () {
  $('.form').removeClass('login-active').removeClass('sign-up-active')
})

// Script JavaScript
function mostraEscondeMenu() {
  let navbar = document.getElementById('menu-principal')
  navbar.classList.toggle('navbarShow')
}
