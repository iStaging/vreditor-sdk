const router = require('express').Router()
const HTTPStatus = require('http-status')
const MarkerModule = require('../module/marker')

const markerModule = new MarkerModule()

router.get('/', async (req, res) => {
  const panoramaId = req.params.panoId
  const resp = await markerModule.getById(panoramaId)
  res.status(HTTPStatus.OK).json(resp)
})

router.post('/', async (req, res) => {
  const markers = req.body.markers
  const resp = await markerModule.create(markers)
  res.status(HTTPStatus.OK).json(resp)
})

// router.put('/', async (req, res) => {
//   const panoCollectionId = req.params.id
//   const panoramas = req.body.panoramas
//   const resp = await markerModule.update(panoCollectionId, panoramas)
//   res.status(HTTPStatus.OK).json(resp)
// })

router.delete('/', async (req, res) => {
  const markerId = req.params.id
  const resp = await markerModule.remove(markerId)
  res.status(HTTPStatus.OK).json(resp)
})

module.exports = router
