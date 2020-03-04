'use strict';
var bucket = [];
$.get('data/blog.json').done(function (data) {
    addToCard(data);
});

// console.log(bucket);

function addToCard(data) {
    // loop through data
    // add each blog post to a bucket
    var result = "";
    data.forEach(function (blogPost) {

        // result += '<div class="card w-75"><div>';
        result += '<div class="card-body"></div>';
        result += '<h5 class="card-title" >' + blogPost.title + '</h5>';
        result += '<p> ' + blogPost.date + '</p>';
        result += '<p>' + blogPost.content + '</p>';
        result += '<a class="btn btn-primary">Expand</a>';
    });
    // print all html in bucket to the page
    return $('main').html(result);

}

