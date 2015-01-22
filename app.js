$(document).ready(function(){
	$('.law').hide();
	$('.main h2').toggle(
		function() {
			$(this).next('.law').fadeIn();
		},
		function() {
          $(this).next('.law').fadeOut();
      }
		); //end of toggle
});