Hesigram.Collections.Images = Backbone.Collection.extend({

  model: Hesigram.Models.Image,

});

//global images
Hesigram.images = new Hesigram.Collections.Images ();