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
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  get() {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get panoCollection')

        const resp = await axios({
          method: 'get',
          url: `/api/v1/panoCollection`,
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  update(id = '', options) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('update panoCollection')

        const { name, description, logoUrl } = options
        const resp = await axios({
          method: 'put',
          url: `/api/v1/panoCollection`,
          params: {
            id
          },
          data: {
            name,
            description,
            logoUrl
          }
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  clone(sourcePanoCollectionID = '', tenantUsername = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('copy panoCollection')

        const resp = await axios({
          method: 'post',
          url: `/api/v1/panoCollection/copy`,
          data: {
            sourcePanoCollectionID,
            tenantUsername
          }
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  remove(id = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('delete panoCollection')

        const resp = await axios({
          method: 'delete',
          url: `/api/v1/panoCollection`,
          params: {
            id
          }
        })
        resolve(resp.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = PanoCollectionModule
