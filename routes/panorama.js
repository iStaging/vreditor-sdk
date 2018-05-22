const router = require('express').Router()
const HTTPStatus = require('http-status')
const PanoramaModule = require('../module/panorama')

const panoramaModule = new PanoramaModule()

router.get('/', async (req, res) => {
  const panoCollectionId = req.params.id
  const resp = await panoramaModule.getById(panoCollectionId)
  res.status(HTTPStatus.OK).json(resp)
})

router.post('/', async (req, res) => {
  const panoramas = req.body.panoramas
  const resp = await panoramaModule.create(panoramas)
  res.status(HTTPStatus.OK).json(resp)
})

router.put('/', async (req, res) => {
  const panoCollectionId = req.params.id
  const panoramas = req.body.panoramas
  const resp = await panoramaModule.update(panoCollectionId, panoramas)
  res.status(HTTPStatus.OK).json(resp)
})

router.delete('/', async (req, res) => {
  const panoramaId = req.params.id
  const resp = await panoramaModule.remove(panoramaId)
  res.status(HTTPStatus.OK).json(resp)
})

module.exports = router
