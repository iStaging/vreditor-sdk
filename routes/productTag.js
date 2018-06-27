const router = require('express').Router()
const HTTPStatus = require('http-status')
const ProductTagModule = require('../module/productTag')

const productTagModule = new ProductTagModule()

router.get('/', async (req, res) => {
  try {
    const productTagId = req.query.id
    const resp = await productTagModule.getById(productTagId)
    res.status(resp.status).json(resp.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

module.exports = router
