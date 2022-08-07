const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/', (req, res)=>{
    res.render('index.ejs')
})

router.get('/terrestrial', (req, res)=>{
    res.render('create-post.ejs', {community: 'terrestrial'})
})

router.get('/rainforest', (req, res)=>{
    res.render('create-post.ejs', {community: 'rainforest'})
})

router.get('/ocean', (req, res)=>{
    res.render('create-post.ejs', {community: 'ocean'})
})

router.get('/desert', (req, res)=>{
    res.render('create-post.ejs', {community: 'desert'})
})

router.post('/terrestrial/feed', async(req, res)=>{
    const post = new Post({
        name: req.body.name,
        post: req.body.post,
        title: req.body.title,
        community: 'terrestrial'
    })

    if(req.body.charity == 1)
    {
        post.tag = 'charity'
    }
    else if (req.body.support == 1)
    {
        post.tag = 'support'
    }
    else{
        post.tag = 'trivia'
    }
    try{
        const newPost = await post.save()
        res.render('feed.ejs', {community: 'terrestrial', posts: await Post.find({community: 'terrestrial'})})
    }catch{
        res.render('404.html')
    }
    
})

router.post('/rainforest/feed', (req, res)=>{
    res.render('feed.ejs', {community: 'rainforest'})
})

router.post('/ocean/feed', (req, res)=>{
    res.render('feed.ejs', {community: 'ocean'})
})

router.post('/desert/feed', (req, res)=>{
    res.render('feed.ejs', {community: 'desert'})
})

module.exports = router