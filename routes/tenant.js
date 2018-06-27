const router = require('express').Router()
const HTTPStatus = require('http-status')
const TenantModule = require('../module/tenant')

const tenantModule = new TenantModule()

router.post('/login', async (req, res) => {
  try {
    const resp = await tenantModule.login()
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

module.exports = router
