const express = require('express')
const path = require('path')
const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(4000, ()=> {
    console.log('App listening on port 4000');

})
app.get('/',(req,res) => {
        res.render('index');
    })
app.get('/',(req,res) => {
        //res.sendFile(path.resolve(_dirname, 'pages/about.html'))
        res.render('about');
    })
app.get('/',(req,res) => {
       // res.sendFile(path.resolve(_dirname, 'pages/contact.html'))
       res.render('contact');
    })
app.get('/',(req,res) => {
        //res.sendFile(path.resolve(_dirname, 'pages/post.html'))
        res.render('post')
    })

