$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find(".hover-click");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el
        .find(".list-a1")
        .not($next)
        .slideUp()
        .parent()
        .removeClass("open");
    }
  };
  var accordion = new Accordion($("#tabtxt"), false);
  $(".hover-click2").click(function() {
    $(this)
      .next(".list-a2")
      .slideToggle();
    $(this).toggleClass("open2");
  });
});
