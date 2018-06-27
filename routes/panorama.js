const router = require('express').Router()
const HTTPStatus = require('http-status')
const PanoramaModule = require('../module/panorama')

const panoramaModule = new PanoramaModule()

router.get('/', async (req, res) => {
  try {
    const panoCollectionId = req.query.id
    const resp = await panoramaModule.getById(panoCollectionId)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.post('/', async (req, res) => {
  try {
    const panoCollectionId = req.body.panoCollectionId
    const panoramas = req.body.panoramas
    const resp = await panoramaModule.create(panoCollectionId, panoramas)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.put('/', async (req, res) => {
  try {
    const panoCollectionId = req.query.id
    const panoramas = req.body.panoramas
    const resp = await panoramaModule.update(panoCollectionId, panoramas)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.delete('/', async (req, res) => {
  try {
    const panoramaId = req.query.id
    const resp = await panoramaModule.remove(panoramaId)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

module.exports = router
