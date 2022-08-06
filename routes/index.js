const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index.ejs')
})

router.get('/terrestrial', (req, res)=>{
    res.render('land', {community: 'terrestrial'})
})

router.get('/rainforest', (req, res)=>{
    res.render('land', {community: 'rainforest'})
})

router.get('/ocean', (req, res)=>{
    res.render('land', {community: 'ocean'})
})

router.get('/desert', (req, res)=>{
    res.render('land', {community: 'desert'})
})

module.exports = router