$(window).on('load', function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
	
	if (popup.paused){ 
		popup.play(); 
		}
	  else{ 
		popup.pause();
		}
	}



	  $('body').on('hidden.bs.modal', '.modal', function () {
		$('video').trigger('pause');
		});

/******************************************************************************************************************************
Portfolio Filter
*******************************************************************************************************************************/ 
$(document).ready(function(){
	$('.btn').click(function(){
		// reset active class
		$('.btn').removeClass("active");
		// add active class to selected
		$(this).addClass("active");
		// return needed to make function work
		return false;
	});
	
	
	$(function() {
		// create an empty variable
		var selectedClass = "";
		// call function when item is clicked
		$(".btn").click(function(){
			// assigns class to selected item
			selectedClass = $(this).attr("data-rel");
			// fades out all portfolio items
			$(".portfolio li").fadeOut(300);
			// fades in selected category
			$(".portfolio li." + selectedClass).delay(300).fadeIn(300);
		});
	});

}); 

