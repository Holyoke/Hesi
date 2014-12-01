window.Hesigram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	
  initialize: function() {
		
		
		$.cloudinary.config({ 
			cloud_name: 'maybenaut',
			api_key: '635635438388839'
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
