Hesigram.Views.ImagesIndex = Backbone.View.extend({
	
	initialize: function() {
		this.listenTo(this.collection, "sync", this.render)
		this.listenTo(this.collection, "cloudinarydone", this.hello)
	},
	
	events: {
		'submit form' : 'uploadFile',
		'cloudinaryprogress' : 'progressBar'
	},

  template: JST['images/index'],
	
	render: function () {
		var content = this.template({
			images: this.collection
		});
		
		this.$el.html(content);
		
		var that = this; 		
		this.collection.each(function (image){
			that.$el.find("#test").append(
				$.cloudinary.image(image.escape("public_id"),
					{ radius: 20, width: 300, height:300, crop: "fill", 
						format: "png", class: "thumbnails",
						border: {width: 2, color: "#FCF0AD"},
						effect:'pixelate_faces'}));
			});
		
		//test file
		// $('.upload_form').html($.cloudinary.unsigned_upload_tag("smidynat",
		//   { cloud_name: 'maybenaut' }));
		//
		return this;
	},
	
	thumbnails: function (event,data) {
		$('.thumbnails').append($.cloudinary.image(data.result.public_id, 
		    { format: 'jpg', width: 150, height: 100, 
			crop: 'thumb', gravity: 'face', effect: 'saturation:50' } ));
	},
	
	progressBar: function (event, data) {
	  $('.progress_bar').css('width', 
	    Math.round((data.loaded * 100.0) / data.total) + '%'); 
	},
	
	hello: function(event, data) {
		alert("doen!");
	}
});

