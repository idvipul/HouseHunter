const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendfile('about.html')
})

 app.get('/mohan.html', function (req, res) {
   res.sendfile('mohan.html')
 })

 app.get('/aishwarya.html', function (req, res) {
     res.sendfile('aishwarya.html')
   })

 app.get('/udara.html', function (req, res) {
    res.sendfile('udara.html')
  })

 app.get('/savan.html', function (req, res) {
     res.sendfile('savan.html')
   })

 app.get('/larry.html', function (req, res) {
    res.sendfile('larry.html')
  })

 app.get('/vipul.html', function (req, res) {
     res.sendfile('vipul.html')
   })

 app.get('/img.png', function (req, res) {
   res.sendfile('img.png')
 })

app.listen(17002, function () {
  console.log('Example app listening on port 17002!')
})
