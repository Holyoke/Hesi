Hesigram.Views.ImagesIndex = Backbone.View.extend({
	
	initialize: function() {
		//add event listeners here
	},

  template: JST['images/index'],
	
	render: function () {
		var content = this.template({
			images: this.collection
		});
		
		this.$el.html(content);
		
		return this;
	},
	
	

});

