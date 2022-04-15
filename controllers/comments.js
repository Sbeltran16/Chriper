const Comment = require("../models/comment");
const Chirp = require("../models/chirp")

function index(req, res){
    const chirp = Chirp.findById(req.params.id)
    Comment.find({}, function(err, comments){
        res.render("comments/index", {
            comments,
            chirp,
            title: "Chirper | Comments"
        })
    })
}

function newComment(req, res){
    const chirp = Chirp.findById(req.params.id)
    res.render('comments/new', {
        chirp,
        title: 'Chirper | New Comment'
    })
}

function create(req, res){
    const commentData = req.body
    commentData.chirpId = req.params.id
    const comment = new Comment(commentData)
    console.log(comment)
    comment.save(function(err){
        if(err) return res.render('comments/new', {title: "Chirper | Create a Comment"});
        res.redirect(`/Chirper/chirp/${req.params.id}`);
    })
}

function show(req, res){
    Comment.findById(req.params.id, function(err, comments){
        const chirp = Chirp.findById(req.params.id)
        res.render('comments/show', {
            comments,
            chirp,
            title: 'Chirper | View Comments'
        })
    })
}



module.exports = {
    index,
    new: newComment,
    create, 
    show
}


