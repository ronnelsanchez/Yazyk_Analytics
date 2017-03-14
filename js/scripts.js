var wrap = $("#wrap");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }
  
});

$('.btn-group-tab .btn').on('click', function(e) {
  e.preventDefault();
  $(this)
    .addClass('active')
    .tab('show')
    .siblings('.btn')
      .removeClass('active');
});