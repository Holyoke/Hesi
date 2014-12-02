Hesigram.Views.ImagesIndex = Backbone.View.extend({
	
	initialize: function() {
		this.listenTo(this.collection, "sync", this.render)
	},

  template: JST['images/index'],
	
	render: function () {
		var content = this.template({
			images: this.collection
		});
		
		this.$el.html(content);
		this.$el.find("#test").append($.cloudinary.image("dogno_uvzq61"));
		return this;
	},
	
	

});

