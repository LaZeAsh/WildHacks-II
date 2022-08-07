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

router.get('/terrestrial/feed', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'terrestrial', posts: await Post.find({community: 'terrestrial'})})
    }catch{
        res.render('404.html')
    }
    
})

router.get('/rainforest/feed', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'rainforest',posts: await Post.find({community: 'rainforest'})})
    }
   catch{
    res.render('404.html')
   }
})

router.get('/ocean/feed', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'ocean',posts: await Post.find({community: 'ocean'})})
    }
    catch{
        res.render('404.html')
    }
})

router.get('/desert/feed', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'desert',posts: await Post.find({community: 'desert'})})
    }
    catch{
        res.render('404.html')
    }
    
})


router.post('/terrestrial/feed', async(req, res)=>{
    const post = new Post({
        name: req.body.name,
        post: req.body.post,
        title: req.body.title,
        community: 'terrestrial'
    })

    if(req.body.flexRadioDefault.value == 'charity')
    {
        post.tag = 'charity'
    }
    else if (req.body.flexRadioDefault.value == 'support')
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

router.post('/rainforest/feed', async(req, res)=>{
    const post = new Post({
        name: req.body.name,
        post: req.body.post,
        title: req.body.title,
        community: 'rainforest'
    })

    if(req.body.flexRadioDefault.value == 'charity')
    {
        post.tag = 'charity'
    }
    else if (req.body.flexRadioDefault.value == 'support')
    {
        post.tag = 'support'
    }
    else{
        post.tag = 'trivia'
    }
    try{
        const newPost = await post.save()
        res.render('feed.ejs', {community: 'rainforest', posts: await Post.find({community: 'rainforest'})})
    }catch{
        res.render('404.html')
    }
})

router.post('/ocean/feed', async(req, res)=>{
    const post = new Post({
        name: req.body.name,
        post: req.body.post,
        title: req.body.title,
        community: 'ocean'
    })

    if(req.body.flexRadioDefault.value == 'charity')
    {
        post.tag = 'charity'
    }
    else if (req.body.flexRadioDefault.value == 'support')
    {
        post.tag = 'support'
    }
    else{
        post.tag = 'trivia'
    }
    try{
        const newPost = await post.save()
        res.render('feed.ejs', {community: 'ocean', posts: await Post.find({community: 'ocean'})})
    }catch{
        res.render('404.html')
    }
})

router.post('/desert/feed', async(req, res)=>{
    const post = new Post({
        name: req.body.name,
        post: req.body.post,
        title: req.body.title,
        community: 'desert'
    })

    if(req.body.flexRadioDefault.value == 'charity')
    {
        post.tag = 'charity'
    }
    else if (req.body.flexRadioDefault.value == 'support')
    {
        post.tag = 'support'
    }
    else{
        post.tag = 'trivia'
    }
    try{
        const newPost = await post.save()
        res.render('feed.ejs', {community: 'desert', posts: await Post.find({community: 'desert'})})
    }catch{
        res.render('404.html')
    }
})

module.exports = router