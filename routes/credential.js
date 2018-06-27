const router = require('express').Router()
const HTTPStatus = require('http-status')
const CredentialModule = require('../module/credential')

const credentialModule = new CredentialModule()

router.get('/signUrl', async (req, res) => {
  try {
    const type = req.query.type
    const contentType = req.query.contentType
    const fileName = req.query.fileName
    const resp = await credentialModule.getSignUrl(type, fileName, contentType)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

module.exports = router
