const axios = require('axios')

const PanoramaModule = class PanoramaModule {
  create(panoCollectionId = '', panoramas = []) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('create panoramas')

        const resp = await axios({
          method: 'post',
          url: `/api/v1/panorama`,
          data: {
            panoCollectionId,
            panoramas
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }

  getById(id = '') {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('get panoramas: ', id)

        const type = 'panoCollection'
        const resp = await axios({
          method: 'get',
          url: `/api/v1/panorama`,
          params: {
            id,
            type
          }
        })
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }

  update(id = '', panoramas = []) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('update panorama: ', id)
        console.log('update panorama list: ', panoramas)

        const resp = await axios({
          method: 'put',
          url: `/api/v1/panorama`,
          params: {
            id
          },
          data: {
            panoramas
          }
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
        console.log('delete panorama: ', id)

        const resp = await axios({
          method: 'delete',
          url: `/api/v1/panorama`,
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

module.exports = PanoramaModule
