$(document).ready(function(){
	$('#submit').on('click', function(){
			if($('#result').contents().length == 0){
				for(var i = 1; i < 11; i++){ 
					(function(ind) {
						setTimeout(function(){
						$('#result').append('<span class="scale">'+' ' + ind + ' ' +'</span>');
						}, 500 + (100 * ind));
					})(i);
				}
			}
			$('#result-wrapper').addClass('active');
	});
});
