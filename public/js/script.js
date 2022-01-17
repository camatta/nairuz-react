// Carrossel geral
$(document).ready(function(){
  $(".owl-carousel.owl-default").owlCarousel({
    items: 3,
    nav: true,
    navText: ["<img src='/arrow-left.svg'>","<img src='/arrow-right.svg'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
  });
});

// Carrossel geral
$(document).ready(function(){
  $(".owl-carousel.carrossel-header").owlCarousel({
    items: 1,
    nav: true,
    navText: ["<img src='/arrow-left.svg'>","<img src='/arrow-right.svg'>"],
  });
});

//Open Modal Contato
$('.open-popup-contato').click(function(){
    $('.modal-overlay').show(1600);
})

//Close Modal Contato
$('.close-popup').click(function(){
    $('.modal-overlay').hide(1600);
})


// Clicks dinâmicos serviços
$('.nav-servicos button').click(function() {
  $('.nav-servicos button').removeClass('ativo');
  $('.nav-servicos .img-li').removeClass('ativo');
  $('.desc-servicos ul li').removeClass('li-ativo');
  $(this).addClass('ativo');
  $(this).prev().addClass('ativo');
});

$('#layout').click(function() {
  $('.desc-servicos ul li.layout').addClass('li-ativo');
  $('#servicos-home').addClass('bg-azul');
  $('#servicos-home').removeClass('bg-rosa');
  $('#servicos-home').removeClass('bg-roxo');
  $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
  $(this).addClass('ativo');
  $('#botoes-dinamicos .dinamico').removeClass('ativo2');
  $('#botoes-dinamicos .dinamico.layout').addClass('ativo2');
});

$('#website').click(function() {
  $('.desc-servicos ul li.website').addClass('li-ativo');
  $('#servicos-home').addClass('bg-rosa');
  $('#servicos-home').removeClass('bg-azul');
  $('#servicos-home').removeClass('bg-roxo');
  $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
  $(this).addClass('ativo');
  $('#botoes-dinamicos .dinamico').removeClass('ativo2');
  $('#botoes-dinamicos .dinamico.website').addClass('ativo2');
});

$('#midias-pagas').click(function() {
  $('.desc-servicos ul li.midias-pagas').addClass('li-ativo');
  $('#servicos-home').addClass('bg-roxo');
  $('#servicos-home').removeClass('bg-rosa');
  $('#servicos-home').removeClass('bg-azul');
  $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
  $(this).addClass('ativo');
  $('#botoes-dinamicos .dinamico').removeClass('ativo2');
  $('#botoes-dinamicos .dinamico.midias-pagas').addClass('ativo2');
});

$('#inbound').click(function() {
  $('.desc-servicos ul li.inbound').addClass('li-ativo');
  $('#servicos-home').addClass('bg-azul');
  $('#servicos-home').removeClass('bg-rosa');
  $('#servicos-home').removeClass('bg-roxo');
  $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
  $(this).addClass('ativo');
  $('#botoes-dinamicos .dinamico').removeClass('ativo2');
  $('#botoes-dinamicos .dinamico.inbound').addClass('ativo2');
});

$('#seo').click(function() {
  $('.desc-servicos ul li.seo').addClass('li-ativo');
  $('#servicos-home').addClass('bg-rosa');
  $('#servicos-home').removeClass('bg-azul');
  $('#servicos-home').removeClass('bg-roxo');
  $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
  $(this).addClass('ativo');
  $('#botoes-dinamicos .dinamico').removeClass('ativo2');
  $('#botoes-dinamicos .dinamico.seo').addClass('ativo2');
});