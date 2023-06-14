document.getElementById('menu').addEventListener('click', function () {

    document.getElementById('navega').classList.toggle('mostrar');




})



lightbox.option({
    'wrapAround': true,
    'albumLabel': "Imagen %1 de %2",
    'positionFromTop': 0,
    'imageFadeDuration': 800,



})


document.getElementById('boton').addEventListener('click', function () {

    if (document.getElementById('miVideo').paused)
        document.getElementById('miVideo').play();

    else


        document.getElementById('miVideo').pause();



})

window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
  
    if (scrollPosition + windowHeight >= documentHeight) {
      footer.style.display = 'block'; // mostramos el footer cuando se llega al final
    } else {
      footer.style.display = 'none'; // ocultamos el footer en otros casos
    }
  });


