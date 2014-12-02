Hesigram.Views.ImagesIndex = Backbone.View.extend({
	
	initialize: function() {
		this.listenTo(this.collection, "sync", this.render)
	},
	
	events: {
		'submit form' : 'uploadFile',
		'cloudinarydone' : 'uploadFile'
	},

  template: JST['images/index'],
	
	render: function () {
		var content = this.template({
			images: this.collection
		});
		
		this.$el.html(content);
		
		//test image
		this.$el.find("#test").append($.cloudinary.image("dogno_uvzq61", { effect:'negate'}));
		//test file
		$('.upload_form').append($.cloudinary.unsigned_upload_tag("smidynat", 
		  { cloud_name: 'maybenaut' }));
		return this;
	},
	
	uploadFile: function(event,data) {
			event.preventDefault();	
			debugger
	}
});

