const router = require('express').Router()
const HTTPStatus = require('http-status')
const CustomTagModule = require('../module/customTag')

const customTagModule = new CustomTagModule()

router.get('/', async (req, res) => {
  try {
    const resp = await customTagModule.getAll()
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

module.exports = router
