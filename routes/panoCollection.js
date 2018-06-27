const router = require('express').Router()
const HTTPStatus = require('http-status')
const PanoCollectionModule = require('../module/panoCollection')

const panoCollectionModule = new PanoCollectionModule()

router.get('/', async (req, res) => {
  try {
    const resp = await panoCollectionModule.getAll()
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.post('/', async (req, res) => {
  try {
    const panoCollectionName = req.body.name
    const resp = await panoCollectionModule.create(panoCollectionName)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.put('/', async (req, res) => {
  try {
    const panoCollectionId = req.query.id
    const options = req.body
    const resp = await panoCollectionModule.update(panoCollectionId, options)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.delete('/', async (req, res) => {
  try {
    const panoCollectionId = req.query.id
    const resp = await panoCollectionModule.remove(panoCollectionId)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.post('/copy', async (req, res) => {
  try {
    const sourcePanoCollectionId = req.body.sourcePanoCollectionId
    const tenantUsername = req.body.tenantUsername
    const resp = await panoCollectionModule.clone(sourcePanoCollectionId, tenantUsername)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

module.exports = router
