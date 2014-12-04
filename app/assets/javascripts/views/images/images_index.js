Hesigram.Views.ImagesIndex = Backbone.View.extend({
	
	initialize: function() {
		this.listenTo(this.collection, "sync", this.render)
	},
	
	events: {
		'submit form' : 'uploadFile',
		'cloudinarydone' : 'uploadFile',
		'cloudinaryprogress' : 'thumbnails',
		'cloudinaryprogress' : 'progressBar'
	},

  template: JST['images/index'],
	
	render: function () {
		var content = this.template({
			images: this.collection
		});
		
		this.$el.html(content);
		
		//test image
		var that = this; 		
		this.collection.each(function (image){
			that.$el.find("#test").append(
				$.cloudinary.image(image.escape("public_id"),
				 { effect:'negate'}));
		});
		
		//test file
		$('.upload_form').html($.cloudinary.unsigned_upload_tag("smidynat", 
		  { cloud_name: 'maybenaut' }));
		
		return this;
	},
	
	uploadFile: function(event,data) {
		$('.upload_form').unsigned_cloudinary_upload("smidynat", 
		  { cloud_name: 'maybenaut', tags: 'browser_uploads' }, 
		  { multiple: true }
		);
	},
	
	thumbnails: function (event,data) {
		$('.thumbnails').append($.cloudinary.image(data.result.public_id, 
		    { format: 'jpg', width: 150, height: 100, 
			crop: 'thumb', gravity: 'face', effect: 'saturation:50' } ));
	},
	
	progressBar: function (event, data) {
	  $('.progress_bar').css('width', 
	    Math.round((data.loaded * 100.0) / data.total) + '%'); 
	}
});

