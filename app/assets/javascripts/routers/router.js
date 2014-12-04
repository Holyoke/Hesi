Hesigram.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "demo" : 'ImageIndex',
  },
	
	//just trying to show all the users images 
	ImageIndex: function (){
		console.log("congrats you hit imageindex");
		Hesigram.Collections.images.fetch( {success: function() { console.log("images fetched") } });
		var view = new Hesigram.Views.ImagesIndex({
			collection: Hesigram.Collections.images
		});
		this._swapView(view);
	},
	
	_swapView: function (view) {
	  if (this.currentView) {
	    this.currentView.remove();
	  }

	  this.$rootEl.html(view.render().$el);
	  this.currentView = view;
	}
});
