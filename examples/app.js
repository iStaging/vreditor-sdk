var express = require('express')
var compression = require('compression')
var history = require('connect-history-api-fallback')
var bodyParser = require('body-parser')
var app = express()

app.use(history())

// app.use(compression({filter: shouldCompress}))


//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))

// function shouldCompress (req, res) {
//   if (req.headers['x-no-compression']) {
//     // don't compress responses with this request header
//     return false
//   }
//
//   // fallback to standard filter function
//   return compression.filter(req, res)
// }

app.use(function (req, res, next) {
  var headers = req.headers
  if (headers['x-forwarded-proto'] && headers['x-forwarded-proto'] === 'http') {
    var url = 'https://' + req.headers.host + req.originalUrl
    return res.redirect(url)
  }
  next()
})

app.use(express.static('examples'))
app.use('/dist', express.static('dist'))

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
