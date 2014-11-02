$(document).ready(function() {
	var active;
	$(".picture").on("click", function(){
		if (active) {
			active.hide();
		}
		active = $(this).find(".block,.textforpicture").show();
	});
});