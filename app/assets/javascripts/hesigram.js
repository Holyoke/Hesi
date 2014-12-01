window.Hesigram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	
  initialize: function() {
		new Hesigram.Routers.Router({
			$rootEl: $("#content")
		});
		
		Backbone.history.start();
  }
	
};

$(document).ready(function(){
  Hesigram.initialize();
});
