/* On reveal scroll for the quote on the page.*/

$(window).scroll(function() {
		$('#quote').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				//console.log('Added strech right class');
				// $(this).addClass("stretchRight");
				 $(this).css('visibility', 'visible');
				$(this).addClass("tossing");

			}
		});
	});