const router = require('express').Router()
const HTTPStatus = require('http-status')
const UploadModule = require('../module/upload')

const uploadModule = new UploadModule()

router.post('/', async (req, res) => {
  const fileName = req.params.fileName
  const contentType = req.params.contentType
  const resp = await credentialModule.getSignUrl(fileName, contentType)
  res.status(HTTPStatus.OK).json(resp)
})

module.exports = router
