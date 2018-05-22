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
const upload = require('./routes/upload')

app.use('/api/v1/tenant', tenant)
app.use('/api/v1/panoCollection', panoCollection)
app.use('/api/v1/panorama', panorama)
app.use('/api/v1/marker', marker)
app.use('/api/v1/upload', upload)

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

  // Point to istaging service.
  axios.defaults.baseURL = istagingService.url

  const TenantModule = require('./module/tenant')
  const tenantModule = new TenantModule()
  const resp = await tenantModule.login()
  // Add the token to header after login istaging service.
  axios.defaults.headers['tenant-token'] = resp.tenantToken

  // const PanoCollectionModule = require('./module/panoCollection')
  // const panoCollectionModule = new PanoCollectionModule()
  // const updatePanoCollection = await panoCollectionModule.update('pc_484ae9ab-7d11-4cd2-aa74-f4d0a2495573', {name: newPanoCollection1})
  // const deletePanoCollection = await panoCollectionModule.remove('pc_484ae9ab-7d11-4cd2-aa74-f4d0a2495573', {name: newPanoCollection1})
  // const panoCollection = await panoCollectionModule.get()
  // console.log('panoCollection: ', panoCollection)
  // const PanoramaModule = require('./module/panorama')
  // const panoramaModule = new PanoramaModule()
  // const panoramas = await panoramaModule.getById('pc_03118b8d-64be-43ec-88f0-c97e0287bcf8')
  // const newPanoramas = await panoramaModule.create([{name: '1', downloadUrl: 'www.url.com'}])
  // console.log('panoramas: ', panoramas)
  // console.log('panoramas: ', panoramas)
})
