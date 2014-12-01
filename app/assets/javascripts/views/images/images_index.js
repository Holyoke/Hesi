Hesigram.Views.ImagesIndex = Backbone.View.extend({
	
	initialize: function() {
		this.listenTo(this.collection, "sync", this.render)
	},

  template: JST['images/index'],
	
	render: function () {
		debugger
		var content = this.template({
			images: this.collection
		});
		
		this.$el.html(content);
		
		return this;
	},
	
	

});

