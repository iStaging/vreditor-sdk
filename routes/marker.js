const router = require('express').Router()
const HTTPStatus = require('http-status')
const MarkerModule = require('../module/marker')

const markerModule = new MarkerModule()

router.get('/', async (req, res) => {
  try {
    const panoramaId = req.query.panoramaId
    const resp = await markerModule.getById(panoramaId)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.post('/', async (req, res) => {
  try {
    const panoramaId = req.body.panoramaId
    const markers = req.body.markers
    const resp = await markerModule.create(panoramaId, markers)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

router.put('/', async (req, res) => {
  try {
    const markers = req.body.markers
    const resp = await markerModule.update(markers)
    console.log('in resp: ', resp)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    console.log('in catch: ', error)
    res.status(error.response.status).json(error.response.data)
  }
})

router.delete('/', async (req, res) => {
  try {
    const markerId = req.query.id
    const resp = await markerModule.remove(markerId)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

module.exports = router
