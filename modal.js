$(document).ready(function() {
  $.fancybox.defaults.animationEffect = "zoom-in-out";

  // если стоит MagicZoom, эта функция исправляет его поведение
  $(document).on('afterShow.fb', function() {
    if(typeof MagicZoom != 'undefined') {
      $('.mz-zoom-window').remove();
      MagicZoom.refresh();
    }
  });

  // Фикс для заказа в один клик
  $(document).on('click', '[data-quick-checkout]', function(event) {
    $.fancybox.close();
  });
});
