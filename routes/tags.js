var express = require('express');
var router = express.Router();
var Article = require("../models/article");
var Comment = require("../models/comment");
var Tag = require("../models/tag");


router.get('/', function(req, res, next) {
    Tag.find({}, (err, tags) =>{
        if(err)
            return next(err);
        return res.render("allTags",{tags});
    });
});

router.get('/:tagname', function(req, res, next){
    let tagname = req.params.tagname;
    console.log('HERE');
    Article.find({tags: {$in:[tagname]}}, (err, articles) =>{
        if(err)
            return next(err);
        return res.render("allArticle", {articles});
    });
});
module.exports = router;