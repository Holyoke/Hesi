Hesigram.Views.ImagesIndex = Backbone.View.extend({
	
	initialize: function() {
		this.listenTo(this.collection, "sync", this.render)
	},
	
	events: {
		'submit form' : 'uploadFile',
		'cloudinarydone' : 'render',
		'cloudinaryprogress' : 'progressBar'
	},

  template: JST['images/index'],
	
	render: function () {
		var content = this.template({
			images: this.collection
		});
		
		this.$el.html(content);
		
		//test image
		
		// <%= cl_image_tag(public_id,
		// :width => 300, :height => 300, :crop => :fill, :radius => 20,
		// :format => :png,
		// :border => {:width => 2, :color => "grey"},
		// :transformation => [
		// 	{:effect => "shadow"},
		// 	{:effect =>  ""}] ) %>
		var that = this; 		
		this.collection.each(function (image){
			that.$el.find("#test").append(
				$.cloudinary.image(image.escape("public_id"),
					{ width: 300, height:300, crop: "fill", radius: 20,
						format: "png", 
						border: {width: 2, color: "#FCF0AD"},
						effect:''}));
			});
		
		//test file
		$('.upload_form').html($.cloudinary.unsigned_upload_tag("smidynat", 
		  { cloud_name: 'maybenaut' }));
		
		return this;
	},
	
	thumbnails: function (event,data) {
		$('.thumbnails').append($.cloudinary.image(data.result.public_id, 
		    { format: 'jpg', width: 150, height: 100, 
			crop: 'thumb', gravity: 'face', effect: 'saturation:50' } ));
	},
	
	progressBar: function (event, data) {
		debugger
	  $('.progress_bar').css('width', 
	    Math.round((data.loaded * 100.0) / data.total) + '%'); 
	}
});

