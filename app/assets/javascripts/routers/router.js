Hesigram.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'ImageIndex',
  },
	
	//just trying to show all the users images 
	ImageIndex: function (){
		var view = Hesigram.Views.ImagesIndex({
			collection: Hesigram.images
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
