define(['underscore', 'backbone', 'BlogModel', 'BlogCollection'],
    function(_, Backbone, BlogModel, BlogCollection){
    var start = function () {
        console.log(_.VERSION);
        console.log(Backbone.VERSION);

        var blog = new BlogModel({slug: '1'});
        var blogs = new BlogCollection([blog]);

        blogs.fetch(); // GET '/blogs'
        blog.fetch(); // GET '/blogs/1'

    };

    return {
        start: start
    };
});