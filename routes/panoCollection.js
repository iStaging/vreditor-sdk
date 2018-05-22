const router = require('express').Router()
const HTTPStatus = require('http-status')
const PanoCollectionModule = require('../module/panoCollection')

const panoCollectionModule = new PanoCollectionModule()

router.get('/', async (req, res) => {
  const resp = await panoCollectionModule.get()
  res.status(HTTPStatus.OK).json(resp)
})

router.post('/', async (req, res) => {
  const panoCollectionName = req.body.name
  const resp = await panoCollectionModule.create(panoCollectionName)
  res.status(HTTPStatus.OK).json(resp)
})

router.put('/', async (req, res) => {
  const panoCollectionId = req.params.id
  const options = {}
  req.body.map(key => {
    options[key] = req.body[key]
  })
  const resp = await panoCollectionModule.update(panoCollectionId, options)
  res.status(HTTPStatus.OK).json(resp)
})

router.delete('/', async (req, res) => {
  const panoCollectionId = req.params.id
  const resp = await panoCollectionModule.remove(panoramaId)
  res.status(HTTPStatus.OK).json(resp)
})

module.exports = router
