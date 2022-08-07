const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/', (req, res)=>{
    res.render('index.ejs')
})

router.get('/terrestrial/feed', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'terrestrial', posts: await Post.find({community: 'terrestrial'})})
    }
    catch{
        res.render('404.html')
    }
    
})

router.get('/terrestrial/feed/charity', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'terrestrial', posts: await Post.find({community: 'terrestrial', tag:'charity'})})
    }
    catch{
        res.render('404.html')
    }
    
})

router.get('/terrestrial/feed/support', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'terrestrial', posts: await Post.find({community: 'terrestrial', tag:'support'})})
    }
    catch{
        res.render('404.html')
    }
    
})

router.get('/terrestrial/feed/trivia', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'terrestrial', posts: await Post.find({community: 'terrestrial', tag:'trivia'})})
    }
    catch{
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

router.get('/rainforest/feed/charity', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'rainforest',posts: await Post.find({community: 'rainforest', tag: 'charity'})})
    }
   catch{
    res.render('404.html')
   }
})

router.get('/rainforest/feed/support', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'rainforest',posts: await Post.find({community: 'rainforest', tag: 'support'})})
    }
   catch{
    res.render('404.html')
   }
})

router.get('/rainforest/feed/trivia', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'rainforest',posts: await Post.find({community: 'rainforest', tag: 'trivia'})})
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

router.get('/ocean/feed/charity', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'ocean',posts: await Post.find({community: 'ocean', tag:'charity'})})
    }
    catch{
        res.render('404.html')
    }
})

router.get('/ocean/feed/support', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'ocean',posts: await Post.find({community: 'ocean', tag:'support'})})
    }
    catch{
        res.render('404.html')
    }
})

router.get('/ocean/feed/trivia', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'ocean',posts: await Post.find({community: 'ocean', tag:'trivia'})})
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

router.get('/desert/feed/charity', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'desert',posts: await Post.find({community: 'desert', tag:'charity'})})
    }
    catch{
        res.render('404.html')
    }
    
})

router.get('/desert/feed/support', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'desert',posts: await Post.find({community: 'desert', tag:'support'})})
    }
    catch{
        res.render('404.html')
    }
    
})

router.get('/desert/feed/trivia', async(req, res)=>{
    try{
        res.render('feed.ejs', {community: 'desert',posts: await Post.find({community: 'desert', tag:'trivia'})})
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

    if(req.body.flexRadioDefault == 'charity')
    {
        post.tag = 'charity'
    }
    else if (req.body.flexRadioDefault == 'support')
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

    if(req.body.flexRadioDefault == 'charity')
    {
        post.tag = 'charity'
    }
    else if (req.body.flexRadioDefault == 'support')
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

    if(req.body.flexRadioDefault == 'charity')
    {
        post.tag = 'charity'
    }
    else if (req.body.flexRadioDefault == 'support')
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

    if(req.body.flexRadioDefault == 'charity')
    {
        post.tag = 'charity'
    }
    else if (req.body.flexRadioDefault == 'support')
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

router.get('/terrestrial/post', (req, res)=>{
    res.render('create-post.ejs', {community: 'terrestrial'})
})

router.get('/ocean/post', (req, res)=>{
    res.render('create-post.ejs', {community: 'ocean'})
})

router.get('/rainforest/post', (req, res)=>{
    res.render('create-post.ejs', {community: 'rainforest'})
})

router.get('/desert/post', (req, res)=>{
    res.render('create-post.ejs', {community: 'desert'})
})

module.exports = router