const axios = require('axios')

const PanoCollectionModule = class PanoCollectionModule {
  create(name = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('create panoCollection')

        const resp = await axios({
          method: 'post',
          url: `/api/v1/panoCollection`,
          data: {
            name
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get panoCollections by user token')

        const resp = await axios({
          method: 'get',
          url: `/api/v1/panoCollection`,
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }

  update(id = '', options) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('update panoCollection: ', id)

        const resp = await axios({
          method: 'put',
          url: `/api/v1/panoCollection`,
          params: {
            id
          },
          data: options
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }

  remove(id = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('delete panoCollection: ', id)

        const resp = await axios({
          method: 'delete',
          url: `/api/v1/panoCollection`,
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

  clone(sourcePanoCollectionId = '', tenantUsername = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('copy panoCollection: ', sourcePanoCollectionId, tenantUsername)

        const resp = await axios({
          method: 'post',
          url: `/api/v1/panoCollection/copy`,
          data: {
            sourcePanoCollectionId,
            tenantUsername
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = PanoCollectionModule
