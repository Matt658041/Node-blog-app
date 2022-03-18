const express = require('express')
const path = require('path')
const app = new express()
app.use(express.static('public'))

app.listen(4000, ()=> {
    console.log('App listening on port 4000');

})
app.get('/',(req,res) => {
        res.sendFile(path.resolve(_dirname, 'pages/index.html'))
    })
app.get('/',(req,res) => {
        res.sendFile(path.resolve(_dirname, 'pages/about.html'))
    })
app.get('/',(req,res) => {
        res.sendFile(path.resolve(_dirname, 'pages/contact.html'))
    })
app.get('/',(req,res) => {
        res.sendFile(path.resolve(_dirname, 'pages/post.html'))
    })

