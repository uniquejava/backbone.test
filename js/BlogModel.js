define(['backbone'], function (Backbone) {
    var BlogModel = Backbone.Model.extend({
        //urlRoot: 'http://localhost:3000/blogs',
        idAttribute: 'slug'
    });

    return BlogModel;
});