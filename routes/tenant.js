const axios = require('axios')

const router = require('express').Router()
const HTTPStatus = require('http-status')
const TenantModule = require('../module/tenant')

const tenantModule = new TenantModule()

router.post('/login', async (req, res) => {
  try {
    const username = req.body.username
    const password = req.body.password
    const resp = await tenantModule.login(username, password)
    // save the istaging tenant token at your backend service, don't let it show on your website.
    axios.defaults.headers.common['tenant-token'] = resp.data.tenantToken
    // use tenantId identify your user from sdk request headers.
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

module.exports = router
