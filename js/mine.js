/**	1. PRELOADER 
 *****************************************************/

$(window).load(function() {
	
	  setTimeout(function() {
		$('.banner').fadeOut("slow");
			
		  setTimeout(function() {
		  $('#prelaoder').fadeOut("slow");
		  
			  setTimeout(function() {
				  // $('.bac').addClass('animated fadeInDown').fadeIn("slow");
			       $('#footer').fadeIn('slow');
						 $('#footer').fadeIn('slow');
			  }, 900);
		  }, 1000);	  
	  }, 1000);	
  
});


	$('.selectorClass2').mouseenter(function(){
		$(this).stop().fadeTo('slow',0.4);
		}).mouseleave(function(){
	$(this).stop().fadeTo('slow',1);
});

/**	3. AJAX SUBSCRIBE
 *****************************************************/
$(document).ready( function(){
	
	$('.subscribe-form').submit(function() {
		  var postdata = $('.subscribe-form').serialize();
		  $.ajax({
			  type: 'POST',
			  url: 'assets/subscribe.php',
			  data: postdata,
			  dataType: 'json',
			  success: function(json) {
				  if(json.valid == 0) {
					  $('.status-message').html(json.error);
					  $('.status-message').fadeIn('slow');
				  }
				  else {
					  $("input, textarea").val('');
					  $('.subscribe-form button').prop('disabled',true);
					  $('.status-message').html(json.message);
					   $('.status-message').fadeIn('slow');
				  }
			  }
			});
			return false;
		});
		
});

/**	4. AJAX CONTACT
 *****************************************************/
$(document).ready( function(){
	
	$('.contact-form form').submit(function() {
	
			$('.contact-form form .nameLabel').html('Name');
			$('.contact-form form .emailLabel').html('Email');
			$('.contact-form form .messageLabel').html('Message');
	
			var postdata = $('.contact-form form').serialize();
			$.ajax({
				type: 'POST',
				url: 'assets/sendmail.php',
				data: postdata,
				dataType: 'json',
				success: function(json) {
					if(json.nameMessage != '') {
						$('.contact-form form .nameLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.nameMessage + '</span>');
					}
					if(json.emailMessage != '') {
						$('.contact-form form .emailLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.emailMessage + '</span>');
					}
					if(json.messageMessage != '') {
						$('.contact-form form .messageLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.messageMessage + '</span>');
					}
					if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
							$('.contact-form .status-message-contact').addClass('animated fadeIn').html('EMAIL SENT SUCCESSFULLY.');
							$('input[type="text"],textarea').val('');
					}
				}
			});
			return false;
		});	
			
});


/**	5. GOOGLE ANALYTICS
 *****************************************************/
$(document).ready( function(){
	
	var google_analytics_id = '';  // Enter your ID here. like this: UA-2121212-22
		  
		  if(google_analytics_id != '') {
			  var _gaq = _gaq || [];
			  _gaq.push(['_setAccount', google_analytics_id]);
			  _gaq.push(['_trackPageview']);
			  
			  (function() {
			  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			  })();
		  }	
		  
});