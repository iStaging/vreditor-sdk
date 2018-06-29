const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.use('/dist', express.static('dist'))

const tenant = require('./routes/tenant')
const panoCollection = require('./routes/panoCollection')
const panorama = require('./routes/panorama')
const marker = require('./routes/marker')
const customTag = require('./routes/customTag')
const productTag = require('./routes/productTag')
const credential = require('./routes/credential')

app.use('/api/v1/tenant', tenant)
app.use('/api/v1/panoCollection', panoCollection)
app.use('/api/v1/panorama', panorama)
app.use('/api/v1/marker', marker)
app.use('/api/v1/customTag', customTag)
app.use('/api/v1/productTag', productTag)
app.use('/api/v1/credential', credential)

app.get('/', (req, res) => {
  const url = `/en/index.html`
  res.redirect(url)
})

app.listen(process.env.PORT || 3000, async () => {
  console.log('Example app listening on port 3000!')

  const axios = require('axios')
  const {
    istagingService
  } = require('./config')
  axios.defaults.baseURL = istagingService.url
})
