window.Hesigram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	
  initialize: function() {
		
		
		//global variables in application.html.erb
		$.cloudinary.config({ 
			cloud_name: CName,
			api_key: CKey
		});
		
		
		new Hesigram.Routers.Router({
			$rootEl: $("#content")
		});
		
		Backbone.history.start();
  }
	
};

$(document).ready(function(){
  Hesigram.initialize();
});
