
const configs = {}
	
	//steem configs
	configs.steem_account = "steemitblog";
	configs.steem_api = "https://api.steemit.com";
	configs.steem_app = "https://steemit.com/";
	//configs.steem_app = "https://busy.org/"; //to use busy.org
	//configs.steem_app = "https://steempeak.com/"; //to use steempeak.com
	configs.homepage_post_limit = 4;
	configs.blogpage_post_limit = 10;
	
	//social configs
	configs.facebook = "https://facebook.com/";
	configs.twitter = "https://twitter.com/";
	configs.linkedin = "https://linkedin.com/";
	configs.business = "https://www.peerquery.com/@" + configs.steem_account;
	
	//contact
	configs.email = "some@one.me";
	configs.tel = "+233 000 000"; 
	configs.fb = "facebook";
	
//load partials section comes after global configs have been set
$("#navbar").load("partials/navbar.html");		//load the navbar!!!
$("#footer").load("partials/footer.html");		//load the footer!!!


$( window ).on( "load", function() {
	
	function site_up() {
		
	
		//terms and condition modal and cookie
		function TermsAndConditions(){
			days=60;
			myDate = new Date();
			myDate.setTime(myDate.getTime()+(days*24*60*60*1000));
			document.cookie = 'TermsAndConditions=Accepted; expires=' + myDate.toGMTString();
		}
	
		var cookie = document.cookie.split(';')
			.map(function(x){ return x.trim().split('='); })
			.filter(function(x){ return x[0]==='TermsAndConditions'; })
			.pop();

		if(cookie && cookie[1]==='Accepted') {
			$(".cookie_popup").hide();
		} else {
			$('.cookie_popup').show();
		}

		$('.approveCookie').on('click', function(){
			TermsAndConditions();
			$('.cookie_popup').hide();
			return false;
		});
	
		//scroll animation
		$(".scroll").click(function(event){
			$('html, body').animate({scrollTop: '+=600px'}, 800);
		});
	}
	site_up();
	
});

