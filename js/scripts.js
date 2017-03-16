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

var nowDate = new Date();
var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);


$('#dateOnNewProject').datepicker({
    startDate: today,
    todayHighlight: true,
    toggleActive: true
});