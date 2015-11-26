define(['backbone','BlogModel'], function (Backbone, BlogModel) {
    var BlogCollection = Backbone.Collection.extend({
        url: 'http://localhost:3000/blogs',
        model: BlogModel
    });

    return BlogCollection;
});