const axios = require('axios')

const ProductTagModule = class ProductTagModule {
  getById(id = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get productTag: ', id)

        const resp = await axios({
          method: 'get',
          url: `/api/v1/productTag`,
          params: {
            id
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = ProductTagModule
