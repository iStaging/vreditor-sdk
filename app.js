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

  // Here we just get istagingService token directly.
  // You should handle the security issue in your application.
  // ex: login your site, get your site token and use it to authenticate.
  const axios = require('axios')
  const {
    istagingService
  } = require('./config')

  // Point to istaging api service which setting in ./config.
  axios.defaults.baseURL = istagingService.url

  try {
    const TenantModule = require('./module/tenant')
    const tenantModule = new TenantModule()
    const resp = await tenantModule.login()
    axios.defaults.headers.common['tenant-token'] = resp.data.tenantToken
  } catch (error) {
    console.log('You need to enter correct account to login iStaging service first.')
    console.log(error)
  }
})
