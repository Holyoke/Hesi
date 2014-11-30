Hesigram.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'ImageIndex',
  },
	
	//just trying to show all the users images 
	ImageIndex: function (){
		
	},


});
