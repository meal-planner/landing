(function () {
  $(document).ready(function () {
    var backgrounds = [];
    for (var i = 1; i <= 15; i++) {
      backgrounds.push('bg-' + i);
    }
    $('#hero').addClass(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
  });
})();

