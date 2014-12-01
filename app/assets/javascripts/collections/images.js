Hesigram.Collections.Images = Backbone.Collection.extend({

  model: Hesigram.Models.Image,
  url: "/api/images",

  getOrFetch: function (id) {
    var images = this;

    var image;
    if (!!image)) {
      image.fetch();
    } else {
      image = new Hesigram.Models.Image({ id: id });
      image.fetch({
        success: function () { images.add(images); }
      });
    }

    return image;
  }

});

//global images
Hesigram.Collections.images = new Hesigram.Collections.Images ();