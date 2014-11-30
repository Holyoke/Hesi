Hesigram.Collections.Images = Backbone.Collection.extend({

  model: Hesigram.Models.Image,
  url: "/api/images",

  getOrFetch: function (id) {
    var images = this;

    var images;
    if (images = this.get(id)) {
      images.fetch();
    } else {
      images = new Hesigram.Models.Image({ id: id });
      images.fetch({
        success: function () { images.add(images); }
      });
    }

    return images;
  }

});

//global images
Hesigram.images = new Hesigram.Collections.Images ();