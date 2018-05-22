const router = require('express').Router()
const HTTPStatus = require('http-status')
const TenantModule = require('../module/tenant')

const tenantModule = new TenantModule()

router.post('/login', async (req, res) => {
  const resp = await tenantModule.login()
  res.status(HTTPStatus.OK).json(resp);
})

module.exports = router
